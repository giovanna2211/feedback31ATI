export function InputButton({ value, setNotaAvaliacao }){
    function handleMudarNotaAvaliacao(nota){
        setNotaAvaliacao(nota)
    }

    return(
        <input type="button" value={value} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white hover:cursor-pointer sm:w-13 sm:h-13" onClick={() => handleMudarNotaAvaliacao(value)}/>
    )
}