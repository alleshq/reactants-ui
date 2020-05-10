import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcssImport from "postcss-import";
import postcssEnv from "postcss-preset-env";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
};

const globalModules = Object.keys(globals);

const sourceMap = true;

export default {
  input: "components/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "iife",
      globals,
      sourcemap: sourceMap,
      preferConst: true,
    },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs({
      include: "**/node_modules/**",
      namedExports: {},
    }),
    babel({
      sourceMap,
      extensions,
      include: ["components/**/*"],
      exclude: ["node_modules/**", "**/*.css"],
      presets: [
        "@babel/preset-typescript",
        ["@babel/preset-react", { useBuiltIns: true }],
        "@babel/preset-env",
      ],
      plugins: ["styled-jsx/babel"],
    }),
    postcss({
      plugins: [postcssImport(), postcssEnv()],
      namedExports: true,
      modules: {
        generateScopedName: "[folder]_[local]-[hash:base64:5]",
      },
      sourceMap,
      configFile: false,
      extract: false,
      preserveModules: true,
    }),
  ],
  external: (id) => globalModules.includes(id),
};
