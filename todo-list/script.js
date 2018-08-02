let addbtn = document.querySelector("button");
let input = document.querySelector("input")

addbtn.addEventListener('click', function() {
    // create
    let btn = document.createElement("button");
    btn.innerText = input.value;
    btn.classList.add('todo-item');
    document.body.appendChild(btn)

    btn.addEventListener('click', function() {
        document.body.removeChild(btn);
    })

    input.value = "";
});
















