import { useEffect, useState } from 'react';
import '../styles/bootstrap.css';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  const [layout, setLayout] = useState(null);
  useEffect(() => setLayout(document), []);

  layout ? (layout.getElementById('__next').className = 'h-100') : null;
  return <Component {...pageProps} />;
}
