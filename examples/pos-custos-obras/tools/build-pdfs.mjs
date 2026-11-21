// Gera um PDF de apostila por disciplina a partir de data/mNN.js
// Uso: node examples/pos-custos-obras/tools/build-pdfs.mjs
import { readdirSync, readFileSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
import vm from "node:vm";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data"), outDir = path.join(root, "pdfs");
mkdirSync(outDir, { recursive: true });

const ctx = { window: {} };
vm.createContext(ctx);
for (const f of readdirSync(dataDir).filter(f => /^m\d+\.js$/.test(f)).sort())
  vm.runInContext(readFileSync(path.join(dataDir, f), "utf8"), ctx, { filename: f });
const mods = ctx.window.CURRICULUM.sort((a, b) => a.id - b.id);

const esc = s => String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const css = `body{font:11.5pt/1.5 Georgia,serif;color:#111;margin:0}h1{font:700 20pt system-ui;margin:0 0 4pt}h2{font:700 13pt system-ui;margin:16pt 0 4pt;color:#0b3d75}
.meta{font:10pt system-ui;color:#555;margin-bottom:12pt}table{border-collapse:collapse;width:100%}td,th{border:1px solid #999;padding:4pt 6pt;font-size:10pt;text-align:left}
.box{border:1px solid #999;border-left:4pt solid #0b5cab;padding:6pt 10pt;margin:12pt 0;font-size:10.5pt;page-break-inside:avoid}
.foot{font:9pt system-ui;color:#666;margin-top:18pt;border-top:1px solid #ccc;padding-top:6pt}`;

const browser = await chromium.launch();
const page = await browser.newPage();
for (const m of mods) {
  const html = `<!doctype html><meta charset="utf-8"><style>${css}</style>
  <h1>${esc(m.titulo)}</h1><div class="meta">Disciplina ${m.id} de ${mods.length} · ${m.horas} h · Especialização em Custos e Controle de Obras (curso livre)</div>
  <h2>Ementa</h2><ul>${m.ementa.map(e => `<li>${esc(e)}</li>`).join("")}</ul>
  ${m.texto}
  <div class="box"><b>Atividade prática.</b> ${esc(m.pratica)}</div>
  <div class="foot">Material de apoio ao estudo. Valores, alíquotas, limites e normas citados devem ser confirmados na fonte vigente antes de uso profissional.</div>`;
  await page.setContent(html, { waitUntil: "load" });
  const file = path.join(outDir, `modulo-${String(m.id).padStart(2, "0")}.pdf`);
  await page.pdf({ path: file, format: "A4", margin: { top: "20mm", bottom: "20mm", left: "20mm", right: "20mm" }, printBackground: true });
  console.log("ok", path.relative(root, file));
}
await browser.close();
