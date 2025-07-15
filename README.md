# Product API for E-Commerce

Documentation as below

---

## Tech Stack

- **Node.js** — Runtime environment  
- **Express** — Web framework for routing and API handling

---

## Getting Started

1. Clone the repo  
```bash
git clone -b Main --single-branch https://github.com/aidijohari/Hustlr-backend-test.git
```
2. Enter folder
```bash
cd Hustlr-backend-test
``` 
3. Install dependencies:
```bash
npm install
```
or
```bash
npm install --legacy-peer-deps
```
4. Run server
```bash
npm run server
```

## Available Endpoints
| Method | Endpoint                 | Description                      |
|--------|--------------------------|----------------------------------|
| GET    | `/products`              | Returns all products             |
| GET    | `/products/:id`          | Returns a product by ID          |
| GET    | `/products?category=...` | Filters products by category     |
| POST   | `/products`              | Adds a new product               |

## Sample request
### Get all products
```bash
curl "http://localhost:4000/products"
```
### Get products by ID
```bash
curl "http://localhost:4000/products/123245"
```
### Get products by category
```bash
curl "http://localhost:4000/products?category=Apparel"
```
### Get all products
```bash
curl -X POST "http://localhost:4000/products" \
  -H "Content-Type: application/json" \
  -d '{"title":"new hat", "price":"29", "category":"Apparel", "imageUrl":"/1.png", "description":"nice shiny hat"}'
```

