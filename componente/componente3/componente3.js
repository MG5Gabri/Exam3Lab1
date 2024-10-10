function componente3() {
    let divc3 = document.createElement('div');
    divc3.className = "divC3";


    let h3 = document.createElement('H3');
    h3.className = "h3C3";
    h3.innerText = "Caracteristicas";
    divc3.appendChild(h3);

    let ul = document.createElement('ol');
    ul.className = "listaCaracteristicas";

    // Agregar 10 elementos a la lista
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement('li');
        li.innerText = `Dato ${i}`;
        ul.appendChild(li);
    }

    divc3.appendChild(ul);

    return divc3;
}

export {componente3}