# EZ-T

React Web Application designed for Sales Representatives to provide a simple and fast pricing break down for various services.

## Folder Structure

project-root/
├── dist/               → Production build output
├── src/                
│   ├── index.js        → Entry point of the app
│   ├── app.js          → Main App component + route definitions
│   ├── pages/          → Top-level route views (e.g., /core, /mobile, /finish)
│   ├── features/       → State-driven logic, selectors, form/view components
│   ├── context/        → Custom React Context, reducers, and actions
│   ├── styles/         → Global styles and print CSS
│   └── utils/          → Utility/helper functions
├── webpack.config.js   → Custom Webpack config (no CRA)
├── package.json        
└── README.md

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- npm or yarn

### Install Dependencies

```bash
npm install
# or
yarn install
```
### Start Dev Server

```bash
npm start
```

### Build for Production

```bash
npm run build
```