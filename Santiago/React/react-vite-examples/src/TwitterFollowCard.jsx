//Añado un Hook: permite dar funcionalidad extra a componentes de react.
import { useState } from 'react' //El useState sirve para guardar una variable con el estado del botón, si estamos o no siguiendo a la persona.
//El useState devuelve: [valorActual,formaDeActualizarlo]

export function TwitterFollowCard ({formatUserName,userName = 'unknown', name,inicialIsFollowing}){
    const [isFollowing,setIsFollowing] = useState(inicialIsFollowing);
    
    //Uso de renderizado condicional.
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'btn is-following' : 'btn'

    const handleClick = () => {
            setIsFollowing(!isFollowing);
    }

    return( 
        <article className="tw-card">
            <header className="tw-cardContent">
                <img className="tw-img" 
                     src={`https://unavatar.io/${userName}`} alt="Imagen de avatar" />
                <div className="tw-caracts">
                    <strong className="name">{name}</strong>
                    <span className="account">{formatUserName(userName)}</span>
                </div>
            </header>

            <aside className="tw-actionContent">
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>

        </article>
    )
}