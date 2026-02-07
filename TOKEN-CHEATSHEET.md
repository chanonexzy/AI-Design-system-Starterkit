# Design Token Cheatsheet

Quick reference for using design tokens in your Next.js project.

## Import Tokens

```typescript
// Import all or specific tokens
import { tokens } from '@/tokens';
import { fontSizes, spacing, semanticColors, buttonTokens } from '@/tokens';
```

## CSS Variables Quick Reference

### Typography
```css
/* Font Families */
font-family: var(--font-sans);     /* Inter */
font-family: var(--font-mono);     /* Monospace */

/* Font Sizes */
font-size: var(--text-xs);         /* 12px */
font-size: var(--text-sm);         /* 14px */
font-size: var(--text-base);       /* 16px */
font-size: var(--text-lg);         /* 18px */
font-size: var(--text-xl);         /* 20px */
font-size: var(--text-2xl);        /* 24px */
font-size: var(--text-3xl);        /* 30px */
font-size: var(--text-4xl);        /* 36px */

/* Font Weights */
font-weight: var(--font-light);    /* 300 */
font-weight: var(--font-normal);   /* 400 */
font-weight: var(--font-medium);   /* 500 */
font-weight: var(--font-semibold); /* 600 */
font-weight: var(--font-bold);     /* 700 */

/* Line Heights */
line-height: var(--leading-tight);   /* 1.01 */
line-height: var(--leading-normal);  /* 1.24 */
line-height: var(--leading-relaxed); /* 1.29 */
```

### Spacing
```css
/* Padding/Margin */
padding: var(--space-4);   /* 4px */
padding: var(--space-8);   /* 8px */
padding: var(--space-12);  /* 12px */
padding: var(--space-16);  /* 16px */
padding: var(--space-24);  /* 24px */
padding: var(--space-32);  /* 32px */

/* Gap */
gap: var(--gap-2);   /* 4px */
gap: var(--gap-4);   /* 8px */
gap: var(--gap-8);   /* 16px */
gap: var(--gap-12);  /* 24px */
```

### Colors
```css
/* Semantic Colors (use with hsl()) */
background: hsl(var(--background));
color: hsl(var(--foreground));

background: hsl(var(--primary));
color: hsl(var(--primary-foreground));

background: hsl(var(--secondary));
background: hsl(var(--muted));
background: hsl(var(--accent));
background: hsl(var(--destructive));

border-color: hsl(var(--border));
border-color: hsl(var(--input));

/* With opacity */
background: hsl(var(--background) / 0.8);
```

### Border Radius
```css
border-radius: var(--radius-sm);   /* 2px */
border-radius: var(--radius-md);   /* 4px */
border-radius: var(--radius-lg);   /* 8px */
border-radius: var(--radius-xl);   /* 12px */
border-radius: var(--radius-full); /* 9999px */
```

### Shadows
```css
box-shadow: var(--shadow-sm);
box-shadow: var(--shadow-md);
box-shadow: var(--shadow-lg);
box-shadow: var(--shadow-xl);

/* Component shadows */
box-shadow: var(--shadow-button);
box-shadow: var(--shadow-dialog);
box-shadow: var(--shadow-dropdown);
```

### Transitions
```css
transition: var(--transition-colors);
transition: var(--transition-opacity);
transition: var(--transition-transform);
transition: var(--transition-all);
```

## TypeScript Usage

### Font Sizes
```typescript
import { fontSizes } from '@/tokens';

style={{ fontSize: fontSizes.lg }}  // '18px'
```

### Spacing
```typescript
import { spacing, gap } from '@/tokens';

style={{
  padding: spacing[16],    // '16px'
  gap: gap[8],             // '16px'
}}
```

### Colors
```typescript
import { semanticColors } from '@/tokens';

// Light mode
style={{
  background: `hsl(${semanticColors.light.background})`,
  color: `hsl(${semanticColors.light.foreground})`,
}}

// Dark mode
style={{
  background: `hsl(${semanticColors.dark.background})`,
  color: `hsl(${semanticColors.dark.foreground})`,
}}
```

### Component Tokens
```typescript
import { buttonTokens, inputTokens, cardTokens } from '@/tokens';

// Button
style={{
  padding: `${buttonTokens.paddingY.md} ${buttonTokens.paddingX.md}`,
  fontSize: buttonTokens.fontSize.md,
  borderRadius: buttonTokens.borderRadius,
}}

// Input
style={{
  padding: `${inputTokens.paddingY} ${inputTokens.paddingX}`,
  fontSize: inputTokens.fontSize,
  height: inputTokens.height,
}}

// Card
style={{
  padding: cardTokens.padding.md,
  borderRadius: cardTokens.borderRadius,
  boxShadow: cardTokens.shadow,
}}
```

## Common Patterns

### Button States
```css
.button {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  transition: var(--transition-colors);
}

.button:hover {
  background: hsl(var(--primary) / 0.9);
}

.button:active {
  background: hsl(var(--primary) / 0.8);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Input States
```css
.input {
  border: 1px solid hsl(var(--input));
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  transition: var(--transition-colors);
}

.input:focus {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 0;
  border-color: hsl(var(--ring));
}

.input.error {
  border-color: hsl(var(--destructive));
  color: hsl(var(--destructive));
}
```

### Card
```css
.card {
  padding: var(--space-24);
  border-radius: var(--radius-lg);
  background: hsl(var(--card));
  color: hsl(var(--card-foreground));
  border: 1px solid hsl(var(--border));
  box-shadow: var(--shadow-sm);
}
```

### Flexbox Layout
```css
.container {
  display: flex;
  gap: var(--gap-8);
  padding: var(--space-16);
}
```

### Grid Layout
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--gap-16);
  padding: var(--space-24);
}
```

## Component Overrides

Override shadcn components without touching HTML:

```css
/* Button override */
.custom-button {
  --button-padding-x: var(--space-20);
  --button-padding-y: var(--space-10);
  --button-radius: var(--radius-lg);
  --button-font-size: var(--text-lg);
}

/* Input override */
.custom-input {
  --input-padding-x: var(--space-16);
  --input-radius: var(--radius-lg);
  --input-height: 48px;
}

/* Card override */
.custom-card {
  --card-padding: var(--space-32);
  --card-radius: var(--radius-xl);
  --card-shadow: var(--shadow-lg);
}
```

## Responsive Design

```typescript
import { responsiveSpacing } from '@/tokens';

<div style={{
  padding: responsiveSpacing.sm,  // 12px
}}>
  {/* Mobile */}
</div>

// In CSS
@media (min-width: 768px) {
  .container {
    padding: var(--space-24);  /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: var(--space-32);  /* Desktop */
  }
}
```

## Dark Mode

Colors automatically adapt with `.dark` class:

```css
/* No changes needed - automatically works */
.component {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}
```

## Focus States

```css
/* Automatically applied to all focusable elements */
*:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}
```

## Z-Index

```css
.dropdown { z-index: var(--z-dropdown); }     /* 1000 */
.modal { z-index: var(--z-modal); }           /* 1050 */
.tooltip { z-index: var(--z-tooltip); }       /* 1070 */
.toast { z-index: var(--z-toast); }           /* 1080 */
```

## Pro Tips

1. **Always use tokens** - Never hardcode values
2. **Use semantic colors** - `var(--primary)` not `#000000`
3. **Leverage component tokens** - Pre-configured for common patterns
4. **HSL for opacity** - `hsl(var(--background) / 0.8)` for transparency
5. **CSS variables in components** - Override without changing structure

## Need Help?

- Full guide: `docs/TOKEN-USAGE-GUIDE.md`
- Validation: `docs/VALIDATION-REPORT.md`
- Accessibility: `docs/ACCESSIBILITY.md`
- Token docs: `src/tokens/README.md`
