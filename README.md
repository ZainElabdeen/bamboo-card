# React App with List Display

This project is a React app created with Vite, showcasing a simple application that fetches and displays a list of gift cards. It uses Material-UI (`@mui/material`) for UI components and is designed to be responsive and user-friendly.

## Task Overview

Create a new React app using the latest version of React. The app should consist of a single
page that fulfils the following criteria:

### Requirements

1. Display a list on the home page, presented either as a series of cards or in a table format.
2. Populate the list using a mock Axios API call. Simulate the API call by returning data from
   within a function.

3. Include a side navigation (sidenav) or header navigation with a placeholder menu.

4. Utilize React hooks to fetch and display the data. Implement navigation as well.

5. This page should be responsive. You can utilize either styled component, material UI,
   Tailwind or any preferred CSS framework.

## Project Structure

- `src/App.tsx`: Main entry component for the app, renders the `Header` and `GiftCardList` components.
- `src/pages/gift-card-list.tsx`: Fetches and displays the list of gift cards, handles the data fetching and loading states.
- `src/components/header.tsx`: Header component for the app, contains navigation links.
- `src/components/gift-card-item.tsx`: Displays individual gift card details.
- `src/services/mockApiCall.ts`: Mocks an API call for fetching gift cards.

## Running the App

### Prerequisites

Ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for package management)

### Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ZainElabdeen/bamboo-card.git
   cd bamboo-card
   ```

2. Install dependencies

   If you are using `npm`:

   ```bash
   npm install
   ```

   If you are using yarn:

   ```bash
   yarn install
   ```

3. Start the development server
   If you are using `npm`:

   ```bash
   npm run dev
   ```

   If you are using yarn:

   ```bash
   yarn dev
   ```

The application will now be running at http://localhost:5173.
