# shadcn/ui Cheatsheet

An interactive cheatsheet for [shadcn/ui](https://ui.shadcn.com) components with live previews, code examples, and instant copy functionality.

Built with the latest web technologies for the best developer experience.

🌐 **Live Demo**: [https://shadcnstore.com/cheatsheet](https://shadcnstore.com/cheatsheet)

## ✨ Features

- 🎨 **Live Component Previews** - See components in action with interactive examples
- 📋 **One-Click Copy** - Copy installation commands and code snippets instantly  
- 🔍 **Fuzzy Search** - Find components quickly with intelligent search
- 📱 **Responsive Design** - Perfect experience on all devices
- 🌙 **Dark Mode** - Seamless theme switching with system preference
- ⚡ **Fast Performance** - Optimized with Next.js 15 and Turbopack
- 🎯 **Dependencies Display** - See all required packages for each component
- 📦 **Package Manager Support** - Choose from npm, yarn, pnpm, or bun

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

Visit [https://shadcnstore.com/cheatsheet](https://shadcnstore.com/cheatsheet) to view the live application, or run locally at [http://localhost:3000](http://localhost:3000).

## 🏗️ Project Structure

```text
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Home page with component grid
│   └── api/             # API routes for component source
├── components/          # React components
│   ├── ui/              # shadcn/ui base components
│   ├── layout/          # Layout components (header, footer)
│   ├── cards/           # Component card implementations
│   └── search/          # Search and filtering components
├── lib/                 # Utility libraries
│   ├── utils.ts         # Common utilities (cn, etc.)
│   ├── data-adapter.ts  # Component data transformation
│   ├── registry-*.ts    # Component registry management
│   └── search.ts        # Search and filtering logic
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
└── registry/            # Component example files
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router and Turbopack
- **React**: [React 19](https://react.dev/) with server components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com)
- **Language**: [TypeScript](https://www.typescriptlang.org/) with strict mode
- **Icons**: [Lucide React](https://lucide.dev/)
- **Search**: Custom fuzzy search with component aliases
- **Syntax Highlighting**: [Shiki](https://shiki.matsu.io/) with VS Code themes

## 🎯 Usage

### Component Cards

Each component card displays:

- Component name and description
- Installation command for selected package manager
- Code variants with individual copy buttons
- Dependencies and documentation links
- Expand/collapse for detailed view

### Package Manager Integration

Switch between package managers using the tab interface:

```bash
# npm
npm install @radix-ui/react-accordion

# yarn  
yarn add @radix-ui/react-accordion

# pnpm
pnpm add @radix-ui/react-accordion

# bun
bun add @radix-ui/react-accordion
```

### Search & Navigation

- **Global Search**: Press `Ctrl+K` to open command palette
- **Category Filters**: Click category badges to filter components
- **Component Preview**: Click any component for live preview
- **Keyboard Navigation**: Use arrow keys in preview mode

## 📋 Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript checks
pnpm format       # Format code with Prettier
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository on [GitHub](https://github.com/silicondeck/shadcn-cheatsheet)
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for the amazing component library
- [SiliconDeck](https://silicondeck.com) for development and maintenance
- [Vercel](https://vercel.com) for Next.js and deployment platform
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
