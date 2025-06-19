import {useEffect, useState } from "react";


const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled]);

  // [] --> se ejuecta una vez al montar el componente
  // [enabled] --> se ejecuta cada vez que cambia el estado de enabled
  // undefind --> cada vez que se renderiza el componente
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    }
  }, [enabled]);

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}>
      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
)}


function App() {
    return (
      <main>
          <FollowMouse />
      </main>
  )
}

export default App
