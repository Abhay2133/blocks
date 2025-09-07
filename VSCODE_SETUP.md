# VS Code Setup Instructions

## Install Recommended Extensions

1. Open the project in VS Code
2. VS Code will automatically prompt to install recommended extensions:
   - ESLint
   - Prettier - Code formatter
   - TypeScript

## Using the Keyboard Shortcut

1. Open any TypeScript file in the `src/` folder
2. Press `Ctrl + Shift + I` (or `Cmd + Shift + I` on Mac)
3. This will run both:
   - ESLint --fix (to fix linting issues and reorder class members)
   - Prettier formatting (to format the code)

## Testing the Setup

1. Open `src/test.ts`
2. Mess up the formatting and class member order:
   ```typescript
   class TestClass {
     run(){console.log("test");}
     prop=1;
     constructor(){}
   }
   ```
3. Press `Ctrl + Shift + I`
4. Watch it automatically fix and format to:
   ```typescript
   class TestClass {
     prop = 1;
     
     constructor() {}
     
     run() {
       console.log('test');
     }
   }
   ```

## Automatic Format on Save

Files will automatically be formatted when you save them thanks to the workspace settings.