import { useState } from "react"
import IconStar from "./images/icon-star.svg"

export function App(){
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleMudarNotaAvaliacao(nota){
    setNotaAvaliacao(nota)
  }

  function handleSubmit(){
    if(notaAvaliacao !== 0){
      setSubmited(true)
      return
    }

    alert("Please, choose a note!")
  }
  return(

    submited == false ? (
      <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass">
      <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
        <img src={IconStar} alt="Icon star" />
      </div>

      <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>

      <p className="text-light-grey text-sm leading-1 mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="flex justify-between mb-6">
        <input type="button" value={1} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handleMudarNotaAvaliacao(1)}/>
        <input type="button" value={2} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handleMudarNotaAvaliacao(2)}/>
        <input type="button" value={3} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handleMudarNotaAvaliacao(3)}/>
        <input type="button" value={4} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handleMudarNotaAvaliacao(4)}/>
        <input type="button" value={5} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handleMudarNotaAvaliacao(5)}/>
      </div>

      <button className="bg-orange w-full py-3 uppercase text-sm rounded-3xl tracking-1 font-bold hover:bg-white hover:text-orange hover:cursor-pointer" onClick={handleSubmit}>Submit</button>
    </div>
    ) : (
      <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass">
        <p>{notaAvaliacao}</p>
      </div>
    )
    
  )
}