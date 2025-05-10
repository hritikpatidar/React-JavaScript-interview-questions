# 📚 React & JavaScript Interview Questions & Answers

# Table of Contents

| No. | Question                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 1   | [What is ReactJS?](#question-1-what-is-reactjs)                                                              |
| 2   | [What are Hooks and Important Hooks Explained?](#question-2-what-is-hooks-and-important-hooks-explained)     |
| 3   | [Why can't we use `async` directly in `useEffect`?](#question-3-why-cant-we-use-async-directly-in-useeffect) |
| 4   | [What is Props?](#question-4-what-is-props)                                                                  |
| 5   | [What is a Higher-Order Component (HOC)?](#question-5-what-is-a-higher-order-component-hoc)                  |
| 6   | [What is State in React?](#question-6-what-is-state-in-react)|
| 7   | [What is Props in React?](#question-7-what-is-props-in-react)|
| 8   | [What is Prop Drilling in React?](#question-8-what-is-prop-drilling-in-react)|
| 9   | [What is Context API in React?](#question-9-what-is-context-api-in-react)|
| 10   | [Lifecycle Methods of React Components?](#question-10-lifecycle-methods-of-react-components)|
| 11   | [Types of Components in React?](#question-11-types-of-components-in-react)|




## Question 1:  What is Reactjs?
**Answer:** **React.js** is a **popular JavaScript library** for building **interactive user interfaces (UIs)**. Developed and maintained by **Meta (formerly Facebook)**, React allows developers to create **reusable UI components**, manage the state efficiently, and build scalable front-end applications.
###  Key Points:
- React.js is **not a framework**, but a **library focused on the "View" layer** in the MVC architecture.
- It uses a **virtual DOM** for efficient UI rendering, which improves performance.
- Supports building **component-based architecture**, making code **reusable and easier to maintain**.
- It allows **declarative UI development**, meaning you describe *what* the UI should look like, and React handles the rendering.

### Core Features of React:
- **JSX**: JavaScript syntax extension that lets you write HTML inside JavaScript.
- **Virtual DOM**: Optimized way to update the actual DOM only where needed.
- **Components**: Independent and reusable pieces of code.
- **Unidirectional Data Flow**: Data flows in one direction, making state changes predictable.
- **Hooks**: Functions like `useState`, `useEffect` etc., for managing state and lifecycle in functional components.

### 💡 Example Code:

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

### 🔹 1. `useState`
Manages **local component state**.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```
### 🔹 2. `useEffect`
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

### 🔹 3. `useContext`
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
### 🔹 4. `useCallback`
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
### 🔹 5. `useMemo`
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
### 🔹 6. `useReducer`
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
### 🔹 7. `useRef`
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

### 💡 Example of a Higher-Order Component

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

## Question 6: What is State in React?

**Answer:** In React, **state** is an object that represents the parts of the app that can change. Each component can maintain its own state, and when the state changes, React re-renders the component to reflect the updated UI.

###  Key Points:
- State is **local** and **mutable** within the component.
- It is used to make the component **interactive and dynamic**.
- In functional components, state is managed using the `useState` hook.
- State updates are **asynchronous** and should be done using the updater function, **not** by directly mutating the state.

### 💡 Example Code:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
 
## Question 7: What is Props in React?

**Answer:** In React, **props** (short for "properties") are used to pass **data from parent to child components**. They make components **dynamic and reusable**.

###  Key Points:
- Props are passed like attributes to components.
- Props are **read-only** (immutable).
- Useful for component reusability and configuration.

### 💡 Example Code:

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

## Question 8: What is Prop Drilling in React?

**Answer:** **Prop Drilling** refers to the process of passing data from a parent component to deeply nested child components via props — even if intermediate components don't need that data but have to pass it along.

This can make components harder to manage and understand, especially in large applications.

###  Problem with Prop Drilling:
- Causes tightly coupled components.
- Intermediate components receive props unnecessarily.
- Makes code harder to maintain and scale.

### 💡 Example Code:

```jsx
function App() {
  const user = "Ritik";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <p>Hello, {user}</p>;
}
```

## Question 9: What is Context API in React?
**Answer:** The **Context API** in React is a built-in solution to manage **global state** or **shared data** between components **without prop drilling** (manually passing props through each component).

It allows you to **create a context**, **provide** it at a high level, and then **consume** it anywhere in your component tree.

### When to Use:
- When multiple components need access to the same data (e.g., theme, authentication, user data).
- To avoid passing props through many intermediate components.

---

### 🔧 Example:

#### 1. Create a Context
```js
import { createContext } from 'react';

export const UserContext = createContext();
```
#### 2. Provide the Context
```js
import React, { useState } from 'react';
import { UserContext } from './UserContext';
import Dashboard from './Dashboard';

function App() {
  const [user, setUser] = useState('Ritik');

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}
```
#### 3. Consume the Context
```js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function Dashboard() {
  const user = useContext(UserContext);

  return <h1>Welcome, {user}</h1>;
}
```

### Benefits:
- Cleaner and more maintainable code.
- Removes the need to pass props down multiple levels.
- Improves component reusability and decouples data access.


## Question 10: Lifecycle Methods of React Components
**Answer:** In React class components, **lifecycle methods** are special methods that get called at different phases of a component’s life. These methods allow you to run code at specific points in a component's lifecycle — such as when it's **created**, **updated**, or **destroyed**.

### 🔁 Lifecycle Phases:

1. **Mounting** – When the component is being inserted into the DOM.
2. **Updating** – When the component is re-rendered due to changes in props or state.
3. **Unmounting** – When the component is removed from the DOM.
4. **Error Handling** – When there is an error during rendering.

---

### 🧱 1. Mounting Methods
| Method               | Purpose                                                |
|----------------------|--------------------------------------------------------|
| `constructor()`      | Initializes state and binds methods                   |
| `static getDerivedStateFromProps()` | Updates state based on props (rarely used)          |
| `render()`           | Returns JSX to render                                  |
| `componentDidMount()`| Runs after the component is mounted (good for API calls) |

---

### 🔄 2. Updating Methods
| Method                        | Purpose                                           |
|-------------------------------|---------------------------------------------------|
| `static getDerivedStateFromProps()` | Runs before every render, even on updates             |
| `shouldComponentUpdate()`     | Allows skipping re-rendering for performance      |
| `render()`                    | Re-renders the UI                                 |
| `getSnapshotBeforeUpdate()`   | Captures info (e.g., scroll position) before DOM updates |
| `componentDidUpdate()`        | Runs after DOM updates                            |

---

### 🗑️ 3. Unmounting Method
| Method              | Purpose                        |
|---------------------|--------------------------------|
| `componentWillUnmount()` | Cleanup before component is destroyed (e.g., clear timers, unsubscribe) |

---

### 🧯 4. Error Handling Methods
| Method                    | Purpose                                      |
|---------------------------|----------------------------------------------|
| `static getDerivedStateFromError()` | Used to render a fallback UI                 |
| `componentDidCatch()`     | Logs error details                            |

---

### 🔁 Functional Components (Hooks Equivalent)
React Hooks provide similar lifecycle capabilities in functional components:

| Class Component       | Hook Equivalent         |
|------------------------|-------------------------|
| `componentDidMount`    | `useEffect(() => {}, [])`     |
| `componentDidUpdate`   | `useEffect(() => {...}, [dep])` |
| `componentWillUnmount` | `useEffect(() => return () => {...}, [])` |

---

## Question 11. Types of Components in React?
**Answer:** React provides different types of components for building UI. These components help in organizing the code, reusing logic, and improving the maintainability of applications.

---

### 1. **Functional Components**
Functional components are JavaScript functions that return JSX. They are simpler and primarily used to render UI. With the introduction of Hooks, they can now manage state and side effects.
  - Lightweight and easy to read
  - Can use Hooks like useState, useEffect, etc.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 2. **Class Components**
Class components are ES6 classes that extend React.Component. They have their own lifecycle methods and state.
- Supports lifecycle methods like componentDidMount
- More verbose than functional components
  
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
### 3. **Pure Components**
Pure components are similar to class components but implement shouldComponentUpdate() with a shallow prop and state comparison to prevent unnecessary re-renders.
- Better performance with less frequent updates
```js
import React, { PureComponent } from 'react';

class MyComponent extends PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}
```
### 4. **Higher-Order Components (HOC)**
A Higher-Order Component is a function that takes a component and returns a new component with added functionality.
- Used for code reuse, logic abstraction

```js
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
}
```

### 5. **Controlled vs Uncontrolled Components**
When dealing with forms in React, there are two approaches to handle form data: **Controlled Components** and **Uncontrolled Components**.
### 🔓 Controlled Components:
In a controlled component, form data is handled by the **React component state**. The input element’s value is controlled by React through `useState`.
### 💡 Example Code:

```jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Value: {inputValue}</p>
    </div>
  );
}
```
### Key Points:
- Data is stored in React state.
- React has full control over the form input.
- Easier to validate and manipulate form data.

### 🔒 Uncontrolled Components: 
In an uncontrolled component, form data is handled by the DOM itself, using ref to access input values directly.

### 💡 Example Code:
```js
import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```
### Key Points:
- Data is stored in the DOM.
- Uses ref to get values.
- Less React code, but harder to manage validations or dynamic changes.