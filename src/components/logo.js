import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <img
      alt="Logo"
      src="/assets/favicon-16x16.png"
    />
  );
};
