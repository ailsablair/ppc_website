# PipsQueak Pet Care - Design System

A comprehensive design system and component library for PipsQueak Pet Care, built with React, TypeScript, Vite, and Storybook.

## 🎨 Design System

This project includes:
- **Brand Colors**: Complete color palette with tints and shades
- **Typography**: Carefully curated typefaces (Author, Clash Grotesk, Pirage, Gabarito, Caveat Brush)
- **Components**: Reusable UI components (Button, Header, Page, etc.)
- **Design Tokens**: CSS custom properties for consistent styling
- **Effects & Shadows**: Visual depth and interactive feedback system

## 📖 Storybook

View and interact with all components and design tokens:

```bash
npm run storybook
```

Then open [http://localhost:6006](http://localhost:6006) to browse stories.

### Storybook Deployment

Storybook is automatically deployed to **GitHub Pages** on every push to `main`:
- 🔗 View: `https://[your-username].github.io/ppc_website/`

## 🧪 Visual Testing with Chromatic

This project uses **Chromatic** for visual regression testing and team collaboration.

### What is Chromatic?

Chromatic automatically detects visual changes in your components, enables team review, and prevents visual bugs from reaching production.

### Quick Start

1. **Sign up** at https://www.chromatic.com/
2. **Create a project** for this repository
3. **Add your token** to GitHub Secrets:
   - Go to Repository Settings → Secrets and variables → Actions
   - Create secret: `CHROMATIC_PROJECT_TOKEN`
4. **Push code** - The workflow runs automatically

For detailed setup and usage instructions, see [CHROMATIC.md](./CHROMATIC.md).

### Running Tests Locally

```bash
# Build and publish to Chromatic
npm run chromatic

# Run in CI mode (fails if changes detected)
npm run chromatic:ci
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
# Run Vite dev server
npm run dev

# Run Storybook
npm run storybook
```

### Building

```bash
# Build the main app
npm build

# Build Storybook
npm run build-storybook
```

### Code Quality

```bash
# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── stories/
│   ├── foundation/
│   │   ├── Foundation.stories.tsx    # Design system showcase
│   │   ├── colors.css                # Color token styles
│   │   └── design-tokens.css         # Complete design token system
│   ├── Button.stories.tsx            # Button component stories
│   ├── Header.stories.tsx            # Header component stories
│   ├── Page.stories.tsx              # Page component stories
│   └── [Component].tsx               # Component implementations
├── App.tsx                           # Main app component
└── index.css                         # Global styles

.storybook/
├── main.ts                           # Storybook configuration
├── preview.ts                        # Storybook preview settings
├── fonts.css                         # Font imports
└── vitest.setup.ts                   # Vitest configuration

.github/workflows/
├── deploy-storybook.yml              # Deploys to GitHub Pages
└── chromatic.yml                     # Visual regression testing
```

## 🎯 Foundation Stories

The design system includes comprehensive Foundation stories showcasing:

- **Colors**: Primary colors, neutrals, and status colors with all tints/shades
- **Typography**: Headings, body text, labels with all variations
- **Effects**: Shadow system and hover states
- **Logos**: Brand mark and logomark in all color variants

Browse them in Storybook at: `Foundation` → `Colors`, `Typography`, `Effects`, `Logo`, `Logomark`

## 🔧 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint code quality checks |
| `npm run storybook` | Start Storybook dev server |
| `npm run build-storybook` | Build Storybook for deployment |
| `npm run chromatic` | Run Chromatic visual tests locally |
| `npm run chromatic:ci` | Run Chromatic in CI mode (strict) |

## 🌐 Deployment

### GitHub Pages (Storybook)

Automatically deployed on push to `main` branch via `.github/workflows/deploy-storybook.yml`

**Requirements:**
- Repository Settings → Pages → Build and deployment → Source: "GitHub Actions"

### Chromatic

Automatically runs visual regression testing on all PRs and pushes to `main`.

**Requirements:**
- GitHub Secret: `CHROMATIC_PROJECT_TOKEN`
- Chromatic project created at https://www.chromatic.com/

See [CHROMATIC.md](./CHROMATIC.md) for detailed setup.

## 📚 Documentation

- **[CHROMATIC.md](./CHROMATIC.md)** - Visual testing setup and usage guide
- **[Storybook Docs](https://storybook.js.org/docs/)** - Component development docs
- **[Chromatic Docs](https://www.chromatic.com/docs/)** - Visual testing reference

## 🛠️ Tech Stack

- **React** 19 - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** 7 - Fast build tool
- **Storybook** 10 - Component development environment
- **Chromatic** - Visual regression testing
- **Vitest** - Unit testing
- **ESLint** - Code quality

## 📝 Contributing

When adding new components or updating the design system:

1. Create a component in `src/stories/`
2. Create a corresponding `.stories.tsx` file
3. Document with stories showing all variations
4. Update the Foundation stories if adding new tokens
5. Push to a branch - Chromatic will review visuals
6. Get visual approval before merging to `main`

## 📄 License

Private project for PipsQueak Pet Care.

## 🤝 Support

For issues or questions:
- Check existing documentation files
- Review Storybook stories for examples
- Consult Chromatic documentation for visual testing help
