import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const standaloneRoot = path.join(projectRoot, ".next", "standalone");
const standaloneNextRoot = path.join(standaloneRoot, ".next");

if (!existsSync(standaloneRoot) || !existsSync(standaloneNextRoot)) {
  console.error(
    'Standalone build output is missing. Run "npm run build" first.'
  );
  process.exit(1);
}

const copyTargets = [
  {
    source: path.join(projectRoot, ".next", "static"),
    destination: path.join(standaloneNextRoot, "static"),
  },
  {
    source: path.join(projectRoot, "public"),
    destination: path.join(standaloneRoot, "public"),
  },
];

for (const { source, destination } of copyTargets) {
  if (!existsSync(source)) {
    continue;
  }

  rmSync(destination, { recursive: true, force: true });
  mkdirSync(path.dirname(destination), { recursive: true });
  cpSync(source, destination, { recursive: true });

  console.log(`Copied ${path.relative(projectRoot, source)} -> ${path.relative(projectRoot, destination)}`);
}
