# week-10-homework

WRITTEN

What is a REST API?

A set of guidelines and practices for creating and utilizing web services is known as a REST API (Representational State Transfer API). It enables the use of common HTTP protocols for system communication over the internet. A REST API commonly employs HTTP methods to interact with resources and URLs (Uniform Resource Locators) to identify resources. If you have an API for managing books, for instance, you may use it to create, read, update, or delete books by sending HTTP requests to the relevant URLs.

What makes an API "RESTful"?

When an API follows the rules and restrictions of REST, it is said to be "RESTful." The use of HTTP methods (GET, POST, PUT, PATCH, DELETE) for various actions, the use of URLs to identify resources, the provision of stateless communication, and the adoption of a client-server architecture are some examples of these principles. Resources are often represented as nouns in a RESTful API, and the API endpoints offer a means of interacting with those resources. A RESTful API for managing people, for instance, might offer endpoints like /users for getting a list of all users or adding a new user, and /users/id> for accessing, changing, or deleting a particular user.

What is Node.js and why is it often used for building server-side applications?

Node.js enables you to execute JavaScript code on the server-side. It is effective and well-suited for developing scalable network applications because it employs an event-driven, non-blocking I/O architecture. Because it enables developers to write both the client-side and server-side code in the same language (JavaScript), Node.js is frequently used for server-side applications. This can speed up development and increase code reusability.

What are some key features of Express.js that make it useful for building web servers?

Express.js's simplicity, adaptability, and extensibility are some of its primary advantages for developing web servers. Express.js offers a straightforward and unprescriptive method that empowers developers to organize their applications as needed. It is a flexible framework for creating web servers since it provides middleware support, routing capabilities, template engine integration, and simple handling of HTTP requests and responses.

What is middleware in Express.js and how is it used?

In the middleware stack of an application, functions that can be used to process requests and responses are referred to as middleware in Express.js. The request and response objects are accessible to middleware functions, and they can carry out activities like altering the request or response, calling the following middleware function, or ending the request-response cycle. An Express.js application can utilize middleware to add features like logging, authentication, error handling, or request body processing.

What is the difference between GET, POST, PUT, PATCH, and DELETE HTTP verbs in the context of a RESTful API?

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

  
  
  
  
  
  
