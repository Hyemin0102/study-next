import "@/styles/globals.css";
import type { AppProps } from "next/app";

//Component는 페이지 역할하는. pageProps는 전달받는 모든 프롭. app은 가장 루트트
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
