import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const pkg = require("./package.json");
const tsconfig = require("./tsconfig.json");

const outDir = tsconfig.compilerOptions.outDir;

export default {
  input: "src/index.ts",
  output: [
    {
      file: `${outDir}/${pkg.main}`,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: `${outDir}/${pkg.module}`,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: "src/variables.scss",
          dest: outDir,
          rename: "variables.scss",
        },
        {
          src: "src/typography.scss",
          dest: outDir,
          rename: "typography.scss",
        },
      ],
    }),
  ],
};
