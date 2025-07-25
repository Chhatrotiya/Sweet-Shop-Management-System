﻿# Sweet Shop Management System

A Node.js application for managing a sweet shop's inventory with features including adding, deleting, searching, purchasing, and restocking sweets using Test-Driven Development (TDD).

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- Add, delete, and view sweets
- Search sweets by name, category, and price range
- Purchase sweets with stock validation
- Restock inventory
- Error handling and validation
- 100% test coverage with Jest

## Prerequisites
- Node.js (v14 or higher)
- npm

```bash
node --version
npm --version
```

## Installation

```bash
git clone https://github.com/yourusername/sweet-shop-management-system.git
cd sweet-shop-management-system
npm install
```

## Usage

```javascript
const SweetShop = require('./src/SweetShop');
const Sweet = require('./src/models/Sweet');

const shop = new SweetShop();

shop.addSweet(new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20));
shop.addSweet(new Sweet(1002, 'Gulab Jamun', 'Milk-Based', 10, 50));

console.log(shop.viewSweets());

shop.purchaseSweet(1001, 5);
shop.restockSweet(1001, 10);
```

### Run Tests

```bash
npm test
npm test -- --coverage
npm test -- --watch
```

## Testing

- Framework: Jest
- Run tests:

```bash
npm test
npm test -- --verbose
npm test -- --coverage
```

### Coverage
- 100% coverage for:
  - Add, delete, view sweets
  - Search by name, category, price
  - Purchase and restock

## API Documentation

### SweetShop Methods

```javascript
const shop = new SweetShop();
```

#### addSweet(sweet)
- Adds a new sweet with id, name, category, price, quantity
- Throws error if ID already exists

#### deleteSweet(id)
- Deletes sweet by ID
- Throws error if not found

#### viewSweets()
- Returns all sweets

#### searchByName(name)
- Case-insensitive name search

#### searchByCategory(category)
- Case-insensitive category search

#### searchByPriceRange(min, max)
- Returns sweets in price range

#### purchaseSweet(id, quantity)
- Decreases quantity
- Throws error if insufficient stock or sweet doesn't exist

#### restockSweet(id, quantity)
- Increases quantity
- Throws error if sweet doesn't exist

## Project Structure

```
sweet-shop-management-system/
├── src/
│   ├── SweetShop.js
│   └── models/
│       └── Sweet.js
├── test/
│   └── SweetShop.test.js
├── package.json
└── README.md
```

## Contributing

```bash
git checkout -b feature/feature-name
npm test
git commit -m "Add feature"
git push origin feature/feature-name
```

## License

This project is licensed under the ISC License

## Author

- Chhatrotiya
- [YourGitHub](https://github.com/Chhatrotiya)
