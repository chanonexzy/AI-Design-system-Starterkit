# Figma Design Token Extraction

This directory contains the extracted design tokens from the shadcn/ui Figma file.

## Files

### Extracted Data
- **`figma-tokens-raw.json`** (1.5MB) - Complete extraction with all available tokens
- **`FIGMA-EXTRACTION-SUMMARY.md`** - Detailed summary of what was extracted

### Helper Scripts
- **`fetch-variables-with-proper-token.js`** - Script to fetch variable definitions (requires proper token)

## What's Included

### ✅ Successfully Extracted (Available Now)

1. **Typography System**
   - 4 Font families (Geist, Geist Mono, Inter, Roboto Mono)
   - 13 Font sizes (12px - 72px)
   - 5 Font weights (300-700)
   - 1,353 Text styles
   - 30 Line heights
   - Letter spacing values

2. **Spacing System**
   - 22 Padding values (1px - 165px)
   - 36 Gap values (-34px to 252px)

3. **Border System**
   - 12 Border radius values (0 - 9999px/full rounded)
   - 14 Border width values (0 - 5px)

4. **Colors**
   - 1,521 Color values (HEX + RGBA)
   - Extracted from component fills

5. **Effects**
   - 86 Shadow definitions (drop shadows, inner shadows)
   - Blur effects

6. **Components**
   - 6,099 Components catalogued
   - All shadcn/ui components included

7. **Styles**
   - 123 Text styles
   - 3 Fill styles
   - 28 Effect styles

### ⚠️ Requires Action: Variable Definitions

The Figma file uses **251 design variables**, but their definitions (names, values, aliases) require a Figma token with the `file_variables:read` scope.

**Current token scope:** Only has basic file read access
**Required scope:** `file_variables:read` (Variables)

## Getting Variable Definitions

### Step 1: Generate a New Token

1. Go to [Figma Settings → Personal Access Tokens](https://www.figma.com/settings)
2. Click "Generate new token"
3. Name it (e.g., "Design Tokens - Full Access")
4. **Select these scopes:**
   - ✅ **File content** (`file_content:read`)
   - ✅ **Variables** (`file_variables:read`) ← IMPORTANT!
5. Click "Generate token"
6. Copy the token immediately (you won't see it again)

### Step 2: Update the Token

Replace the token in: `D:\DesignSystem Project Chadcn\Figma token.txt`

### Step 3: Fetch Variables

Run the script:
```bash
node "D:\DesignSystem Project Chadcn\ai-design-system-starter\fetch-variables-with-proper-token.js"
```

This will:
- Fetch all 251 variable definitions
- Organize them by type (colors, spacing, typography, etc.)
- Merge with existing extracted data
- Create `figma-tokens-with-variables.json` with complete data

## Using the Extracted Tokens

### Option 1: Manual Inspection
Open `figma-tokens-raw.json` in your code editor to browse all extracted values.

### Option 2: Transform to Code
Use the extracted data to generate:
- CSS custom properties
- SCSS variables
- Tailwind config
- JavaScript/TypeScript constants
- Design token files (Style Dictionary format)

### Option 3: Build a Token System
Create a design token transformation pipeline:

```javascript
const tokens = require('./figma-tokens-raw.json');

// Generate CSS variables
const cssVars = `
:root {
  /* Typography */
  ${tokens.typography.fontSizes.map((size, i) =>
    `--font-size-${i + 1}: ${size}px;`
  ).join('\n  ')}

  /* Spacing */
  ${tokens.spacing.padding.map((size, i) =>
    `--spacing-${i + 1}: ${size}px;`
  ).join('\n  ')}

  /* Border Radius */
  ${tokens.borderRadius.map((size, i) =>
    `--radius-${i + 1}: ${size}px;`
  ).join('\n  ')}
}
`;
```

## Data Structure

```javascript
{
  "metadata": {
    "fileName": "...",
    "extractedAt": "...",
    // ... metadata
  },
  "colors": {
    "primitives": {},      // Primitive color tokens
    "semantic": {},        // Semantic color tokens
    "fromStyles": {}       // Colors extracted from components
  },
  "typography": {
    "textStyles": {},      // Complete text style definitions
    "fontFamilies": [],    // All font families
    "fontSizes": [],       // All font sizes
    "fontWeights": [],     // All font weights
    "lineHeights": [],     // All line heights
    "letterSpacing": []    // All letter spacing values
  },
  "spacing": {
    "padding": [],         // Padding scale
    "gap": [],            // Gap scale
    "other": []           // Other spacing values
  },
  "borderRadius": [],      // Border radius scale
  "borderWidth": [],       // Border width scale
  "effects": {
    "shadows": {},         // Shadow definitions
    "blur": {}            // Blur effects
  },
  "components": {},        // Component catalog
  "variableReferences": {  // Variable usage info
    "totalUniqueVariables": 251,
    "byId": {}
  },
  "styles": {             // Figma styles
    "text": {},
    "fill": {},
    "effect": {}
  }
}
```

## Next Steps

1. **Get variables** - Update token and run fetch script
2. **Transform tokens** - Convert to your desired format (CSS, SCSS, etc.)
3. **Generate theme** - Create theme configuration for your framework
4. **Document system** - Use component data to document design system
5. **Sync workflow** - Set up automated token extraction on Figma updates

## Questions?

See **FIGMA-EXTRACTION-SUMMARY.md** for detailed information about:
- What was extracted
- Why variables are missing
- How to get variable definitions
- File structure details
- Usage examples

## API Reference

- **Figma File:** `CMvr69HUqITCOC2K7tIXIS`
- **File URL:** https://www.figma.com/design/CMvr69HUqITCOC2K7tIXIS
- **API Endpoint:** `https://api.figma.com/v1/files/CMvr69HUqITCOC2K7tIXIS`
- **Variables Endpoint:** `https://api.figma.com/v1/files/CMvr69HUqITCOC2K7tIXIS/variables/local`

---

**Last Updated:** 2026-02-07
**Extraction Version:** 1.0
