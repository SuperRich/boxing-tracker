import { cp, mkdir, rm, writeFile } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/static", { recursive: true });
for (const file of ["index.html", "styles.css", "app.js", "manifest.webmanifest", "sw.js", "icon-192.png", "icon-512.png"]) {
  await cp(file, `dist/static/${file}`);
}
await mkdir("dist/server", { recursive: true });
await writeFile("dist/server/index.js", `export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n`);
await mkdir("dist/.openai", { recursive: true });
await cp(".openai/hosting.json", "dist/.openai/hosting.json");
console.log("Built Corner PWA to dist/static");
