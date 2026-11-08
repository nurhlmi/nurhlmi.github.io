import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-scroll-behavior="smooth" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var p=JSON.parse(localStorage.getItem("preferences")||"{}"),e=document.documentElement,z={sm:14,md:16,lg:18}[p.textSize];if(z)e.style.fontSize=z+"px";if(p.lang==="id"||p.lang==="en")e.lang=p.lang}catch(_){}`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
