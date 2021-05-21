const list = document.querySelector("#list");

list.addEventListener("click", ev => {

    let path = ev.path;

    for (let i of path) {
        if (i.tagName === "LI") {
            ev.target.classList.toggle("selected");
            break;
        }
    }
});