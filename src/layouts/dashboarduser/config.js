import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SaveIcon from '@mui/icons-material/Save';
import { SvgIcon } from '@mui/material'; // Import SvgIcon


// Your menu items
export const items = [
  {
    title: 'Dashboard',
    path: '/userdashboard',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Save Your files',
    icon: (
      <SvgIcon fontSize="small">
        <SaveIcon />
      </SvgIcon>
    ),

    submenu: [
      {
        title: 'Upload File',
        icon: (
          <SvgIcon fontSize="small">
            <DriveFolderUploadIcon />
          </SvgIcon>
        ),
        path: '/uploadfile',
      },
      {
        title: 'Manage Files',
        icon: (
          <SvgIcon fontSize="small">
            <ManageHistoryIcon />
          </SvgIcon>
        ),
        path: '/managefiles',
      },
    ],
  },
  {
    title: 'Start your Interview',
    path: 'avatarpicker',
    icon: (
      <SvgIcon fontSize="small">
        <RecordVoiceOverIcon />
      </SvgIcon>
    )
  },

  // {
  //   title: 'Practice your Interview',
  //   path: 'practiceinterview',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <RecordVoiceOverIcon />
  //     </SvgIcon>
  //   )
  // },
  {
    title: 'Practice your Interview',
    path: 'practiceinterviewbyjasonfile',
    icon: (
      <SvgIcon fontSize="small">
        <RecordVoiceOverIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Start your Coding Challenge',
  //   path: 'codingchallenge',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <RecordVoiceOverIcon />
  //     </SvgIcon>
  //   )
  // },

  
  {
    title: 'Profile',
    path: 'userprofile',
    icon: (
      <SvgIcon fontSize="small">
        <AccountCircleIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Logout',
    path: '/auth/login',
    icon: (
      <SvgIcon fontSize="small">
        <LogoutTwoToneIcon />
      </SvgIcon>
    )
  },
];
