# Flowers Project

A modern, responsive web animation project built with **React** and **Vite**, featuring complex CSS animations and a modular component architecture.

## Overview

This project renders a dynamic, animated floral scene using purely CSS animations for movement and growth effects. Originally a static HTML/CSS project, it has been modernized into a React application to improve maintainability, performance, and scalability.

**Key Features:**

*   **Component-Based Architecture:** Scalable React components for `Flower`, `Grass`, and `Leaves`.
*   **High-Performance Animations:** Optimized CSS keyframes for smooth rendering (60fps).
*   **Responsive Design:** Uses relative units (`vmin`) to adapt to any screen size.
*   **Modular Styles:** CSS architecture organized for clarity and reuse.

## Technology Stack

*   **React 19** - UI Library
*   **Vite** - Build Tool & Dev Server
*   **CSS3** - Styling & Animations
*   **ESLint** - Code Quality

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Kromilla/Flowers.git
    cd Flowers
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Build for production:
    ```bash
    npm run build
    ```

## Project Structure

```text
src/
├── assets/         # Static assets
├── components/     # Reusable React components
│   ├── Flower.jsx  # Main flower logic
│   └── Grass.jsx   # Grass variations
├── App.jsx         # Main application entry
├── main.jsx        # DOM rendering
└── index.css       # Global styles and animations
```

## License

This project is open source and available under the [MIT License](LICENSE).
