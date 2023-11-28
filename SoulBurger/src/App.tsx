import "./App.css"
import { Card } from "./components/card"
import { data } from "../data"
import { useEffect, useState } from "react"

function App(){
  const [value, setValue] = useState("")
  const [restaurants, setRestaurants] = useState(data)

  useEffect(() => {
    if(value !== "") {
      const busca = data.filter((restaurant) => restaurant.nome.toLowerCase().includes(value.toLowerCase()))
      setRestaurants(busca)
    }else {setRestaurants(data)}
  }, [value])

  return (
    <section className="wrapper">
      <div className="container">
        <div className="wrapper-burger">
          <div className="restaurant">
            <h1> SOUL BURGER </h1>
            <input type="text" placeholder="buscar" value={value} onChange={(e) => setValue(e.currentTarget.value)}/> 
          </div>
          {restaurants.map((restaurant) => {
            return(
              <Card nome={restaurant.nome} endereco={restaurant.endereco} telefone={restaurant.telefone}/>
            )
          })}
          { value !== "" && restaurants.length === 0 && (
            <span>Nenhum restaurante encontrado! </span>
          ) }
        </div>
      </div>
    </section>
  )
}
export default App