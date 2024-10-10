function componente1() {
    let divc1 = document.createElement('div');
    divc1.className = "divC1";


    let h1 = document.createElement('H1');
    h1.className = "h1C1";
    h1.innerText = "RAM";
    divc1.appendChild(h1);

    let img = document.createElement('img');
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCMhRgxiQoZXJ1etXQTytu54Hg2fUZb0hYg&s"
    divc1.appendChild(img);


    return divc1;
}

export {componente1}