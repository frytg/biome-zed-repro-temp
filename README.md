# biome-zed-repro-temp

## Setup

- Use Zed Preview > 1.33.2
- Install Biome Extension
- Have [Bun](https://bun.sh/docs/installation) installed, or use Node with `npm` or `yarn`
- Setup Dependencies (`bun install`)
- Make sure `~/.config/zed/settings.json` do not interfere with the test
- Tabs vs. Spaces should be visible through `"show_whitespaces": "all"`

## Expectations

- Zed should format JS, JSON, and Vue on save
- It should format with tabs (see biome.json and [Biome defaults](https://biomejs.dev/reference/configuration/#formatterindentstyle) - all "wrong" indentations should be visible in the editor through `"tab_size": 5`)
- Biome should use single quotes `'` instead of double quotes `"` for JS files

---

## Test 1

- Open [`test1.js`](./test1.js)
- Make a change and save
- Expected: File should be formatted with tabs, imports should be reorganized
- On my setup: nothing

Run this to actually see Biome in action (via CLI):

```sh
bunx biome format test1.js --write
```

This should format indentations with tabs and use single quotes.

---

## Test 2

- Open [`test2.vue`](./test2.vue)
- Make a change and save
- Expected: File should be formatted with tabs, `<template>` should be maintained ([biomejs.dev/internals/language-support/#html-super-languages-support](https://biomejs.dev/internals/language-support/#html-super-languages-support))
- On my setup: nothing

Run this to actually see Biome in action (via CLI):

```sh
bunx biome format test2.vue --write
```

This should format indentations with tabs and use single quotes; `<template>` should be maintained.

Note: You can test whether `biome.json` is picked up by the CLI by replacing `single` with `double` for `jsxQuoteStyle` and `quoteStyle` and running the command again.
