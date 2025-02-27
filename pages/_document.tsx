/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            crossOrigin="anonymous"
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
            rel="stylesheet"
          />
          <script
            id="CookieConsent"
            src="https://policy.app.cookieinformation.com/uc.js"
            data-culture="EN"
            data-gcm-version="2.0"
            type="text/javascript"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://servergtm.ignitas.no/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MKHGC28F');
              `,
            }}
          ></script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKHGC28F"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          ></noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
