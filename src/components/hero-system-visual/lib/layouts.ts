import type { CardKey, CardPosition, CardSize, Layout } from "../types";

type LayoutPresetPoint = {
  x: number;
  y: number;
};

type LayoutPreset = Record<CardKey, LayoutPresetPoint>;

export const CARD_SIZES: Record<CardKey, CardSize> = {
  request: { width: 312, height: 190 },
  editor: { width: 352, height: 248 },
  preview: { width: 392, height: 312 },
};

const MAX_HORIZONTAL_OVERFLOW_RATIO = 0.22;
const MAX_VERTICAL_OVERFLOW_RATIO = 0.16;
const MIN_VISIBLE_WIDTH_RATIO = 0.56;
const MIN_VISIBLE_HEIGHT_RATIO = 0.58;

const LAYOUT_VARIANTS: LayoutPreset[] = [
  {
    request: { x: 0.02, y: 0.04 },
    editor: { x: 0.34, y: 0.32 },
    preview: { x: 0.68, y: 0.16 },
  },
  {
    request: { x: 0.06, y: 0.42 },
    editor: { x: 0.34, y: 0.06 },
    preview: { x: 0.66, y: 0.42 },
  },
  {
    request: { x: -0.04, y: 0.2 },
    editor: { x: 0.3, y: 0.5 },
    preview: { x: 0.62, y: 0.02 },
  },
  {
    request: { x: 0.12, y: -0.02 },
    editor: { x: 0.4, y: 0.34 },
    preview: { x: 0.7, y: 0.24 },
  },
  {
    request: { x: 0.02, y: 0.48 },
    editor: { x: 0.38, y: 0.12 },
    preview: { x: 0.7, y: 0.06 },
  },
  {
    request: { x: 0.1, y: 0.18 },
    editor: { x: 0.46, y: 0.48 },
    preview: { x: 0.74, y: 0.22 },
  },
  {
    request: { x: -0.02, y: 0.08 },
    editor: { x: 0.28, y: 0.42 },
    preview: { x: 0.58, y: 0.5 },
  },
  {
    request: { x: 0.14, y: 0.5 },
    editor: { x: 0.42, y: 0.0 },
    preview: { x: 0.7, y: 0.32 },
  },
  {
    request: { x: 0.04, y: 0.28 },
    editor: { x: 0.36, y: 0.54 },
    preview: { x: 0.68, y: 0.1 },
  },
  {
    request: { x: 0.1, y: 0.0 },
    editor: { x: 0.48, y: 0.24 },
    preview: { x: 0.74, y: 0.46 },
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function resolveCardPosition(
  containerWidth: number,
  containerHeight: number,
  size: CardSize,
  preset: LayoutPresetPoint
): CardPosition {
  const minLeft = -Math.round(size.width * MAX_HORIZONTAL_OVERFLOW_RATIO);
  const maxLeft = Math.round(containerWidth - size.width * MIN_VISIBLE_WIDTH_RATIO);

  const minTop = -Math.round(size.height * MAX_VERTICAL_OVERFLOW_RATIO);
  const maxTop = Math.round(containerHeight - size.height * MIN_VISIBLE_HEIGHT_RATIO);

  return {
    left: clamp(
      Math.round(containerWidth * preset.x),
      minLeft,
      Math.max(minLeft, maxLeft)
    ),
    top: clamp(
      Math.round(containerHeight * preset.y),
      minTop,
      Math.max(minTop, maxTop)
    ),
  };
}

function resolveLayoutPreset(
  containerWidth: number,
  containerHeight: number,
  preset: LayoutPreset
): Layout {
  return {
    request: resolveCardPosition(
      containerWidth,
      containerHeight,
      CARD_SIZES.request,
      preset.request
    ),
    editor: resolveCardPosition(
      containerWidth,
      containerHeight,
      CARD_SIZES.editor,
      preset.editor
    ),
    preview: resolveCardPosition(
      containerWidth,
      containerHeight,
      CARD_SIZES.preview,
      preset.preview
    ),
  };
}

export function createLayoutSequence(
  containerWidth: number,
  containerHeight: number
): Layout[] {
  return LAYOUT_VARIANTS.map((preset) =>
    resolveLayoutPreset(containerWidth, containerHeight, preset)
  );
}

export function getRandomLayoutStartIndex(layoutCount: number) {
  if (layoutCount <= 1) return 0;
  return Math.floor(Math.random() * layoutCount);
}