<!-- @format -->

# Event Bubbling Example

This is a simple HTML and JavaScript example demonstrating the concept of **Event Bubbling**. It includes a basic DOM structure with nested elements, and JavaScript is used to capture click events at different levels of the DOM tree.

## Table of Contents

- [Description](#description)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Description

This project demonstrates the concept of **Event Bubbling** in JavaScript. Event bubbling is a mechanism where an event triggered on an element propagates (or "bubbles") up to its parent elements, unless the event propagation is explicitly stopped.

In this example, there are three levels of nested elements:

- A `div` element
- A `ul` (unordered list) element inside the `div`
- Three `li` (list items) elements inside the `ul`

Each of these elements has an event listener attached that logs messages when they are clicked. The `event.stopPropagation()` method is used to prevent the event from bubbling up the DOM tree, meaning that clicking on an `li` will stop the event from reaching the `ul` or `div` elements.

## How It Works

1. **Event Bubbling**: When a user clicks an element, the event bubbles up from the target element (in this case, an `li`) to its parent elements (`ul`, `div`).
2. **Event Listeners**: The JavaScript code sets up event listeners on the `li`, `ul`, and `div` elements to log a message whenever any of these elements are clicked.
3. **`stopPropagation()`**: In this code, the `stopPropagation()` method is used to prevent the event from bubbling up, so that each element logs its own message and prevents other elements from triggering their own events.

### Example of the output when clicking on the `li` elements:

- **Clicking an `li` element**: Logs `"li was clicked"`, but prevents the `ul` and `div` events from firing.
- **Clicking on the `ul` element**: Logs `"ul was clicked"` (if you click directly on the `ul`, not inside any `li`).
- **Clicking on the `div` element**: Logs `"div was clicked"` (if you click outside the `ul` and `li`).

## Usage

1. Clone the repository to your local machine:

git clone https://github.com/Mansuri-Ayan/Js-web-dev-projects.git
