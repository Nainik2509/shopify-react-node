import React from "react";
import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";

import ClientRouter from "../components/ClientRouter";

import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";

class MyApp extends App {
  render() {
    const { Component, pageProps, shopOrigin, HOST_NAME } = this.props;
    const config = {
      apiKey: API_KEY,
      host: HOST_NAME,
      shopOrigin,
      forceRedirect: true,
    };
    return (
      <React.Fragment>
        <Head>
          <title>Pondir Shopify App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <ClientRouter />
          <AppProvider i18n={enTranslations}>
            <Component {...pageProps} />
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: ctx.query.shop,
    API_KEY: process.env.SHOPIFY_API_KEY,
    HOST_NAME: ctx.query.host,
  };
};

export default MyApp;
