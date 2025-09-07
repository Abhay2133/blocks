# Blocks

## Linting and Formatting Setup

This project includes ESLint and Prettier configuration for TypeScript development with VS Code integration.

### Features

- **ESLint**: Configured with TypeScript support and class member sorting
- **Prettier**: Code formatting with consistent style rules  
- **VS Code Integration**: Format on save and keyboard shortcuts
- **Class Member Ordering**: Automatic reordering of class members

### Scripts

```bash
# Lint TypeScript files
npm run lint

# Lint and automatically fix issues  
npm run lint:fix

# Format code with Prettier
npm run format

# Check if code is formatted correctly
npm run format:check

# Run both lint:fix and format together
npm run lint:format
```

### VS Code Integration

#### Automatic Formatting
- Files are automatically formatted on save
- ESLint fixes are applied on save

#### Keyboard Shortcut
- **`Ctrl + Shift + I`**: Run both ESLint --fix and Prettier formatting

#### Recommended Extensions
- ESLint
- Prettier - Code formatter
- TypeScript

### Class Member Ordering

The ESLint configuration automatically sorts class members in this order:
1. Properties (instance variables)
2. Constructor  
3. Static properties
4. Static methods
5. Instance methods (public and private)

### Example

**Before formatting:**
```typescript
class TestClass {
  run() { console.log("running"); }
  isRunning = false;
  constructor(name: string) { }
  static version = "1.0.0";
}
```

**After running `npm run lint:fix && npm run format`:**
```typescript
class TestClass {
  isRunning = false;
  
  constructor(name: string) {}
  
  static version = '1.0.0';
  
  run() {
    console.log('running');
  }
}
```