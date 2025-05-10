# React-JavaScript-interview-questions

## Question 1: useEffect में async क्यों नहीं इस्तेमाल कर सकते?
**Answer:** useEffect का callback synchronous होना चाहिए। async function callback लौटाएगा एक Promise, जिससे React उसे cleanup समझ सकता है। इसलिए हमें callback में async function को define और call करना चाहिए, ना कि सीधे callback को async बनाना।

```js
useEffect(() => {
  const fetchData = async () => {
    // async logic here
  };
  fetchData();
}, []);