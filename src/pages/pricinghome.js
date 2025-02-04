import { Box, Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const PricingCard = ({
  PlanID,  // Add PlanID as a prop
  title,
  price,
  Paypal_PlanID,
  PlanDescription,
  features,
  unavailableFeaturesCount = 0,
}) => {
  const router = useRouter();

  const handleChoosePlan = () => {
    // Store the selected plan in sessionStorage

    const selectedPlan = {
      PlanID,
      title,
      price,
      Paypal_PlanID,
      PlanDescription,
      features,
      unavailableFeaturesCount,
    };
    sessionStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));

    // Navigate to the payregister page
    router.push('/auth/payregister');
  };

  return (
    <Paper sx={{ width: '100%', maxWidth: 320, padding: 3, boxShadow: 2, borderRadius: 2, textAlign: 'center' }}>
      
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', marginBottom: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginRight: 1 }}>
          ${price}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1rem', color: 'text.secondary' }}>
          /month
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {features
            .slice(0, features.length - unavailableFeaturesCount)
            .map((feature, index) => (
              <Feature key={index} text={feature} />
            ))}
          {features
            .slice(features.length - unavailableFeaturesCount)
            .map((feature, index) => (
              <FeatureUnavailable key={index} text={feature} />
            ))}
        </ul>
      </Box>

      <Button variant="contained" onClick={handleChoosePlan}>
        Choose Plan
      </Button>
    </Paper>
  );
};

// Feature component
const Feature = ({ text }) => (
  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
    <Typography variant="body2" sx={{ color: 'green', marginRight: 1 }}>
      ✔
    </Typography>
    <Typography variant="body2">{text}</Typography>
  </li>
);

// Feature Unavailable component
const FeatureUnavailable = ({ text }) => (
  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', textDecoration: 'line-through', color: 'gray' }}>
    <Typography variant="body2" sx={{ color: 'red', marginRight: 1 }}>
      ✖
    </Typography>
    <Typography variant="body2">{text}</Typography>
  </li>
);

export default PricingCard;
