# Design Token Usage Guide

This guide explains how to use the design tokens in your Next.js project with shadcn/ui components.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [CSS Custom Properties](#css-custom-properties)
- [TypeScript Tokens](#typescript-tokens)
- [Component Usage](#component-usage)
- [Best Practices](#best-practices)
- [Examples](#examples)

## Overview

The design token system provides a centralized way to manage design decisions across your application. Tokens are available in two formats:

1. **CSS Custom Properties** - For use in stylesheets and CSS-in-JS
2. **TypeScript Constants** - For use in JavaScript/TypeScript code

All tokens are extracted from the Figma design system and maintain consistency with shadcn/ui conventions.

## Installation

The tokens are already integrated into your project. They are automatically imported through `app/globals.css`:

```css
@import "../src/tokens/design-tokens.css";
@import "../src/styles/shadcn-overrides.css";
```

## CSS Custom Properties

### Typography

Use font tokens in your CSS:

```css
.my-heading {
  font-family: var(--font-sans);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

.my-body {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
}
```

Available font size tokens:
- `--text-xs` through `--text-7xl` (12px to 72px)
- Font weights: `--font-light`, `--font-normal`, `--font-medium`, `--font-semibold`, `--font-bold`

### Spacing

Use spacing tokens for margins, padding, and gaps:

```css
.my-component {
  padding: var(--space-16);
  margin-bottom: var(--space-24);
  gap: var(--gap-8);
}

.my-button {
  padding: var(--space-8) var(--space-16);
}
```

Available spacing tokens:
- `--space-{n}`: 0, 1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 36, 40, 48, 56, 64, 96, 144
- `--gap-{n}`: 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 24, 28

### Colors

Use semantic color tokens with HSL format:

```css
.my-component {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}

.my-button-primary {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

/* With opacity */
.my-overlay {
  background-color: hsl(var(--background) / 0.8);
}
```

Available semantic colors:
- `--background`, `--foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`, `--destructive-foreground`
- `--border`, `--input`, `--ring`
- `--card`, `--card-foreground`
- `--popover`, `--popover-foreground`

### Border Radius

```css
.my-component {
  border-radius: var(--radius-md);
}

.my-card {
  border-radius: var(--radius-lg);
}

.my-pill {
  border-radius: var(--radius-full);
}
```

Available radius tokens:
- `--radius-none`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-2xl`, `--radius-3xl`, `--radius-full`

### Shadows

```css
.my-card {
  box-shadow: var(--shadow-md);
}

.my-button {
  box-shadow: var(--shadow-button);
}

.my-dialog {
  box-shadow: var(--shadow-dialog);
}
```

Available shadow tokens:
- `--shadow-sm`, `--shadow-base`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`, `--shadow-2xl`
- Component shadows: `--shadow-button`, `--shadow-dialog`, `--shadow-dropdown`, `--shadow-popover`

### Transitions

```css
.my-interactive {
  transition: var(--transition-colors);
}

.my-animated {
  transition: var(--transition-transform);
}
```

Available transition tokens:
- `--transition-colors` - For color changes
- `--transition-opacity` - For opacity changes
- `--transition-transform` - For transforms
- `--transition-all` - For all properties

## TypeScript Tokens

Import tokens in your TypeScript/JavaScript files:

```typescript
import {
  fontSizes,
  spacing,
  semanticColors,
  componentTokens
} from '@/tokens';
```

### Typography Tokens

```typescript
import { fontSizes, fontWeights, textStyles } from '@/tokens';

// Use individual tokens
const MyComponent = () => (
  <div style={{
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
  }}>
    Hello World
  </div>
);

// Use predefined text styles
const MyHeading = () => (
  <h1 style={textStyles.h1}>
    My Heading
  </h1>
);
```

### Spacing Tokens

```typescript
import { spacing, gap } from '@/tokens';

const MyComponent = () => (
  <div style={{
    padding: spacing[16],
    gap: gap[8],
  }}>
    Content
  </div>
);
```

### Color Tokens

```typescript
import { semanticColors, componentColors } from '@/tokens';

const MyComponent = () => (
  <button style={{
    backgroundColor: `hsl(${semanticColors.light.primary})`,
    color: `hsl(${semanticColors.light.primaryForeground})`,
  }}>
    Click Me
  </button>
);

// Or use component-specific colors
const MyButton = () => {
  const colors = componentColors.button.default;
  return (
    <button style={{
      backgroundColor: colors.background,
      color: colors.foreground,
    }}>
      Click Me
    </button>
  );
};
```

### Component Tokens

```typescript
import { buttonTokens, inputTokens } from '@/tokens';

const MyButton = () => (
  <button style={{
    padding: `${buttonTokens.paddingY.md} ${buttonTokens.paddingX.md}`,
    fontSize: buttonTokens.fontSize.md,
    borderRadius: buttonTokens.borderRadius,
  }}>
    Custom Button
  </button>
);
```

## Component Usage

### Overriding shadcn/ui Components

The design tokens are already integrated with shadcn/ui components through CSS custom properties. You can override component styles by using the provided CSS variables:

```css
/* In your component CSS */
.my-custom-button {
  --button-padding-x: var(--space-20);
  --button-padding-y: var(--space-10);
  --button-radius: var(--radius-lg);
}
```

### Creating Custom Components

When building custom components, use tokens for consistency:

```typescript
// CustomCard.tsx
import { cardTokens } from '@/tokens';

export const CustomCard = ({ children }) => {
  return (
    <div
      className="card"
      style={{
        padding: cardTokens.padding.md,
        borderRadius: cardTokens.borderRadius,
        boxShadow: cardTokens.shadow,
      }}
    >
      {children}
    </div>
  );
};
```

## Best Practices

### 1. Always Use Tokens

✅ **DO:**
```css
.my-component {
  padding: var(--space-16);
  color: hsl(var(--foreground));
  border-radius: var(--radius-md);
}
```

❌ **DON'T:**
```css
.my-component {
  padding: 16px;
  color: #0a0a0a;
  border-radius: 4px;
}
```

### 2. Use Semantic Color Names

✅ **DO:**
```css
.error-message {
  color: hsl(var(--destructive));
}
```

❌ **DON'T:**
```css
.error-message {
  color: #ef4444;
}
```

### 3. Leverage Component Tokens

✅ **DO:**
```typescript
import { buttonTokens } from '@/tokens';

<button style={{ fontSize: buttonTokens.fontSize.md }}>
```

❌ **DON'T:**
```typescript
<button style={{ fontSize: '14px' }}>
```

### 4. Use TypeScript Types

✅ **DO:**
```typescript
import { FontSize, Spacing } from '@/tokens';

interface TextProps {
  size: FontSize;
  spacing: Spacing;
}
```

### 5. Consistent State Styling

Use state modifiers for hover, active, and disabled states:

```css
.my-button {
  background: hsl(var(--primary));
  transition: var(--transition-colors);
}

.my-button:hover {
  background: hsl(var(--primary) / 0.9);
}

.my-button:active {
  background: hsl(var(--primary) / 0.8);
}

.my-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

## Examples

### Example 1: Custom Button Component

```typescript
// components/CustomButton.tsx
import { buttonTokens } from '@/tokens';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const CustomButton = ({ size = 'md', children }: ButtonProps) => {
  return (
    <button
      style={{
        padding: `${buttonTokens.paddingY[size]} ${buttonTokens.paddingX[size]}`,
        fontSize: buttonTokens.fontSize[size],
        fontWeight: buttonTokens.fontWeight,
        borderRadius: buttonTokens.borderRadius,
        boxShadow: buttonTokens.shadow,
        transition: buttonTokens.transition,
        backgroundColor: 'hsl(var(--primary))',
        color: 'hsl(var(--primary-foreground))',
      }}
    >
      {children}
    </button>
  );
};
```

### Example 2: Responsive Card

```typescript
// components/ResponsiveCard.tsx
import { cardTokens, responsiveSpacing } from '@/tokens';

export const ResponsiveCard = ({ children }) => {
  return (
    <div
      className="card"
      style={{
        padding: cardTokens.padding.md,
        borderRadius: cardTokens.borderRadius,
        boxShadow: cardTokens.shadow,
        backgroundColor: 'hsl(var(--card))',
        color: 'hsl(var(--card-foreground))',
      }}
    >
      {children}
    </div>
  );
};
```

### Example 3: Typography Component

```typescript
// components/Typography.tsx
import { textStyles } from '@/tokens';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  children: React.ReactNode;
}

export const Typography = ({ variant, children }: TypographyProps) => {
  const Tag = variant.startsWith('h') ? variant : 'p';

  return (
    <Tag style={textStyles[variant]}>
      {children}
    </Tag>
  );
};
```

### Example 4: Form Input with States

```css
/* components/Input.module.css */
.input {
  padding: var(--input-padding-y) var(--input-padding-x);
  font-size: var(--input-font-size);
  border: var(--input-border-width) solid hsl(var(--input));
  border-radius: var(--input-radius);
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  transition: var(--input-transition);
}

.input:focus {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 0;
  border-color: hsl(var(--ring));
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: hsl(var(--muted));
}

.input.error {
  border-color: hsl(var(--destructive));
  color: hsl(var(--destructive));
}

.input.error:focus {
  outline-color: hsl(var(--destructive));
}
```

## Tailwind Integration

If you need to use tokens with Tailwind, update your `tailwind.config.ts`:

```typescript
import { spacing, fontSizes, borderRadius } from './src/tokens';

export default {
  theme: {
    extend: {
      spacing: spacing,
      fontSize: fontSizes,
      borderRadius: borderRadius,
      // ... other tokens
    },
  },
};
```

## Dark Mode

All color tokens automatically support dark mode through the `.dark` class:

```css
/* Automatically handled */
.my-component {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}

/* In light mode: background is white, foreground is black */
/* In dark mode: background is black, foreground is white */
```

## Resources

- **Token Files**: `src/tokens/`
- **CSS Variables**: `src/tokens/design-tokens.css`
- **Component Overrides**: `src/styles/shadcn-overrides.css`
- **TypeScript Exports**: `src/tokens/index.ts`

## Support

For questions or issues with the design token system, please refer to:
- `VALIDATION-REPORT.md` - Token coverage and validation
- `ACCESSIBILITY.md` - Color contrast and accessibility compliance
- Figma source file for design specifications
