/**
 * Color Design Tokens
 * Extracted from Figma design system
 * Compatible with shadcn/ui color system
 *
 * @packageDocumentation
 */

/**
 * Primary color palette (raw hex values from Figma)
 */
export const rawColors = {
  black: '#0a0a0a',        // Primary black from Figma
  white: '#fafafa',        // Primary white from Figma
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
} as const;

/**
 * Semantic colors using HSL format (shadcn/ui compatible)
 * Format: "hue saturation% lightness%"
 * Use with hsl() or as CSS custom properties
 */
export const semanticColors = {
  light: {
    background: '0 0% 100%',           // #ffffff
    foreground: '0 0% 3.9%',           // #0a0a0a

    card: '0 0% 100%',                 // #ffffff
    cardForeground: '0 0% 3.9%',       // #0a0a0a

    popover: '0 0% 100%',              // #ffffff
    popoverForeground: '0 0% 3.9%',    // #0a0a0a

    primary: '0 0% 9%',                // #171717
    primaryForeground: '0 0% 98%',     // #fafafa

    secondary: '0 0% 96.1%',           // #f5f5f5
    secondaryForeground: '0 0% 9%',    // #171717

    muted: '0 0% 96.1%',               // #f5f5f5
    mutedForeground: '0 0% 45.1%',     // #737373

    accent: '0 0% 96.1%',              // #f5f5f5
    accentForeground: '0 0% 9%',       // #171717

    destructive: '0 84.2% 60.2%',      // #ef4444
    destructiveForeground: '0 0% 98%', // #fafafa

    border: '0 0% 89.8%',              // #e5e5e5
    input: '0 0% 89.8%',               // #e5e5e5
    ring: '0 0% 3.9%',                 // #0a0a0a

    chart1: '12 76% 61%',              // #f97316 - Orange
    chart2: '173 58% 39%',             // #14b8a6 - Teal
    chart3: '197 37% 24%',             // #0ea5e9 - Sky
    chart4: '43 74% 66%',              // #fbbf24 - Amber
    chart5: '27 87% 67%',              // #fb923c - Orange
  },

  dark: {
    background: '0 0% 3.9%',           // #0a0a0a
    foreground: '0 0% 98%',            // #fafafa

    card: '0 0% 3.9%',                 // #0a0a0a
    cardForeground: '0 0% 98%',        // #fafafa

    popover: '0 0% 3.9%',              // #0a0a0a
    popoverForeground: '0 0% 98%',     // #fafafa

    primary: '0 0% 98%',               // #fafafa
    primaryForeground: '0 0% 9%',      // #171717

    secondary: '0 0% 14.9%',           // #262626
    secondaryForeground: '0 0% 98%',   // #fafafa

    muted: '0 0% 14.9%',               // #262626
    mutedForeground: '0 0% 63.9%',     // #a3a3a3

    accent: '0 0% 14.9%',              // #262626
    accentForeground: '0 0% 98%',      // #fafafa

    destructive: '0 62.8% 30.6%',      // #7f1d1d
    destructiveForeground: '0 0% 98%', // #fafafa

    border: '0 0% 14.9%',              // #262626
    input: '0 0% 14.9%',               // #262626
    ring: '0 0% 83.1%',                // #d4d4d4

    chart1: '220 70% 50%',             // Blue
    chart2: '160 60% 45%',             // Green
    chart3: '30 80% 55%',              // Orange
    chart4: '280 65% 60%',             // Purple
    chart5: '340 75% 55%',             // Pink
  },
} as const;

/**
 * Component-specific color tokens
 * Organized by component for easy reference
 */
export const componentColors = {
  button: {
    default: {
      background: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))',
      border: 'transparent',
    },
    hover: {
      background: 'hsl(var(--primary) / 0.9)',
      foreground: 'hsl(var(--primary-foreground))',
      border: 'transparent',
    },
    active: {
      background: 'hsl(var(--primary) / 0.8)',
      foreground: 'hsl(var(--primary-foreground))',
      border: 'transparent',
    },
    disabled: {
      background: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))',
      border: 'transparent',
      opacity: '0.5',
    },
  },

  buttonSecondary: {
    default: {
      background: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))',
      border: 'transparent',
    },
    hover: {
      background: 'hsl(var(--secondary) / 0.8)',
      foreground: 'hsl(var(--secondary-foreground))',
      border: 'transparent',
    },
  },

  buttonOutline: {
    default: {
      background: 'transparent',
      foreground: 'hsl(var(--foreground))',
      border: 'hsl(var(--border))',
    },
    hover: {
      background: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))',
      border: 'hsl(var(--accent))',
    },
  },

  buttonGhost: {
    default: {
      background: 'transparent',
      foreground: 'hsl(var(--foreground))',
      border: 'transparent',
    },
    hover: {
      background: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))',
      border: 'transparent',
    },
  },

  input: {
    default: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      border: 'hsl(var(--input))',
      placeholder: 'hsl(var(--muted-foreground))',
    },
    focus: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      border: 'hsl(var(--ring))',
      ring: 'hsl(var(--ring))',
    },
    error: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--destructive))',
      border: 'hsl(var(--destructive))',
      ring: 'hsl(var(--destructive))',
    },
    disabled: {
      background: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))',
      border: 'hsl(var(--border))',
      opacity: '0.5',
    },
  },

  card: {
    default: {
      background: 'hsl(var(--card))',
      foreground: 'hsl(var(--card-foreground))',
      border: 'hsl(var(--border))',
    },
    hover: {
      background: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))',
      border: 'hsl(var(--border))',
    },
  },

  badge: {
    default: {
      background: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))',
    },
    secondary: {
      background: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))',
    },
    destructive: {
      background: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))',
    },
    outline: {
      background: 'transparent',
      foreground: 'hsl(var(--foreground))',
      border: 'hsl(var(--border))',
    },
  },
} as const;

/**
 * State-based color modifiers
 * Alpha/opacity values for different interaction states
 */
export const stateModifiers = {
  hover: 0.9,          // 90% opacity on hover
  active: 0.8,         // 80% opacity when active/pressed
  disabled: 0.5,       // 50% opacity when disabled
  focus: 1,            // 100% opacity on focus (use ring instead)
  muted: 0.6,          // 60% opacity for muted/secondary content
} as const;

/**
 * Opacity scale
 */
export const opacity = {
  0: '0',
  5: '0.05',
  10: '0.1',
  20: '0.2',
  25: '0.25',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  75: '0.75',
  80: '0.8',
  90: '0.9',
  95: '0.95',
  100: '1',
} as const;

// Type exports
export type RawColor = keyof typeof rawColors;
export type SemanticColorLight = keyof typeof semanticColors.light;
export type SemanticColorDark = keyof typeof semanticColors.dark;
export type ComponentColor = keyof typeof componentColors;
export type StateModifier = keyof typeof stateModifiers;
export type Opacity = keyof typeof opacity;

/**
 * Helper function to convert HSL string to CSS hsl() function
 * @param hsl - HSL string (e.g., "0 0% 100%")
 * @param alpha - Optional alpha value (0-1)
 * @returns CSS hsl() or hsla() string
 */
export function hslToString(hsl: string, alpha?: number): string {
  if (alpha !== undefined) {
    return `hsl(${hsl} / ${alpha})`;
  }
  return `hsl(${hsl})`;
}

/**
 * Helper function to apply opacity to a color
 * @param color - CSS color value
 * @param opacity - Opacity value (0-1)
 * @returns Color with opacity applied
 */
export function withOpacity(color: string, opacity: number): string {
  // If color is already in hsl() format, add alpha
  if (color.startsWith('hsl(')) {
    return color.replace(')', ` / ${opacity})`);
  }
  // Otherwise, wrap in rgba
  return `rgba(${color}, ${opacity})`;
}
