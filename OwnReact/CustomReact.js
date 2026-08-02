/*function CustomRenderOld(ReactElement, Container){
    const DOMelement = document.createElement(ReactElement.type)
    DOMelement.innerHTML = ReactElement.children
    // this attribute part is not considered a good practice as we have to input manually all the props for eg if there would've been more values to props then it will take a much longer time
    DOMelement.setAttribute('href', ReactElement.props.href)
    DOMelement.setAttribute('target', ReactElement.props.target)
    Container.appendChild(DOMelement)
}*/
function CustomRenderNew(ReactElement, Container){
    const DOMElement = document.createElement(ReactElement.type)
    DOMElement.innerHTML = ReactElement.children
    for (const prop in ReactElement.props) {
     if (prop === 'children') continue ;
     DOMElement.setAttribute(prop, ReactElement.props
        [prop])
    }
    Container.appendChild(DOMElement)
}
const ReactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to go to Google'
}
const MainContainer = document.querySelector('#root')
// CustomRenderOld(ReactElement, MainContainer)
CustomRenderNew(ReactElement, MainContainer)