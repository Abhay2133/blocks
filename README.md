# blocks

Formatting / class member sorting
--------------------------------

This repo includes example configs to automatically sort class members (static -> constructor -> public -> private -> etc.). Two supported approaches:

- Prettier plugin: installs `prettier-plugin-sort-class-members` and uses Prettier to reorder members when formatting.
- ESLint rule: installs `eslint-plugin-sort-class-members` and auto-fixes with ESLint (configured in `.eslintrc.cjs`).

Install the dev dependencies (choose one or both):

```bash
# Prettier plugin
npm install -D prettier prettier-plugin-sort-class-members

# ESLint + rule
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-sort-class-members
```

Then open the project in VS Code and accept the recommended extensions (Prettier, ESLint). You can run:

```bash
npm run lint        # runs eslint (non-failing)
npm run lint:fix    # attempts to fix and reorder class members
```
# blocks