# Assignment - 4

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById(id)  
It selects a single element by its ID. It always returns one element.

getElementsByClassName(className)  
It selects multiple elements by their class name. It returns a live HTMLCollection, which means it updates automatically if the DOM changes.

querySelector(selector)  
It selects the first element that matches a CSS selector. It returns a single element.

querySelectorAll(selector)  
It selects all elements that match a CSS selector. It returns a static NodeList, which does not update automatically when the DOM changes.


---

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM, we use document.createElement() and appendChild().

Example:

```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
newDiv.className = "myClass";

document.body.appendChild(newDiv);
```

First, we create the element.  
Then we add content or class to it.  
Finally, we insert it into the DOM using appendChild().


---

### 3. What is Event Bubbling? And how does it work?

Event Bubbling is a process where an event starts from the target element and then moves up to its parent elements in the DOM.

For example, if you click a button inside a div, the click event will first trigger on the button, then on the parent div, and then on the body.

It is the default behavior of JavaScript events.

Example:

```javascript
document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked");
});
```

If you click the child element, both messages will appear because the event bubbles up to the parent.


---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where we add an event listener to a parent element instead of adding event listeners to each child element.

It works because of event bubbling.

Example:

```javascript
document.getElementById("list").addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("List item clicked");
  }
});
```

Why it is useful:
- It improves performance.
- We do not need to add event listeners to every child element.
- It works for dynamically added elements.


---

### 5. What is the difference between preventDefault() and stopPropagation()?

preventDefault()  
It stops the default behavior of the browser.  
For example, it can stop a form from submitting or stop a link from redirecting.

Example:

```javascript
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submission prevented");
});
```

stopPropagation()  
It stops the event from moving up to parent elements.  
It prevents event bubbling.

Example:

```javascript
document.getElementById("child").addEventListener("click", function(event) {
  event.stopPropagation();
  console.log("Child clicked only");
});
```

Difference:
- preventDefault() stops the browser’s default action.
- stopPropagation() stops event bubbling.
