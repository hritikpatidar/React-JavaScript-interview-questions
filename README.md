# 📚 React Interview Questions & Answers

# Table of Contents

| No. | Question                                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------- |
|    | [React Project Installation Using Vite Recommended](#question-react-project-installation-using-vite-recommended)                                               |
|   | [React Project Installation Using Next.js Recommended for Production](#question--react-project-installation-using-nextjs-recommended-for-production)                                               |
|    | Core React                                                                      |
| 1   | [What is ReactJS?](#question-1-what-is-reactjs)                                                                        |
| 2   | [What is the history behind React evolution?](#question-2-what-is-the-history-behind-react-evolution)               |
| 3  | [What Are the Major Features of React?](#question-3-what-are-the-major-features-of-react)                   |
| 4  | [What is the Difference Between Element and Component in React?](#question-4-what-is-the-difference-between-element-and-component-in-react)                   |
| 5  | [How to Create Components in React?](#question-5-how-to-create-components-in-react)                   |
| 6   | [What are Hooks and Important Hooks Explained?](#question-6-what-is-hooks-and-important-hooks-explained)               |
| 7   | [Why can't we use `async` directly in `useEffect`?](#question-7-why-cant-we-use-async-directly-in-useeffect)           |
| 8   | [What is a Higher-Order Component (HOC)?](#question-8-what-is-a-higher-order-component-hoc)                            |
| 9   | [What is State in React?](#question-9-what-is-state-in-react)                                                          |
| 10   | [What is Props in React?](#question-10-what-is-props-in-react)                                                          |
| 11   | [What is the Difference Between State and Props?](#question-11-what-is-the-difference-between-state-and-props)                                                          |
| 12   | [What is Prop Drilling in React?](#question-12-what-is-prop-drilling-in-react)                                          |
| 13   | [What is Context API in React?](#question-13-what-is-context-api-in-react)                                              |
| 14  | [What are the Lifecycle Methods of React Components?](#question-14-what-are-the-lifecycle-methods-of-react-components) |
| 15  | [What are the Types of Components in React?](#question-15-what-are-the-types-of-components-in-react)                   |
| 16  | [What is the difference between HTML and React event handling?](#question-16-what-is-the-difference-between-html-and-react-event-handling)                   |
| 17  | [What Are Synthetic Events?](#question-17-what-are-synthetic-events)                   |
| 18  | [What Are Inline Conditional Expressions?](#question-18-what-are-inline-conditional-expressions)                   |
| 19  | [What is Virtual DOM?](#question-19-what-is-virtual-dom)                   |
| 20  | [What is the difference between Shadow DOM and Virtual DOM?](#question-20-what-is-the-difference-between-shadow-dom-and-virtual-dom)                   |
| 21  | [What is React Fiber?](#question-21-what-is-react-fiber)                   |
| 22  | [What is children prop?](#question-22-what-is-children-prop)                   |
| 23  | [How to write comments in React?](#question-23-how-to-write-comments-in-react)                   |
| 24  | [What is Lifting State Up in React?](#question-24-what-is-lifting-state-up-in-react)                   |
| 25  | [What is the DOM?](#question-25-what-is-the-dom)                   |
|   | Redux               |
| 1  | [What is Redux?](#question-1-what-is-redux)                   |



## Question: React Project Installation Using Vite Recommended

Follow these steps to set up a modern React project using **Vite**:

### 1. Install Node.js
Make sure Node.js (v14.18+ or v16+) is installed. Download it from [https://nodejs.org](https://nodejs.org).

### 2. Create a React + Vite App

```js
npm create vite@latest my-app -- --template react
```
Or
```js
yarn create vite my-app --template react
```
### 3. Navigate into the Project Directory
```js
cd my-app
```
### 4. Install Dependencies
```js
npm install
```
Or
```js
yarn
```
### 5. Start the Development Server
```js
npm run dev
```
Or
```js
yarn dev
```
Your app will be running at http://localhost:5173 by default.

## Question : React Project Installation Using Next.js Recommended for Production

Follow these steps to create a React project with **Next.js**, a powerful React framework with built-in routing, SSR, and more.

### 1. Install Node.js
Make sure you have Node.js installed (v16.8 or higher recommended). Download it from [https://nodejs.org](https://nodejs.org).

### 2. Create a New Next.js App

```js
npx create-next-app@latest my-next-app
```
Or using Yarn
```js
yarn create next-app my-next-app
```
### 3. Navigate into the Project Directory
```js
cd my-next-app
```
### 4. Run the Development Server
```js
npm run dev
```
Or
```js
yarn dev
```
Your app will be live at http://localhost:3000.

### [🔝 Back to Top](#table-of-contents)

 
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
### [🔝 Back to Top](#table-of-contents)


## Question 2: What is the history behind React evolution?
**Answer:** React was developed by **Jordan Walke**, a software engineer at **Facebook**, and was first deployed on Facebook’s newsfeed in **2011**, and later on Instagram in **2012**. It officially became open-source in **May 2013**.

### 🚀 Key Milestones in React's Evolution:

| Year | Milestone                                         |
|------|---------------------------------------------------|
| 2013 | React was open-sourced by Facebook                |
| 2015 | React 0.14 introduced functional components        |
| 2016 | React Fiber architecture was announced             |
| 2017 | React 16 (Fiber) released with better performance |
| 2019 | React Hooks introduced in React 16.8               |
| 2020 | React 17 – no new features, mainly upgrades        |
| 2022 | React 18 released with **Concurrent Mode**, **automatic batching**, and **startTransition** API |

### 📌 Why React Became Popular:
- ✅ Component-based architecture
- ✅ Virtual DOM for fast rendering
- ✅ One-way data flow
- ✅ Reusable components
- ✅ Huge community and ecosystem

### [🔝 Back to Top](#table-of-contents)

## Question 3: What Are the Major Features of React?
**Answer:** React offers a variety of modern features that make it one of the most powerful and popular JavaScript libraries for building user interfaces.

### 🔹 1. JSX (JavaScript XML)
JSX is a syntax extension for JavaScript that allows you to write HTML-like code directly in your JavaScript files. It improves readability and structure.

```jsx
const element = <h1>Hello, React!</h1>;
```
### 🔹 2. Component-Based Architecture
React encourages breaking the UI into independent, reusable components. Each component manages its own logic and rendering, making development scalable and maintainable.

### 🔹 3. Virtual DOM
React uses a virtual DOM to improve performance. When the state of an object changes, React updates only that object in the virtual DOM and then efficiently updates the real DOM.

### 🔹 4. One-Way Data Binding
React implements one-way data binding, meaning data flows from parent to child components. This makes it easier to debug and increases control over the app.

### 🔹 5.Hooks (From React 16.8+)
Hooks allow you to use state and other React features without writing class components. Common hooks include:
- useState
- useEffect
- useContext
- useRef
- useReducer

### 🔹 6. Declarative UI
React allows developers to design views for each state of the application. It will efficiently update and render just the right components when data changes.

### 🔹 7. Rich Ecosystem
React has a rich ecosystem that includes tools and libraries like:
- React Router for routing
- Redux for state management
- Next.js for server-side rendering
- esting tools like Jest and React Testing Library

### [🔝 Back to Top](#table-of-contents)

## Question 4: What is the Difference Between Element and Component in React?
**Answer:** Understanding the difference between **Element** and **Component** is essential for grasping how React applications are built and rendered.

| Feature        | Element                                      | Component                                                |
|----------------|----------------------------------------------|-----------------------------------------------------------|
| **Definition** | A plain object representing a DOM node or another component | A function or class that returns React elements |
| **Creation**   | Created using JSX like `<div />`             | Created using a function or class like `function App() { return <div /> }` |
| **Reusability**| Not reusable by itself                       | Reusable pieces of UI                                     |
| **Rendering**  | Describes what to render                     | Can hold logic and state, and then render elements        |
| **Example**    | `const element = <h1>Hello</h1>;`            | `function Greet() { return <h1>Hello</h1>; }`             |

### 🔸 React Element
A React Element is the smallest building block in a React app. It describes what you want to see on the screen.

```jsx
const element = <h1>Hello World</h1>;
```
### 🔸 React Component
A Component is a function or class that returns elements. It can manage its own logic, state, and rendering.

```jsx
function Welcome() {
  return <h1>Hello from Component</h1>;
}
```
### [🔝 Back to Top](#table-of-contents)

## Question 5: How to Create Components in React?
**Answer:** In React, components are the building blocks of your UI. There are two main ways to create components:

---

### 🔹 1. Functional Components (Recommended)

Functional components are JavaScript functions that return JSX.

```jsx
// Functional Component
function Greeting() {
  return <h1>Hello from Functional Component!</h1>;
}
```
Or using arrow function:
```js
const Greeting = () => {
  return <h1>Hello from Arrow Function!</h1>;
};
```

### 🔹 2. Class Components (Legacy)
Class components are ES6 classes that extend React.Component and must include a render() method.
```jsx
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello from Class Component!</h1>;
  }
}

```

#### 🔸 Which One Should You Use?
React recommends using functional components with Hooks, as they are simpler and offer more flexibility.

### [🔝 Back to Top](#table-of-contents)


## Question 6: What is Hooks and Important Hooks Explained	?
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
### [🔝 Back to Top](#table-of-contents)


## Question 7: Why can't we use `async` directly in `useEffect`?

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
### [🔝 Back to Top](#table-of-contents)


## Question 8: What is a Higher-Order Component (HOC)?

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
### [🔝 Back to Top](#table-of-contents)


## Question 9: What is State in React?

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
 ### [🔝 Back to Top](#table-of-contents)


## Question 10: What is Props in React?

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
### [🔝 Back to Top](#table-of-contents)

## Question 11: What is the Difference Between State and Props?
**Answer:** In React, both **state** and **props** are used to manage data in components, but they serve different purposes.

| Feature     | `props`                              | `state`                                   |
|-------------|--------------------------------------|--------------------------------------------|
| Definition  | Read-only data passed to a component | Data that is managed within the component  |
| Mutability  | Immutable (cannot be changed by child) | Mutable (can be updated using `setState`) |
| Ownership   | Controlled by the parent component   | Controlled by the component itself         |
| Usage       | Used to pass data and functions      | Used for managing local data and UI logic  |
| Accessibility | Available in functional and class components | Same, but commonly used with Hooks (`useState`) |

---

### 🔹 Example: Props
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
### 🔸 Example: State
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

```
📌 Use props to send data to a component and state to manage data inside a component.

### [🔝 Back to Top](#table-of-contents)


## Question 12: What is Prop Drilling in React?

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
### [🔝 Back to Top](#table-of-contents)


## Question 13: What is Context API in React?
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

### [🔝 Back to Top](#table-of-contents)


## Question 14: What are the Lifecycle Methods of React Components?
**Answer:** In React class components, **lifecycle methods** are special methods that get called at different phases of a component’s life. These methods allow you to run code at specific points in a component's lifecycle — such as when it's **created**, **updated**, or **destroyed**.

### 🔁 Lifecycle Phases:

1. **Mounting** – When the component is being inserted into the DOM.
2. **Updating** – When the component is re-rendered due to changes in props or state.
3. **Unmounting** – When the component is removed from the DOM.
4. **Error Handling** – When there is an error during rendering.

---

### 🧱 1. Mounting Methods
| Method                              | Purpose                                                  |
| ----------------------------------- | -------------------------------------------------------- |
| `constructor()`                     | Initializes state and binds methods                      |
| `static getDerivedStateFromProps()` | Updates state based on props (rarely used)               |
| `render()`                          | Returns JSX to render                                    |
| `componentDidMount()`               | Runs after the component is mounted (good for API calls) |

---

### 🔄 2. Updating Methods
| Method                              | Purpose                                                  |
| ----------------------------------- | -------------------------------------------------------- |
| `static getDerivedStateFromProps()` | Runs before every render, even on updates                |
| `shouldComponentUpdate()`           | Allows skipping re-rendering for performance             |
| `render()`                          | Re-renders the UI                                        |
| `getSnapshotBeforeUpdate()`         | Captures info (e.g., scroll position) before DOM updates |
| `componentDidUpdate()`              | Runs after DOM updates                                   |

---

### 🗑️ 3. Unmounting Method
| Method                   | Purpose                                                                 |
| ------------------------ | ----------------------------------------------------------------------- |
| `componentWillUnmount()` | Cleanup before component is destroyed (e.g., clear timers, unsubscribe) |

---

### 🧯 4. Error Handling Methods
| Method                              | Purpose                      |
| ----------------------------------- | ---------------------------- |
| `static getDerivedStateFromError()` | Used to render a fallback UI |
| `componentDidCatch()`               | Logs error details           |

---

### 🔁 Functional Components (Hooks Equivalent)
React Hooks provide similar lifecycle capabilities in functional components:

| Class Component        | Hook Equivalent                           |
| ---------------------- | ----------------------------------------- |
| `componentDidMount`    | `useEffect(() => {}, [])`                 |
| `componentDidUpdate`   | `useEffect(() => {...}, [dep])`           |
| `componentWillUnmount` | `useEffect(() => return () => {...}, [])` |

---

### [🔝 Back to Top](#table-of-contents)


## Question 15: What are the Types of Components in React?
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

### [🔝 Back to Top](#table-of-contents)


## Question 16:  What is the difference between HTML and React event handling?
**Answer:** This section explains the key differences between traditional HTML event handling and event handling in React.

---

### 📌 Difference Between HTML and React Event Handling

| Feature                      | HTML Event Handling                           | React Event Handling                           |
|-----------------------------|-----------------------------------------------|------------------------------------------------|
| **Syntax**                  | Uses lowercase event names with strings       | Uses camelCase event names with functions      |
| **Example**                 | `<button onclick="handleClick()">Click</button>` | `<button onClick={handleClick}>Click</button>` |
| **Function Binding**        | Not required                                  | Often requires binding in class components     |
| **Inline JavaScript**       | Allowed (`onclick="alert('Hi')"` )            | Not recommended; uses JSX expression `{}`      |
| **Event Object**            | Accessed via global `event` object            | Automatically passed as argument in handler    |
| **Cross-browser Support**   | Developers manage differences manually        | React handles cross-browser inconsistencies    |
| **Event Propagation**       | Handled with `event.cancelBubble` or `stopPropagation()` | React uses synthetic events with consistent behavior |

---

✅ **Conclusion**  
React provides a more structured and consistent way to handle events across all browsers using its SyntheticEvent system, while HTML relies on native DOM methods and event handling practices.

### [🔝 Back to Top](#table-of-contents)

## Question 17: What Are Synthetic Events?
**Answer:** Synthetic Events are React’s cross-browser wrapper around the native browser events. They are part of React’s event system and provide a consistent interface for all supported browsers.

---

### 📦 Key Features

- 🧩 **Cross-browser compatibility**: Works the same across all major browsers.
- ⚙️ **Normalized API**: Mimics the native event API for consistency.
- ♻️ **Performance optimization**: React reuses events via a pooling system (deprecated in React 17+).
- 🧼 **Unified behavior**: Prevents bugs due to differences in native event implementations.

---

### 💡 Example Code:

```jsx
function MyButton() {
  const handleClick = (event) => {
    console.log('Button clicked!', event.type); // Outputs: click
    console.log(event.nativeEvent); // Access native DOM event if needed
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### [🔝 Back to Top](#table-of-contents)

## Question 18: What Are Inline Conditional Expressions?

Inline conditional expressions are short logic expressions used to determine what should be rendered inside JSX without using full `if-else` statements.

---

### Common Types

### 1. **Ternary Operator (`condition ? true : false`)**

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```
### 2. Logical AND Operator (&&)

```jsx
{isAdmin && <AdminPanel />}
```
### 3. Logical OR Operator (||)

```jsx
{userName || "Guest"}
```

### 💡 Example Code:
```jsx
function Greeting({ isMorning }) {
  return (
    <h1>
      {isMorning ? "Good Morning!" : "Good Evening!"}
    </h1>
  );
}
```

### Summary
Inline conditional expressions help you:
- Write cleaner and shorter code
- Avoid unnecessary if-else blocks
- Make JSX more readable

## Question 19: What is Virtual DOM?
**Answer:** The **Virtual DOM (VDOM)** is a **lightweight JavaScript representation** of the real DOM. It is a concept used by libraries like **React** to optimize UI rendering and improve application performance.

---

### 🧠 How It Works

1. React creates a **Virtual DOM** whenever there is a change in state or props.
2. It compares the new Virtual DOM with the previous one using a **diffing algorithm**.
3. React then calculates the **minimum number of updates** required to reflect the changes in the **actual DOM**.
4. Only the necessary updates are applied to the real DOM (this process is called **reconciliation**).

---

### 🚀 Benefits of Virtual DOM

- Improves **performance** by reducing direct DOM manipulations.
- Enables **efficient updates** to complex UI structures.
- Provides a **smoother user experience** by applying minimal changes.
- Makes the UI **declarative and predictable**.

---

### 🖼️ Visual Flow

```plaintext
State/Props Change
       ↓
 New Virtual DOM
       ↓
Compare with Previous VDOM (Diffing)
       ↓
Update Real DOM with Minimum Changes (Reconciliation)
```
### [🔝 Back to Top](#table-of-contents)

## Question 20: What is the difference between Shadow DOM and Virtual DOM?
**Answer:** The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

### [🔝 Back to Top](#table-of-contents)

## Question 21: What is React Fiber?

**Answer:** **React Fiber** is the new reconciliation engine introduced in **React 16** that improves how React updates the DOM.

### 🔹 Key Points:
- React Fiber breaks rendering into **small units of work**.
- Allows **pausing, resuming**, or **aborting** rendering tasks.
- Enables **prioritized rendering** — urgent tasks like user input are handled before background updates.
- Powers features like **Concurrent Mode** for smoother, more responsive user interfaces.
- Designed to improve the **performance and flexibility** of React apps.

> 🚀 Think of Fiber as the smart brain behind React’s fast and efficient rendering process.

### [🔝 Back to Top](#table-of-contents)

## Question 22: What is children prop?
**Answer:** Children is a prop that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop.
A simple usage of children prop looks as below,

```jsx
function MyDiv({ children }){
    return (
      <div>
        {children}
      </div>;
    );
}

export default function Greeting() {
  return (
    <MyDiv>
      <span>{"Hello"}</span>
      <span>{"World"}</span>
    </MyDiv>
  );
}
```
<details>
  <summary>See Class</summary>

  ```js
  const MyDiv = React.createClass({
    render: function () {
      return <div>{this.props.children}</div>;
    },
  });

  ReactDOM.render(
    <MyDiv>
      <span>{"Hello"}</span>
      <span>{"World"}</span>
    </MyDiv>,
    node
  );
```
</details>

**Note**: There are several methods available in the legacy React API to work with this prop. These include React.Children.map, React.Children.forEach, React.Children.count, React.Children.only, React.Children.toArray.

### [🔝 Back to Top](#table-of-contents)

## Question 23: How to write comments in React?
**Answer:** In React, you can write comments both **inside JSX** and **outside JSX (in plain JavaScript)**.

### ✅ Comments in JavaScript (outside JSX)

Use standard JavaScript comment syntax:

```js
// This is a single-line comment

/*
  This is a multi-line comment
*/
```
### ✅ Comments in JSX (inside return block)
Use curly braces {} and block comment syntax /* */ inside JSX:
```js
return (
  <div>
    {/* This is a comment inside JSX */}
    <h1>Hello, World!</h1>
  </div>
);
```
### ❌ Invalid JSX Comment (Don't Use This)
```js
<!-- This is not valid in JSX -->
```
 ⚠️ JSX does not support HTML-style (<!-- -->) comments.

### [🔝 Back to Top](#table-of-contents)

## Question 24: What is Lifting State Up in React?
**Answer:** **Lifting State Up** is a common pattern in React where state is moved from child components to their closest common parent. This allows multiple child components to share and coordinate based on the same state.

### It helps in:
- Sharing state between sibling components.
- Centralizing state management in a parent.
- Following React's unidirectional data flow.

### [🔝 Back to Top](#table-of-contents)

## Question 25: What is the DOM?
**Answer:** **DOM** stands for **Document Object Model**.  
It is a programming interface for web documents like HTML and XML.

The DOM represents the structure of a web page as a **tree of objects**, allowing developers to access and manipulate HTML elements using JavaScript.

### 🌳 DOM Structure Example

Given this HTML code:

```html
<html>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

The DOM represents it as:
```js
Document
 └── html
      └── body
           ├── h1 → "Hello World"
           └── p  → "This is a paragraph."

```
🛠️ DOM Manipulation (JavaScript Example)
```jsx
// Select the <h1> element
const heading = document.querySelector('h1');

// Change its content
heading.textContent = "Hello DOM!";
```
### ✅Key Features of DOM

- The DOM is dynamic and updates in real-time.
- JavaScript can access, modify, add, or delete elements using the DOM.
- Common DOM methods:
  1. getElementById()
  2. querySelector()
  3. createElement()
  4. appendChild()
  5. removeChild()

### 📌 Summary 

The DOM allows developers to create interactive and dynamic websites by providing a way to interact with the structure and content of a web page.

### [🔝 Back to Top](#table-of-contents)

## Question 1: What is Redux?
