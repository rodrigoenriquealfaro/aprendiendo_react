import { TituloRojo, TituloAzul } from "./Titulo"

const Usuario = () => {
    const pais = null
    const amigos = ['Alejandro', 'Manuel', 'Cesar']

    return (
        <div>
            <TituloRojo />
            <TituloAzul />
            <p>Tu lista de amigos es:</p>
            {pais && <p>Tu eres de: {pais}</p>}
            <ul>
                {amigos.map((amigo, index) => (<li key={index}>{amigo}</li>))}
            </ul>
            <p>Que tengas un buen día.</p>
        </div>
    )
}

export default Usuario