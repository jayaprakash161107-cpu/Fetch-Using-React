# React Fetch API Task

This is a simple React project created to practice fetching data from an API.

## Concepts Used

- React
- useState
- useEffect
- Fetch API
- map() method
- JSX
- CSS

## How It Works

1. The component loads in the browser.
2. `useEffect()` runs the Fetch API request.
3. The API data is received and converted into JSON.
4. `useState()` stores the fetched data.
5. `map()` is used to display every item on the webpage.

## Example Structure

```javascript
import React, { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("API_URL")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
```

## Purpose

The main purpose of this project is to understand how React communicates with an API and displays dynamic data using React Hooks.

## What I Learned

Through this task, I practiced:

- Fetching API data in React
- Using `useEffect()` for API calls
- Storing data using `useState()`
- Displaying multiple API records using `map()`
- Understanding the basic React data flow

## Technologies

- React.js
- JavaScript
- HTML
- CSS
- REST API

## Author

Jayaprakash
