import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8" />
            <meta name="description" content="Pseudowebdeveloper. Does web analytics, likes privacy and some other stuff."/>
            <meta name="keyword" content="portfolio, javascript, developer, python, typescript, poland, wrocław, web analytics, webdev, privacy"/>
            <meta property="og:title" content="Antoni Bartczak | Web Analytics & App Dev"/>
            <meta property="og:description" content="Pseudowebdeveloper. Does web analytics, likes privacy and some other stuff."/>
            <meta property="og:url" content="https://www.anthonyb.tech/"/>
            <meta property="og:type" content="website"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link crossOrigin="anonymous" rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(window, document, dataLayerName, id) {
                window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
                function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
                var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
                var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
                tags.async=!0,tags.src="https://abartczak.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
                !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
                })(window, document, 'dataLayer', '44d572e2-70d8-48dc-85c5-a33c68e36c50');
              `,
            }}
          ></script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe src="https://abartczak.containers.piwik.pro/44d572e2-70d8-48dc-85c5-a33c68e36c50/noscript.html" height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument