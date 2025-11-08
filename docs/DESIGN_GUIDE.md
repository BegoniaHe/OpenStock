# 设计系统快速使用指南

## 快速开始

### 1. 导入组件

```tsx
// 导入通用组件
import { Card, CardHeader, CardTitle, CardContent } from '@/components/common';
import { Container, Section } from '@/components/common';
import { LoadingState, ErrorState } from '@/components/common';

// 导入设计令牌
import { colors, spacing, typography, commonStyles } from '@/lib/design-system';
```

### 2. 使用示例

#### 卡片组件

```tsx
<Card variant="base">
  <CardHeader>
    <CardTitle>标题</CardTitle>
  </CardHeader>
  <CardContent>
    内容
  </CardContent>
</Card>
```

#### 加载状态

```tsx
{loading && <LoadingState message="加载中..." />}
{error && <ErrorState error={error} onRetry={handleRetry} />}
```

#### 布局容器

```tsx
<Container size="xl">
  <Section spacing="md">
    <SectionHeader title="标题" description="描述" />
    {/* 内容 */}
  </Section>
</Container>
```

## 设计令牌

### 颜色

```tsx
// 背景色
className="bg-gray-900"     // 主背景
className="bg-gray-800"     // 次要背景
className="bg-gray-700"     // 卡片背景

// 文字色
className="text-gray-100"   // 主要文字
className="text-gray-400"   // 次要文字
className="text-gray-500"   // 三级文字

// 品牌色
className="text-teal-500"   // 主品牌色
className="text-yellow-400" // 强调色
```

### 间距

```tsx
className="p-4"   // 16px padding
className="p-6"   // 24px padding
className="p-8"   // 32px padding
className="gap-4" // 16px gap
```

### 圆角

```tsx
className="rounded-lg"  // 12px
className="rounded-xl"  // 16px
```

## 常用样式组合

```tsx
import { commonStyles } from '@/lib/design-system';

// 卡片
className={commonStyles.card.base}
className={commonStyles.card.interactive}

// 按钮
className={commonStyles.button.primary}
className={commonStyles.button.secondary}

// 文字
className={commonStyles.text.heading}
className={commonStyles.text.body}
```

## 完整文档

查看 [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) 了解完整的设计系统文档。
