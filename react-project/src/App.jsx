import { useReducer, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header({ name, year }) {
  console.log({ name, year })
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}
const items = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu",
  "nine"
]

const dishObjects = items.map((dish, i) => (
  {
    id: i,
    title: dish
  }
))
function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>I want to be open</button>
        <h2>Welcome to this beautiful restaurant that is {openStatus ? "open" : "closed"}!</h2>
      </div>
      <main>
        <img height={200} src="https://github.com/hphucnp.png" alt='A photo of a smiling chef owner' />
        <ul>
          {dishes.map(dish =>
            (<li key={dish.key} style={{ listStyleType: "none" }}>{dish.title}</li>))}
        </ul>
      </main>
    </>
  )
}
function App() {
  // const [status, setStatus] = useState(true)
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  )
  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}`)
  }, [status])

  return (<>
    <h1> The restaurant is currently {status ? "open" : "closed"}</h1>
    <button onClick={toggle}>{status ? "Close" : "Open"} Restaurant</button>
    <Header name="Phuc" year={new Date().getFullYear()} />
    <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
  </>
  )
}

export default App
