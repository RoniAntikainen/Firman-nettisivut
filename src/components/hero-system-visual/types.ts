export type Phase =
  | "intro"
  | "request"
  | "scope"
  | "structure"
  | "build"
  | "polish"
  | "ready"
  | "handoff";

export type ProcessItem = {
  requestLabel: string;
  requestStatus: string;
  requestType: string;
  area: string;
  goal: string;
  deliverable: string;
  file: string;
  componentName: string;
  title: string;
  cta: string;
  eyebrow: string;
  body: string;
  chips: [string, string];
};

export type CardKey = "request" | "editor" | "preview";

export type CardSize = {
  width: number;
  height: number;
};

export type CardPosition = {
  top: number;
  left: number;
};

export type Layout = Record<CardKey, CardPosition>;