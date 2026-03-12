# Simple Astro implementation guide

Use these rules when turning Figma output into code for this repository.

## Stack

- Astro 6
- React 19 via `@astrojs/react`
- JSX, not TypeScript
- Plain CSS, mainly in `src/styles/global.css`

## Default implementation target

- Start from `src/pages/index.astro` for page-level composition.
- Put interactive UI in `src/components/App.jsx` or another colocated React component when state is required.
- Add styles to `src/styles/global.css` unless the work is clearly isolated and deserves its own stylesheet.
- Keep `src/layouts/Layout.astro` focused on document shell concerns such as title, language, and shared page structure.

## Component reuse

- Check `src/registry/` before creating a new visual component.
- Reuse `@/registry/magicui/rainbow-button` for CTA styles that match the existing header button.
- Keep simple one-off SVG artwork inline in React components when that matches current code.

## Styling rules

- Convert Tailwind output into semantic class names such as `hero-title`, `feature-card`, or `pricing-grid`.
- Keep the existing dark theme language: deep black backgrounds, soft white text, muted secondary text, thin translucent borders, and subtle blur or glow.
- Preserve existing font fallback chains when the Figma font is unavailable.
- Prefer gradients, shadows, and radii that visually align with the current landing page instead of introducing a separate design language.
- Use responsive CSS with media queries when the Figma frame implies tablet or mobile behavior.

## Astro and JSX rules

- Use `.astro` files for page/layout composition and React `.jsx` files for client interactivity.
- Use `client:load` or another Astro hydration directive only when interactivity is needed.
- Use `className`, not `class`, inside React components.
- Use accessible HTML: `button` for actions, `a` for navigation, headings in order, and `aria-hidden` on decorative SVGs.
- Keep the component tree shallow unless repeated UI makes extraction worthwhile.

## Prompting tips

When asking the Figma MCP server for implementation help, include project constraints in the prompt, such as:

- "Generate this for Astro + React JSX and plain CSS."
- "Reuse components from `src/registry/` when possible."
- "Do not use Tailwind or icon libraries."
- "Target the styling approach already used in `src/styles/global.css`."
- "Compose page structure through `src/pages/index.astro`."
