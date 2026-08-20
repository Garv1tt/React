import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}
// this reactelement is not running because of the name we have given like type props children target the real react does not need any names for eg:reactelementnew
// const ReactElementOld = {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to go to Google'
// }
const anotherelement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const ReactElementNew = React.createElement(
  'a',
  {
    href: 'https://google.com', target:'_blank'
  },
  'Click me to Visit Google'
)
ReactDOM.createRoot(document.getElementById('root'))
.render(

  ReactElementNew
 
)
