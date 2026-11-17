import Head from "next/head";
import { SITE } from "@/lib/site";
import { useT } from "@/lib/i18n";

export default function Seo(props: { title?: string; description?: string; image?: string }) {
  const t = useT().seo;
  const title = props.title ? `${props.title} | ${SITE.name}` : SITE.title;
  const description = props.description ?? t.description;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title ? title : SITE.title} />
      <meta property="og:description" content={props.description ?? t.ogDescription} />
      <meta property="og:image" content={props.image ?? SITE.image} />
      <meta name="twitter:card" content="summary" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
    </Head>
  );
}
