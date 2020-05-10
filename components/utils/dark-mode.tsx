const isServer = typeof window === "undefined";

export type Theme = "dark" | "light" | "system";

export function getTheme(): Theme {
  if (!isServer) {
    return (localStorage.getItem("reactants-theme") as Theme) ?? "light";
  }
  return "light";
}

export function setTheme(flag: Theme) {
  const ev = new StorageEvent("reactants-theme", {
    key: "reactants-theme",
    newValue: flag,
  });
  window.dispatchEvent(ev);

  switch (flag) {
    case "dark":
      window.localStorage.setItem("reactants-theme", "dark");
      document.querySelector("html")?.classList.add("dark-mode");
      break;
    case "system":
      const theme = window.matchMedia("(prefers-color-scheme: dark)");
      window.localStorage.setItem("reactants-theme", "system");
      if (theme) document.querySelector("html")?.classList.add("dark-mode");
      else document.querySelector("html")?.classList.remove("dark-mode");
    case "light":
      window.localStorage.removeItem("reactants-theme");
      document.querySelector("html")?.classList.remove("dark-mode");
      break;
  }
}
