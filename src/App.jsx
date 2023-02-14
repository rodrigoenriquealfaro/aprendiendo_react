const nombre = "Rodrigo"
const color = "blue"
const sesion = true
const pais = null
const amigos = ['Alejandro', 'Manuel', 'Cesar']

const App = () => {
    return (
        <>
            {sesion
                ?
                <>
                    <p>Has iniciado sesión</p>
                    <h1 className="titulo" style={{ color: color }}>Hola {nombre}!</h1>
                    <p>Que tengas buen día</p>
                    {pais && <p>Tu eres de: {pais}</p>}
                    <ul>
                        {amigos.map((amigo, index) => (
                            <li key={index}>{amigo}</li>
                        ))}
                    </ul>
                </>
                : <p>No has iniciado sesión</p>}

        </>
    )
}

export default App