#!/usr/bin/env node

const { createESLint } = require('..');

(async () => {
    const lint = await createESLint();
    const results = await lint('*.js');
    console.log(results);
})();