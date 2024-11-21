# Promises Example in JavaScript

This is a simple demonstration of JavaScript Promise Chaining. The code simulates saving data to a database using Promises, with the result depending on a randomly generated "internet speed". If the internet speed is sufficient, the data will be saved successfully. If the speed is weak, the save operation will fail, and the promise will be rejected.

## Features

- Demonstrates how to use JavaScript Promises for handling asynchronous operations.
- Simulates an asynchronous operation (saving data to a database).
- Uses `.then()` to handle promise resolution and `.catch()` to handle errors.

## Code Explanation

### `savetoDb(data)` Function
The `savetoDb` function simulates saving data to a database by generating a random "internet speed" between 1 and 10. 
- If the speed is greater than 4, the promise is resolved with a success message.
- If the speed is 4 or less, the promise is rejected with an error message.


Clone this repository:

```
git clone https://github.com/Mansuri-Ayan/Js-web-dev-projects.git
```

1. Navigate to the project directory:
2. cd Promise_Chaining
3. Open the file you like in a browser.
