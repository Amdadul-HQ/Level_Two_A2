# 🚴‍♂️ Bicycle Store API (B4A2V4)

An Express application built with TypeScript and MongoDB using Mongoose to manage a bicycle store. The API supports CRUD operations for bicycles and orders, schema validation, and revenue calculations using MongoDB's aggregation pipeline.

---

## 🛠️ Features

- **CRUD Operations**:
  - Create, Read, Update, and Delete bicycles.
  - Create and manage orders with real-time inventory updates.
- **Schema Validation**:
  - Enforced through Mongoose to ensure data integrity.
- **Inventory Management**:
  - Automatically updates inventory upon order placement.
- **Revenue Calculation**:
  - Uses MongoDB's aggregation pipeline to calculate total revenue.
- **Error Handling**:
  - Returns meaningful error messages for validation, missing data, and insufficient stock scenarios.

---

## 🚀 API Endpoints

### 📦 **Bicycle Endpoints**

1. **Create a Bicycle**
   - **Endpoint**: `POST /api/products`
   - **Request Body**:
     ```json
     {
       "name": "Roadster 5000",
       "brand": "SpeedX",
       "price": 300,
       "type": "Road",
       "description": "A premium road bike designed for speed and performance.",
       "quantity": 20,
       "inStock": true
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Bicycle created successfully",
       "success": true,
       "data": { ... }
     }
     ```

2. **Get All Bicycles**
   - **Endpoint**: `GET /api/products`
   - **Query Params**: `searchTerm` (optional)
   - **Response**:
     ```json
     {
       "message": "Bicycles retrieved successfully",
       "success": true,
       "data": [ ... ]
     }
     ```

3. **Get a Specific Bicycle**
   - **Endpoint**: `GET /api/products/:productId`
   - **Response**:
     ```json
     {
       "message": "Bicycle retrieved successfully",
       "success": true,
       "data": { ... }
     }
     ```

4. **Update a Bicycle**
   - **Endpoint**: `PUT /api/products/:productId`
   - **Request Body**:
     ```json
     {
       "price": 350,
       "quantity": 15
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Bicycle updated successfully",
       "success": true,
       "data": { ... }
     }
     ```

5. **Delete a Bicycle**
   - **Endpoint**: `DELETE /api/products/:productId`
   - **Response**:
     ```json
     {
       "message": "Bicycle deleted successfully",
       "success": true,
       "data": {}
     }
     ```

---

### 🛍️ **Order Endpoints**

1. **Create an Order**
   - **Endpoint**: `POST /api/orders`
   - **Request Body**:
     ```json
     {
       "email": "customer@example.com",
       "product": "648a45e5f0123c45678d9012",
       "quantity": 2,
       "totalPrice": 600
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Order created successfully",
       "success": true,
       "data": { ... }
     }
     ```

2. **Calculate Revenue**
   - **Endpoint**: `GET /api/orders/revenue`
   - **Response**:
     ```json
     {
       "message": "Revenue calculated successfully",
       "success": true,
       "data": {
         "totalRevenue": 1200
       }
     }
     ```

---

## 🏗️ Project Setup

### Prerequisites

- Node.js v16+
- MongoDB

### Installation


Prerequisites
Before setting up the project locally, make sure you have the following installed:

Node.js (v18 or higher) - Download Node.js
MongoDB - Either set up MongoDB locally or use a cloud solution like MongoDB Atlas.

Step 1: Clone the repository
Clone the repository to your local machine. Using SSH:

git clone git@github.com:Amdadul-HQ/Level_Two_A2.git
cd Level_Two_A2

Normal:

git clone https://github.com/Amdadul-HQ/Level_Two_A2.git
cd Level_Two_A2

Step 2: Install Dependencies
Run the following command to install all necessary dependencies:

npm install
Step 3: Set up Environment Variables
Create a .env file in the root of the project to configure the environment variables.

Example .env file:

PORT=5000
DATABASE_URL=mongodb://localhost:27017/
NODE_ENV = development

Make sure to replace the DATABASE_URL with your MongoDB URI if you're using MongoDB Atlas or a different database.

Step 4: Run the Application Locally
Once the dependencies are installed and the environment variables are set up, you can run the project:

npm run start:dev



🧪 Testing the API
Use tools like Postman or cURL to test the endpoints.
Alternatively, integrate the project with Swagger for API documentation.

📹 Video Explanation
Watch Video Explanation
(Provide the link to your video explanation here)[https://www.loom.com/share/bdea431c43784f54a005e48cb934c9e1?sid=702aa20f-1ed6-4ca3-9575-98ab2e91a617]

📂 Deployment
The application is deployed live at:
Live Demo (Provide the live deployment link here)[assigement2.vercel.app/]

📘 Documentation
API Specification: Described in the API Endpoints section.
MongoDB Models:
Product: Represents bicycles in the store.
Order: Represents customer orders.

📈 Features to Improve
Add user authentication and authorization.
Implement a pagination system for fetching bicycles.
Add advanced filtering and sorting capabilities.

🤝 Contributions
Feel free to submit issues or pull requests to enhance this project!

📝 License
This project is licensed under the Amdadul-HQ License. See the LICENSE file for more details.


Copy and paste this into your `README.md` file for GitHub. It is properly organized and formatted for easy navigation and readability. Make sure to replace placeholders like `#` with your actual links and information.
