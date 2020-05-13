# Reactants

Alles Reactants Components for React (@reactants/ui).

### Installation

`yarn add @reactants/ui`

### Usage

A dark theme is included out of the box.

To get, set and toggle the theme there is a single hook.

```tsx
import { useTheme } from "@reactants/ui";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={() => toggleTheme()}>{theme}</button>;
}
```

Furthermore, for theme to work correctly you must include `<ThemeScript />` in your document's `<head>`.

In Next.js this can be done by editing `_document.tsx`.
