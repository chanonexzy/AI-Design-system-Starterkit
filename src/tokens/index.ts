/**
 * Design Tokens - Barrel Export
 * Central export point for all design tokens
 *
 * @packageDocumentation
 */

// Typography tokens
export {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  fixedLineHeights,
  letterSpacing,
  textStyles,
  typography,
  type FontFamily,
  type FontSize,
  type FontWeight,
  type LineHeight,
  type FixedLineHeight,
  type LetterSpacing,
  type TextStyle,
} from './typography';

// Spacing tokens
export {
  spacing,
  gap,
  semanticSpacing,
  responsiveSpacing,
  insetSpacing,
  squishSpacing,
  stretchSpacing,
  getSpacing,
  getGap,
  customSpacing,
  type Spacing,
  type Gap,
  type SemanticSpacing,
  type ResponsiveSpacing,
  type InsetSpacing,
  type SquishSpacing,
  type StretchSpacing,
} from './spacing';

// Color tokens
export {
  rawColors,
  semanticColors,
  componentColors,
  stateModifiers,
  opacity,
  hslToString,
  withOpacity,
  type RawColor,
  type SemanticColorLight,
  type SemanticColorDark,
  type ComponentColor,
  type StateModifier,
  type Opacity,
} from './colors';

// Effects tokens
export {
  shadows,
  componentShadows,
  borderRadius,
  borderWidth,
  borderStyles,
  duration,
  easings,
  transitions,
  focusRing,
  zIndex,
  backdropBlur,
  blur,
  outline,
  keyframes,
  createShadow,
  combineShadows,
  createTransition,
  type Shadow,
  type ComponentShadow,
  type BorderRadius,
  type BorderWidth,
  type BorderStyle,
  type Duration,
  type Easing,
  type Transition,
  type ZIndex,
  type BackdropBlur,
  type Blur,
  type Outline,
  type Keyframe,
} from './effects';

// Component tokens
export {
  buttonTokens,
  inputTokens,
  cardTokens,
  badgeTokens,
  dialogTokens,
  dropdownTokens,
  tooltipTokens,
  alertTokens,
  checkboxTokens,
  radioTokens,
  switchTokens,
  tabsTokens,
  accordionTokens,
  avatarTokens,
  tableTokens,
  breadcrumbTokens,
  paginationTokens,
  skeletonTokens,
  progressTokens,
  sliderTokens,
  toastTokens,
  componentTokens,
  type ButtonTokens,
  type InputTokens,
  type CardTokens,
  type BadgeTokens,
  type DialogTokens,
  type DropdownTokens,
  type TooltipTokens,
  type AlertTokens,
  type CheckboxTokens,
  type RadioTokens,
  type SwitchTokens,
  type TabsTokens,
  type AccordionTokens,
  type AvatarTokens,
  type TableTokens,
  type BreadcrumbTokens,
  type PaginationTokens,
  type SkeletonTokens,
  type ProgressTokens,
  type SliderTokens,
  type ToastTokens,
  type ComponentToken,
} from './components';

/**
 * All design tokens combined
 * Use this for programmatic access to all tokens
 */
import { typography } from './typography';
import { spacing, gap } from './spacing';
import { rawColors, semanticColors, componentColors } from './colors';
import { shadows, componentShadows, borderRadius, borderWidth, duration, easings, transitions, zIndex } from './effects';
import { componentTokens } from './components';
import { fontSizes } from './typography';

export const tokens = {
  typography,
  spacing,
  gap,
  rawColors,
  semanticColors,
  componentColors,
  shadows,
  componentShadows,
  borderRadius,
  borderWidth,
  duration,
  easings,
  transitions,
  zIndex,
  componentTokens,
} as const;

/**
 * Token metadata
 */
export const tokenMetadata = {
  version: '1.0.0',
  source: 'Figma Design System',
  extractedAt: new Date().toISOString(),
  totalTokens: {
    typography: Object.keys(fontSizes).length,
    spacing: Object.keys(spacing).length,
    colors: Object.keys(semanticColors.light).length,
    effects: Object.keys(shadows).length,
    components: Object.keys(componentTokens).length,
  },
} as const;
