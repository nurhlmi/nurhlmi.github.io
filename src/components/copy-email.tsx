import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Copy, CopySuccess } from "reicon-react";
import { EMAIL } from "@/lib/contact";


export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Button variant="outline" rounded="full" size="sm" onClick={copy}>
      {copied ? <CopySuccess /> : <Copy />}
      {copied ? "Copied" : "Copy Email"}
    </Button>
  );
}
