# Reactants

Alles Reactants Components for React (@reactants/ui).

### Installation

`yarn add @reactants/ui`

### Usage

A dark theme is included out of the box.

To get, set and toggle the theme there is a single hook.

```typescript
import { useTheme } from "@reactants/ui";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={() => toggleTheme()}>{theme}</button>;
}
```
