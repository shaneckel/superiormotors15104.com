import React from 'react';
import App  from 'next/app'
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Superior Motors in Braddock, Pa 15104</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6038632/608024/css/fonts.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/reset.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/styles.css" />
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
          <meta hid='description' name='description' content='Superior Motors Restaurant in Braddock, Pa' />
          <meta property='og:url' content='https://www.superiormotors15104.com' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Superior Motors 15104' />
          <meta property='og:description' content='Superior Motors - Restaurant in Braddock, Pa - 15104' />
          <meta property='og:image' content='https://www.superiormotors15104.com/img/superiormotors-share.jpg' />
        </Head>
        <Component { ...pageProps } />
      </React.Fragment>
    )
  }
}

export default MyApp;
