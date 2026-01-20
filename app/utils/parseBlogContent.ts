type Block =
  | { type: "heading"; level: 1 | 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export function parseBlogContent(content?: string): Block[] {
  if (!content) return [];

  const lines = content.split("\n").filter(Boolean);
  const blocks: Block[] = [];

  for (const line of lines) {
    if (line.startsWith("#### ")) {
      blocks.push({ type: "heading", level: 4, text: line.slice(5) });
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "heading", level: 3, text: line.slice(4) });
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "heading", level: 2, text: line.slice(3) });
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push({ type: "heading", level: 1, text: line.slice(2) });
      continue;
    }

    if (line.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      if (last?.type === "list") {
        last.items.push(line.slice(2));
      } else {
        blocks.push({ type: "list", items: [line.slice(2)] });
      }
      continue;
    }

    blocks.push({ type: "paragraph", text: line });
  }

  return blocks;
}
