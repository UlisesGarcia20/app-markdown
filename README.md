# MarkDown Converter App

A modularized React application that replicates the design and functionality of the original HTML file to convert files to Markdown format using Microsoft MarkItDown.

## Project Structure

```
src/
├── components/           # Modularized React components
│   ├── Container/       # Main container
│   ├── Header/          # Header with title and subtitle
│   ├── UploadArea/      # Upload area with drag & drop
│   ├── FileList/        # Selected files list
│   ├── SupportedFormats/ # Supported formats information
│   └── index.ts         # Component exports
├── hooks/               # Custom hooks
│   └── useFileUpload.ts # File handling hook
├── services/            # API services
│   └── api.ts           # Backend communication functions
├── styles/              # Global styles
│   └── global.css       # Application global CSS
├── App.tsx              # Main component
└── main.tsx             # Entry point
```

## Configuration

### Environment Variables

Create a `.env` file in the project root:

```
VITE_API_BASE_URL=http://localhost:5001
```

### Installation and Execution

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build
```

## Features

- ✅ Drag & drop files
- ✅ Multiple file selection
- ✅ Progress bar during conversion
- ✅ Selected files list
- ✅ Supported formats information
- ✅ Automatic result download
- ✅ Responsive and modern design

## Components

### Container
Main container with card styling and two-column layout.

### Header
Header with title and application description featuring key benefits.

### UploadArea
Upload area with drag & drop functionality, file selection, and submit button.

### FileList
Displays selected files list with sizes and individual remove options.

### SupportedFormats
Detailed information about supported file formats organized by categories.

## Hooks

### useFileUpload
Custom hook that handles:
- Selected files state
- Upload state and progress
- API communication
- Result downloads
- File management (add/remove)

## API

The application communicates with a Python backend that should be running on the port configured in `VITE_API_BASE_URL`.

### Endpoint

- `POST /upload` - Receives files and returns converted result

## Design Features

- **Modern UI**: Glass morphism effects and gradients
- **Responsive**: Adapts to any screen size
- **Intuitive**: Clear visual flow and user guidance
- **Accessible**: Good contrast ratios and keyboard navigation
- **No Scroll**: Single-view interface with optimized layout
