import { existsSync } from "node:fs";
import type MarkdownIt from "markdown-it-async";

const flagsDir = new URL("../../public/flags/", import.meta.url);

// Keep the image src root-absolute. VitePress applies the site `base` at HTML time.
export default function flagShortcode(md: MarkdownIt) {
  md.inline.ruler.after("emphasis", "flag", (state, silent) => {
    const re = /:flag-([a-z]{2}):/y;
    re.lastIndex = state.pos;
    const m = re.exec(state.src);
    if (!m || !existsSync(new URL(`${m[1]}.svg`, flagsDir))) return false;
    if (silent) return true;
    state.push("flag", "", 0).content = m[1];
    state.pos += m[0].length;
    return true;
  });

  md.renderer.rules.flag = (tokens, idx) => {
    const code = tokens[idx].content;
    const title = `Bandera de ${code.toUpperCase()}`;
    return (
      `<img class="flag" src="/flags/${code}.svg"` +
      ` alt="${title}" title="${title}" loading="lazy" decoding="async">`
    );
  };
}
