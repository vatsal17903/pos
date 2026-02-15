# POSGo SaaS React Frontend

This directory contains the new React-based frontend for the POSGo SaaS project.

## Project Structure

- `src/components/`: Reusable UI components (Sidebar, Navbar, etc.)
- `src/pages/`: Page-level components (Dashboard, Sales, etc.)
- `src/styles/`: Global and component-specific Vanilla CSS.
- `src/App.jsx`: Main routing and layout configuration.

## Technologies Used

- **React**: Modern UI library.
- **Vite**: Ultra-fast build tool.
- **React Router**: For client-side routing.
- **Lucide React**: Premium icon set.
- **Vanilla CSS**: Custom design system for maximum flexibility.

## Getting Started

1. Navigate to this directory:
   ```bash
   cd react-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Next Steps for Full Conversion

1. **API Development**: Create API controllers in the Laravel backend (`app/Http/Controllers/API`) to serve data as JSON.
2. **Authentication**: Implement JWT or Sanctum authentication to link the React frontend with the Laravel backend.
3. **Data Fetching**: Use `axios` (already installed) to fetch data from the API routes.
4. **State Management**: Consider adding `React Context` or `Zustand` if the application state becomes complex.
