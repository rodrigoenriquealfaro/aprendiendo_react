import Usuario from "./components/Usuario"

const App = () => {
    const sesion = true

    return (
        <>
            {sesion ? <Usuario /> : <p>No has iniciado sesión</p>}
        </>
    )
}

export default App