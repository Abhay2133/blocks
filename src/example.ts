// Example file to demonstrate the automatic class member reordering
// This file intentionally has members in the wrong order to show how ESLint --fix works

class ExampleRenderer {
  // Properties should be first
  isActive = true;
  canvas: HTMLCanvasElement | null = null;
  // Constructor should come after properties but before methods
  constructor(canvas?: HTMLCanvasElement) {
    if (canvas) {
      this.canvas = canvas;
    }
  }
  // Static properties should come before static methods
  static defaultWidth = 800;
  static defaultHeight = 600;
  // Static methods before static properties - WRONG ORDER
  static getInstance() {
    return new ExampleRenderer();
  }
  // Methods before constructor and properties - WRONG ORDER
  render() {
    console.log('rendering...');
  }

  // More methods in wrong positions
  update() {
    return this;
  }

  // Private methods at the end
  private initCanvas() {
    // implementation here
  }
}
