import fs from "fs";
import path from "path";

const root = "./containers/nginx/front/src";

function scan(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) scan(full);
    else if (/\.(jsx|tsx)$/.test(file)) {
      const content = fs.readFileSync(full, "utf8");
      const matches = [...content.matchAll(/>([^<{>\n]*[A-Za-z0-9À-ÿ][^<{>\n]*)</g)];
      if (matches.length)
        console.log(`\n📄 ${full}\n${matches.map(m => "  " + m[1]).join("\n")}`);
    }
  }
}

scan(root);
