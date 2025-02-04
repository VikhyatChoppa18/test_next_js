import { useState } from 'react';
import styles from './AvatarSelection.module.css';


const avatars = [
  "/images/avatar1.png",  // Replace with actual image paths or URLs
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
];

const AvatarSelection = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pick Your Avatar for the Interview</h1>

      <div className={styles.avatarsContainer}>
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`${styles.avatar} ${selectedAvatar === avatar ? styles.selected : ''}`}
            onClick={() => handleAvatarClick(avatar)}
          >
            <img src={avatar} alt={`Avatar ${index + 1}`} className={styles.avatarImage} />
          </div>
        ))}
      </div>

      {selectedAvatar && (
        <div className={styles.confirmation}>
          <h2>You've selected this avatar:</h2>
          <img src={selectedAvatar} alt="Selected Avatar" className={styles.selectedAvatarImage} />
        </div>
      )}
    </div>
  );
};

export default AvatarSelection;
