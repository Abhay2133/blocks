// Test file with intentionally wrong class member ordering
class TestClass {
  isRunning = false;
  // property should come before method
  blocks: Map<string, number> = new Map();
  constructor(name: string) {
    console.log(`Creating ${name}`);
  }
  static version = '1.0.0';
  static getVersion() {
    return TestClass.version;
  }
  // This should be reordered by ESLint
  run() {
    console.log('running');
  }

  private tick() {
    console.log('tick');
  }
}
