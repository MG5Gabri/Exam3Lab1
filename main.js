import { componente1 } from "./componente/componente1/componente1.js";
import { componente2 } from "./componente/componente2/componente2.js";
import { componente3 } from "./componente/componente3/componente3.js";

let DOM = document.querySelector("#root");

let section1 = document.createElement('section');
section1.appendChild(componente1());

let section2 = document.createElement('section');
section2.appendChild(componente2());

let section3 = document.createElement('section');
section3.appendChild(componente3());

DOM.appendChild(section1);
DOM.appendChild(section2);
DOM.appendChild(section3)
