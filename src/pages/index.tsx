import { Footer } from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Provider } from "@/context/Provider";
import { queryClient } from "@/services/queryClient";
import Head from "next/head";
import { QueryClientProvider } from "react-query";

export default function Page() {
  return <>
    <Head>
      <title>MKS Front End Challenge</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" imageSrcSet="@/../public/favicon.ico" />
    </Head>
    <QueryClientProvider client={ queryClient }>
      <Provider>
        <Header />
        <Footer />
      </Provider>
    </QueryClientProvider>
  </>
}
