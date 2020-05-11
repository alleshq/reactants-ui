module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-typescript",
    "storybook-css-modules-preset",
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
    "storybook-dark-mode/register",
  ],
};
