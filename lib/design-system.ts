/**
 * OpenStock Design System
 * 
 * 统一的设计语言配置，包含颜色、字体、间距、圆角等设计令牌
 * 所有组件应使用此配置以保持一致的视觉风格
 */

// ============= 颜色系统 =============

export const colors = {
  // 灰度色板 (主要背景和文字颜色)
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#CCDADC',  // 次要文字
    500: '#9095A1',  // 占位符
    600: '#30333A',  // 边框/分隔
    700: '#212328',  // 卡片背景
    800: '#141414',  // 次要背景
    900: '#050505',  // 主背景
  },

  // 品牌色 (主要操作和强调)
  brand: {
    primary: '#0FEDBE',      // 青绿色 - 主要品牌色
    primaryHover: '#0DD9AA', // 主色悬停态
    secondary: '#5862FF',    // 蓝色 - 次要品牌色
    accent: '#FDD458',       // 黄色 - 强调色
    accentHover: '#E8BA40',  // 强调色悬停态
  },

  // 语义色 (状态和反馈)
  semantic: {
    success: '#0FEDBE',   // 成功/上涨
    error: '#FF495B',     // 错误/下跌
    warning: '#FF8243',   // 警告
    info: '#5862FF',      // 信息
    purple: '#D13BFF',    // 特殊状态
  },

  // 文字颜色
  text: {
    primary: '#F5F5F5',    // 主要文字 (gray-100)
    secondary: '#CCDADC',  // 次要文字 (gray-400)
    tertiary: '#9095A1',   // 三级文字 (gray-500)
    disabled: '#30333A',   // 禁用文字 (gray-600)
    inverse: '#050505',    // 反色文字 (在浅色背景上)
  },

  // 背景颜色
  background: {
    primary: '#050505',    // 主背景 (gray-900)
    secondary: '#141414',  // 次要背景 (gray-800)
    tertiary: '#212328',   // 三级背景 (gray-700)
    elevated: '#30333A',   // 浮起背景 (gray-600)
  },

  // 边框颜色
  border: {
    default: '#141414',    // 默认边框 (gray-800)
    subtle: '#212328',     // 微弱边框 (gray-700)
    strong: '#30333A',     // 强边框 (gray-600)
    focus: '#0FEDBE',      // 聚焦边框
  },
} as const;

// ============= 字体系统 =============

export const typography = {
  // 字体家族
  fontFamily: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },

  // 字体大小
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },

  // 字体粗细
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // 行高
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },
} as const;

// ============= 间距系统 =============

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
} as const;

// ============= 圆角系统 =============

export const borderRadius = {
  none: '0',
  sm: '0.25rem',    // 4px
  base: '0.5rem',   // 8px
  md: '0.625rem',   // 10px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// ============= 阴影系统 =============

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  glow: '0 0 20px rgba(15, 237, 190, 0.1)',
  glowYellow: '0 0 20px rgba(253, 212, 88, 0.1)',
} as const;

// ============= 过渡动画 =============

export const transitions = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;

// ============= 断点系统 =============

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============= Z-Index 层级 =============

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500,
} as const;

// ============= 组件变体配置 =============

export const components = {
  // 卡片组件变体
  card: {
    variants: {
      default: {
        background: colors.background.secondary,
        border: colors.border.default,
        borderRadius: borderRadius.lg,
        padding: spacing[6],
      },
      elevated: {
        background: colors.background.tertiary,
        border: colors.border.subtle,
        borderRadius: borderRadius.lg,
        padding: spacing[6],
        shadow: shadows.md,
      },
      interactive: {
        background: `linear-gradient(to bottom right, ${colors.background.primary}, ${colors.background.secondary})`,
        border: colors.border.default,
        borderRadius: borderRadius.xl,
        padding: spacing[6],
        hoverBorder: colors.border.subtle,
        hoverShadow: shadows.glowYellow,
      },
    },
  },

  // 按钮组件变体
  button: {
    variants: {
      primary: {
        background: colors.brand.primary,
        color: colors.text.inverse,
        hoverBackground: colors.brand.primaryHover,
      },
      secondary: {
        background: 'transparent',
        color: colors.text.primary,
        border: colors.border.strong,
        hoverBackground: colors.background.tertiary,
      },
      accent: {
        background: colors.brand.accent,
        color: colors.text.inverse,
        hoverBackground: colors.brand.accentHover,
      },
      ghost: {
        background: 'transparent',
        color: colors.text.secondary,
        hoverBackground: colors.background.tertiary,
      },
    },
    sizes: {
      sm: {
        height: '2rem',      // 32px
        padding: `${spacing[2]} ${spacing[3]}`,
        fontSize: typography.fontSize.sm,
      },
      base: {
        height: '2.5rem',    // 40px
        padding: `${spacing[3]} ${spacing[4]}`,
        fontSize: typography.fontSize.base,
      },
      lg: {
        height: '3rem',      // 48px
        padding: `${spacing[4]} ${spacing[6]}`,
        fontSize: typography.fontSize.lg,
      },
    },
  },

  // 输入框组件变体
  input: {
    default: {
      background: colors.background.secondary,
      border: colors.border.strong,
      color: colors.text.primary,
      placeholder: colors.text.tertiary,
      focusBorder: colors.border.focus,
      height: '3rem',  // 48px
      padding: spacing[3],
      borderRadius: borderRadius.lg,
    },
  },

  // 容器组件
  container: {
    maxWidth: '1536px',  // 2xl
    padding: {
      mobile: spacing[4],
      tablet: spacing[6],
      desktop: spacing[8],
    },
  },

  // 页面布局
  page: {
    padding: {
      mobile: spacing[6],
      tablet: spacing[8],
      desktop: spacing[8],
    },
    gap: spacing[6],
  },

  // Section 组件
  section: {
    padding: {
      mobile: spacing[6],
      desktop: spacing[8],
    },
    gap: spacing[4],
  },
} as const;

// ============= 工具函数 =============

/**
 * 获取响应式间距
 */
export function getResponsiveSpacing(mobile: keyof typeof spacing, desktop: keyof typeof spacing) {
  return {
    mobile: spacing[mobile],
    desktop: spacing[desktop],
  };
}

/**
 * 获取颜色透明度变体
 */
export function getColorWithOpacity(color: string, opacity: number) {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
}

/**
 * 生成渐变背景
 */
export function createGradient(from: string, to: string, direction: 'to-br' | 'to-r' | 'to-b' = 'to-br') {
  return `linear-gradient(${direction.replace('to-', 'to ')}, ${from}, ${to})`;
}

// ============= 常用样式组合 =============

export const commonStyles = {
  // 卡片样式
  card: {
    base: `rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg`,
    elevated: `rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-xl`,
    interactive: `rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-6 transition-all duration-300 hover:border-gray-700 hover:shadow-xl hover:shadow-yellow-500/10`,
  },

  // 文字样式
  text: {
    heading: `text-gray-100 font-bold`,
    subheading: `text-gray-200 font-semibold`,
    body: `text-gray-400`,
    caption: `text-gray-500 text-sm`,
  },

  // 按钮样式
  button: {
    primary: `bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium rounded-lg transition-colors`,
    secondary: `border border-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg transition-colors`,
    ghost: `hover:bg-gray-800 text-gray-400 rounded-lg transition-colors`,
  },

  // 输入框样式
  input: {
    base: `h-12 px-3 py-3 text-white bg-gray-800 border border-gray-600 rounded-lg focus:border-teal-500 focus:ring-0 transition-colors`,
  },

  // 链接样式
  link: {
    base: `text-teal-500 hover:text-teal-400 transition-colors`,
    subtle: `text-gray-400 hover:text-teal-500 transition-colors`,
  },

  // 加载状态
  loading: {
    spinner: `animate-spin rounded-full border-b-2 border-yellow-500`,
  },
} as const;

// ============= 导出类型 =============

export type ColorPalette = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Shadows = typeof shadows;
export type Transitions = typeof transitions;
export type Breakpoints = typeof breakpoints;
export type ZIndex = typeof zIndex;
export type Components = typeof components;
