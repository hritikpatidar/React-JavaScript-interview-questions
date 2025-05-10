# 📚 React & JavaScript Interview Questions & Answers

# Table of Contents

| No. | Question                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 1   | [What is ReactJS?](#question-1-what-is-reactjs)                                                              |
| 2   | [What are Hooks and Important Hooks Explained?](#question-2-what-is-hooks-and-important-hooks-explained)     |
| 3   | [Why can't we use `async` directly in `useEffect`?](#question-3-why-cant-we-use-async-directly-in-useeffect) |
| 4   | [What is Props?](#question-4-what-is-props)                                                                  |
| 5   | [What is a Higher-Order Component (HOC)?](#question-5-what-is-a-higher-order-component-hoc)                  |
| 6   | [What is Props in React?](#question-6-what-is-props-in-react)|




## Question 1:  What is Reactjs?
**Answer:** **React.js** is a **popular JavaScript library** for building **interactive user interfaces (UIs)**. Developed and maintained by **Meta (formerly Facebook)**, React allows developers to create **reusable UI components**, manage the state efficiently, and build scalable front-end applications.
##  Key Points:
- React.js is **not a framework**, but a **library focused on the "View" layer** in the MVC architecture.
- It uses a **virtual DOM** for efficient UI rendering, which improves performance.
- Supports building **component-based architecture**, making code **reusable and easier to maintain**.
- It allows **declarative UI development**, meaning you describe *what* the UI should look like, and React handles the rendering.

## Core Features of React:
- **JSX**: JavaScript syntax extension that lets you write HTML inside JavaScript.
- **Virtual DOM**: Optimized way to update the actual DOM only where needed.
- **Components**: Independent and reusable pieces of code.
- **Unidirectional Data Flow**: Data flows in one direction, making state changes predictable.
- **Hooks**: Functions like `useState`, `useEffect` etc., for managing state and lifecycle in functional components.

## Example Code:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

## Question 2: What is Hooks and Important Hooks Explained	?
**Answer:** React Hooks allow you to use **state** and **other React features** in functional components.

## 🔹 1. `useState`
Manages **local component state**.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```
## 🔹 2. `useEffect`
Performs side effects (API calls, subscriptions, etc.).

```jsx
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users').then(res => res.json()).then(data => setUsers(data));
  }, []); // empty dependency => runs once (like componentDidMount)
}
```

## 🔹 3. `useContext`
Shares state globally using Context API.

```jsx
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = React.useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
}

```
## 🔹 4. `useCallback`
Memoizes a function to prevent unnecessary re-renders.

```jsx
import { useCallback, useState } from 'react';

const Child = React.memo(({ handleClick }) => (
  <button onClick={handleClick}>Click Me</button>
));

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return <Child handleClick={handleClick} />;
}

```
## 🔹 5. `useMemo`
Memoizes calculated values to optimize performance.

```jsx
import { useMemo, useState } from 'react';

function ExpensiveComponent({ num }) {
  const expensiveValue = useMemo(() => {
    return num * 1000; // simulate heavy calculation
  }, [num]);

  return <div>{expensiveValue}</div>;
}

```
## 🔹 6. `useReducer`
Alternative to useState for complex state logic.

```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'inc': return { count: state.count + 1 };
    case 'dec': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
    </>
  );
}

```
## 🔹 7. `useRef`
Stores mutable reference values, doesn't trigger re-render.

```jsx
import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}

```

## Question 3: Why can't we use `async` directly in `useEffect`?

**Answer:**  The callback function passed to `useEffect` must be **synchronous**. If you make it `async`, it returns a **Promise**, which React would interpret as a cleanup function — but cleanup functions must be synchronous as well.  
To handle asynchronous code, define an `async` function **inside** the `useEffect` and then **call it**.

```js
useEffect(() => {
  const fetchData = async () => {
    // Your async logic here
  };
  fetchData();
}, []);
```
## Question 4: what is props?
**Answer:**

## Question 5: What is a Higher-Order Component (HOC)?

**Answer:** A **Higher-Order Component (HOC)** is a pattern in React that allows you to reuse component logic. It is a function that takes a component and returns a new component with additional props or behavior. HOCs don't modify the original component; instead, they return a new component with enhanced functionality.

### Use cases for HOCs:
- Code reuse
- Conditional rendering
- Adding state or side effects
- Reusing lifecycle methods
- Authentication and authorization logic

### Example of a Higher-Order Component

Here's a simple example of a Higher-Order Component (HOC):

```jsx
// HOC function that adds a message prop
const withMessage = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props} message="Hello from HOC!" />;
  };
};

// Simple component
function Greeting(props) {
  return <h2>{props.message}</h2>;
}

// Using the HOC
const EnhancedGreeting = withMessage(Greeting);

// Usage in App
function App() {
  return (
    <div>
      <EnhancedGreeting />
    </div>
  );
}

export default App;
```
```js
//output
Hello from HOC!
```

## Question 6: What is Props in React?

**Answer:** In React, **props** (short for "properties") are used to pass **data from parent to child components**. They make components **dynamic and reusable**.

###  Key Points:
- Props are passed like attributes to components.
- Props are **read-only** (immutable).
- Useful for component reusability and configuration.

###  Example:

```jsx
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Welcome name="Ritik" />
      <Welcome name="John" />
    </div>
  );
}
```
```js
//output
Hello, Ritik!
Hello, John!
```
