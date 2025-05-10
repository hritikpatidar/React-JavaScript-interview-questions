# React-JavaScript-interview-questions

## Question 1: 📘 What is Reactjs📦Latest Version and Key Features in React 18?
**Answer:** **React.js** is a **popular JavaScript library** for building **interactive user interfaces (UIs)**. Developed and maintained by **Meta (formerly Facebook)**, React allows developers to create **reusable UI components**, manage the state efficiently, and build scalable front-end applications.
## ✅ Key Points:
- React.js is **not a framework**, but a **library focused on the "View" layer** in the MVC architecture.
- It uses a **virtual DOM** for efficient UI rendering, which improves performance.
- Supports building **component-based architecture**, making code **reusable and easier to maintain**.
- It allows **declarative UI development**, meaning you describe *what* the UI should look like, and React handles the rendering.

## 🔍 Core Features of React:
- **JSX**: JavaScript syntax extension that lets you write HTML inside JavaScript.
- **Virtual DOM**: Optimized way to update the actual DOM only where needed.
- **Components**: Independent and reusable pieces of code.
- **Unidirectional Data Flow**: Data flows in one direction, making state changes predictable.
- **Hooks**: Functions like `useState`, `useEffect` etc., for managing state and lifecycle in functional components.

## 💡 Example Code:
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

## Question 2: What is Hooks and discribe imp hooks?
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
