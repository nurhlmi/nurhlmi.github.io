import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Copy, CopySuccess } from "reicon-react";
import { EMAIL } from "@/lib/contact";
import { useT } from "@/lib/i18n";


export default function CopyEmail() {
  const t = useT().home;
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Button variant="outline" rounded="full" size="sm" onClick={copy}>
      {copied ? <CopySuccess /> : <Copy />}
      {copied ? t.copied : t.copyEmail}
    </Button>
  );
}
