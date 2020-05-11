# Reactants

Alles Reactants Components for React (@reactants/ui).

### Instalation

`yarn add @reactants/ui`

### Usage

To support theming you must wrap the Next.js `Application` with the `withTheme` HOC.

Here is a basic example:

```typescript
// _app.ts
import {withTheme} from "@reactants/ui"

export default withTheme((Component, pageProps) => <Component {...pageProps}>)
```

To access the current theme, there is a hook called `useTheme`.

To set the theme, there is a helper function called `setTheme`.

When you set the theme it will automatically be updated across all tabs with the help of an event lsitener.
