import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Typography, Grid } from '@mui/material';
import { Logo } from 'src/components/logo';

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box component="main" sx={{ display: 'flex', flex: '1 1 auto' }}>
      <Grid container sx={{ flex: '1 1 auto' }}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%',
            }}
          >
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
          </Box>
          {children}
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background:
              'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%',
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                marginBottom: 1,
              }}
              variant="h1"
            >
              <Box
                component="a"
                sx={{ color: '#15B79E' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="" src="/assets/Group%201153.svg" />
              </Box>
            </Typography>
            <Typography
              align="center"
              sx={{ marginBottom: 3 }}
              variant="subtitle1"
            >
              {/* A professional kit that comes with ready-to-use MUI components. */}
            </Typography>
            <img alt="" src="/assets/avatars/PLAY%20FIVE.png" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
