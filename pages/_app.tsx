import { SWRConfig } from "swr";
import "../global.css";
import Layout from "../components/layout"
export default function App({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((response) => response.json())
      }}
    >
      
        <Layout>
        <Component {...pageProps} />

        </Layout>

      
    </SWRConfig>
  );
}