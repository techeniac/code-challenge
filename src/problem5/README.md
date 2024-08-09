
# Crude Server with ExpressJS and TypeScript

## Overview

This project is a simple backend server built using ExpressJS and TypeScript. The server provides a set of CRUD (Create, Read, Update, Delete) operations that allow a user to interact with a resource. The project uses TypeORM to manage database interactions, and SQLite as the database for data persistence.

## Features

- **Create a resource:** Add a new resource to the database.
- **List resources:** Retrieve a list of all resources, with basic filtering capabilities.
- **Get resource details:** Retrieve details of a specific resource by its ID.
- **Update resource details:** Modify the details of an existing resource.
- **Delete a resource:** Remove a resource from the database.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **NPM**: NPM comes bundled with Node.js.

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Setup TypeScript configuration:**
Ensure your tsconfig.json includes the following:
    ```bash
    {
        "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "outDir": "./dist",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
        },
        "include": ["src/**/*"]
    }
   ```

### Running the Server
To start the development server, run:
   ```bash
   npm run dev
   ```
The server will start on http://localhost:3000.

### API Endpoints

-   `POST /resources`: Create a new resource.
-   `GET /resources`: List all resources.
-   `GET /resources/:id`: Get details of a specific resource.
-   `PUT /resources/:id`: Update a specific resource.
-   `DELETE /resources/:id`: Delete a specific resource.

## Database

The application uses SQLite as a simple database for data persistence. The database file will be generated automatically in the project root as `database.sqlite`.

## Acknowledgments

-   [ExpressJS](https://expressjs.com/) for the web framework.
-   [TypeORM](https://typeorm.io/) for ORM and database management.
-   [SQLite](https://www.sqlite.org/) for lightweight data persistence.
-   [TypeScript](https://www.typescriptlang.org/) for typed JavaScript.