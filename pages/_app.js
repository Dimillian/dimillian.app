import 'nextra-theme-blog/style.css'
import '../styles/main.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Nextra({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </>
    )
  }
