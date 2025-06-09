# Business Skip Hire – React + TypeScript + Vite

This project is a demonstration of my abilities in modern frontend development, focusing on UI/UX improvements for a skip hire platform. Built with React, TypeScript, and Vite, it showcases enhancements to user experience, responsiveness, and maintainability.

## Project Approach & Improvements

### UI/UX Enhancements

- **Step Timeline Aids:**  
  Each step in the booking process now features a timeline component, providing users with clear visual cues about their progress and what to expect next. This helps reduce confusion and improves overall navigation.

- **Responsive Design:**  
  The layout and components have been carefully styled to ensure a seamless experience across devices, from mobile to desktop. Responsive paddings, flexible layouts, and adaptive stepper styles are used throughout.

- **Improved Drawer UX:**  
  When selecting a skip size, a bottom drawer appears with detailed information and clear action buttons. The drawer interaction is smooth, with clear affordances for continuing or going back, and closes intuitively when a card is deselected.

- **Componentization:**  
  The UI is broken down into reusable components (e.g., `SkipCard`, `StepsLayout`, `Timeline`), making the codebase maintainable and scalable.

### Testing

- **Test Setup:**  
  The project uses [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), and [Jest DOM](https://github.com/testing-library/jest-dom) for unit and integration testing.
- **Coverage:**  
  While the test suite is not yet complete, there are tests in place for the most utilized page (`SelectSkip`). These tests cover rendering, user interactions, and drawer behavior. All tests are located in the `src/tests` folder.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn, but pnpm is preferred for this project)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd remwaste-task

   ```
2. **Install dependencies:**

   ```sh
   pnpm install

   ```

3. **Start the development server:**

   ```sh
   pnpm dev

   ```

4. **Run all tests:**
   ```sh
   pnpm test
   ```
