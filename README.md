# Paradise Nursery – e-plantShopping

This project is the final React application for the **Paradise Nursery** online plant shop, built as part of an IBM React course. It demonstrates a complete shopping cart experience using **React**, **Redux Toolkit**, and **Vite**.[web:7]

## Live Demo

Deployed with GitHub Pages:

`https://YOUR_GITHUB_USERNAME.github.io/e-plantShopping/`

> Replace `YOUR_GITHUB_USERNAME` with your actual username.

## Repository

This repository is named **`e-plantShopping`**, as required by the course specification.

## Features

- **Landing page**
  - Welcome message for *Paradise Nursery*
  - Tagline “Where Green Meets Serenity”
  - Background hero image
  - **Get Started** button that navigates to the product listing page

- **About Us**
  - `AboutUs.jsx` describes the Paradise Nursery company, its mission, and plant offerings.

- **Product listing (`ProductList.jsx`)**
  - Plants grouped into multiple categories (Air Purifying, Aromatic, Medicinal, etc.).
  - Each category contains at least six different houseplants.
  - Each plant card displays:
    - Thumbnail image
    - Name
    - Description
    - Price
    - **Add to Cart** button
  - Add to Cart:
    - Adds the plant to the Redux cart
    - Disables and changes the button label to “Added to Cart”
    - Updates the cart icon quantity in the navbar

- **Navigation bar**
  - Visible on both Product Listing and Cart views
  - Links: **Home**, **Plants**, **Cart**
  - Cart icon shows the **total number of items** in the cart, updated dynamically

- **Shopping cart (`CartSlice.jsx` + `CartItem.jsx`)**
  - Global cart state managed with **Redux Toolkit**:
    - `addItem` – add a plant or increase its quantity
    - `removeItem` – remove a plant from the cart
    - `updateQuantity` – change the quantity of a specific plant
  - Cart page shows:
    - Thumbnail, name, and unit price for each plant
    - Quantity controls (+ / – buttons)
    - Per‑item subtotal (quantity × price)
    - Overall total cost for all items in the cart
  - Actions:
    - **Delete** removes a plant from the cart
    - **Continue Shopping** returns to the product listing
    - **Checkout** shows a “coming soon” style message

## Tech Stack

- React 18
- Redux Toolkit and React Redux
- Vite
- GitHub Pages for deployment

## Getting Started

### Installation

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping.git
cd e-plantShopping
npm install
