import { StaticImageData } from "next/image";

export interface BlogBlock {
  type: "heading" | "paragraph" | "list";
  text?: string;
  level?: 1 | 2 | 3 | 4;
  items?: string[];
}

export type ContentBlock =
  | { type: "heading"; level: 1 | 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface BlogContent {
  title: string;
  subtitle: string;
  slug: string;
  image: StaticImageData | undefined;
  data: string;
  author: string;
  authorPosition: string;
  content: ContentBlock[];
}
