/**
 * Component-Specific Design Tokens
 * Tokens organized by component for easy reference and usage
 *
 * @packageDocumentation
 */

/**
 * Button component tokens
 */
export const buttonTokens = {
  // Padding
  paddingX: {
    sm: 'var(--space-12)',
    md: 'var(--space-16)',
    lg: 'var(--space-24)',
  },
  paddingY: {
    sm: 'var(--space-6)',
    md: 'var(--space-8)',
    lg: 'var(--space-12)',
  },

  // Font
  fontSize: {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)',
  },
  fontWeight: 'var(--font-medium)',

  // Border
  borderRadius: 'var(--radius-md)',
  borderWidth: 'var(--border-width-thin)',

  // Effects
  shadow: 'var(--shadow-button)',
  transition: 'var(--transition-colors)',

  // Gap (for icon + text)
  gap: 'var(--gap-2)',

  // Heights
  height: {
    sm: '32px',
    md: '40px',
    lg: '48px',
  },
} as const;

/**
 * Input component tokens
 */
export const inputTokens = {
  // Padding
  paddingX: 'var(--space-12)',
  paddingY: 'var(--space-8)',

  // Font
  fontSize: 'var(--text-sm)',
  fontWeight: 'var(--font-normal)',

  // Border
  borderRadius: 'var(--radius-md)',
  borderWidth: 'var(--border-width-thin)',

  // Effects
  transition: 'var(--transition-colors)',

  // Height
  height: '40px',

  // Focus ring
  focusRingWidth: '2px',
  focusRingOffset: '0px',
} as const;

/**
 * Card component tokens
 */
export const cardTokens = {
  // Padding
  padding: {
    sm: 'var(--space-16)',
    md: 'var(--space-24)',
    lg: 'var(--space-32)',
  },

  // Border
  borderRadius: 'var(--radius-lg)',
  borderWidth: 'var(--border-width-thin)',

  // Effects
  shadow: 'var(--shadow-sm)',
  transition: 'var(--transition-all)',

  // Gap
  gap: 'var(--gap-16)',
} as const;

/**
 * Badge component tokens
 */
export const badgeTokens = {
  // Padding
  paddingX: 'var(--space-10)',
  paddingY: 'var(--space-2)',

  // Font
  fontSize: 'var(--text-xs)',
  fontWeight: 'var(--font-semibold)',

  // Border
  borderRadius: 'var(--radius-full)',
  borderWidth: 'var(--border-width-thin)',

  // Height
  height: '22px',
} as const;

/**
 * Dialog/Modal component tokens
 */
export const dialogTokens = {
  // Overlay
  overlayOpacity: '0.8',
  overlayBlur: 'var(--backdrop-blur-sm)',

  // Content
  contentPadding: 'var(--space-24)',
  contentBorderRadius: 'var(--radius-lg)',
  contentShadow: 'var(--shadow-dialog)',

  // Max width
  maxWidth: {
    sm: '400px',
    md: '600px',
    lg: '800px',
    xl: '1000px',
  },

  // Gap
  gap: 'var(--gap-16)',

  // Z-index
  zIndex: 'var(--z-modal)',
  backdropZIndex: 'var(--z-modal-backdrop)',
} as const;

/**
 * Dropdown/Popover component tokens
 */
export const dropdownTokens = {
  // Padding
  contentPadding: 'var(--space-4)',
  itemPaddingX: 'var(--space-8)',
  itemPaddingY: 'var(--space-6)',

  // Border
  borderRadius: 'var(--radius-md)',
  borderWidth: 'var(--border-width-thin)',

  // Effects
  shadow: 'var(--shadow-dropdown)',
  transition: 'var(--transition-all)',

  // Gap
  gap: 'var(--gap-1)',

  // Min width
  minWidth: '220px',

  // Z-index
  zIndex: 'var(--z-dropdown)',
} as const;

/**
 * Tooltip component tokens
 */
export const tooltipTokens = {
  // Padding
  paddingX: 'var(--space-12)',
  paddingY: 'var(--space-6)',

  // Font
  fontSize: 'var(--text-xs)',
  fontWeight: 'var(--font-medium)',

  // Border
  borderRadius: 'var(--radius-md)',

  // Effects
  shadow: 'var(--shadow-sm)',

  // Max width
  maxWidth: '320px',

  // Z-index
  zIndex: 'var(--z-tooltip)',
} as const;

/**
 * Alert component tokens
 */
export const alertTokens = {
  // Padding
  padding: 'var(--space-16)',

  // Border
  borderRadius: 'var(--radius-lg)',
  borderWidth: 'var(--border-width-thin)',

  // Gap
  gap: 'var(--gap-12)',

  // Icon size
  iconSize: '20px',
} as const;

/**
 * Checkbox/Radio component tokens
 */
export const checkboxTokens = {
  // Size
  size: {
    sm: '16px',
    md: '20px',
    lg: '24px',
  },

  // Border
  borderRadius: 'var(--radius-sm)',
  borderWidth: 'var(--border-width-thin)',

  // Transition
  transition: 'var(--transition-colors)',
} as const;

export const radioTokens = {
  // Size
  size: {
    sm: '16px',
    md: '20px',
    lg: '24px',
  },

  // Border
  borderRadius: 'var(--radius-full)',
  borderWidth: 'var(--border-width-thin)',

  // Transition
  transition: 'var(--transition-colors)',
} as const;

/**
 * Switch component tokens
 */
export const switchTokens = {
  // Width & Height
  width: {
    sm: '36px',
    md: '44px',
    lg: '52px',
  },
  height: {
    sm: '20px',
    md: '24px',
    lg: '28px',
  },

  // Thumb size
  thumbSize: {
    sm: '16px',
    md: '20px',
    lg: '24px',
  },

  // Border
  borderRadius: 'var(--radius-full)',

  // Transition
  transition: 'var(--transition-transform)',
} as const;

/**
 * Tabs component tokens
 */
export const tabsTokens = {
  // List padding
  listPadding: 'var(--space-4)',
  listGap: 'var(--gap-4)',

  // Trigger padding
  triggerPaddingX: 'var(--space-12)',
  triggerPaddingY: 'var(--space-8)',

  // Font
  fontSize: 'var(--text-sm)',
  fontWeight: 'var(--font-medium)',

  // Border
  borderRadius: 'var(--radius-md)',

  // Transition
  transition: 'var(--transition-colors)',
} as const;

/**
 * Accordion component tokens
 */
export const accordionTokens = {
  // Trigger padding
  triggerPaddingX: 'var(--space-16)',
  triggerPaddingY: 'var(--space-16)',

  // Content padding
  contentPaddingX: 'var(--space-16)',
  contentPaddingY: 'var(--space-16)',

  // Font
  fontSize: 'var(--text-sm)',
  fontWeight: 'var(--font-medium)',

  // Transition
  transition: 'var(--transition-all)',

  // Icon size
  iconSize: '16px',
} as const;

/**
 * Avatar component tokens
 */
export const avatarTokens = {
  // Size
  size: {
    xs: '24px',
    sm: '32px',
    md: '40px',
    lg: '48px',
    xl: '64px',
    '2xl': '96px',
  },

  // Border
  borderRadius: 'var(--radius-full)',

  // Ring (for online status, etc.)
  ringWidth: '2px',
  ringOffset: '2px',
} as const;

/**
 * Table component tokens
 */
export const tableTokens = {
  // Cell padding
  cellPaddingX: 'var(--space-16)',
  cellPaddingY: 'var(--space-12)',

  // Header
  headerFontWeight: 'var(--font-semibold)',
  headerBorderWidth: 'var(--border-width-thick)',

  // Border
  borderWidth: 'var(--border-width-thin)',
} as const;

/**
 * Breadcrumb component tokens
 */
export const breadcrumbTokens = {
  // Gap
  gap: 'var(--gap-4)',

  // Font
  fontSize: 'var(--text-sm)',

  // Separator size
  separatorSize: '16px',
} as const;

/**
 * Pagination component tokens
 */
export const paginationTokens = {
  // Gap
  gap: 'var(--gap-2)',

  // Item size
  itemSize: '36px',

  // Border
  borderRadius: 'var(--radius-md)',

  // Font
  fontSize: 'var(--text-sm)',
  fontWeight: 'var(--font-medium)',
} as const;

/**
 * Skeleton component tokens
 */
export const skeletonTokens = {
  // Border radius
  borderRadius: 'var(--radius-md)',

  // Animation
  animationDuration: 'var(--duration-slower)',
} as const;

/**
 * Progress component tokens
 */
export const progressTokens = {
  // Height
  height: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },

  // Border radius
  borderRadius: 'var(--radius-full)',

  // Transition
  transition: 'var(--transition-transform)',
} as const;

/**
 * Slider component tokens
 */
export const sliderTokens = {
  // Track height
  trackHeight: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  },

  // Thumb size
  thumbSize: {
    sm: '16px',
    md: '20px',
    lg: '24px',
  },

  // Border radius
  borderRadius: 'var(--radius-full)',

  // Transition
  transition: 'var(--transition-transform)',
} as const;

/**
 * Toast component tokens
 */
export const toastTokens = {
  // Padding
  padding: 'var(--space-16)',

  // Border
  borderRadius: 'var(--radius-lg)',
  borderWidth: 'var(--border-width-thin)',

  // Effects
  shadow: 'var(--shadow-lg)',

  // Gap
  gap: 'var(--gap-12)',

  // Max width
  maxWidth: '400px',

  // Z-index
  zIndex: 'var(--z-toast)',

  // Animation duration
  animationDuration: 'var(--duration-medium)',
} as const;

/**
 * Combined component tokens export
 */
export const componentTokens = {
  button: buttonTokens,
  input: inputTokens,
  card: cardTokens,
  badge: badgeTokens,
  dialog: dialogTokens,
  dropdown: dropdownTokens,
  tooltip: tooltipTokens,
  alert: alertTokens,
  checkbox: checkboxTokens,
  radio: radioTokens,
  switch: switchTokens,
  tabs: tabsTokens,
  accordion: accordionTokens,
  avatar: avatarTokens,
  table: tableTokens,
  breadcrumb: breadcrumbTokens,
  pagination: paginationTokens,
  skeleton: skeletonTokens,
  progress: progressTokens,
  slider: sliderTokens,
  toast: toastTokens,
} as const;

// Type exports
export type ButtonTokens = typeof buttonTokens;
export type InputTokens = typeof inputTokens;
export type CardTokens = typeof cardTokens;
export type BadgeTokens = typeof badgeTokens;
export type DialogTokens = typeof dialogTokens;
export type DropdownTokens = typeof dropdownTokens;
export type TooltipTokens = typeof tooltipTokens;
export type AlertTokens = typeof alertTokens;
export type CheckboxTokens = typeof checkboxTokens;
export type RadioTokens = typeof radioTokens;
export type SwitchTokens = typeof switchTokens;
export type TabsTokens = typeof tabsTokens;
export type AccordionTokens = typeof accordionTokens;
export type AvatarTokens = typeof avatarTokens;
export type TableTokens = typeof tableTokens;
export type BreadcrumbTokens = typeof breadcrumbTokens;
export type PaginationTokens = typeof paginationTokens;
export type SkeletonTokens = typeof skeletonTokens;
export type ProgressTokens = typeof progressTokens;
export type SliderTokens = typeof sliderTokens;
export type ToastTokens = typeof toastTokens;
export type ComponentToken = keyof typeof componentTokens;
