import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcssImport from "postcss-import";
import postcssEnv from "postcss-preset-env";
import fs from "fs";
import nodeEval from "node-eval";
import path from "path";

const pkg = JSON.parse(
  fs.readFileSync(path.resolve("./package.json"), "utf-8")
);
const external = Object.keys(pkg.dependencies || {}).concat(
  Object.keys(pkg.peerDependencies || {})
);

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const sourceMap = true;

export function getModuleExports(moduleId) {
  const id = require.resolve(moduleId);
  const moduleOut = nodeEval(fs.readFileSync(id).toString(), id);
  let result = [];
  const excludeExports = /^(default|__)/;
  if (moduleOut && typeof moduleOut === "object") {
    result = Object.keys(moduleOut).filter(
      (name) => !excludeExports.test(name)
    );
  }

  return result;
}

export function getNamedExports(moduleIds) {
  const result = {};
  moduleIds.forEach((id) => {
    result[id] = getModuleExports(id);
  });
  return result;
}

export default {
  external,
  input: "components/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: sourceMap,
      preferConst: true,
    },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs({
      include: /node_modules/,
      namedExports: getNamedExports(["react", "react-dom", "classnames"]),
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
};
