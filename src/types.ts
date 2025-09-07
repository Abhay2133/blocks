export type BlockType = 'rect' | 'circle' | 'line' | 'curve';

export type Vec2 = [number, number];

export type Block = {
  type: BlockType;
  pos: Vec2;
  size: Vec2 | number;
  draggable: boolean;
};

export abstract class BaseRenderer {
  abstract render(block: Block): BaseRenderer;
  abstract run(): BaseRenderer;
  abstract add(block: Block): Block;
  abstract update(id: string, block: Partial<Block>): Block | undefined;
  abstract remove(id: string): Block | undefined;
}
