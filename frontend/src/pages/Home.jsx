import React from 'react'

function Home() {
  const [count, setCount] = React.useState(0)
  return (<div>
    <h1>Home</h1>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>)
}

export default Home