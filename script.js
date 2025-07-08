const add = document.getElementById("button");
const container = document.querySelector(".container");


add.addEventListener("click", function() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("task");
    const input = document.createElement("input");
    input.type = "text";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            input.style.textDecoration = "line-through";
        } else {
            input.style.textDecoration = "none";
        }
    });
checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        input.classList.add("done");

        newDiv.style.opacity = "0";
        newDiv.style.height = "0";
        newDiv.style.marginBottom = "0";
        newDiv.style.padding = "0";

        setTimeout(() => {
            newDiv.remove();
        }, 500);
    }
});

    newDiv.appendChild(input);
    newDiv.appendChild(checkbox);
    container.appendChild(newDiv);
});
