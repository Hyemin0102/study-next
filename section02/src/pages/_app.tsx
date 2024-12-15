import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

//Component는 페이지 역할하는. pageProps는 전달받는 모든 프롭. app은 가장 루트트
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push('/test');
    //back-뒤로 가기, replace-뒤로가기 방지
  };

  return(
    <>
    <header>
      <Link href={"/"}>index</Link>
      &nbsp;
      <Link href={"/search"}>search</Link>
      &nbsp;
      <Link href={"/book/1"}>book/1</Link>
      <div>
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
    </header>
    <Component {...pageProps} />
    </>
    
    );
}
