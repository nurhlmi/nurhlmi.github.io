import Head from "next/head";
import { SITE } from "@/lib/site";
import { useT } from "@/lib/i18n";

export default function Seo(props: { title?: string }) {
  const t = useT().seo;
  const title = props.title ? `${props.title} | ${SITE.name}` : SITE.title;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={t.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={SITE.title} />
      <meta property="og:description" content={t.ogDescription} />
      <meta property="og:image" content={SITE.image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
    </Head>
  );
}
