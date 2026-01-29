# Frontend Design Skill

| name | description | license |
|------|-------------|---------|
| frontend-design | Create professional, accessible HR & Payroll SaaS interfaces using React, Ant Design 5.x, and Tailwind CSS. Use this skill when building components, pages, dashboards, or forms for the WorkSimple HR platform. Generates cohesive, enterprise-grade UI that balances professionalism with Ethiopian cultural context. | MIT |

## Overview

This skill guides the creation of frontend interfaces for WorkSimple HR—a multi-tenant HR and Payroll SaaS platform built for Ethiopian businesses. The design language balances enterprise professionalism with warmth and accessibility, avoiding generic corporate aesthetics while maintaining clarity for complex HR workflows.

**User Context**: Components, pages, dashboards, forms, or data visualizations for HR management, payroll processing, employee self-service, attendance tracking, and reporting.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **UI Library**: Ant Design 5.x (primary component library)
- **Styling**: Tailwind CSS for custom styling and overrides
- **Animation**: Framer Motion for transitions and micro-interactions
- **Forms**: React Hook Form + Yup validation
- **State**: Redux Toolkit + RTK Query
- **Charts**: Chart.js + react-chartjs-2
- **i18n**: i18next (supports Amharic/English)

## Design Thinking

Before coding, consider:

### Purpose
- What HR/Payroll problem does this interface solve?
- Who uses it? (HR Admin, Payroll Officer, Finance Manager, Employee)
- What's the primary action or insight needed?

### Tone
For WorkSimple HR, balance these qualities:
- **Professional but Warm**: Enterprise-grade without being cold
- **Clean but Not Sterile**: Organized layouts with subtle personality
- **Data-Dense but Scannable**: Complex information presented clearly
- **Ethiopian Context**: Respect for local business practices and calendar system

### Role-Specific Considerations
| Role | Priority | Design Focus |
|------|----------|--------------|
| HR Admin | Efficiency | Quick actions, batch operations, status overviews |
| Payroll Officer | Accuracy | Clear numbers, validation feedback, audit trails |
| Finance Manager | Insights | Charts, summaries, export capabilities |
| Employee | Self-Service | Simple forms, clear status, mobile-friendly |

## Frontend Aesthetics Guidelines

### Typography
```css
/* Use Ant Design's typography with these overrides */
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace; /* For numbers/codes */
```

- Use Ant Design's `Typography` components for consistency
- Tabular numbers for financial data: `font-variant-numeric: tabular-nums`
- Ethiopian names may be longer—allow text wrapping gracefully

### Color & Theme

Use the existing Ant Design theme with WorkSimple brand colors:

```typescript
// Extend Ant Design theme
const theme = {
  token: {
    colorPrimary: '#1890ff',      // Primary actions
    colorSuccess: '#52c41a',       // Approved, Active, Paid
    colorWarning: '#faad14',       // Pending, Probation
    colorError: '#ff4d4f',         // Rejected, Errors
    colorInfo: '#1890ff',          // Information
    borderRadius: 8,
    fontFamily: 'Inter, -apple-system, sans-serif',
  },
};
```

**Status Color Mapping** (consistent across the app):
- `Active/Approved/Paid` → Green (`colorSuccess`)
- `Pending/Review/Probation` → Orange (`colorWarning`)
- `Inactive/Rejected/Failed` → Red (`colorError`)
- `Draft/New` → Blue (`colorInfo`)
- `Archived` → Gray

### Motion & Animation

Use Framer Motion for meaningful transitions:

```tsx
import { motion, AnimatePresence } from 'framer-motion';

// Page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Staggered list items
const containerVariants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

// Subtle hover states for cards
const cardHover = {
  scale: 1.02,
  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
};
```

**Animation Guidelines**:
- Page loads: Subtle fade + slide (200-300ms)
- Data updates: Highlight flash for changed values
- Form submissions: Loading states with skeleton screens
- Modals: Scale + fade (150ms)
- Avoid animation on data-heavy tables (performance)

### Layout Patterns

**Dashboard Layout**:
```
┌─────────────────────────────────────────────┐
│  Header (Logo, Org Selector, User Menu)     │
├──────────┬──────────────────────────────────┤
│          │                                  │
│  Sidebar │     Main Content Area            │
│  (Nav)   │     - Stat Cards (grid)          │
│          │     - Charts (responsive)        │
│          │     - Tables (scrollable)        │
│          │                                  │
└──────────┴──────────────────────────────────┘
```

**Form Layout**:
- Use Ant Design `Form` with `layout="vertical"` for clarity
- Group related fields with `Card` or `Collapse`
- Sticky action buttons at bottom for long forms
- Progressive disclosure for complex forms

**Table Layout**:
- Fixed header for scrollable tables
- Row actions in a dropdown (3+ actions) or inline (1-2 actions)
- Bulk selection for batch operations
- Expandable rows for details

### Component Patterns

**Stat Cards** (Dashboard):
```tsx
<Card className="hover:shadow-md transition-shadow">
  <Statistic
    title="Active Employees"
    value={21}
    prefix={<TeamOutlined />}
    valueStyle={{ color: '#52c41a' }}
  />
</Card>
```

**Data Tables**:
```tsx
<Table
  columns={columns}
  dataSource={data}
  pagination={{ pageSize: 10, showSizeChanger: true }}
  scroll={{ x: 'max-content' }}
  rowSelection={rowSelection} // For bulk actions
  size="middle"
/>
```

**Forms with Validation**:
```tsx
<Form layout="vertical" form={form} onFinish={onSubmit}>
  <Form.Item
    label="Employee Name"
    name="fullName"
    rules={[{ required: true, message: 'Please enter employee name' }]}
  >
    <Input placeholder="Enter full name" />
  </Form.Item>
</Form>
```

**Status Tags**:
```tsx
const statusConfig = {
  active: { color: 'success', text: 'Active' },
  pending: { color: 'warning', text: 'Pending' },
  inactive: { color: 'default', text: 'Inactive' },
  terminated: { color: 'error', text: 'Terminated' },
};

<Tag color={statusConfig[status].color}>
  {statusConfig[status].text}
</Tag>
```

### Ethiopian-Specific Considerations

**Calendar**:
- Support Ethiopian Calendar (ዓ.ም.) alongside Gregorian
- Use date picker that handles both calendar systems
- Display format: `DD/MM/YYYY` (Ethiopian) or `MMM DD, YYYY` (Gregorian)

**Currency**:
- Primary: Ethiopian Birr (ETB) with format: `ETB 1,234.56`
- Use `Intl.NumberFormat('en-ET', { style: 'currency', currency: 'ETB' })`

**Names**:
- Ethiopian names: First Name + Father's Name + Grandfather's Name
- Allow for longer name fields
- Search should handle all name parts

**Language**:
- Support Amharic (አማርኛ) and English
- RTL not needed (Amharic is LTR)
- Use i18next for translations

## Anti-Patterns to Avoid

❌ **Generic Enterprise Aesthetics**:
- Avoid cold, sterile gray interfaces
- Don't use generic stock icons without context
- Avoid overly complex navigation structures

❌ **Poor Data Density**:
- Don't spread simple data across multiple pages
- Avoid excessive whitespace in data tables
- Don't hide critical information behind clicks

❌ **Inconsistent Patterns**:
- Don't mix different button styles for same actions
- Avoid inconsistent status color usage
- Don't use different date formats on same screen

❌ **Performance Issues**:
- Don't animate large data tables
- Avoid loading full datasets when pagination exists
- Don't use heavy images in frequently accessed views

## File Structure Convention

```
src/features/{feature-name}/
├── api/                    # RTK Query endpoints
│   └── {feature}.api.ts
├── component/              # React components
│   ├── {Feature}List.tsx
│   ├── {Feature}Form.tsx
│   └── {Feature}Detail.tsx
├── page/                   # Page components
│   └── {Feature}Page.tsx
├── store/                  # Redux slices
│   └── {feature}.slice.ts
├── route/                  # Route definitions
│   └── {feature}.route.tsx
└── {feature}.endpoint.ts   # API endpoint constants
```

## Quick Reference

### Common Imports
```tsx
import {
  Button, Card, Table, Form, Input, Select,
  DatePicker, Tag, Statistic, Modal, message
} from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
```

### Tailwind Utilities (Common)
```css
/* Cards */
.card-hover { @apply hover:shadow-lg transition-shadow duration-200; }

/* Status badges */
.status-active { @apply bg-green-100 text-green-800; }
.status-pending { @apply bg-orange-100 text-orange-800; }
.status-inactive { @apply bg-gray-100 text-gray-600; }

/* Data density */
.table-compact { @apply text-sm leading-tight; }
```

## Key Principles

1. **Clarity over Cleverness** — HR data is sensitive; prioritize readability
2. **Consistency is Trust** — Same patterns build user confidence
3. **Performance is UX** — Fast load times matter for daily-use tools
4. **Mobile Awareness** — Employee portal must work on phones
5. **Accessibility First** — Support keyboard navigation and screen readers
6. **Ethiopian Context** — Respect local practices without limiting functionality
