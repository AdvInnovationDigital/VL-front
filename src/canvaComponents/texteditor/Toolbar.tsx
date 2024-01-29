// Toolbar.js
import React from "react";
import { useSlate } from "slate-react";
import { MarkButton, BlockButton } from "@/components"; // Certifique-se de importar seus componentes corretamente

const Toolbar = () => {
  const editor = useSlate();

  return (
    <div style={{ display: "flex", marginBottom: "8px" }}>
      <MarkButton format="bold" icon="format_bold" />
      <MarkButton format="italic" icon="format_italic" />
      <MarkButton format="underline" icon="format_underlined" />
      <MarkButton format="code" icon="code" />
      <BlockButton format="heading-one" icon="looks_one" />
      <BlockButton format="heading-two" icon="looks_two" />
      <BlockButton format="block-quote" icon="format_quote" />
      <BlockButton format="numbered-list" icon="format_list_numbered" />
      <BlockButton format="bulleted-list" icon="format_list_bulleted" />
      <BlockButton format="left" icon="format_align_left" />
      <BlockButton format="center" icon="format_align_center" />
      <BlockButton format="right" icon="format_align_right" />
      <BlockButton format="justify" icon="format_align_justify" />
    </div>
  );
};

export default Toolbar;
