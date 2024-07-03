export function Form(){
    return(
        <form action="">
            <div className="title">
                <h1>Ejemplo de Fetch</h1>
            </div>

            <div className="inputsContainer">
                <div className="inputName">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre"/>
                </div>
                <div className="inputPassword">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" />
                </div>
            </div>

            <button type="submit">Enviar datos</button>
            
        </form>
    )
}