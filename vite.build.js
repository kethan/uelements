const { resolve, parse } = require("path");
const fs = require('fs');
const { build } = require('vite');
const imports = [];

; (async () => {
    fs.readdirSync(resolve(__dirname, './src')).forEach(file => {
        console.log(file);
        imports.push({
            name: parse(file).name,
            entry: resolve(__dirname, './src', file),
        });
    });
    for await (const item of imports) {
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