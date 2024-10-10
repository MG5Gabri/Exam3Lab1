import { componente1 } from "./componente/componente1/componente1.js";

let DOM = document.querySelector("#root");

let section1 = document.createElement('section')
section1.appendChild(componente1())

DOM.appendChild(section1);
