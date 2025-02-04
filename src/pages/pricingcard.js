import { Avatar, Box, CircularProgress, Grid, Typography } from '@mui/material'; // Added CircularProgress for loading state
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PricingCard from './pricinghome';

const PricingHome = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [plans, setPlans] = useState([]); // State to store plan details
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Handle card click to navigate to payment page
  const handleCardClick = (plan) => {
    navigate('/payregister', { state: plan });
  };

  // Fetch plan details from API
  const planDetails = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/router/planDetails", {
        method: "GET",  // Using GET method here
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (response.ok) {
        setPlans(data); // Set fetched plans to the state
        console.log("Fetched Plans:", data); // Log the fetched plans
      } else {
        console.error("Error fetching plan details");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  // Fetch plans when component mounts
  useEffect(() => {
    planDetails();
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      {/* Heading Section */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Choose Your Interview Prep Plan
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', marginTop: 2 }}>
          Select the best plan that suits your interview preparation needs in your desired domain.
        </Typography>
      </Box>

      {/* Pricing Cards Section */}
      <Grid container spacing={3} justifyContent="center">
        {loading ? (
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <CircularProgress /> {/* Show loading spinner */}
          </Box>
        ) : plans.length > 0 ? (
          plans.map((plan) => (
            <Grid item xs={12} sm={6} md={3} key={plan.PlanID}>
              <PricingCard
                title={plan.PlanName}
                price={plan.Price.toFixed(2)} // Ensure price is formatted to 2 decimal places
                avatar={<Avatar alt={plan.PlanName} src={`/path/to/${plan.PlanName.toLowerCase()}-avatar.png`} />}
                features={plan.PlanDescription.split('\n')} // Assuming PlanDescription is a newline-separated list of features
                PlanID= {plan.PlanID}
                Paypal_PlanID= {plan.Paypal_PlanID}
                onClick={() =>
                  handleCardClick(plan) 
                }
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            No plans available at the moment.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default PricingHome;
