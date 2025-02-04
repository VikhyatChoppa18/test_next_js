import {
  Button
} from '@mui/material';
import React from "react";
import { useNavigate } from 'react-router-dom';



const PricingCard = ({
  title,
  price,
  features,
  unavailableFeaturesCount = 0,
}) => {
  const navigate = useNavigate(); // Use useNavigate instead


  const handleChoosePlan = () => {
    // Store pricing details in session storage
    sessionStorage.setItem("selectedPlan", JSON.stringify({ title, price, features }));

    navigate('/checkout');
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-2 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
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
      <Button
      
      type="submit"   onClick={handleChoosePlan} variant="contained">
    
      Choose Plan
    </Button>
    </div>
  );
};

// Feature component
const Feature = ({ text }) => (
  <li className="flex items-center">
    {/* Replace with actual SVG for feature */}
    <span className="text-green-500 mr-2">✔</span>
    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
      {text}
    </span>
  </li>
);

// Feature Unavailable component
const FeatureUnavailable = ({ text }) => (
  <li className="flex items-center line-through decoration-gray-500">
    {/* Replace with actual SVG for unavailable feature */}
    <span className="text-red-500 mr-2">✖</span>
    <span className="text-base font-normal leading-tight text-gray-500">
      {text}
    </span>
  </li>
);

const PricingHome = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Choose Your Plan
        </h1>
        <p className="text-xl text-gray-500 mt-4">
          Select the best plan that fits your needs.
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mx-6 mb-20">
        {/* Basic Plan */}
        <PricingCard
          title="Basic Plan"
          price="29"
          features={[
            "5 document sends per month",
            "Basic e-signatures",
            "Email notifications",
            "Basic customer support",
            "Template library",
            "Multi-user access",
            "Advanced security",
          ]}
          unavailableFeaturesCount={3}
        />

        {/* Pro Plan */}
        <PricingCard
          title="Pro Plan"
          price="49"
          features={[
            "20 document sends per month",
            "Advanced e-signatures",
            "Email and SMS notifications",
            "Priority customer support",
            "Template library access",
            "API access",
            "Custom branding",
          ]}
          unavailableFeaturesCount={2}
        />

        {/* Premium Plan */}
        <PricingCard
          title="Premium Plan"
          price="99"
          features={[
            "Unlimited document sends",
            "Advanced e-signatures with multi-party signing",
            "Email, SMS, and in-app notifications",
            "24/7 premium support",
            "Full access to template library",
            "API access for custom integrations",
            "Custom branding options",
          ]}
        />
      </div>
    </>
  );
};

export default PricingHome;
