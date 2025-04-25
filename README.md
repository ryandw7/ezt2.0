# EZ-T

React Web Application designed for Sales Representatives to provide a simple and fast pricing break down for various services.

## Folder Structure

ezt2.0/ <br>
├── dist/ → Production build output <br>
├── src/ <br>
│ ├── index.js → Entry point of the app <br>
│ ├── app.js → Main App component + route definitions <br>
│ ├── pages/ → Top-level route views (e.g., /core, /mobile, /finish) <br>
│ ├── features/ → State-driven logic, selectors, form/view components <br>
│ ├── context/ → Custom React Context, reducers, actions, and selectors <br>
│ ├── styles/ → Global styles and print CSS <br>
│ └── utils/ → Utility/helper functions <br>
├── webpack.config.js → Custom Webpack config (no CRA) <br>
├── package.json <br>  
└── README.md <br>

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
