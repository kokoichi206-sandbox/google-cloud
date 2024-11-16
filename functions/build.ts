import { build } from "esbuild";

const buildForFaaS = async ({
  entryPoint,
  outFile,
}: {
  entryPoint: string;
  outFile: string;
}) => {
  const res = await build({
    entryPoints: [entryPoint],
    outfile: outFile,
    bundle: true,
    sourcemap: "inline",
    platform: "node",
    format: "cjs",
  });
  if (res.errors.length > 0) {
    throw new Error(res.errors.map((e) => JSON.stringify(e)).join("\n"));
  }
  if (res.warnings.length > 0) {
    console.warn(res.warnings.map((w) => JSON.stringify(w)).join("\n"));
  }
  return res;
};

buildForFaaS({
  entryPoint: "src/index.ts",
  outFile: "dist/index.js",
});
