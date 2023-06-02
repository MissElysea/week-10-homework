# week-10-homework

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

  
  
  
  
  
  
