import styles from "./footer.module.css"; // Import your CSS module

const Footer = () => {
  return (
    <footer className={`${styles.footerSection} text-center text-white`}>
      {/* Links to Bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://getbootstrap.com/docs/5.2/assets/css/docs.css"
        rel="stylesheet"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      ></script>

      {/* Footer Main Section */}
      <div className={`${styles.container} container p-4`}>
        {/* Logo Section */}
        <section className="mb-4">
          <img
            src="/assets/Fulllogo.png"
            width="150px"
            alt="Company Logo"
            className={styles.logo}
          />
        </section>

      
      </div>

      {/* Footer Bottom Section */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <p className={`${styles.footerText}`}>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.datainception.co/"
            className={`${styles.footerLink}`}
          >
            Data Inception
          </a>
          , All Rights Reserved.
        </p>
        <p className={`${styles.footerText}`}>
          Designed by{" "}
          <a
            href="https://www.datainception.co/"
            className={`${styles.footerLink}`}
          >
            Data Inception LLC
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
