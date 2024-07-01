import { useState } from 'react'
import { Square } from './Square.jsx'
import { TURNS, WINNER_COMBOS} from './constants.js'
import { WinnerModal } from './WinnerModal.jsx'
import './App.css'

function App() {
  //Armo el tablero, inicialmente vacío
  const [board, setBoard] = useState(Array(9).fill(null))
  
  
  // const [board, setBoard] = useState(() => {
  //   const boardFromStorage = window.localStorage.getItem('board')
  //   //Si tengo un board guardado en el storage entonces hago un JSON.parse de eso que tenía guardado para inicializar el estado con eso, sino uso el valor por defecto 
  //   return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  // })


  //Inicializo los turnos, arranca X
  const [turn, setTurn] = useState(TURNS.X)
  // const [turn, setTurn] = useState(() => {
  //   const turnFromStorage = window.localStorage.getItem('turn')
  //   //devuelvo turnFromStorage si no es null o undefinde, sino utilizo el predeterminado TURNS.X
  //   return turnFromStorage ?? TURNS.X})


    
  //Establezco ganador, null no gano nadie, false hay empate
  const [winner, setWinner] = useState(null)
 
  //Establezco un ganador
  const checkWinner = (boardToCheck) => {
    //Reviso todas las poibles combinaciones ganadoras para ver si 'x' u 'o' ganó.
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if( //Si todas las letras coinciden
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a] //nos devuelve 'x' u 'o'
      }
    }
    //Si no hya ganador retorno null, que simboliza empate.
    return null
  }

  const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    // si no hay más espacios vacíos
    // en el tablero
    return newBoard.every((square) => square !== null)
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    //Elimino lo almacenado en el local storage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  
  const updateBord = (index) => {
    //si ya hay algo en un casillero o si hay un ganador, entonces no sobreescribo
    if(board[index] || winner) return
    //actualizar el tablero
    const newBoard = [... board] //Spread operator: quiero que todos los elementos del board (...board) los metas en un nuevo array [(...board)]
    newBoard[index] = turn
    setBoard(newBoard)
    //Establezco el cambio de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)


    //Guardo el estado del tablero, uso JSON.stringify PARA GUARDAR EL ARRAY
    // window.localStorage.setItem('board',JSON.stringify(newBoard))
    // //Guardo el estado del turno
    // window.localStorage.setItem('turn',newTurn)

    
    //Guardo la partida en cada movimiento anrtes de verificar si hay un ganador
    //Verifico si una vez que se actualizo el tablero hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)
      //La actualización de estados en react es asíncrona, por eso si pongo un alert abajo, primero se va a ver el alert antes de renderizarse el turno en el casillero.
      // Si hay còdigo posterior lo va a ejecutar, por eso se muestra el alert.
      //alert(`el ganador es ${newWinner}`)
    } else if(checkEndGame(newBoard)){
        setWinner(false)
    }
  }
  
  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className="game">
          {
            board.map((square,index) => {
              return(
                <Square 
                  key={index} 
                  index={index}
                  updateBord={updateBord}>
                  {square}
                </Square>
              )
            }
          )}
        </section>

        <section className="turn">
          <Square isSelected = {turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected = {turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
        
        <WinnerModal resetGame={resetGame} winner={winner}>
        </WinnerModal>

      </main>
    </>
  )
}

export default App
