import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import {
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery
} from '@mui/material';
import PropTypes from 'prop-types';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Box
      component="header"
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: (theme) => theme.palette.background.default,
        position: 'sticky',
        top: 0,
        left: {
          lg: `${SIDE_NAV_WIDTH}px`
        },
        width: {
          lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
        },
        zIndex: (theme) => theme.zIndex.appBar
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2
        }}
      >
        {/* Left Section: Menu and Search */}
        <Stack alignItems="center" direction="row" spacing={2}>
          {!lgUp && (
            <IconButton onClick={onNavOpen}>
              <SvgIcon fontSize="small">
                <Bars3Icon />
              </SvgIcon>
            </IconButton>
          )}
          <Tooltip title="Search">
            <IconButton>
              <SvgIcon fontSize="small">
                <MagnifyingGlassIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </Stack>

        {/* Right Section: Notifications */}
        <Stack alignItems="center" direction="row" spacing={2}>
          <Tooltip title="Notifications">
            <IconButton>
              <Badge badgeContent={4} color="success" variant="dot">
                <SvgIcon fontSize="small">
                  <BellIcon />
                </SvgIcon>
              </Badge>
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};
TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
