# 📚 React Interview Questions & Answers

# Table of Contents

| No. | Question                                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------- |
|    | [React Project Installation Using Vite Recommended](#question-react-project-installation-using-vite-recommended)                                               |
|   | [React Project Installation Using Next.js Recommended for Production](#question--react-project-installation-using-nextjs-recommended-for-production)                                               |
## Core React

| No. | Question                                 |
|-----|------------------------------------------|
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

## Redux Questions

| No. | Question                                 |
|-----|------------------------------------------|
| 1  | [What is Flux?](#question-1-what-is-flux)                   |
| 2  | [What is Redux?](#question-2-what-is-redux)                   |
| 3  | [ Why Use Redux?](#question-3-why-use-redux)                   |
| 4  | [ What is a store in Redux?](#question-4-what-is-a-store-in-redux)                   |
| 5  | [ What is an action in Redux?](#question-5-what-is-an-action-in-redux)                   |
| 6  | [What is a reducer in Redux?](#question-6-what-is-a-reducer-in-redux)                   |
| 7  | [What is the role of dispatch in Redux?](#question-7-what-is-the-role-of-dispatch-in-redux)                   |
| 8  | [How do you connect a React component with Redux?](#question-8-how-do-you-connect-a-react-component-with-redux)                   |
| 9  | [What is the use of useSelector and useDispatch in Redux?](#question-9-what-is-the-use-of-useselector-and-usedispatch-in-redux)                   |
| 10  | [What is the difference between local state and Redux store?](#question-10-what-is-the-difference-between-local-state-and-redux-store)                   |
| 11  | [What are middleware in Redux? Can you name a few?](#question-11-what-are-middleware-in-redux-can-you-name-a-few)                   |
| 12  | [What is Redux DevTools and how does it help in debugging?](#question-12-what-is-redux-devtools-and-how-does-it-help-in-debugging)                   |
| 13  | [What are pure functions and why should reducers be pure?](#question-13-what-are-pure-functions-and-why-should-reducers-be-pure)                   |
| 14  | [How do you initialize the Redux store in a React app?](#question-14-how-do-you-initialize-the-redux-store-in-a-react-app)                   |
| 15  | [Can you explain the Redux data flow cycle?](#question-15-can-you-explain-the-redux-data-flow-cycle)                   |
| 16  | [What are the pros and cons of using Redux?](#question-16-what-are-the-pros-and-cons-of-using-redux)                   |
| 17  | [How does Redux handle asynchronous operations?](#question-17-how-does-redux-handle-asynchronous-operations)                   |
| 18  | [What is redux-thunk and how does it work?](#question-18-what-is-redux-thunk-and-how-does-it-work)                   |
| 19  | [What is the difference between redux-thunk and redux-saga?](#question-19-what-is-the-difference-between-redux-thunk-and-redux-saga)                   |
| 20  | [What are some alternatives to Redux for state management?](#question-20-what-are-some-alternatives-to-redux-for-state-management)                   |
| 21  | [How would you optimize performance in a large Redux application?](#question-21-how-would-you-optimize-performance-in-a-large-redux-application)                   |
| 22  | [How do you handle large and deeply nested state in Redux?](#question-22-how-do-you-handle-large-and-deeply-nested-state-in-redux)                   |
| 23  | [What are selectors and why are they useful?](#question-23-what-are-selectors-and-why-are-they-useful)                   |
| 24  | [How would you structure a scalable Redux folder architecture?](#question-24-how-would-you-structure-a-scalable-redux-folder-architecture)                   |
| 25  | [What are some common anti-patterns in Redux and how do you avoid them?](#question-25-what-are-some-common-anti-patterns-in-redux-and-how-do-you-avoid-them)                   |
| 26  | [Can you explain Redux Toolkit and its benefits?](#question-26-can-you-explain-redux-toolkit-and-its-benefits)                   |
| 27  | [What is createSlice() in Redux Toolkit? How is it different from traditional Redux?](#question-27-what-is-createslice-in-redux-toolkit-how-is-it-different-from-traditional-redux)                   |
| 28  | [How would you implement undo/redo functionality in Redux?](#question-28-how-would-you-implement-undoredo-functionality-in-redux)                   |
| 29  | [How do you persist Redux state across sessions?](#question-29-how-do-you-persist-redux-state-across-sessions)                   |
| 30  | [Have you ever encountered circular dependencies in Redux modules? How did you solve it?](#question-30-have-you-ever-encountered-circular-dependencies-in-redux-modules-how-did-you-solve-it)                   |
| 31  | [Can I dispatch an action in reducer?](#question-31-can-i-dispatch-an-action-in-reducer)                   |


