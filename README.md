# Krishna-test

## Activity monitoring

This repository now includes a GitHub Actions workflow at:
- `.github/workflows/activity-monitor.yml`

What it does:
- Records supported repository activity events and uploads the raw event payload as a workflow artifact.
- Sends an alert when AI-edit indicators are detected in activity metadata (for example Copilot/bot indicators in actor, commit, or PR text).
- On scheduled/manual runs, checks recent repository clone traffic and flags recent download/clone activity.

Setup required:
- Add repository variable `INTERN_GITHUB_USERNAME` (intern GitHub username).
- Add repository secret `ACTIVITY_ALERT_WEBHOOK_URL` (Slack/Teams/webhook URL for notifications).
- Optional: add repository variable `ACTIVITY_ALERT_ISSUE_NUMBER` to also post alerts to a specific issue.

Notes:
- GitHub does not expose a guaranteed per-user signal for every external AI tool usage or every download action.
- This workflow provides a practical best-effort audit trail and alerting layer using available GitHub event and traffic data.
