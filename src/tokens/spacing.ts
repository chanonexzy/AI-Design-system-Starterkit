/**
 * Spacing Design Tokens
 * Extracted from Figma design system
 *
 * @packageDocumentation
 */

/**
 * Base spacing scale
 * Derived from Figma padding values
 * Use for margins, padding, and general spacing
 */
export const spacing = {
  0: '0px',
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  6: '6px',
  8: '8px',
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  36: '36px',
  40: '40px',
  48: '48px',
  56: '56px',
  64: '64px',
  96: '96px',
  144: '144px',
} as const;

/**
 * Gap scale for flexbox and grid layouts
 * Optimized values from Figma gap measurements
 */
export const gap = {
  1: '2px',
  2: '4px',
  3: '6px',
  4: '8px',
  5: '10px',
  6: '12px',
  7: '14px',
  8: '16px',
  10: '20px',
  12: '24px',
  14: '28px',
  16: '32px',
  18: '36px',
  20: '40px',
  24: '48px',
  28: '56px',
  32: '64px',
  40: '80px',
  48: '96px',
} as const;

/**
 * Semantic spacing tokens
 * Named spacing values for common use cases
 */
export const semanticSpacing = {
  // Component spacing
  componentPaddingX: spacing[16],      // Horizontal padding inside components
  componentPaddingY: spacing[8],       // Vertical padding inside components
  componentGap: gap[8],                 // Gap between component elements

  // Button spacing
  buttonPaddingX: spacing[16],         // Button horizontal padding
  buttonPaddingXSm: spacing[12],       // Small button horizontal padding
  buttonPaddingXLg: spacing[24],       // Large button horizontal padding
  buttonPaddingY: spacing[8],          // Button vertical padding
  buttonPaddingYSm: spacing[6],        // Small button vertical padding
  buttonPaddingYLg: spacing[12],       // Large button vertical padding
  buttonGap: gap[4],                    // Gap between button icon and text

  // Input spacing
  inputPaddingX: spacing[12],          // Input horizontal padding
  inputPaddingY: spacing[8],           // Input vertical padding
  inputGap: gap[4],                     // Gap in input groups

  // Card spacing
  cardPadding: spacing[24],            // Card padding
  cardPaddingSm: spacing[16],          // Small card padding
  cardPaddingLg: spacing[32],          // Large card padding
  cardGap: gap[16],                     // Gap between card elements

  // Layout spacing
  containerPadding: spacing[16],       // Container horizontal padding
  containerPaddingMd: spacing[24],     // Container padding on medium screens
  containerPaddingLg: spacing[32],     // Container padding on large screens
  sectionGap: gap[48],                  // Gap between major sections
  contentGap: gap[24],                  // Gap between content blocks

  // List spacing
  listGap: gap[8],                      // Gap between list items
  listGapSm: gap[4],                    // Small list gap
  listGapLg: gap[12],                   // Large list gap

  // Grid spacing
  gridGap: gap[16],                     // Default grid gap
  gridGapSm: gap[8],                    // Small grid gap
  gridGapLg: gap[24],                   // Large grid gap

  // Stack spacing
  stackGap: gap[8],                     // Default stack gap
  stackGapSm: gap[4],                   // Small stack gap
  stackGapLg: gap[16],                  // Large stack gap
} as const;

/**
 * Responsive spacing modifiers
 * Use these to create responsive spacing that adapts to screen size
 */
export const responsiveSpacing = {
  xs: spacing[8],
  sm: spacing[12],
  md: spacing[16],
  lg: spacing[24],
  xl: spacing[32],
  '2xl': spacing[48],
  '3xl': spacing[64],
  '4xl': spacing[96],
} as const;

/**
 * Inset spacing (for components with uniform padding)
 */
export const insetSpacing = {
  xs: `${spacing[4]} ${spacing[8]}`,     // 4px vertical, 8px horizontal
  sm: `${spacing[6]} ${spacing[12]}`,    // 6px vertical, 12px horizontal
  md: `${spacing[8]} ${spacing[16]}`,    // 8px vertical, 16px horizontal
  lg: `${spacing[12]} ${spacing[24]}`,   // 12px vertical, 24px horizontal
  xl: `${spacing[16]} ${spacing[32]}`,   // 16px vertical, 32px horizontal
} as const;

/**
 * Squish spacing (less vertical than horizontal)
 * Commonly used for buttons and inline elements
 */
export const squishSpacing = {
  sm: `${spacing[4]} ${spacing[12]}`,    // 4px vertical, 12px horizontal
  md: `${spacing[8]} ${spacing[16]}`,    // 8px vertical, 16px horizontal
  lg: `${spacing[10]} ${spacing[20]}`,   // 10px vertical, 20px horizontal
} as const;

/**
 * Stretch spacing (more vertical than horizontal)
 * Used for tall components like sidebars
 */
export const stretchSpacing = {
  sm: `${spacing[12]} ${spacing[8]}`,    // 12px vertical, 8px horizontal
  md: `${spacing[20]} ${spacing[12]}`,   // 20px vertical, 12px horizontal
  lg: `${spacing[32]} ${spacing[16]}`,   // 32px vertical, 16px horizontal
} as const;

// Type exports
export type Spacing = keyof typeof spacing;
export type Gap = keyof typeof gap;
export type SemanticSpacing = keyof typeof semanticSpacing;
export type ResponsiveSpacing = keyof typeof responsiveSpacing;
export type InsetSpacing = keyof typeof insetSpacing;
export type SquishSpacing = keyof typeof squishSpacing;
export type StretchSpacing = keyof typeof stretchSpacing;

/**
 * Helper function to get spacing value
 * @param key - Spacing key
 * @returns Spacing value in pixels
 */
export function getSpacing(key: Spacing): string {
  return spacing[key];
}

/**
 * Helper function to get gap value
 * @param key - Gap key
 * @returns Gap value in pixels
 */
export function getGap(key: Gap): string {
  return gap[key];
}

/**
 * Helper function to create custom spacing
 * @param value - Spacing value (number = px, string = any CSS unit)
 * @returns CSS spacing value
 */
export function customSpacing(value: number | string): string {
  return typeof value === 'number' ? `${value}px` : value;
}
