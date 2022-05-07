import Head from 'next/head';
import { IoLogoGithub } from 'react-icons/io';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_WEB_TITLE} -{' '}
          {process.env.NEXT_PUBLIC_HOSTED_AT}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid p-0 h-100">
        <div className={styles.box}>
          {children}
          <footer className={styles.footer}>
            <a
              href={process.env.NEXT_PUBLIC_URL_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Get in touch</p> <IoLogoGithub size={35} />
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
