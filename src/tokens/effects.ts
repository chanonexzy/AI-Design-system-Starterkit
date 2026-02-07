/**
 * Effects Design Tokens
 * Includes shadows, borders, animations, and transitions
 * Extracted from Figma design system
 *
 * @packageDocumentation
 */

/**
 * Shadow scale
 * Based on Figma shadow definitions
 */
export const shadows = {
  none: 'none',
  sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.1)',
  base: '0px 4px 6px 0px rgba(0, 0, 0, 0.05)',
  md: '0px 10px 15px 0px rgba(0, 0, 0, 0.1)',
  lg: '0px 20px 25px -5px rgba(0, 0, 0, 0.1)',
  xl: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '2xl': '0px 50px 100px -20px rgba(0, 0, 0, 0.5)',
  inner: 'inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
} as const;

/**
 * Component-specific shadows from Figma
 */
export const componentShadows = {
  button: '0px 1px 2px 0px rgba(0, 0, 0, 0.1)',
  dialog: '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
  dropdown: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
  popover: '0px 4px 6px 0px rgba(0, 0, 0, 0.05)',
  card: '0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
  tooltip: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
} as const;

/**
 * Border radius scale
 * Extracted from Figma borderRadius values
 */
export const borderRadius = {
  none: '0px',
  sm: '2px',       // 0.125rem - Subtle rounding
  DEFAULT: '6px',  // 0.375rem - Default border radius
  md: '4px',       // 0.25rem - Medium rounding
  lg: '8px',       // 0.5rem - Large rounding
  xl: '12px',      // 0.75rem - Extra large
  '2xl': '16px',   // 1rem
  '3xl': '24px',   // 1.5rem
  full: '9999px',  // Full circle/pill
  card: '5px',     // Card-specific radius
  subtle: '0.8px', // Very subtle rounding
} as const;

/**
 * Border width scale
 */
export const borderWidth = {
  none: '0px',
  thin: '1px',
  DEFAULT: '1px',
  thick: '2px',
  '3': '3px',
  '4': '4px',
} as const;

/**
 * Border styles for different states
 */
export const borderStyles = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  none: 'none',
} as const;

/**
 * Animation duration scale
 */
export const duration = {
  fast: '150ms',
  base: '200ms',
  medium: '300ms',
  slow: '500ms',
  slower: '700ms',
  slowest: '1000ms',
} as const;

/**
 * Animation timing functions (easing)
 */
export const easings = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Custom easings
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  snap: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
} as const;

/**
 * Common transition configurations
 * Combines duration and easing for specific properties
 */
export const transitions = {
  colors: {
    property: 'color, background-color, border-color',
    duration: duration.base,
    easing: easings.inOut,
    value: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  opacity: {
    property: 'opacity',
    duration: duration.base,
    easing: easings.inOut,
    value: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  transform: {
    property: 'transform',
    duration: duration.base,
    easing: easings.inOut,
    value: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  all: {
    property: 'all',
    duration: duration.base,
    easing: easings.inOut,
    value: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  shadow: {
    property: 'box-shadow',
    duration: duration.medium,
    easing: easings.inOut,
    value: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

/**
 * Focus ring configuration
 */
export const focusRing = {
  width: '2px',
  offsetWidth: '2px',
  color: 'hsl(var(--ring))',
  style: 'solid',
  // Complete focus-visible style
  default: '2px solid hsl(var(--ring))',
  withOffset: '2px solid hsl(var(--ring))',
} as const;

/**
 * Z-index scale for layering
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;

/**
 * Backdrop blur effects
 */
export const backdropBlur = {
  none: 'blur(0)',
  sm: 'blur(4px)',
  DEFAULT: 'blur(8px)',
  md: 'blur(12px)',
  lg: 'blur(16px)',
  xl: 'blur(24px)',
  '2xl': 'blur(40px)',
  '3xl': 'blur(64px)',
} as const;

/**
 * Filter blur effects
 */
export const blur = {
  none: '0',
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px',
} as const;

/**
 * Outline styles for accessibility
 */
export const outline = {
  none: 'none',
  default: '2px solid hsl(var(--ring))',
  offset: '2px solid hsl(var(--ring))',
  dashed: '2px dashed hsl(var(--ring))',
} as const;

/**
 * Animation keyframes (for use with CSS animations)
 */
export const keyframes = {
  fadeIn: {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  fadeOut: {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  slideInFromTop: {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
  },
  slideInFromBottom: {
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  },
  slideInFromLeft: {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  },
  slideInFromRight: {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
  },
  scaleIn: {
    from: { transform: 'scale(0.95)', opacity: '0' },
    to: { transform: 'scale(1)', opacity: '1' },
  },
  scaleOut: {
    from: { transform: 'scale(1)', opacity: '1' },
    to: { transform: 'scale(0.95)', opacity: '0' },
  },
  spin: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  pulse: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' },
  },
} as const;

// Type exports
export type Shadow = keyof typeof shadows;
export type ComponentShadow = keyof typeof componentShadows;
export type BorderRadius = keyof typeof borderRadius;
export type BorderWidth = keyof typeof borderWidth;
export type BorderStyle = keyof typeof borderStyles;
export type Duration = keyof typeof duration;
export type Easing = keyof typeof easings;
export type Transition = keyof typeof transitions;
export type ZIndex = keyof typeof zIndex;
export type BackdropBlur = keyof typeof backdropBlur;
export type Blur = keyof typeof blur;
export type Outline = keyof typeof outline;
export type Keyframe = keyof typeof keyframes;

/**
 * Helper function to create a custom shadow
 * @param x - Horizontal offset
 * @param y - Vertical offset
 * @param blur - Blur radius
 * @param spread - Spread radius
 * @param color - Shadow color
 * @param inset - Whether the shadow is inset
 * @returns CSS box-shadow value
 */
export function createShadow(
  x: number,
  y: number,
  blur: number,
  spread: number = 0,
  color: string = 'rgba(0, 0, 0, 0.1)',
  inset: boolean = false
): string {
  const insetStr = inset ? 'inset ' : '';
  return `${insetStr}${x}px ${y}px ${blur}px ${spread}px ${color}`;
}

/**
 * Helper function to combine multiple shadows
 * @param shadows - Array of shadow strings
 * @returns Combined CSS box-shadow value
 */
export function combineShadows(...shadows: string[]): string {
  return shadows.join(', ');
}

/**
 * Helper function to create a transition string
 * @param properties - CSS properties to transition
 * @param duration - Transition duration
 * @param easing - Easing function
 * @returns CSS transition value
 */
export function createTransition(
  properties: string | string[],
  durationKey: Duration = 'base',
  easingKey: Easing = 'inOut'
): string {
  const props = Array.isArray(properties) ? properties : [properties];
  const dur = duration[durationKey];
  const ease = easings[easingKey];
  return props.map(prop => `${prop} ${dur} ${ease}`).join(', ');
}
