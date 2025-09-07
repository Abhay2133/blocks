import { BaseRenderer, Block, Vec2 } from '@/types';

export class CanvasRenderer extends BaseRenderer {
  isRunning = false;
  blocks: Map<string, Block> = new Map();
  canvas: HTMLCanvasElement = null as unknown as HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, dimension: Vec2 = [800, 600]) {
    super();
    this.canvas = canvas;
    this.setDimension(dimension);
    this.blocks = new Map();
  }

  render(block: Block): BaseRenderer {
    throw new Error('Method not implemented.');
  }

  add(block: Block): Block {
    throw new Error('Method not implemented.');
  }

  update(id: string, block: Partial<Block>): Block | undefined {
    throw new Error('Method not implemented.');
  }

  remove(id: string): Block | undefined {
    throw new Error('Method not implemented.');
  }

  run() {
    this.isRunning = true;
    requestAnimationFrame(this.tick.bind(this));
    return this;
  }

  private tick() {
    if (!this.isRunning) return;
    requestAnimationFrame(this.tick.bind(this));
    return this;
  }

  private setDimension(dimension: Vec2) {
    const [x, y] = dimension;
    this.canvas.height = y;
    this.canvas.width = x;
    this.canvas.style.height = `${y}px`;
    this.canvas.style.width = `${x}px`;
  }
}
