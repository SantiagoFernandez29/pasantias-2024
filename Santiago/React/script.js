import React from "https://esm.sh/react@18.2.0"
import ReactDom from "https://esm.sh/react-dom@18.2.0/client"

const appDelDom = document.getElementById('app')

//Creo un root.
const root = ReactDom.createRoot(appDelDom)
//Paso lo que se tiene que renderizar dentro.

const btn = React.createElement('button',{"data-id":123},'Me gusta')
const btn1 = React.createElement('button',{"data-id":123},'Me gusta')

// const div = React.createElement('div',null,[btn,btn1])
const fragment = React.createElement(React.Fragment,null,[btn,btn1])
root.render(fragment)

//Con JSX
// <React.Fragment>
//   <button dataId="123">Button1</button>
//   <button dataId="456">Button2</button>
// </React.Fragment>