# Icon Replacement Examples

This guide provides specific examples of how to replace Figma-exported SVG icons with Sail icons.

## Example 1: Replace Shield Icon with Sail Icon

### Before (Figma Export):
```tsx
function Frame11() {
  return (
    <div className="bg-[#eafcdd] content-stretch flex items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="shield">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="NextIcon--shield">
            <path clipRule="evenodd" d={svgPaths.p2a7b88c0} fill="var(--fill-0, #1C5A0D)" fillRule="evenodd" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}
```

### After (Sail Icon):
```tsx
import { Icon as SailIcon } from "../SailIcons";

function Frame11() {
  return (
    <div className="bg-[#eafcdd] content-stretch flex items-center overflow-clip p-[4px] relative rounded-[4px] shrink-0">
      <SailIcon name="shield" size="small" style={{ color: '#1C5A0D' }} />
    </div>
  );
}
```

---

## Example 2: Replace Chevron in Buttons

### Before:
```tsx
<div className="relative shrink-0 size-[12px]" data-name="arrow">
  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
    <path d={svgPaths.someArrow} fill="#FFFFFF" />
  </svg>
</div>
```

### After:
```tsx
import { Icon as SailIcon } from "../SailIcons";

<SailIcon name="arrowRight" size="xsmall" style={{ color: '#FFFFFF' }} />
```

---

## How to Find Which Sail Icon to Use

### Step 1: Identify the Icon Type
Look at the `data-name` attribute in Figma exports:
- `data-name="shield"` → Try `name="shield"`
- `data-name="wallet"` → Try `name="creditCard"` or `name="wallet"`
- `data-name="support"` → Try `name="help"` or `name="info"`
- `data-name="arrow"` → Try `name="arrowRight"`
- `data-name="chevron"` → Try `name="chevronRight"`

### Step 2: Check Sail Icons Documentation
To see all available Sail icons, you can:

1. **Check the Sail Design System** (internal Stripe resource)
2. **Browse the SailIcons.jsx file** to see all icon names
3. **Test in the browser console**:
```javascript
// In browser console
import { Icon } from './SailIcons';
// Then try different icon names
```

### Step 3: Common Sail Icon Names

| Category | Icon Names |
|----------|-----------|
| **Navigation** | `home`, `menu`, `close`, `back`, `forward` |
| **Arrows** | `arrowUp`, `arrowDown`, `arrowLeft`, `arrowRight` |
| **Chevrons** | `chevronUp`, `chevronDown`, `chevronLeft`, `chevronRight` |
| **Actions** | `check`, `plus`, `minus`, `edit`, `delete`, `trash` |
| **Status** | `info`, `warning`, `error`, `success`, `help` |
| **Communication** | `mail`, `message`, `notification`, `bell` |
| **Finance** | `creditCard`, `dollar`, `receipt`, `invoice` |
| **User** | `user`, `users`, `profile`, `account` |
| **Security** | `lock`, `unlock`, `shield`, `eye`, `eyeOff` |
| **Media** | `download`, `upload`, `file`, `image`, `video` |
| **Time** | `calendar`, `clock`, `schedule` |
| **Misc** | `search`, `filter`, `settings`, `star`, `heart` |

---

## Replacement Strategy

### When to Replace with Sail Icons:
✅ **Replace when:**
- The icon represents a standard UI element (arrows, chevrons, close buttons)
- A Sail icon exists with the same meaning
- The icon is used for navigation or actions

❌ **Keep Figma SVG when:**
- The icon is product-specific (Stripe product logos)
- The icon has custom branding or unique styling
- No equivalent Sail icon exists

---

## Pattern to Follow

### 1. Original Figma Icon Component
```tsx
function CustomIconComponent() {
  return (
    <div className="bg-[color] p-[4px] rounded-[4px]">
      <div className="size-[16px]" data-name="iconName">
        <svg>
          <path d={svgPaths.xxx} fill="color" />
        </svg>
      </div>
    </div>
  );
}
```

### 2. Refactored with Sail Icon
```tsx
import { Icon as SailIcon } from "../SailIcons";

function CustomIconComponent() {
  return (
    <div className="bg-[color] p-[4px] rounded-[4px] flex items-center justify-center">
      <SailIcon
        name="iconName"
        size="small"
        style={{ color: 'color' }}
      />
    </div>
  );
}
```

### Key Changes:
1. **Import SailIcon** at the top
2. **Remove the SVG wrapper** div
3. **Replace with SailIcon component**
4. **Match the color** from the original `fill` attribute
5. **Choose appropriate size**: xsmall (12px), small (16px), medium (24px), large (32px)
6. **Add flex centering** if needed: `flex items-center justify-center`

---

## Quick Test

After replacing icons, test in the browser:

1. Check that the icon appears
2. Verify the size matches the original
3. Confirm the color is correct
4. Test any hover/click interactions

---

## Need Help?

If you're unsure which Sail icon to use:
1. Look for the closest match by name
2. Try variations (e.g., `creditCard` vs `wallet` vs `payment`)
3. Check the original icon's `data-name` attribute for clues
4. When in doubt, keep the original SVG

---

## File Location
Main component: `src/imports/StripeScale.tsx`
View changes: **http://localhost:5174/**
