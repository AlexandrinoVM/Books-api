# Books-api
A simple Book API using Node.js, Express e PostgreSQL.

## instalation

1. Clone the repository:
    ```bash
    git clone https://github.com/AlexandrinoVM/Books-api
    cd minha-api
    ```

2. Install dependencies:
    ```bash
    npm install express pg
    npm install dotenv
    npm install --save-dev nodemon
    ```

3. Configure the environment variables:
    - Create a `.env` file in the project root and add your settings:
    ```plaintext
    HOST
    USER
    DATABASE
    PASSWORD
    PORT_DB
    ```

4. Database schema.

   ``` Datanase schema 
    CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    page_number INTEGER,
    category VARCHAR(100)
    );
   ``
   

## Use

1. init the server:
    ```bash
    npm run dev
    ``

2. The API is running on `http://localhost:3000`.

## Endpoints

- **GET** `/api/books` - GET books data
- **GET** `/api/books/:id` - GET book data by ID
- **POST** `/api/books` -  CREATE a new book
- **PUT** `/api/books/:id` - UPDATE a book by ID
- **DELETE** `/api/books/:id` - DELETE a book by ID
