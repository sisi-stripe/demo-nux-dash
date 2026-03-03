# Refactoring Guide: Using Sail Icons & Typography Tokens

This guide shows you how to replace Figma-exported styles with your design system (Sail Icons and Typography tokens).

## What I've Already Refactored

### ✅ Breadcrumb Chevrons (using Sail Icons)
**Before:**
```tsx
function Icon() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="icon">
          <path d={svgPaths.p3cdeaa80} fill="var(--fill-0, #6C7688)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
```

**After:**
```tsx
import { Icon as SailIcon } from "../SailIcons";

function BreadcrumbChevron() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Breadcrumbs separator">
      <SailIcon name="chevronRight" size="xsmall" style={{ color: '#6C7688' }} />
    </div>
  );
}
```

### ✅ Breadcrumb Text (using Typography tokens)
**Before:**
```tsx
<div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#533afd] text-[12px] tracking-[-0.024px] whitespace-nowrap">
  <p className="leading-[16px]">Settings</p>
</div>
```

**After:**
```tsx
<p className="text-caption font-semibold text-[#533afd] whitespace-nowrap">
  Settings
</p>
```

### ✅ Page Title (using Typography tokens)
**Before:**
```tsx
<div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a2540] text-[28px] tracking-[0.38px] whitespace-nowrap" style={{ fontFeatureSettings: "\'lnum\', \'pnum\'" }}>
  <p className="leading-[36px]">Grow your business with Stripe Scale</p>
</div>
```

**After:**
```tsx
<h1 className="text-h2 text-[#0a2540] whitespace-nowrap">
  Grow your business with Stripe Scale
</h1>
```

### ✅ Product Names (using Typography tokens)
**Before:**
```tsx
<p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#353a44] text-[16px] tracking-[-0.31px]" style={{ fontFeatureSettings: "\'lnum\', \'pnum\'" }}>
  Payments
</p>
```

**After:**
```tsx
<p className="text-h6 text-[#353a44]">
  Payments
</p>
```

---

## How to Continue Refactoring

### 1. Replace Typography Styles

#### Find patterns like this:
```tsx
<p className="font-['SF_Pro_Text:Regular',sans-serif] text-[14px] leading-[20px] ...">
```

#### Replace with typography classes:
```tsx
<p className="text-label ...">  <!-- for 14px text -->
<p className="text-body ...">   <!-- for 15px text -->
<p className="text-caption ..."> <!-- for 12px text -->
<h1 className="text-h1 ...">    <!-- for large headings -->
<h2 className="text-h2 ...">    <!-- for 30px headings -->
<h3 className="text-h3 ...">    <!-- for 24px headings -->
```

#### Available Typography Classes:
- `.text-h1` - 36px heading
- `.text-h2` - 30px heading
- `.text-h3` - 24px heading
- `.text-h4` - 20px heading
- `.text-h5` - 18px heading
- `.text-h6` - 16px heading
- `.text-body` - 15px body text
- `.text-body-small` - 13px small text
- `.text-label` - 14px labels
- `.text-caption` - 12px captions

### 2. Replace Custom SVG Icons with Sail Icons

#### Find patterns like this:
```tsx
<div className="relative shrink-0 size-[16px]">
  <svg className="...">
    <path d={svgPaths.something} fill="..." />
  </svg>
</div>
```

#### Check if a Sail Icon exists:
Common Sail icon names include:
- `chevronRight`, `chevronLeft`, `chevronUp`, `chevronDown`
- `check`, `close`, `search`, `settings`
- `home`, `user`, `bell`, `mail`
- `arrowRight`, `arrowLeft`, `arrowUp`, `arrowDown`

#### Replace with Sail Icon:
```tsx
import { Icon as SailIcon } from "../SailIcons";

<SailIcon
  name="iconName"
  size="xsmall"  // xsmall, small, medium, large
  style={{ color: '#6C7688' }}
/>
```

### 3. Search & Replace Strategy

#### Step 1: Find all inline font styles
```bash
# In your terminal:
grep -n "font-\['SF_Pro" src/imports/StripeScale.tsx
```

#### Step 2: Identify the font size
Look for `text-[XXpx]` to match with typography class:
- `text-[12px]` → `.text-caption`
- `text-[14px]` → `.text-label`
- `text-[15px]` → `.text-body`
- `text-[16px]` → `.text-h6`
- `text-[18px]` → `.text-h5`
- `text-[20px]` → `.text-h4`
- `text-[24px]` → `.text-h3`
- `text-[28px]` or `text-[30px]` → `.text-h2`

#### Step 3: Replace systematically
Start from the top of the file and work down, replacing:
1. All heading text first
2. Then body text
3. Then labels/captions
4. Finally icons

---

## Quick Reference

### Typography Token Mapping

| Figma Export | Typography Class | Use Case |
|-------------|------------------|----------|
| `font-['SF_Pro_Display:Bold',sans-serif] text-[36px]` | `.text-h1` | Main page titles |
| `font-['SF_Pro_Display',sans-serif] text-[30px]` | `.text-h2` | Section headings |
| `font-['SF_Pro_Display',sans-serif] text-[24px]` | `.text-h3` | Subsection headings |
| `font-['SF_Pro_Text:Semibold',sans-serif] text-[16px]` | `.text-h6` | Card titles, labels |
| `font-['SF_Pro_Text',sans-serif] text-[15px]` | `.text-body` | Body text, paragraphs |
| `font-['SF_Pro_Text',sans-serif] text-[14px]` | `.text-label` | Form labels, small text |
| `font-['SF_Pro_Text',sans-serif] text-[12px]` | `.text-caption` | Captions, meta info |

### Sail Icon Sizes

| Size | Pixels | Use Case |
|------|--------|----------|
| `xsmall` | 12px | Breadcrumb chevrons, inline icons |
| `small` | 16px | Button icons, list icons |
| `medium` | 24px | Card icons, feature icons |
| `large` | 32px | Hero icons, large CTAs |

---

## Tips

1. **Keep the color classes**: When replacing typography, keep any custom color classes like `text-[#533afd]`
2. **Preserve spacing**: Keep layout classes like `gap-[8px]`, `p-[4px]` as they're part of the design
3. **Test incrementally**: After each batch of changes, check the app to make sure it looks correct
4. **Use find-and-replace**: VSCode's find/replace with regex can speed this up significantly

---

## File Location
The file you're refactoring: `src/imports/StripeScale.tsx`

Check your progress by viewing the app at: **http://localhost:5174/**
