```markdown
# toolrabbit Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns and conventions used in the `toolrabbit` TypeScript codebase. You'll learn how to structure files, write imports and exports, follow commit message styles, and understand the project's testing approach. This guide is ideal for contributors seeking to maintain consistency and quality in the codebase.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `myUtility.ts`, `userService.ts`

### Import Style
- Use **absolute imports** rather than relative paths.
  - Example:
    ```typescript
    import { fetchData } from 'services/api';
    ```

### Export Style
- Use **named exports** for modules.
  - Example:
    ```typescript
    // Good
    export function calculateSum(a: number, b: number): number {
      return a + b;
    }

    // Bad
    export default function calculateSum(a: number, b: number): number {
      return a + b;
    }
    ```

### Commit Message Patterns
- Commit messages are **freeform**, but may use prefixes like `security`.
- Average commit message length: ~61 characters.
  - Example:
    ```
    security: update dependencies to address vulnerability
    ```

## Workflows

### Code Contribution
**Trigger:** When adding or updating features, bug fixes, or documentation  
**Command:** `/contribute`

1. Create a new branch for your changes.
2. Follow the camelCase file naming convention.
3. Use absolute imports and named exports in your code.
4. Write or update tests in files matching `*.test.*`.
5. Commit your changes with a clear, descriptive message (optionally prefixed, e.g., `security:`).
6. Open a pull request for review.

### Dependency Update (Security)
**Trigger:** When addressing security vulnerabilities in dependencies  
**Command:** `/update-dependencies`

1. Check for security advisories or outdated packages.
2. Update the relevant dependencies.
3. Test the application to ensure stability.
4. Commit with a message prefixed by `security:`, e.g., `security: update lodash to 4.17.21`.
5. Open a pull request for review.

## Testing Patterns

- Test files follow the pattern `*.test.*` (e.g., `userService.test.ts`).
- The testing framework is **unknown**, but tests are colocated with the codebase.
- Example test file structure:
  ```typescript
  // userService.test.ts
  import { getUser } from 'services/userService';

  describe('getUser', () => {
    it('should return user data for a valid ID', () => {
      // test implementation here
    });
  });
  ```

## Commands
| Command               | Purpose                                             |
|-----------------------|-----------------------------------------------------|
| /contribute           | Guide for contributing code or documentation        |
| /update-dependencies  | Steps for updating dependencies for security fixes  |
```
