import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/fav.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@1,700&display=swap"
            rel="stylesheet"
          />
          {/* <meta name="facebook-domain-verification" content="t4e2l3ydlnelkfhdtdf8bi46yicfrf" />
					<Script type="text/javascript" src="/static/script.js"/>
					<noscript>
						<Image height="1" width="1" style={{display:'none'}}
						src="https://www.facebook.com/tr?id=846339246369294&ev=PageView&noscript=1"
						alt="a"/>
					</noscript>	 */}
        </Head>
        <body
          style={{
            margin: '0 auto',
            maxWidth: '600px !important',
            position: 'relative'
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
