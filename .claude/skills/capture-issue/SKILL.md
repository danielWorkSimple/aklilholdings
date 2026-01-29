---
name: capture-issue
description: Quickly capture a new issue, idea, or feature request to ISSUES.md
allowed-tools: Read, Edit
---

# Capture Issue

Quickly capture a new issue, idea, or feature request to ISSUES.md.

## Instructions

1. **Get the issue title:**
   - If an argument was provided (e.g., `/capture-issue Fix login bug`), use that as the title via $ARGUMENTS
   - Otherwise, ask the user: "What's the issue or idea you want to capture?"

2. **Get optional description:**
   - Ask: "Any additional details? (press Enter to skip)"
   - Keep it brief - this is quick capture, not full spec

3. **Append to ISSUES.md:**
   - Read the current ISSUES.md file at the repo root
   - Add the new issue under "## Open Issues" with this format:

   ```markdown
   ### 🆕 [Title]
   *Captured: [YYYY-MM-DD]*

   [Description if provided]

   ---
   ```

4. **Confirm:**
   - Tell the user: "Captured: [title]"
   - Remind them they can run `/review-issues` to scope it later

## Example

After running `/capture-issue Fix the session timeout on mobile`:

```markdown
### 🆕 Fix the session timeout on mobile
*Captured: 2025-01-25*

Users report being logged out after 5 minutes on mobile browsers.

---
```
