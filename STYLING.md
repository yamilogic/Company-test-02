# Styling Guidelines

This project strictly utilizes **Tailwind CSS v4** for all component styling and layout.

## Core Rules

1. **0 Raw CSS:** 
   No raw CSS selectors (like `html`, `body`, or custom class selectors) should be added to `globals.css`.
   
2. **No Inline React Styles:**
   Avoid using inline `style={{ ... }}` objects in TSX components. Always favor Tailwind utility classes.
   
3. **Custom / Arbitrary Styles:**
   For specific values (like custom clip paths, scrollbars, or clamps), use Tailwind's arbitrary value syntax:
   - Width: `w-[clamp(300px,50vw,500px)]`
   - Scrollbar hiding: `[scrollbar-width:none] [&::-webkit-scrollbar]:hidden`
