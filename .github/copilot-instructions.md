# GitHub Copilot Instructions

This document provides guidance for AI agents to effectively contribute to the `shadcn-cheatsheet` codebase.

## Architecture Overview

This is a Next.js 15 application (using the App Router and Turbopack) that serves as an interactive cheatsheet for `shadcn/ui` components.

- **`app/`**: Contains the main application entry point (`layout.tsx`, `page.tsx`) and the API route (`app/api/registry/source/route.ts`) that serves component source code.
- **`components/`**: This is where most of the UI logic resides.
  - `components/ui/`: Base `shadcn/ui` components.
  - `components/layout/`: High-level layout components like `header.tsx` and `footer.tsx`.
  - `components/cards/`: Components responsible for rendering the component preview cards.
  - `components/search/`: Components for the search functionality.
- **`lib/`**: Contains core application logic.
  - `registry.ts`, `registry-client.ts`, `registry-server.ts`: Handle fetching and processing component data from the `registry/` directory.
  - `search.ts`: Implements the fuzzy search logic.
- **`data/`**: Static data, such as the list of components in `data/components-simple.ts`.
- **`registry/`**: Contains the source code for component examples.

## Developer Workflow

The project uses `pnpm` for package management.

- **To start the development server:**
  ```bash
  pnpm run dev
  ```
- **To build the project:**
  ```bash
  pnpm run build
  ```
- **To lint the code:**
  ```bash
  pnpm run lint
  ```

## Key Patterns & Conventions

- **Component Data Flow:** The application gets component information from `data/components-simple.ts` and `registry/default/examples`. The functions in the `lib/` directory are used to process and combine this data before it's rendered by the components in `components/cards`.
- **Styling:** The project uses Tailwind CSS. Utility classes are preferred. Custom styles are defined in `app/globals.css`.
- **State Management:** For client-side state, React hooks (`useState`, `useContext`) are primarily used. Persistent state (like user preferences) is managed via `lib/preferences.ts`.

When adding a new component to the cheatsheet, you will likely need to:

1.  Add the component's example file to `registry/default/examples/`.
2.  Update the component list in `data/components-simple.ts`.
3.  Ensure the data is correctly processed by the functions in the `lib/` directory.
