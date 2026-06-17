# Antigravity Agent Rules

## Safety Guardrails
- NEVER run recursive terminal commands or multi-file scripts without pausing for manual human confirmation.
- NEVER overwrite or modify `package.json` or your core routing structure (`app/` directory configurations) dynamically. Present a code diff block in the chat for approval first.
- If a task gets stuck or requires more than 3 continuous iterations to fix an error, HALT execution immediately and prompt the user for guidance.

## Permission Tiers
- **Allowed without asking:** Reading files, checking git status, formatting existing code text.
- **Ask first (Require Confirmation Button):** Installing packages, writing new components, modifying layout files, creating git branches.
- **Never Allowed:** Force pushing to branches, deleting asset directories, running global environment updates.