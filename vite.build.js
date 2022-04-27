import { resolve, parse } from "path";
import { readdirSync } from 'fs';
import { build } from 'vite';
const imports = [];

; (async () => {
    readdirSync(resolve(process.cwd(), './src')).forEach(file => {
        console.log(file);
        imports.push({
            name: parse(file).name,
            entry: resolve(process.cwd(), './src', file),
        });
    });
    for await (const item of imports) {
        console.log(item);
        await build({
            configFile: false,
            build: {
                emptyOutDir: false,
                lib: {
                    entry: item.entry,
                    name: item.name,
                    formats: ["es", "umd", "cjs", "iife"],
                    fileName: (format) => `${item.name}.${format}.js`
                }
            },

        });
    }

})();