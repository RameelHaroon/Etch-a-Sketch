const container = document.querySelector(".container");
createGrid(16,16);
function createGrid(rows, cols){

    let gridDiv;
    let innerDiv;

    for(let r = 0; r < rows; r++){

        innerDiv = document.createElement("squaresDiv");
        innerDiv.classList = "";
        for(let c = 0; c < cols; c++){
            let cell = document.createElement("div");
            cell.classList.add("square");
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "red";
            })
            innerDiv.appendChild(cell);
        }
        container.appendChild(innerDiv);
    }
}