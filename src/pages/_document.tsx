import Document, { Head, Html, Main, NextScript } from  'next/document'

class MyDocument extends Document {
  static async  getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return  {
      ...initialProps,
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <script data-ad-client="ca-pub-9646115072766415" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument