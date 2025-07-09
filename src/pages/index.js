import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoContainer}>
          <img 
            src="/img/logo.svg" 
            alt="Databricks Logo" 
            className={styles.logo}
          />
          <Heading as="h1" className={styles.title}>
            {siteConfig.title}
          </Heading>
        </div>
        <p className={styles.subtitle}>
          Provided by Shared Technical Services
        </p>
        <div className={styles.description}>
          <p>
            The Launch Accelerator Program provides comprehensive resources and tutorials 
            to help you accelerate your journey with Databricks, following industry best practices 
            and proven methodologies.
          </p>
        </div>
        <div className={styles.navigationButtons}>
          <Link
            className={clsx('button', styles.navButton)}
            to="/docs/intro">
            Overview
          </Link>
          <Link
            className={clsx('button', styles.navButton)}
            to="/docs/tutorial-basics/create-a-document">
            Getting Started
          </Link>
          <Link
            className={clsx('button', styles.navButton)}
            to="/docs/tutorial-basics/create-a-page">
            Tutorials
          </Link>
          <Link
            className={clsx('button', styles.navButton)}
            to="/docs/tutorial-basics/markdown-features">
            Resources
          </Link>
          <Link
            className={clsx('button', styles.navButton)}
            to="/docs/tutorial-extras/manage-docs-versions">
            Advanced
          </Link>
          <Link
            className={clsx('button', styles.navButton)}
            to="/docs/tutorial-extras/translate-your-site">
            Support
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Databricks Industry Solutions`}
      description="Launch Accelerator Program - Comprehensive resources and tutorials to accelerate your Databricks journey">
      <HomepageHeader />
    </Layout>
  );
}
