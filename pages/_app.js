import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wexus</title>
        <meta
          name="description"
          content="Modern Digital Solutions for your needs. Get yourself a website or an app, build your social media profile and advertise on top social media websites"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="canonical" href="https://www.wexus.in" />
        <meta
          name="keywords"
          content="Wexus, Website, App, Digital Marketing, buisness, Wexus"
        />
        <meta name="author" content="Wexus" />

        {/* Social: Twitter */}
        <meta name="twitter:card" content="/human.png" />
        <meta name="twitter:site" content="https://www.wexus.in" />
        <meta name="twitter:title" content="Wexus" />
        <meta
          name="twitter:description"
          content="Modern Digital Solutions for your needs. Get yourself a website or an app, build your social media profile and advertise on top social media websites"
        />
        <meta name="twitter:image:src" content="/logo.png" />
        <meta name="twitter:image:alt" content="Wexus Logo" />

        {/* Social: Facebook / Open Graph */}
        <meta property="og:url" content="https://www.wexus.in" />
        <meta property="og:type" content="Digital Marketing Agency" />
        <meta property="og:title" content="Wexus" />
        <meta property="og:image" content="/human.png" />
        <meta
          property="og:description"
          content="Modern Digital Solutions for your needs. Get yourself a website or an app, build your social media profile and advertise on top social media websites"
        />
        <meta property="og:site_name" content="Wexus" />

        {/* Social: Google+ / Schema.org */}
        <meta itemProp="name" content="Wexus" />
        <meta
          itemProp="description"
          content="Modern Digital Solutions for your needs. Get yourself a website or an app, build your social media profile and advertise on top social media websites"
        />
        <meta itemProp="image" content="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
