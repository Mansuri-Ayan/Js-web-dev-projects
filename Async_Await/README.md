<!-- @format -->

# Async/Await with Error Handling in JavaScript

This project demonstrates the use of JavaScript's `async`/`await` along with error handling through `try`/`catch` blocks. The code changes the color of an HTML `<h1>` element sequentially, with each color change wrapped in a promise. If the promise is rejected (simulated by a random number), an error is caught and logged to the console.

## Features

- Uses `async`/`await` for handling asynchronous code.
- Demonstrates error handling with `try`/`catch`.
- Simulates a promise rejection with a random number generator.
- Changes the color of an `<h1>` element dynamically.

## How It Works

1. The `colorChange` function creates a promise that:
   - Changes the color of the `<h1>` element after 1.5 seconds.
   - Rejects the promise with a random chance, simulating an error.
2. The `demo` function is `async`, which awaits the resolution of each `colorChange` promise sequentially.
3. If any promise is rejected, the error is caught in the `catch` block and logged to the console.

## Setup Instructions

To clone this repository and run the project on your local machine:

1. Clone the repository:

```
   git clone https://github.com/Mansuri-Ayan/Js-web-dev-projects.git
```

2. Navigate to the project directory:

```
   cd Js-web-dev-projects
```

3. Open the index.html file in a web browser to see the code in action.

## Example Output
The color of the <h1> element will change sequentially. If a promise is rejected, an error will be logged to the console, and the color changes will stop at the point of rejection.

## Technologies Used
+ HTML
+ JavaScript (ES6+)