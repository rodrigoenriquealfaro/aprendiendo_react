import { useState } from 'react'
import Usuario from "./components/Usuario"

const App = () => {
    const [sesion, cambiarEstadoSesion] = useState(true)

    return (
        <>
            {sesion ?
                <div>
                    <Usuario />
                    <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesión</button>
                </div>
                :
                <div>
                    <p>No has iniciado sesión</p>
                    <button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesión</button>
                </div>
            }
        </>
    )
}

export default App