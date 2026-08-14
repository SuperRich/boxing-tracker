import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".webmanifest": "application/manifest+json", ".png": "image/png" };
http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  const path = normalize(url.pathname === "/" ? "/index.html" : url.pathname).replace(/^\.\.(\/|\\)/, "");
  try {
    const body = await readFile(join(root, path));
    res.writeHead(200, { "Content-Type": types[extname(path)] || "application/octet-stream", "Cache-Control": "no-cache" });
    res.end(body);
  } catch {
    res.writeHead(404); res.end("Not found");
  }
}).listen(5173, "127.0.0.1", () => console.log("Local: http://127.0.0.1:5173"));
