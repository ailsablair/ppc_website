# Chromatic Visual Regression Testing

This project uses [Chromatic](https://www.chromatic.com/) for visual regression testing of Storybook components.

## What is Chromatic?

Chromatic is a cloud-based visual testing platform that integrates with Storybook. It automatically:
- Takes snapshots of all your stories
- Detects visual changes on every commit
- Enables team review and collaboration
- Prevents visual bugs from reaching production

## Setup

### Prerequisites
- A Chromatic account (free tier available at https://www.chromatic.com/)
- A GitHub repository

### Initial Setup Steps

1. **Sign up for Chromatic**
   - Visit https://www.chromatic.com/
   - Sign in with GitHub
   - Create a project for this repository

2. **Get Your Project Token**
   - After creating a project in Chromatic, you'll receive a `CHROMATIC_PROJECT_TOKEN`
   - Copy this token

3. **Add Secret to GitHub**
   - Go to your repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `CHROMATIC_PROJECT_TOKEN`
   - Value: Paste your token from Chromatic
   - Click "Add secret"

4. **Trigger the Workflow**
   - Push a commit to your `main` branch or create a pull request
   - The Chromatic workflow will automatically run
   - Check the "Actions" tab to see the workflow progress

## How It Works

### Automated Workflow

When you push code or create a PR:

1. **Build Storybook** - The CI pipeline builds your Storybook
2. **Publish to Chromatic** - The build is uploaded to Chromatic's servers
3. **Visual Testing** - Chromatic compares it against previous builds
4. **PR Comment** - Chromatic posts a comment with the results

### PR Comments

Chromatic will post a comment on your PR showing:
- ✅ Build status (passed/failed)
- 🔍 Number of stories tested
- 📊 Visual changes detected
- 🔗 Link to review changes in Chromatic dashboard

### Reviewing Changes

1. Click the Chromatic link in the PR comment
2. You'll see all visual changes highlighted
3. For each change:
   - **Accept** - Approve the change as intentional
   - **Deny** - Reject the change and request fixes

Once all changes are accepted (or none exist), the build passes.

## Local Testing

You can also run Chromatic tests locally:

```bash
# Run Chromatic test
npm run chromatic

# Run in CI mode (fails if changes are detected)
npm run chromatic:ci
```

**Note:** You'll need the `CHROMATIC_PROJECT_TOKEN` available as an environment variable:

```bash
export CHROMATIC_PROJECT_TOKEN=your_token_here
npm run chromatic
```

## Workflow Configuration

The Chromatic workflow is defined in `.github/workflows/chromatic.yml` and runs:
- On push to `main` branch
- On all pull requests to `main`
- On manual trigger via GitHub Actions tab

### Key Settings

- **exitZeroOnChanges: false** - Workflow doesn't fail if visual changes are detected
- **exitOnceUploaded: false** - Waits for build to be processed on Chromatic servers

You can modify these settings in the workflow file based on your team's needs.

## Best Practices

### 1. Review Visual Changes Carefully
- Don't auto-accept all changes without review
- Ensure changes match your design intent
- Look for unintended side effects

### 2. Keep Stories Up to Date
- When you update components, update their stories
- Ensure stories cover different component states
- Add stories for edge cases and variations

### 3. Meaningful Story Names
- Use clear, descriptive names for stories
- Group related stories with folder structure
- This makes review in Chromatic easier

### 4. Document Design Changes
- When accepting visual changes, note why in PR description
- This helps future team members understand the change

### 5. Design System Foundation
- Use the Foundation stories (Colors, Typography, Effects) as baselines
- Any change to design tokens should be intentional
- Review changes carefully before accepting

## Troubleshooting

### Workflow Fails - "Invalid project token"
- Verify the token is correct in GitHub Secrets
- Check the secret name is exactly `CHROMATIC_PROJECT_TOKEN`
- Regenerate the token in Chromatic if needed

### "No stories found"
- Ensure Storybook builds successfully locally: `npm run build-storybook`
- Check that stories are in `src/**/*.stories.tsx` files
- Verify `.storybook/main.ts` includes the correct stories path

### Missing Custom Fonts
- Chromatic may show fallback fonts if custom fonts aren't loaded
- Check `.storybook/fonts.css` for font imports
- If using custom/licensed fonts, ensure they're properly imported
- Consider updating font fallbacks in `src/stories/foundation/design-tokens.css`

### Slow Build Times
- First builds may be slower as Chromatic establishes baselines
- Subsequent builds will be faster
- Large Storybook instances (100+ stories) may take longer

## Resources

- **Chromatic Docs**: https://www.chromatic.com/docs/
- **Storybook + Chromatic**: https://storybook.js.org/docs/publishing/chromatic/
- **GitHub Actions**: https://docs.github.com/en/actions
- **This Project's Storybook**: See your Storybook deployment on GitHub Pages

## Next Steps

1. Set up Chromatic project at https://www.chromatic.com/
2. Add project token to GitHub Secrets
3. Push a commit to trigger the first build
4. Review the results in your PR
5. Share the Chromatic dashboard with your team

Questions? Check Chromatic's documentation or GitHub Issues.
