# Blocks

## Class Member Reordering

This project automatically reorders TypeScript class members using ESLint and Prettier for consistent code organization.

### Order of Class Members

The configured order is:
1. **Properties** (instance variables)
2. **Constructor**
3. **Static properties**
4. **Static methods**
5. **Instance methods** (public and private)

### Usage

#### Automatic Formatting in VS Code
- Install recommended extensions (ESLint, Prettier)
- Files are automatically formatted and reordered on save
- ESLint fixes class member order
- Prettier handles code formatting

#### Manual Commands

```bash
# Install dependencies
npm install

# Lint and fix class member ordering
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting without making changes
npm run format:check
```

### Configuration Files

- `eslint.config.cjs` - ESLint configuration with sort-class-members rule
- `.prettierrc` - Prettier configuration for code formatting
- `.vscode/settings.json` - VS Code workspace settings for format-on-save
- `.vscode/extensions.json` - Recommended VS Code extensions

### Example

**Before sorting:**
```typescript
class MyClass {
  method() { /* ... */ }
  property: string = "value";
  constructor() { /* ... */ }
}
```

**After sorting:**
```typescript
class MyClass {
  property: string = "value";
  constructor() { /* ... */ }
  method() { /* ... */ }
}
```