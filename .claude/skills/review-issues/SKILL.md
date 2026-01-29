---
name: review-issues
description: Review, triage, and scope open issues from ISSUES.md
allowed-tools: Read, Edit, Grep, Glob
---

# Review Issues

Review, triage, and scope open issues from ISSUES.md.

## Instructions

1. **Read ISSUES.md** and parse all issues under "## Open Issues"

2. **Display the list:**
   - Show each issue with its status emoji, title, and capture date
   - Number them for easy selection
   - Example:
     ```
     Open Issues:
     1. 🆕 Fix session timeout on mobile (Jan 25)
     2. 🆕 Add bulk email feature (Jan 24)
     3. 🔍 Improve search performance (Jan 23)
     ```

3. **Ask what to do:**
   - "Pick an issue number to review, or 'q' to quit"

4. **When an issue is selected, offer actions:**
   - **Explore** - Search the codebase to understand the issue better
   - **Add notes** - Append findings or context to the issue
   - **Update status** - Change from 🆕 to 🔍 (scoped) or ✅ (done)
   - **Back** - Return to the list

5. **For "Explore" action:**
   - Ask clarifying questions about the issue
   - Search relevant code files
   - Summarize what you find
   - Suggest adding notes based on findings

6. **For "Update status" action:**
   - If marking as 🔍 Scoped: Ensure there are notes/details added
   - If marking as ✅ Done: Move the issue to a "## Completed" section at the bottom
   - Update the emoji in the heading

## Issue Format Reference

```markdown
### 🆕 [Title]
*Captured: [YYYY-MM-DD]*

[Description]

**Notes:**
- [Added during review]

---
```

## Tips

- Keep scoping lightweight - goal is to understand enough to start working
- Add notes about relevant files, potential approaches, or blockers
- An issue is "scoped" when someone could pick it up and start working
