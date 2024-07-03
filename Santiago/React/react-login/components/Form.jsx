import './styles/formStyle.css'

export function Form(){
    return(
        <div className="fullContainer">

        <div className="formContainer">
          <form action="">

            <div className="titleContainer">
              <h1>Login</h1>
            </div>

            <div className="inputsContainer">

              <div className="username">
                    <label htmlFor="name">USERNAME</label>
                    <input type="text" name="username" id="name"/>
              </div>

              <div className="password">
                    <label htmlFor="pass">PASSWORD</label>
                    <input type="password" name="password" id="pass"/>
                    <i className='bx bx-show-alt' id="eye"></i>
              </div>      
          
            </div>

            <div className="bottomContainer">
                    <button id="btn">SIGN UP</button>
                    <a href="">Dont have an account?</a>
                    <p id="frase"></p>
            </div>

          </form>
        </div>

        <div className="phoneContainer">
          <img src="./lock.V3.png" alt="lock"/>
        </div>
      </div>
    )
}