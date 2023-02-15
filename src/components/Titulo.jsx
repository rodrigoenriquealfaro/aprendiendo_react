const TituloRojo = () => {
    const nombre = "Rodrigo"
    const color = "red"

    return (
        <div>
            <h1 className="titulo" style={{ color: color }}>Hola {nombre}!</h1>
        </div>
    )
}

const TituloAzul = () => {
    const nombre = "Rodrigo"
    const color = "blue"

    return (
        <div>
            <h1 className="titulo" style={{ color: color }}>Hola {nombre}!</h1>
        </div>
    )
}

export { TituloRojo, TituloAzul }