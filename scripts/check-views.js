import {readFileSync, readdirSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import ejs from 'ejs';

const viewsDirectory = fileURLToPath(new URL('../src/views/', import.meta.url));
const views = readdirSync(viewsDirectory, {recursive: true}).filter((file) =>
  file.endsWith('.ejs'),
);

for (const view of views) {
  const filename = path.join(viewsDirectory, view);
  ejs.compile(readFileSync(filename, 'utf8'), {filename});
}

console.log(`EJS syntax checked: ${views.length} templates.`);
