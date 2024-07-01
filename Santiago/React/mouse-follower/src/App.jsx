import { useEffect, useState } from "react"

function App(){

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x:0, y:0})
  
  useEffect(() => {
    console.log('effect', {enabled})

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x:clientX , y:clientY })
    }
    if (enabled){
      window.addEventListener('pointermove',handleMove)
    }


    //Dentro del useEffect tengo que devolver una función que indique como limpiar el efecto
    //Se ejecuta cuando se deja de renderizar el componente y cuando cambia la dependencia.
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  },[enabled])
  
  useEffect(() => {
    document.body.classList.toggle('no-cursor',enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled] )
  
  return (
    <>
      {/* bolita que sigue el cursor */}
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar ' : 'Activar '} seguir puntero
      </button>
    </>
  )
}

export default App
