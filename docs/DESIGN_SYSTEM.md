# OpenStock 设计系统文档

## 概述

本设计系统提供了一套统一的设计语言，确保整个应用的视觉一致性和开发效率。所有UI组件都应遵循这些设计规范。

## 目录

- [颜色系统](#颜色系统)
- [排版系统](#排版系统)
- [间距系统](#间距系统)
- [组件库](#组件库)
- [使用指南](#使用指南)

---

## 颜色系统

### 灰度色板

用于背景、文字和界面元素的主要颜色。

| 名称         | 值          | 用途        |
| ------------ | ----------- | ----------- |
| `gray-900` | `#050505` | 主背景色    |
| `gray-800` | `#141414` | 次要背景色  |
| `gray-700` | `#212328` | 卡片背景    |
| `gray-600` | `#30333A` | 边框/分隔线 |
| `gray-500` | `#9095A1` | 占位符文字  |
| `gray-400` | `#CCDADC` | 次要文字    |
| `gray-100` | `#F5F5F5` | 主要文字    |

### 品牌色

| 名称           | 值          | 用途                   |
| -------------- | ----------- | ---------------------- |
| `teal-500`   | `#0FEDBE` | 主要品牌色，按钮、链接 |
| `teal-400`   | `#0DD9AA` | 悬停状态               |
| `blue-600`   | `#5862FF` | 次要品牌色             |
| `yellow-400` | `#FDD458` | 强调色                 |
| `yellow-500` | `#E8BA40` | 强调色悬停态           |

### 语义色

| 名称           | 值          | 用途      |
| -------------- | ----------- | --------- |
| `teal-500`   | `#0FEDBE` | 成功/上涨 |
| `red-500`    | `#FF495B` | 错误/下跌 |
| `orange-500` | `#FF8243` | 警告      |
| `blue-600`   | `#5862FF` | 信息      |
| `purple-500` | `#D13BFF` | 特殊状态  |

### 使用示例

```tsx
import { colors } from '@/lib/design-system';

// 直接使用颜色值
<div style={{ backgroundColor: colors.background.primary }}>

// 或使用 Tailwind 类名
<div className="bg-gray-900 text-gray-100">
```

---

## 排版系统

### 字体家族

- **无衬线字体**: Geist Sans (默认)
- **等宽字体**: Geist Mono (代码)

### 字体大小

| 名称     | 大小 | 用途     |
| -------- | ---- | -------- |
| `xs`   | 12px | 标注文字 |
| `sm`   | 14px | 小号文字 |
| `base` | 16px | 正文     |
| `lg`   | 18px | 小标题   |
| `xl`   | 20px | 标题     |
| `2xl`  | 24px | 大标题   |
| `4xl`  | 36px | 页面标题 |

### 字重

- `normal` (400): 正文
- `medium` (500): 强调
- `semibold` (600): 小标题
- `bold` (700): 标题

### 使用示例

```tsx
import { Heading, Subheading, Body, Caption } from '@/components/common';

<Heading>页面标题</Heading>
<Subheading>章节标题</Subheading>
<Body>正文内容</Body>
<Caption>标注说明</Caption>
```

---

## 间距系统

基于 4px 网格系统：

| 值     | 大小 | 用途     |
| ------ | ---- | -------- |
| `1`  | 4px  | 最小间距 |
| `2`  | 8px  | 紧凑间距 |
| `3`  | 12px | 小间距   |
| `4`  | 16px | 默认间距 |
| `6`  | 24px | 中等间距 |
| `8`  | 32px | 大间距   |
| `12` | 48px | 超大间距 |

### 使用示例

```tsx
// Tailwind 类名
<div className="p-6 gap-4">  // padding: 24px, gap: 16px

// 设计系统
import { spacing } from '@/lib/design-system';
<div style={{ padding: spacing[6], gap: spacing[4] }}>
```

---

## 组件库

### Card 卡片组件

统一的卡片容器，支持三种变体：

**变体类型：**

- `base`: 基础卡片
- `elevated`: 带阴影的浮起卡片
- `interactive`: 可交互的渐变卡片

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/common';

<Card variant="base">
  <CardHeader>
    <CardTitle>标题</CardTitle>
  </CardHeader>
  <CardContent>
    内容
  </CardContent>
</Card>
```

### Container 容器组件

响应式容器，提供一致的最大宽度和内边距。

**尺寸：**

- `sm`: 48rem (768px)
- `md`: 64rem (1024px)
- `lg`: 80rem (1280px)
- `xl`: 96rem (1536px)
- `full`: 100%

```tsx
import { Container } from '@/components/common';

<Container size="xl">
  内容
</Container>
```

### Section 区块组件

页面区块，提供统一的垂直间距。

```tsx
import { Section, SectionHeader } from '@/components/common';

<Section spacing="md">
  <SectionHeader 
    title="区块标题" 
    description="区块描述"
  />
  {/* 内容 */}
</Section>
```

### States 状态组件

统一的加载、空状态和错误状态组件。

```tsx
import { LoadingState, EmptyState, ErrorState } from '@/components/common';

// 加载状态
<LoadingState message="加载中..." />

// 空状态
<EmptyState 
  title="暂无数据"
  description="还没有任何内容"
  icon={<StarIcon />}
/>

// 错误状态
<ErrorState 
  error="加载失败"
  onRetry={handleRetry}
/>
```

---

## 使用指南

### 1. 导入设计系统

```tsx
// 导入设计令牌
import { colors, typography, spacing, borderRadius } from '@/lib/design-system';

// 导入通用样式
import { commonStyles } from '@/lib/design-system';

// 导入组件
import { Card, Container, Section } from '@/components/common';
```

### 2. 创建新组件

遵循以下原则：

1. **优先使用通用组件**：尽量使用 `components/common/` 中的组件
2. **使用设计令牌**：颜色、间距等使用 `design-system.ts` 中定义的值
3. **保持一致性**：相同功能使用相同的组件和样式
4. **响应式设计**：使用 Tailwind 的响应式类名

### 3. 样式示例

```tsx
// 不推荐：硬编码颜色和尺寸
<div className="bg-[#141414] p-[24px] rounded-[12px]">

// 推荐：使用设计系统
<div className="bg-gray-800 p-6 rounded-lg">

// 推荐：使用通用组件
import { Card } from '@/components/common';
<Card variant="base">
```

### 4. 命名规范

- **组件文件**: PascalCase (例: `DashboardCard.tsx`)
- **工具函数**: camelCase (例: `getColorWithOpacity`)
- **常量**: UPPER_SNAKE_CASE (例: `MAX_WIDTH`)
- **CSS类名**: kebab-case (例: `card-header`)

### 5. 组件结构

```tsx
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { commonStyles } from '@/lib/design-system';

interface ComponentProps {
  children: ReactNode;
  variant?: 'default' | 'alternative';
  className?: string;
}

/**
 * 组件说明
 * @param children - 子元素
 * @param variant - 样式变体
 * @param className - 额外类名
 */
export function Component({ 
  children, 
  variant = 'default',
  className 
}: ComponentProps) {
  return (
    <div className={cn(
      commonStyles.card.base,
      variant === 'alternative' && 'custom-class',
      className
    )}>
      {children}
    </div>
  );
}
```

---

## 最佳实践

### 推荐做法

1. **统一使用设计系统**

   ```tsx
   import { Card } from '@/components/common';
   <Card variant="elevated">内容</Card>
   ```

2. **使用语义化颜色**

   ```tsx
   <p className="text-gray-100">主要文字</p>
   <p className="text-gray-400">次要文字</p>
   ```

3. **响应式间距**

   ```tsx
   <div className="p-6 md:p-8">  // 移动端 24px，桌面端 32px
   ```

4. **组件组合**

   ```tsx
   <Card>
     <CardHeader>
       <CardTitle>标题</CardTitle>
     </CardHeader>
     <CardContent>内容</CardContent>
   </Card>
   ```

### 避免做法

1. **硬编码颜色值**

   ```tsx
   // 不要这样
   <div className="bg-[#141414]">

   // 应该这样
   <div className="bg-gray-800">
   ```

2. **重复创建相同组件**

   ```tsx
   // 不要在每个文件中重复定义卡片
   // 使用统一的 Card 组件
   ```

3. **不一致的间距**

   ```tsx
   // 不要使用随意的间距值
   <div className="p-[23px]">

   // 使用标准间距
   <div className="p-6">
   ```

---

## 更新日志

### v1.0.0 (2025-01-08)

- 初始版本
- 创建完整的设计系统配置
- 定义颜色、排版、间距系统
- 创建通用组件库
- 编写设计系统文档

---

## 参考资源

- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [设计系统最佳实践](https://www.designsystems.com/)

---

**维护者**: OpenStock 开发团队
**最后更新**: 2025-01-08
