import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Copy, CopySuccess } from "reicon-react";
import HeldActivity from "@/components/held-activity";
import EmailCopiedIsland from "@/components/email-copied-island";
import { EMAIL } from "@/lib/contact";
import { useT } from "@/lib/i18n";


/** Clipboard API first; the selection fallback covers Safari and non-secure pages, where it can be missing or refused. */
async function writeClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.cssText = "position:fixed;top:0;left:0;opacity:0;";
    document.body.appendChild(field);
    field.select();
    field.setSelectionRange(0, text.length);
    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      field.remove();
    }
  }
}

export default function CopyEmail() {
  const t = useT().home;
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!(await writeClipboard(EMAIL))) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <>
      <HeldActivity active={copied}>
        <EmailCopiedIsland />
      </HeldActivity>
      <Button variant="outline" rounded="full" size="sm" onClick={copy}>
        {copied ? <CopySuccess /> : <Copy />}
        {copied ? t.copied : t.copyEmail}
      </Button>
    </>
  );
}
