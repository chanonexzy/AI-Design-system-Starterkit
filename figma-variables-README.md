# Figma Design Variables Extraction Report

**File:** @shadcn_ui components with variables & Tailwind classes
**Figma File ID:** CMvr69HUqITCOC2K7tIXIS
**Last Modified:** 2026-01-24T04:39:47Z
**Extracted:** 2026-02-07T06:48:50.911Z

---

## Summary

This document describes the design variables extracted from the Figma file. Due to API token scope limitations, the full variables endpoint (`/variables/local`) requiring `file_variables:read` scope was not accessible. Instead, variables were extracted from the main file content by analyzing `boundVariables` references throughout the document.

### What Was Extracted

- **243 unique variable references** identified by their IDs
- **154 design styles** organized into 22 categories
- **Usage patterns** showing where each variable is applied
- **Type inference** based on property names and context

### Extraction Statistics

| Category | Count | Description |
|----------|-------|-------------|
| **Colors** | 58 | Fill colors, stroke colors, and text colors |
| **Spacing** | 139 | Padding, gaps, item spacing, and letter spacing |
| **Border Radius** | 16 | Corner radius values for components |
| **Typography** | 22 | Font size, weight, family, and line height |
| **Unknown** | 8 | Variables with unclear usage context |
| **Total Styles** | 154 | Text styles, shadows, blur effects |

---

## Variable Categories

### Color Variables (58)
Variables used for fills, strokes, and text colors. Examples include:
- `VariableID:373:398` - Used in fills
- `VariableID:374:417` - Used in strokes and fills
- `VariableID:402:601` - Used in text range fills
- `VariableID:90:190` - Text color
- `VariableID:90:179` - Stroke color

### Spacing Variables (139)
The largest category, including:
- **Padding**: `VariableID:90:476`, `VariableID:90:475`, etc.
- **Item Spacing**: `VariableID:381:513`, `VariableID:626:3629`, etc.
- **Grid Gaps**: `VariableID:381:575` (used for both row and column gaps)
- **Letter Spacing**: `VariableID:1043:1112`

### Border Radius Variables (16)
Applied to corner radii:
- `VariableID:90:558` - Rectangle corner radii
- Used across FRAME, COMPONENT, and INSTANCE nodes

### Typography Variables (22)
Font-related properties:
- **Font Size**: `VariableID:1043:1119`, `VariableID:1043:1114`, `VariableID:1043:1077`
- **Font Weight**: `VariableID:1043:1102`, `VariableID:1043:1103`, `VariableID:1043:1100`
- **Font Family**: `VariableID:1043:1120`
- **Line Height**: `VariableID:1043:1089`, `VariableID:1043:1095`, `VariableID:1043:1115`

---

## Style Categories

The Figma file contains 154 styles across 22 categories:

### Text Styles (117 styles)
Organized by size with weight variations:

| Size Category | Count | Sample Weights |
|--------------|-------|----------------|
| Text-xs | 9 | Black, Extra Bold, Bold, Semi Bold, Medium, Regular, Light, Extra Light, Thin |
| Text-sm | 9 | Same weight variations |
| Text-base | 9 | Same weight variations |
| Text-lg | 9 | Same weight variations |
| Text-xl | 9 | Same weight variations |
| Text-2xl through Text-9xl | 72 | All sizes have 9 weight variations |

### Effect Styles (28 styles)
- **Box Shadow**: 11 styles
- **Backdrop Blur**: 8 styles
- **Blur**: 8 styles
- **Shadow**: 1 style

### Additional Styles (9 styles)
- **text-sm**: 2 styles
- **Heading**: 2 styles
- **Neutral**: 2 styles
- **Body**: 2 styles
- **Default**: 1 style

---

## Usage Patterns

### Sample Variable Usage

The extraction includes up to 3 example usages for each variable showing:
- **Node Name**: The component or frame using the variable
- **Node Type**: FRAME, COMPONENT, INSTANCE, etc.
- **Property**: The specific property bound to the variable

Example:
```json
{
  "id": "VariableID:381:513",
  "usages": [
    {
      "nodeName": "🪩 Welcome!",
      "nodeType": "FRAME",
      "property": "itemSpacing"
    },
    {
      "nodeName": "Accordion / Prototype Components",
      "nodeType": "FRAME",
      "property": "itemSpacing"
    }
  ],
  "properties": ["itemSpacing"],
  "nodeTypes": ["FRAME"],
  "inferredType": "SPACING"
}
```

### Components with Variables

50 sample nodes were captured that use variables, including:
- Accordion components
- Button components
- Card components
- Form elements
- Navigation components

---

## Limitations and Notes

### What's Missing

1. **Variable Names**: Actual human-readable names like "primary-blue" or "spacing-md" are not available
2. **Variable Values**: Actual color values, pixel measurements, or font specifications are not included
3. **Variable Collections**: Grouping information (e.g., "Colors/Primary", "Spacing/Layout") is not available
4. **Modes**: Variable modes for themes (light/dark) are not accessible
5. **Aliases**: Relationships between variables (e.g., "accent" aliasing "primary") are not shown

### Why These Limitations Exist

The Figma API token provided has these scopes:
- `current_user:read`
- `file_comments:read`
- `file_comments:write`
- `file_content:read`
- `file_metadata:read`
- `file_versions:read`
- `library_assets:read`
- `team_library_content:read`
- `library_content:read`
- `file_dev_resources:read`
- `file_dev_resources:write`
- `projects:read`
- `webhooks:read`
- `webhooks:write`

To get full variable data, the token needs:
- `file_variables:read` scope

### How to Get Complete Variable Data

To get the full variable definitions including names, values, collections, and modes:

1. Generate a new Figma API token with the `file_variables:read` scope
2. Use this endpoint:
   ```
   GET https://api.figma.com/v1/files/CMvr69HUqITCOC2K7tIXIS/variables/local
   ```

---

## File Contents

### Main Output File
**Location:** `D:\DesignSystem Project Chadcn\ai-design-system-starter\figma-variables.json`

Contains:
- `metadata`: File information and extraction details
- `variableReferences`: All 243 variable IDs with usage information
- `variablesByType`: Variables organized by inferred type
- `styles`: All 154 styles organized by category
- `sampleNodes`: 50 example components using variables
- `statistics`: Comprehensive counts and metrics

### Supporting Files
- `figma-full-response.json`: Complete raw response from Figma API (60MB+)
- `figma-variables-README.md`: This documentation file

---

## Next Steps

### To Complete the Design System

1. **Get Variable Definitions**
   - Obtain token with `file_variables:read` scope
   - Fetch from `/variables/local` endpoint
   - Map variable IDs to actual names and values

2. **Create Token Mappings**
   - Map Figma variables to CSS custom properties
   - Create Tailwind config from color and spacing values
   - Generate TypeScript types for design tokens

3. **Extract Component Specifications**
   - Use the 7,742 components data to create component specs
   - Document variants and states
   - Map to React component props

4. **Build Design Token System**
   - Transform Figma variables to design tokens format
   - Create token transformers for different platforms
   - Generate documentation

---

## Technical Details

### Extraction Method

The extraction used Node.js to:
1. Download the full Figma file content via REST API
2. Recursively traverse the document tree
3. Identify all `boundVariables` objects containing `VARIABLE_ALIAS` types
4. Track variable IDs, properties, and usage contexts
5. Infer variable types from property names
6. Organize results by category

### Type Inference Rules

Variables are categorized based on property names:
- **COLOR**: Contains "color", "fill", or "stroke"
- **SPACING**: Contains "spacing", "padding", "gap", or "letterspacing"
- **BORDER_RADIUS**: Contains "radius" or "corner"
- **TYPOGRAPHY**: Contains "font", "text", "lineheight", or "letterspacing"
- **UNKNOWN**: Doesn't match above patterns

---

## Resources

- **Figma File**: https://www.figma.com/design/CMvr69HUqITCOC2K7tIXIS/
- **Figma API Documentation**: https://www.figma.com/developers/api
- **Variables API**: https://www.figma.com/developers/api#variables

---

*Generated by Claude Code for the ai-design-system-starter project*
