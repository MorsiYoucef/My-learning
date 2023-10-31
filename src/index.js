import React from 'react'
import ReactDOM from 'react-dom/client'

const Greeting = () => {
  return React.createElement('h1', {}, 'hello world!')
}
const HelloWorld = () => {
  return <h1>Another Hello World!</h1>
}
const root1 = ReactDOM.createRoot(document.getElementById('root'))

root1.render(<HelloWorld />)
root1.render(<Greeting />)
