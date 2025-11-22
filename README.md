This is a basic product management application built with React, Vite, and Bootstrap (via CDN).

The app allows users to:

View products in table view or card view

Switch between views using one toggle button

Add new products

Edit existing products

Search products with a 500ms debounce

Load product data from a local data.json file

Navigate through products using pagination

Features
1. View Toggle

A single button toggles between table view and card view.

2. Add and Edit Products

A reusable form component opens when:

The Add Product button is clicked

The Edit button on a product is clicked

3. Data From JSON

Products are loaded from the file:

public/products.json

4. Search

Search filters products in real time with a delay to improve performance.

5. Pagination

Shows 5 products per page with previous and next buttons.