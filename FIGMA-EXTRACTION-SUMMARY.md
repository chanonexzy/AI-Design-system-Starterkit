# Figma Design Token Extraction Summary

**File:** @shadcn_ui components with variables & Tailwind classes
**Extracted:** 2026-02-07
**Last Modified:** 2026-01-24
**Output File:** `figma-tokens-raw.json`

---

## Extraction Results

### ✅ Successfully Extracted

#### 1. **Typography Tokens**
- **Font Families:** 4 families
  - Geist
  - Geist Mono
  - Inter
  - Roboto Mono

- **Font Sizes:** 13 sizes (12px - 72px)
  - 12, 13, 14, 16, 18, 20, 22, 24, 30, 36, 42, 49, 72

- **Font Weights:** 5 weights
  - 300 (Light)
  - 400 (Regular)
  - 500 (Medium)
  - 600 (Semi-bold)
  - 700 (Bold)

- **Text Styles:** 1,353 complete text style definitions
- **Line Heights:** 30 unique values
- **Letter Spacing:** Various values including default (0)

#### 2. **Spacing Tokens**
- **Padding Values:** 22 values (1px - 165px)
  - 1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 36, 40, 48, 56, 64, 96, 126.5, 144, 165

- **Gap Values:** 36 values (including negative values for overlapping)
  - Range: -34px to 252px
  - Includes standard spacing scale: 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 96, etc.

#### 3. **Border Tokens**
- **Border Radius:** 12 values
  - 0, 0.8, 2, 4, 5, 6, 8, 12, 16, 24, 7272 (large radius), 9999 (full rounded)

- **Border Width:** 14 values
  - Range: 0 to 5px
  - Includes fractional widths for precise designs

#### 4. **Color Tokens**
- **1,521 color values extracted from fills**
- Primary colors found:
  - #0a0a0a (black/dark)
  - #fafafa (white/light)
  - #737373 (gray)
  - Plus many more semantic colors

#### 5. **Effect Tokens**
- **Shadows:** 86 shadow definitions
  - Drop shadows
  - Inner shadows
  - With offset, radius, spread, and color values

- **Blur Effects:** Extracted but none found in current scan

#### 6. **Component Information**
- **6,099 components extracted**
- Component types include:
  - Accordion
  - Alert
  - Avatar
  - Badge
  - Button
  - Card
  - Checkbox
  - Dialog
  - Dropdown
  - Input
  - Select
  - Switch
  - Table
  - Tabs
  - Tooltip
  - And many more shadcn/ui components

#### 7. **Styles**
- **Text Styles:** 123 defined styles
- **Fill Styles:** 3 defined styles
- **Effect Styles:** 28 defined styles

---

## ⚠️ Limitation: Variable Definitions Not Available

### What's Missing

The Figma file uses **251 unique design variables** that are referenced throughout the design system. However, the **variable definitions** (names, values, descriptions, and relationships) could not be extracted because:

**Reason:** The Figma access token provided does not have the `file_variables:read` scope, which is required by the `/v1/files/{file_key}/variables/local` API endpoint.

### What We Have Instead

- **Variable IDs:** All 251 variable IDs are captured
- **Usage Information:** How many times each variable is used
- **Context:** Where variables are applied (node types, properties)
- **Inferred Values:** Actual values extracted from component instances

### Most Used Variables

The top 10 most frequently used variables:

1. `VariableID:626:3622` - used 35,896 times (likely a primary color or base token)
2. `VariableID:374:416` - used 26,126 times
3. `VariableID:90:554` - used 10,374 times
4. `VariableID:381:324` - used 6,087 times
5. `VariableID:1043:1112` - used 5,316 times
6. `VariableID:1043:1120` - used 5,311 times
7. `VariableID:1043:1103` - used 3,994 times
8. `VariableID:1043:1096` - used 3,810 times
9. `VariableID:1043:1088` - used 3,810 times
10. `VariableID:90:480` - used 2,492 times

---

## File Structure

The extracted data is organized in `figma-tokens-raw.json` with the following structure:

```json
{
  "metadata": {
    "fileName": "...",
    "extractedAt": "...",
    "lastModified": "...",
    "version": "...",
    "note": "..."
  },
  "colors": {
    "primitives": {},
    "semantic": {},
    "fromStyles": { /* 1521 colors */ }
  },
  "typography": {
    "textStyles": { /* 1353 styles */ },
    "fontFamilies": [...],
    "fontSizes": [...],
    "fontWeights": [...],
    "lineHeights": [...],
    "letterSpacing": [...]
  },
  "spacing": {
    "padding": [...],
    "gap": [...],
    "other": [...]
  },
  "borderRadius": [...],
  "borderWidth": [...],
  "effects": {
    "shadows": { /* 86 shadows */ },
    "blur": {}
  },
  "components": { /* 6099 components */ },
  "variableReferences": {
    "totalUniqueVariables": 251,
    "byId": { /* Variable usage info */ }
  },
  "styles": {
    "text": { /* 123 styles */ },
    "fill": { /* 3 styles */ },
    "effect": { /* 28 styles */ }
  }
}
```

---

## Getting Variable Definitions

To extract the actual variable definitions with their proper names and values, you need to:

### Option 1: Update the Figma Token

1. Go to Figma Settings → Personal Access Tokens
2. Create a new token with the **"Variables"** scope selected
3. Use the new token to fetch: `GET https://api.figma.com/v1/files/{file_key}/variables/local`

### Option 2: Manual Export

1. Open the Figma file in the browser or desktop app
2. Go to the Variables panel (right sidebar)
3. Export variables using Figma's built-in variable export feature
4. Alternatively, use the Figma Variables plugin to export as JSON

### Option 3: Figma Tokens Plugin

Use the "Figma Tokens" community plugin which can export variables in various formats:
- JSON
- Style Dictionary
- CSS Variables
- SCSS Variables

---

## What You Can Do With This Data

Even without variable definitions, this extraction provides:

1. **Complete Typography System:** All font families, sizes, weights, line heights
2. **Spacing Scale:** Full padding and gap values for layout
3. **Border System:** Radius and width values for consistent borders
4. **Color Palette:** 1,521 color values used across the design
5. **Shadow Library:** 86 shadow definitions with precise values
6. **Component Inventory:** Complete list of 6,099 components
7. **Style Catalog:** All text, fill, and effect styles

This is sufficient to:
- Build a design token system
- Create CSS/SCSS variables
- Generate Tailwind config
- Document the design system
- Map component variants

---

## Next Steps

1. **Get Variable Definitions:** Update the Figma token to include variable scope
2. **Map Variables:** Cross-reference variable IDs with extracted values
3. **Create Token System:** Transform extracted data into a formal token structure
4. **Generate Code:** Create CSS variables, Tailwind config, or theme files
5. **Document Components:** Use component information to build a component library

---

## Files Generated

1. **`figma-tokens-raw.json`** - Main extraction file with all tokens
2. **`FIGMA-EXTRACTION-SUMMARY.md`** - This summary document
3. **`variable-references.json`** - Detailed variable usage information

---

## Notes

- All values are extracted directly from the Figma API with no approximations
- Color values provided in both HEX and RGBA formats
- Component information includes IDs for reference back to Figma
- Typography values follow web standards (px for sizes, numeric for weights)
- Spacing values maintain the exact values from Figma (including fractional pixels)
