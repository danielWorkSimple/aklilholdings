| name | description | license |
|------|-------------|---------|
| code-review | Automated code review for pull requests using multiple specialized agents with confidence-based scoring to filter false positives. | MIT |

This skill provides automated PR review by launching multiple agents in parallel to independently audit changes from different perspectives.

## Command

### `/code-review`

Performs automated code review on a pull request using multiple specialized agents.

**What it does:**
1. Checks if review is needed (skips closed, draft, trivial, or already-reviewed PRs)
2. Gathers relevant CLAUDE.md guideline files from the repository
3. Summarizes the pull request changes
4. Launches 4 parallel agents to independently review:
   - **Agents #1 & #2**: Audit for CLAUDE.md compliance
   - **Agent #3**: Scan for obvious bugs in changes
   - **Agent #4**: Analyze for security issues and incorrect logic
5. Validates each issue with additional subagents
6. Filters out low-confidence issues
7. Posts inline comments on the PR for validated issues

**Usage:**
```bash
/code-review [--comment]
```

**Options:**
- `--comment`: Post the review as a comment on the pull request (default: outputs to terminal only)

## Features

- Multiple independent agents for comprehensive review
- Validation step reduces false positives
- CLAUDE.md compliance checking with explicit guideline verification
- Bug detection focused on changes (not pre-existing issues)
- Posts inline comments with committable suggestions when appropriate

## What Gets Flagged (HIGH SIGNAL only)

- Code that will fail to compile or parse (syntax errors, type errors, missing imports)
- Code that will definitely produce wrong results (clear logic errors)
- Clear, unambiguous CLAUDE.md violations with quotable rules

## What Does NOT Get Flagged

- Pre-existing issues not introduced in PR
- Code style or quality concerns
- Potential issues that depend on specific inputs or state
- Pedantic nitpicks
- Issues linters will catch
- Issues with lint ignore comments

## Requirements

- Git repository with GitHub integration
- GitHub CLI (`gh`) installed and authenticated
- CLAUDE.md files (optional but recommended for guideline checking)

## Author

Based on the Anthropic claude-code plugin by Boris Cherny (boris@anthropic.com)
