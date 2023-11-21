import { ReactElement } from "react";

import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

import {
  StyleProvider,
  getStylesheets,
  isServer,
} from "@sprinklrjs/spaceweb/styleEngine";
import { Sheet } from "@sprinklrjs/spaceweb";

type Props = { stylesheets: Sheet[] };

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = ctx.renderPage(
      (App: any) =>
        // eslint-disable-next-line react/display-name
        (pageProps: any): ReactElement =>
          (
            <StyleProvider debug>
              <App {...pageProps} />
            </StyleProvider>
          )
    );

    if (isServer)
      return { ...initialProps, ...page, stylesheets: getStylesheets() };

    return page;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_spaceweb_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i} //eslint-disable-line react/no-array-index-key
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
