import { useState } from 'react';
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';
import {
  Box,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery
} from '@mui/material';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';
import { items } from './config';
import { SideNavItem } from './side-nav-item';

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const [openSubmenus, setOpenSubmenus] = useState({}); // State to track open submenus

  const handleSubmenuToggle = (title) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [title]: !prev[title] // Toggle the visibility of the submenu for the given title
    }));
  };

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32,
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px',
            }}
          >
            <div>
              <Typography color="inherit" variant="subtitle1">
                Interview Prep
              </Typography>
              <Typography color="neutral.400" variant="body2">
                User Dashboard
              </Typography>
            </div>
            <SvgIcon fontSize="small" sx={{ color: 'neutral.500' }}>
              <ChevronUpDownIcon />
            </SvgIcon>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'neutral.700' }} />

        <Box component="nav" sx={{ flexGrow: 1, px: 2, py: 3 }}>
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {items.map((item) => {
              const active = item.path ? pathname === item.path : false;

              return (
                <div key={item.title}>
                  <SideNavItem
                    active={active}
                    disabled={item.disabled}
                    external={item.external}
                    icon={item.icon}
                    path={item.path}
                    title={item.title}
                  />

                  {/* Render submenu if it exists */}
                  {item.submenu && (
                    <>
                      <Box
                        onClick={() => handleSubmenuToggle(item.title)}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          pl: 3,
                          cursor: 'pointer',
                        }}
                      >
                        <SvgIcon
                          fontSize="small"
                          sx={{ color: 'neutral.500' }}
                        >
                          <ChevronUpDownIcon />
                        </SvgIcon>
                        <Typography
                          sx={{
                            color: 'neutral.500',
                            fontSize: '0.875rem',
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>

                      {/* Submenu items */}
                      {openSubmenus[item.title] && (
                        <Box sx={{ pl: 4 }}>
                          {item.submenu.map((subItem) => (
                            <SideNavItem
                              key={subItem.title}
                              title={subItem.title}
                              path={subItem.path}
                              icon={subItem.icon || item.icon} // You can add a different icon if needed
                              active={pathname === subItem.path}
                            />
                          ))}
                        </Box>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </Stack>
        </Box>

        <Divider sx={{ borderColor: 'neutral.700' }} />

        <Box sx={{ px: 2, py: 3 }}>
          <Typography color="neutral.100" variant="subtitle2">
            {/* Optional footer */}
          </Typography>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
