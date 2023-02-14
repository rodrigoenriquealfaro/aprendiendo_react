const nombre = "Rodrigo"
const color = "red"
const sesion = true
const pais = null
const amigos = ['Alejandro', 'Manuel', 'Cesar']

const Usuario = () => {
    return (
        <div>
            <h1 className="titulo" style={{ color: color }}>Hola {nombre}!</h1>
            <p>Tu lista de amigos es:</p>
            {pais && <p>Tu eres de: {pais}</p>}
            <ul>
                {amigos.map((amigo, index) => (<li key={index}>{amigo}</li>))}
            </ul>
            <p>Que tengas un buen día.</p>
        </div>
    )
}

const App = () => {
    return (
        <>
            {sesion ? <Usuario /> : <p>No has iniciado sesión</p>}

        </>
    )
}

export default App