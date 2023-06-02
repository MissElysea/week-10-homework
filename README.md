# week-10-homework

WRITTEN

What is a REST API?

A REST API (Representational State Transfer API) is a set of rules and conventions for building and interacting with web services. It allows systems to communicate over the internet using standard HTTP protocols. A REST API typically uses URLs (Uniform Resource Locators) to identify resources and HTTP methods to perform operations on those resources. For example, if you have an API for managing books, you can use the API to create, read, update, or delete books by sending HTTP requests to the appropriate URLs.

What makes an API "RESTful"?

An API is considered "RESTful" when it adheres to the principles and constraints of REST. These principles include using HTTP methods (GET, POST, PUT, PATCH, DELETE) for different operations, utilizing URLs to identify resources, supporting stateless communication, and following a client-server architecture. In a RESTful API, resources are typically represented as nouns, and the API endpoints provide a way to interact with those resources. For example, a RESTful API for managing users might have endpoints like /users for getting all users or creating a new user, and /users/{id} for getting, updating, or deleting a specific user.

What is Node.js and why is it often used for building server-side applications?

Node.js is a runtime environment that allows you to run JavaScript code on the server-side. It uses an event-driven, non-blocking I/O model, which makes it efficient and well-suited for building scalable network applications. Node.js is often used for server-side applications because it allows developers to write both the client-side and server-side code in the same language (JavaScript), which can streamline development and improve code reusability.

What are some key features of Express.js that make it useful for building web servers?

Express.js is a popular web application framework for Node.js. Some key features that make Express.js useful for building web servers include its simplicity, flexibility, and extensibility. Express.js provides a minimalistic and unopinionated approach, allowing developers to structure their applications as per their requirements. It offers middleware support, routing capabilities, template engine integration, and easy handling of HTTP requests and responses, making it a versatile framework for building web servers.

What is middleware in Express.js and how is it used?

Middleware in Express.js refers to functions that can be used to process requests and responses in the application's middleware stack. Middleware functions have access to the request and response objects, and they can perform operations such as modifying the request or response, invoking the next middleware function, or terminating the request-response cycle. Middleware can be used to add functionality to an Express.js application, such as logging, authentication, error handling, or parsing request bodies.

What is the difference between GET, POST, PUT, PATCH, and DELETE HTTP verbs in the context of a RESTful API?

In the context of a RESTful API:

GET is used to retrieve data from a server. For example, you might use a GET request to fetch a list of users or retrieve a specific user.
POST is used to send data to the server to create a new resource. For example, you might use a POST request to create a new user or submit a form.
PUT is used to update an existing resource. It replaces the entire resource with the new data provided. For example, you might use a PUT request to update a user's information.
PATCH is used to partially update an existing resource. It applies changes to specific fields of the resource. For example, you might use a PATCH request to update only the email address of a user.
DELETE is used to delete a resource from the server. It is used to remove a specific resource from the server. For example, you might use a DELETE request to delete a user from the system.

How to handle parameters in the URL with Express.js?

Express.js allows you to handle parameters in the URL using the colon (:) notation. These parameters can be accessed in the request object's params property. 

How to handle error situations when building an Express.js API?

Express.js provides error handling middleware that can be used to handle errors in the application. This middleware is defined after all other middleware and routes, using the app.use method. 

How to structure routes for a resource like items in Express.js for CRUD operations?

In Express.js, you can structure routes for a resource like items by following RESTful conventions.

How to parse incoming request bodies in Express.js?

To parse incoming request bodies in Express.js, you can use middleware such as body-parser or the built-in express.json() middleware.

PRACTICAL

1. To start the server use 'node express.js' on the command line. You should see the message "Server is listening on port 3000" in the console, indicating that the server is running.
2. Now that the server is running, you can use the API. You can use tools like Postman or cURL to send HTTP requests to the specified endpoints. 
3. To retrieve the list of items, send a GET request to http://localhost:3000/items.
4. To add a new item, send a POST request to http://localhost:3000/items with a JSON body containing the name and price fields.
5. To retrieve a specific item by its ID, send a GET request to http://localhost:3000/items/:id, replacing :id with the actual ID of the item.
6. To update an item by its ID, send a PUT request to http://localhost:3000/items/:id, replacing :id with the actual ID of the item, and include a JSON body with the updated name and price fields.
7. To delete an item by its ID, send a DELETE request to http://localhost:3000/items/:id, replacing :id with the actual ID of the item.

THEORETICAL

function matrix(n) {

    // To Create The Matrix //

    const result = Array(n).fill().map(() => Array(n));
  
    let value = 1;
    let startRow = 0;
    let startCol = 0;
    let endRow = n - 1;
    let endCol = n - 1;
  
    while (startRow <= endRow && startCol <= endCol) {

      // Top Row //

      for (let col = startCol; col <= endCol; col++) {
        result[startRow][col] = value;
        value++;
      }
      startRow++;
  
      // Right Column //

      for (let row = startRow; row <= endRow; row++) {
        result[row][endCol] = value;
        value++;
      }
      endCol--;
  
      // Bottom Row //

      for (let col = endCol; col >= startCol; col--) {
        result[endRow][col] = value;
        value++;
      }
      endRow--;
  
      // Left Column //

      for (let row = endRow; row >= startRow; row--) {
        result[row][startCol] = value;
        value++;
      }
      startCol++;
    }
  
    return result;
  }

  
  
  
  
  
  
