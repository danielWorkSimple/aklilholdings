| name | description | license |
|------|-------------|---------|
| commit | Smart commit with automated code review and simplification. Runs code-simplifier and code-review before committing to ensure high-quality commits. | MIT |

This skill provides an automated commit workflow that ensures code quality by running simplification and review passes before creating the commit.

## Command

### `/commit`

Performs a smart commit with code review and simplification.

**What it does:**
1. Checks git status for modified/staged files
2. Runs code simplifier (Opus) on modified files to improve clarity
3. Runs code review (Sonnet) to catch bugs and issues
4. Shows any issues found and offers to fix them
5. Stages changes and creates a well-formatted commit

**Usage:**
```bash
/commit
```

## Workflow Steps

### Step 1: Check for changes

Run `git status` to see what files have been modified, added, or staged. If there are no changes to commit, inform the user and stop.

### Step 2: Run Code Simplifier

Launch an Opus subagent with the code-simplifier instructions to review and simplify the modified files:

**Subagent instructions:**
You are an expert code simplification specialist. Review the following modified files and simplify them for clarity, consistency, and maintainability while preserving exact functionality.

Key principles:
- Never change what the code does - only how it does it
- Reduce unnecessary complexity and nesting
- Eliminate redundant code and abstractions
- Choose clarity over brevity (avoid nested ternaries)
- Follow project standards from CLAUDE.md if present

Modified files to review: [list from git status]

Apply refinements directly to the files. Document what changes you made.

### Step 3: Run Code Review

Launch a Sonnet subagent to review the changes for bugs and issues:

**Subagent instructions:**
Review the staged/modified changes for this commit. Look for:
- Syntax errors, type errors, missing imports
- Clear logic errors that will produce wrong results
- Security issues in the changed code
- CLAUDE.md violations if CLAUDE.md exists

Only flag HIGH SIGNAL issues. Do NOT flag:
- Code style concerns
- Potential issues that depend on specific inputs
- Pre-existing issues not in this change

Return a list of issues found, or confirm no issues if none found.

### Step 4: Address Issues

If the code review found issues:
- Show the issues to the user
- Ask if they want to fix them before committing
- If yes, fix the issues

If no issues were found, proceed to Step 5.

### Step 5: Stage and Commit

1. Run `git diff` and `git diff --staged` to see all changes
2. Run `git log --oneline -5` to see recent commit message style
3. Stage all relevant changes with `git add`
4. Draft a concise commit message that:
   - Summarizes the nature of the changes
   - Focuses on the "why" rather than the "what"
   - Follows the repository's commit message style
5. Create the commit with the message ending with:
   ```
   Co-Authored-By: Claude <noreply@anthropic.com>
   ```
6. Run `git status` to verify the commit succeeded

## Notes

- Do not push unless explicitly asked
- If simplifier made changes, include "refactor:" or "style:" prefix as appropriate
- Use HEREDOC format for commit messages to ensure proper formatting

## Requirements

- Git repository
- Files with uncommitted changes

## Author

WorkSimple Engineering
