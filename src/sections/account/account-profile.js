import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import AWS from '../../components/awsConfig';




 const AccountProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);


  // Define selectedFile state here
  if (localStorage.getItem("userEmail") === null) {
    router.push("/auth/login");
  }

  const handleFileChange = useCallback((event) => {
    // Update the selectedFile state when a file is selected
    setSelectedFile(event.target.files[0]);
  }, []);

const bucketName = "playfive.io";
let folderPath = '';


//   if (userProfile.role === 'Artist') {
//     folderPath = `${userProfile.role}/${artist_id}/ar_pro.png`;
//   } else {
//     folderPath = `${userProfile.role}/${admin_id}/ad_pro.png`;
//   }

// // ...

// const checkAndCreateFolders = async () => {
//   try {
//     const s3 = new AWS.S3({
//       accessKeyId: AWS_ACCESS_KEY_ID,
//       secretAccessKey: AWS_SECRET_ACCESS_KEY,
//     });

//     // Check if the folder exists
//     const listObjectsParams = {
//       Bucket: bucketName,
//       Prefix: folderPath,
//     };

//     const awsResponse = await s3.listObjectsV2(listObjectsParams).promise();

//     if (awsResponse.Contents.length === 0) {
//       // The folder doesn't exist, so create it
//       const createFolderParams = {
//         Bucket: bucketName,
//         Key: `${folderPath}`, // Note: Key should end with a '/'
//         Body: '', // Empty body for folder creation
//       };

//       await s3.upload(createFolderParams).promise();
//     }
//   } catch (error) {
//     console.error('Error checking/creating folders: ', error);
//   }
// };

// ...

const fetchProfileImage = async () => {
  try {
    // await checkAndCreateFolders(); // Check and create folders before fetching the image

    const s3 = new AWS.S3({
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    });

    // Define the S3 key based on the user's role and ID
    let s3Key = '';
    if (userProfile.role === 'Artist') {
      s3Key = `${userProfile.role}/${artist_id}/ar_pro.png`; // Use .jpg for JPEG images

    } else {
s3Key = `${userProfile.role}/${admin_id}/ad_pro.png`; // Use .jpg for JPEG images
    }

    // Generate the URL for the profile image
    const imageUrl = s3.getSignedUrl('getObject', {
      Bucket: bucketName,
      Key: s3Key,
      Expires: 1900, // Set an expiration time if needed
    });

    setImageUrl(imageUrl);

    // Log the imageUrl for debugging
    console.log('Image URL:', imageUrl);
  } catch (error) {
    console.error('Error getting profile image: ', error);
  }
};




const handleUpload = useCallback(async () => {
  if (!selectedFile) {
    console.error('No file selected for upload.');
    return;
  }

  const s3 = new AWS.S3();

  try {
    // Read the contents of the selected file as a buffer
    const fileReader = new FileReader();

    fileReader.onload = async (e) => {
      const fileBuffer = e.target.result;

      // Define the S3 key based on the user's role and ID
      let s3Key = '';
      if (userProfile.role === 'Artist') {
        s3Key = `${userProfile.role}/${artist_id}/ar_pro.png`;
      } else {
        s3Key = `${userProfile.role}/${admin_id}/ad_pro.png`;
      }

      // Check if an existing image exists in the folder
      const listObjectsParams = {
        Bucket: 'playfive.io',
        Prefix: s3Key,
      };

      const awsResponse = await s3.listObjectsV2(listObjectsParams).promise();

      // If an image exists, update it instead of deleting and reuploading
      if (awsResponse.Contents.length > 0) {
        // Update the existing image by overwriting it with the new file
        const params = {
          Bucket: 'playfive.io',
          Key: s3Key,
          Body: fileBuffer,
          ContentType: selectedFile.type, // Set the appropriate content type (e.g., image/jpeg or image/png),
        };

        await s3.upload(params).promise();

        const imageUrl = s3.getSignedUrl('getObject', {
          Bucket: 'playfive.io',
          Key: params.Key,
        });

        setImageUrl(imageUrl);
        console.log('Updated Image URL:', imageUrl);
      } else {
        // If no image exists, upload the new image
        const params = {
          Bucket: 'playfive.io',
          Key: s3Key,
          Body: fileBuffer,
          ContentType: selectedFile.type, // Set the appropriate content type (e.g., image/jpeg or image/png),
        };

        await s3.upload(params).promise();

        const imageUrl = s3.getSignedUrl('getObject', {
          Bucket: 'playfive.io',
          Key: params.Key,
        });

        setImageUrl(imageUrl);
        console.log('New Image URL:', imageUrl);
      }
    };

    // Read the selected file as an ArrayBuffer
    fileReader.readAsArrayBuffer(selectedFile);
  } catch (error) {
    console.error('Upload error:', error);
  }
}, []);

    
    
  
    useEffect(() => {
      fetchProfileImage();
    }, []);
  
    const date = new Date();
    const dateAsString = date.toString();
    const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];

  return (
    <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={imageUrl}
          sx={{
            height: 80,
            mb: 2,
            width: 80
          }}
        />
        <Typography gutterBottom variant="h5">
        </Typography>
        <Typography color="text.secondary" variant="body2">
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {timezone}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      {/* Add the input file element */}
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <Button fullWidth variant="text" onClick={handleUpload}>
        Upload picture
      </Button>
    </CardActions>
  </Card>
  );
};
AccountProfile.getLayout = (AccountProfile) => <DashboardLayout>{AccountProfile}</DashboardLayout>;

export default AccountProfile;