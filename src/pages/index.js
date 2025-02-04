import Head from 'next/head';
import { useRouter } from "next/router"; // Import useRouter for navigation
import { Layout as DashboardLayout } from '../layouts/dashboard/layoutds';
import PricingHome from './pricingcard';
import styles from 'index.module.css';

const now = new Date();

const Page = () => {

  const router = useRouter();

  // Function to handle plan selection and redirect to the registration page
  const handlePlanSelect = (plan) => {
    // Navigate to the registration page with plan details as query parameters
    router.push({
      pathname: "/auth/register", // The registration page
      query: {
        planName: plan.name,
        planPrice: plan.price,
        planDescription: plan.description,
      },
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Personalized Interview Prep</title>
        <meta name="description" content="Ace your interview with personalized coaching" />
        <link rel="icon" href="/assets/favicon-16x16.png" />
      </Head>

      <section style={{ display: 'flex' }}>
          <img
            src="/assets/back.jpg"
            alt="Mock Master"
            style={{ width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.7, // Adjust the opacity (e.g., 0.5)
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1, }}
          />
        </section>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Ace Your Interview with Personalized Coaching</h1>
          <p>Tailored coaching to help you land your dream job</p>
          <button className={styles.ctaButton}>Start Your Prep Today</button>
        </div>
      </section>


      {/* Introduction Section */}
      <section className={styles.introduction}>
        <h2>Why Choose Our Personalized Interview Prep?</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Personalized Coaching</h3>
            <p>One-on-one sessions with industry experts, tailored feedback, and real-time support.</p>
          </div>
          <div className={styles.feature}>
            <h3>Mock Interviews</h3>
            <p>Simulate actual interview scenarios to build confidence and prepare for any situation.</p>
          </div>
          <div className={styles.feature}>
            <h3>AI-driven Insights</h3>
            <p>Get automated feedback and progress tracking with our AI-powered system for continuous improvement.</p>
          </div>
          <div className={styles.feature}>
            <h3>Resource Library</h3>
            <p>Access a curated collection of guides, articles, and videos to sharpen your interview skills.</p>
          </div>
        </div>
      </section>

      <PricingHome onSelectPlan={handlePlanSelect} />


      {/* Add footer here or additional sections */}
    </div>
  )
};
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
