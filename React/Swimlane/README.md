# Syncfusion React Diagram - Swimlane Application

A clean, type-safe frontend-only React application demonstrating interactive Swimlane diagram visualization using Syncfusion EJ2 React Diagram components.

## Features

- **Interactive Swimlane Diagram** with sales process flow
- **Four Lanes**: Consumer, Marketing, Sales, Success
- **8 Nodes** with proper shapes and annotations
- **7 Connectors** linking the workflow with "Yes"/"No" annotations
- **Symbol Palette** with Flow shapes, Swimlane shapes, and Connectors
- **Context Menu** for lane insertion (InsertLaneBefore, InsertLaneAfter) and clipboard operations
- **Mobile-Responsive Design** with collapsible palette (breakpoint: 550px)
- **Drag-and-Drop Support** for adding shapes from palette
- **Undo/Redo Functionality**
- **Fit to Page** on load

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- Syncfusion EJ2 React Diagrams 25.1.35
- TypeScript and build tools

### 2. Run Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## Technology Stack

- **React** 18.2.0 - UI Framework
- **TypeScript** 5.2.2 - Type Safety
- **Vite** 5.2.0 - Build Tool
- **Syncfusion EJ2 React Diagrams** 25.1.35 - Diagram Components

## Project Structure

```
swimlane-diagram-app/
├── src/
│   ├── components/
│   │   └── SwimLane.tsx           # Main swimlane diagram component
│   ├── App.tsx                     # Main app component
│   ├── App.css                     # Application styles
│   ├── main.tsx                    # Entry point
│   ├── index.css                   # Global styles + Syncfusion CSS imports
│   └── vite-env.d.ts              # Vite type definitions
├── public/
│   └── index.html
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .gitignore
└── README.md
```

## Component Details

### SwimLane Component

The main component (`src/components/SwimLane.tsx`) includes:

- **DiagramComponent**: Main diagram canvas with swimlane layout
- **SymbolPaletteComponent**: Draggable symbol palette with shapes
- **Services**: UndoRedo, DiagramContextMenu
- **Data**: Static nodes and connectors representing a sales process flow

### Key Features Implementation

#### Swimlane Structure
- Horizontal orientation with header "SALES PROCESS FLOW CHART"
- 4 lanes: Consumer, Marketing, Sales, Success
- Each lane contains child nodes representing process steps
- Phase divider at offset 170

#### Symbol Palette
- **Flow Shapes**: Terminator, Process, Decision, Document, PreDefinedProcess, Data
- **Swimlane Shapes**: Horizontal/Vertical swimlanes and phases
- **Connectors**: Orthogonal and Straight (normal and dashed)

#### Interactive Features
- **Context Menu**: Right-click for Copy, Cut, Paste, Insert Lane operations
- **Drag & Drop**: Drag symbols from palette to diagram
- **Mobile Support**: Toggle button for palette on small screens (<550px)
- **Port Connectivity**: 4 ports per node (left, top, right, bottom)

## Syncfusion License

This application uses Syncfusion components. You have several licensing options:

### Option 1: Free Trial
- Visit [Syncfusion Downloads](https://www.syncfusion.com/downloads)
- Sign up for a free 30-day trial

### Option 2: Community License
- Available for qualifying developers (companies with <$1M revenue and <5 developers)
- Apply at [Syncfusion Community License](https://www.syncfusion.com/products/communitylicense)

### Option 3: Register License Key
If you have a license key, register it in `src/main.tsx`:

```typescript
import { registerLicense } from '@syncfusion/ej2-base';

// Add this before rendering the app
registerLicense('YOUR_LICENSE_KEY_HERE');

createRoot(document.getElementById('root')!).render(<App />);
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## Extension Ideas

- **Save/Load**: Add local storage or backend integration for saving diagrams
- **Export**: Implement export to PNG, SVG, or JSON
- **Property Panel**: Add sidebar for editing node/connector properties
- **Themes**: Custom color schemes and styling options
- **Zoom Controls**: Add zoom in/out and pan controls
- **Print**: Add print functionality
- **Templates**: More swimlane diagram templates for different use cases
- **Collaboration**: Real-time collaborative editing
- **Version History**: Track and restore previous diagram versions

## Troubleshooting

### Diagram not rendering
- Verify Syncfusion CSS is imported in `src/index.css`
- Check browser console for errors

### License warning
- Register a valid Syncfusion license key or use trial version

### TypeScript errors
- Ensure all dependencies are installed: `npm install`
- Check that TypeScript version is 5.2.2 or higher

### Mobile palette not working
- Test on actual mobile device or use browser dev tools responsive mode
- Ensure viewport width is less than 550px

## Contributing

This is a demonstration project. Feel free to fork and modify for your needs.

## Resources

- [Syncfusion React Diagram Documentation](https://ej2.syncfusion.com/react/documentation/diagram/getting-started/)
- [Syncfusion React Swimlane Documentation](https://ej2.syncfusion.com/react/documentation/diagram/swimlane/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)

## License

This project is for demonstration purposes. Check Syncfusion licensing terms for commercial use.
