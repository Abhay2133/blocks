import { BaseRenderer } from '@/types';

export class Block {
  renderer: BaseRenderer;
  isRunning = true;
  collection = new Map();

  constructor(renderer: BaseRenderer) {
    this.renderer = renderer;
  }

  start() {
    requestAnimationFrame(this.tick.bind(this));
  }

  add(block: Block) {}

  private tick(): void {
    if (!this.isRunning) return;
    requestAnimationFrame(this.tick.bind(this));

    for (const block of this.collection.values()) {
      this.renderer.render(block);
    }
  }
}
