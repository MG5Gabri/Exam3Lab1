function componente2() {
    let divc2 = document.createElement('div');
    divc2.className = "divC2";


    let h2 = document.createElement('H2');
    h2.className = "h2C2";
    h2.innerText = "Buscar";
    divc2.appendChild(h2);

    let contactFormDiv = document.createElement('div');
    contactFormDiv.className = "contactForm";
    contactFormDiv.innerHTML = `
        <textarea placeholder="Buscar"></textarea>
        <button>Enviar</button>
    `;
    divc2.appendChild(contactFormDiv)

    return divc2;
}

export {componente2}