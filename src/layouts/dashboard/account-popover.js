import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open, name } = props;
  const router = useRouter();
  const auth = useAuth();
    
  const handleSignOut = useCallback(
    () => {
      onClose?.();
      auth.signOut();
      router.push('/auth/login');
    },
    [onClose, auth, router]
  );

  const handleRedirectToDashboard = () => {
    if(localStorage.getItem("userRole") !== 'artist') {
      router.push('/dashboard')
    } else {
      router.push('/artistdashboard')
    }
  }
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {name}
        </Typography>
      </Box>
      <Divider />
      { name !== '' &&
        <MenuList
          disablePadding
          dense
          sx={{
            p: '8px',
            '& > *': {
            borderRadius: 1
          }
        }}>
      
        <MenuItem onClick={handleRedirectToDashboard}>
          Dashboard
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          Sign out
        </MenuItem>
      
      </MenuList>
      }

      { name === '' &&
        <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
          borderRadius: 1
        }
         }}>
    
        <MenuItem onClick={handleSignOut}>
         Artist  Login
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
           Admin Login
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
           User Login
        </MenuItem>
         
        </MenuList>

      }
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
