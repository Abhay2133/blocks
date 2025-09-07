<!-- Purpose: concise guidance for AI coding agents working on the `blocks` playground -->

# Copilot instructions — blocks playground

This file contains focused, actionable knowledge for AI coding agents to be productive in this repository.

- Quick start (what I will do first):
  1. Install deps (npm install) and run dev server (npm run dev) to load the app in Vite.

2.  Open `src/index.ts`, `src/core.ts`, `src/renderer.ts`, and `src/types.ts` to understand core abstractions.

Big picture

- Purpose: a small TypeScript playground that models "blocks" and pluggable renderers. The code is meant to be run in the browser via Vite.
- Major components:
  - types: `src/types.ts` — central data shapes and `BaseRenderer` abstract class.
  - core: `src/core.ts` — `Block` class that owns a `renderer`, maintains a Map collection, and drives a requestAnimationFrame loop.
  - renderers: `src/renderer.ts` (re-exports) and `src/renderer/canvas_renderer.ts` — CanvasRenderer extends `BaseRenderer` and is responsible for drawing and managing block instances.
  - entry: `src/index.ts` — public exports (e.g., `Block`, `DefaultRenderer`).

Key patterns and conventions (project-specific)

- Path alias: the project uses `@` mapped to `/src` (see `vite.config.ts` and `tsconfig.json`). Use `@/...` imports.
- Renderer contract: implementers extend `BaseRenderer` and must provide these methods/signatures: `render(block: Block): BaseRenderer`, `run(): BaseRenderer`, `add(block: Block): Block`, `update(id: string, block: Partial<Block>): Block | undefined`, `remove(id: string): Block | undefined`.
- Lifecycle loop: `Block` and renderers use `requestAnimationFrame` tick loops guarded by `isRunning` flags. Mutations to renderer collections should be safe to perform from the tick (use Map methods).
- Data shapes: `Block` shape is in `src/types.ts` — fields include `type` (rect|circle|...), `pos: Vec2`, `size`, and `draggable`. Prefer using these types when editing renderer code.
- Return values: many renderer methods are designed to be chainable or return the affected Block — follow existing signatures.

Files to inspect first (high value)

- `src/types.ts` — canonical types and abstract renderer API.
- `src/core.ts` — Block loop, collection management, and lifecycle.
- `src/renderer/canvas_renderer.ts` — concrete renderer scaffold (many methods currently throw). Good entrypoint for implementation tasks.
- `src/index.ts` — small but shows the public surface exported by the package.
- `package.json` — npm scripts and dev dependencies.

Build / test / debug commands

- Start dev server: `npm run dev` (Vite). Use browser to inspect canvas and console logs.
- Build: `npm run build` and preview: `npm run preview`.
- Lint/format: `npm run lint`, `npm run lint:fix`, `npm run format`.

Repository-specific notes & examples

- Many renderer methods in `src/renderer/canvas_renderer.ts` are intentionally unimplemented and throw errors — implement these to make the renderer functional. Look for:
  - add(block) -> should store in `this.blocks` Map and return the added Block.
  - render(block) -> should draw using `this.canvas.getContext('2d')` and the Block fields (`type`, `pos`, `size`).
  - update(id, partial) -> merge partial into stored block and return the updated block.

- Example usage pattern (follow types in `src/types.ts` and the `Block` abstraction): create a renderer instance (pass canvas element), add Blocks via `renderer.add(...)`, and call `renderer.run()` to start the loop.

Edge notes for agents

- Don't change the path alias (`@`) — editors and build rely on it.
- Preserve method signatures declared in `src/types.ts` when implementing renderers so callers in `core` and elsewhere stay compatible.
- Keep changes minimal and local when adding features; this is a small playground repo without tests or CI.

If anything here is unclear or you'd like me to expand a section (for example, add a small implementation of `CanvasRenderer.render`), tell me which area to expand.
