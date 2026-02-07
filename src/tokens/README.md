# Design Token System

A comprehensive design token system extracted from Figma and optimized for shadcn/ui components.

## Overview

This token system provides **178+ design tokens** across 5 categories:
- **Typography** (42 tokens)
- **Spacing** (44 tokens)
- **Colors** (48+ tokens)
- **Effects** (47+ tokens)
- **Components** (131 tokens)

## Quick Start

### CSS Usage

```css
/* Import in your globals.css (already configured) */
@import "../src/tokens/design-tokens.css";
@import "../src/styles/shadcn-overrides.css";

/* Use in your styles */
.my-component {
  font-size: var(--text-lg);
  padding: var(--space-16);
  color: hsl(var(--foreground));
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
```

### TypeScript Usage

```typescript
import { fontSizes, spacing, semanticColors } from '@/tokens';

const MyComponent = () => (
  <div style={{
    fontSize: fontSizes.lg,
    padding: spacing[16],
    color: `hsl(${semanticColors.light.foreground})`,
  }}>
    Content
  </div>
);
```

## File Structure

```
src/tokens/
├── design-tokens.css    # All CSS custom properties
├── colors.ts           # Color definitions (HSL format)
├── typography.ts       # Font families, sizes, weights, line heights
├── spacing.ts          # Spacing scale and semantic spacing
├── effects.ts          # Shadows, borders, transitions, animations
├── components.ts       # Component-specific token mappings
└── index.ts           # Barrel export for TypeScript

src/styles/
└── shadcn-overrides.css # Component-specific CSS variable overrides

docs/
├── TOKEN-USAGE-GUIDE.md  # Comprehensive usage guide
├── VALIDATION-REPORT.md  # Token validation and coverage
└── ACCESSIBILITY.md      # WCAG AA compliance report
```

## Token Categories

### 1. Typography

**Font Families:**
- Sans-serif (Inter-based)
- Monospace (Code fonts)

**Font Sizes:** 13 sizes from 12px to 72px
```css
--text-xs: 12px
--text-sm: 14px
--text-base: 16px
--text-lg: 18px
--text-xl: 20px
--text-2xl: 24px
--text-3xl: 30px
--text-4xl: 36px
--text-5xl: 42px
--text-6xl: 49px
--text-7xl: 72px
```

**Font Weights:** 5 weights from 300 to 700
```css
--font-light: 300
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

### 2. Spacing

**Base Scale:** 21 spacing values
```css
--space-1, --space-2, --space-3, --space-4, --space-6, --space-8,
--space-10, --space-12, --space-14, --space-16, --space-20, --space-24,
--space-32, --space-36, --space-40, --space-48, --space-56, --space-64,
--space-96, --space-144
```

**Gap Scale:** 18 gap values for flexbox/grid
```css
--gap-1 through --gap-28
```

### 3. Colors

**Semantic Colors (HSL format):**
```css
--background, --foreground
--primary, --primary-foreground
--secondary, --secondary-foreground
--muted, --muted-foreground
--accent, --accent-foreground
--destructive, --destructive-foreground
--border, --input, --ring
--card, --card-foreground
--popover, --popover-foreground
```

**Dark Mode:** All colors have dark mode variants via `.dark` class

### 4. Effects

**Shadows:**
```css
--shadow-sm, --shadow-base, --shadow-md, --shadow-lg, --shadow-xl, --shadow-2xl
--shadow-button, --shadow-dialog, --shadow-dropdown, --shadow-popover
```

**Border Radius:**
```css
--radius-none, --radius-sm, --radius-md, --radius-lg, --radius-xl,
--radius-2xl, --radius-3xl, --radius-full
```

**Transitions:**
```css
--transition-colors, --transition-opacity, --transition-transform, --transition-all
--duration-fast, --duration-base, --duration-medium, --duration-slow
```

### 5. Component Tokens

Pre-configured tokens for 21 components:
- Button, Input, Card, Badge, Dialog, Dropdown, Tooltip, Alert
- Checkbox, Radio, Switch, Tabs, Accordion, Avatar, Table
- Breadcrumb, Pagination, Skeleton, Progress, Slider, Toast

## Usage Examples

### Creating a Custom Button

```typescript
import { buttonTokens } from '@/tokens';

export const CustomButton = ({ children, size = 'md' }) => (
  <button
    style={{
      padding: `${buttonTokens.paddingY[size]} ${buttonTokens.paddingX[size]}`,
      fontSize: buttonTokens.fontSize[size],
      fontWeight: buttonTokens.fontWeight,
      borderRadius: buttonTokens.borderRadius,
      backgroundColor: 'hsl(var(--primary))',
      color: 'hsl(var(--primary-foreground))',
      transition: buttonTokens.transition,
    }}
  >
    {children}
  </button>
);
```

### Overriding shadcn Components

```css
/* In your component CSS */
.custom-card {
  --card-padding: var(--space-32);
  --card-radius: var(--radius-xl);
  --card-shadow: var(--shadow-lg);
}
```

### Responsive Spacing

```typescript
import { responsiveSpacing } from '@/tokens';

const MyLayout = () => (
  <div style={{
    padding: responsiveSpacing.md,  // 16px
    '@media (min-width: 768px)': {
      padding: responsiveSpacing.lg,  // 24px
    },
  }}>
    Content
  </div>
);
```

## Best Practices

### ✅ DO

```css
/* Use tokens for all design values */
.component {
  padding: var(--space-16);
  color: hsl(var(--foreground));
  border-radius: var(--radius-md);
}
```

```typescript
// Import and use TypeScript tokens
import { fontSizes, spacing } from '@/tokens';
const size = fontSizes.lg;
```

### ❌ DON'T

```css
/* Don't use hardcoded values */
.component {
  padding: 16px;
  color: #0a0a0a;
  border-radius: 4px;
}
```

```typescript
// Don't hardcode values in JS
const size = '18px';
```

## TypeScript Support

All tokens are fully typed:

```typescript
import type { FontSize, Spacing, SemanticColorLight } from '@/tokens';

interface ComponentProps {
  size: FontSize;       // 'xs' | 'sm' | 'base' | 'lg' | ...
  spacing: Spacing;     // 0 | 1 | 2 | 3 | 4 | 6 | 8 | ...
  color: SemanticColorLight; // 'background' | 'foreground' | ...
}
```

## Dark Mode Support

All color tokens automatically adapt to dark mode:

```css
/* Automatically switches based on .dark class */
.component {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}
```

In light mode: background is white, foreground is black
In dark mode: background is black, foreground is white

## Accessibility

All tokens meet **WCAG 2.1 Level AA** standards:
- ✅ Text contrast: 4.5:1 minimum (most exceed 7:1)
- ✅ UI component contrast: 3:1 minimum
- ✅ Focus indicators: 2px high-contrast ring
- ✅ Touch targets: Minimum 32px height

See `docs/ACCESSIBILITY.md` for full compliance report.

## Documentation

- **[TOKEN-USAGE-GUIDE.md](../../docs/TOKEN-USAGE-GUIDE.md)** - Complete usage guide with examples
- **[VALIDATION-REPORT.md](../../docs/VALIDATION-REPORT.md)** - Token coverage and validation
- **[ACCESSIBILITY.md](../../docs/ACCESSIBILITY.md)** - WCAG AA compliance report

## Token Versioning

**Current Version:** 1.0.0
**Source:** Figma Design System
**Last Updated:** 2026-02-07

## Contributing

When adding new tokens:
1. Add to appropriate TypeScript file (colors.ts, spacing.ts, etc.)
2. Add corresponding CSS custom property in design-tokens.css
3. Update component overrides if needed
4. Update documentation
5. Run TypeScript checks: `npx tsc --noEmit src/tokens/index.ts`

## Support

For issues or questions:
- Check the usage guide: `docs/TOKEN-USAGE-GUIDE.md`
- Review validation report: `docs/VALIDATION-REPORT.md`
- Refer to Figma source file for design specifications
