import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  // {
  //   title: 'Overview',
  //   path: '/',
  //   icon: (      <SvgIcon fontSize="small">
  //       <ChartBarIcon />
  //     </SvgIcon>
  //   )
  // },
  {
    title: 'Dashboard',
    path: '/artistdashboard',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Upload Song',
    path: 'auth/artistupload',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Song Details',
    path: '/uploadedSongs',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Account',
    path: '/artistAccount',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Charts',
    // path: '/artistSettings',
    path: '/artistChartsforartist',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
 


  {
    title: 'Logout',
    path: '/auth/login',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
 
];
