const container = document.querySelector(".container");
createGrid();
function createGrid(){

    let rows = 16;
    let cols = 16;
    let gridDiv;
    let innerDiv;

    for(let r = 0; r < rows; r++){

        innerDiv = document.createElement("squaresDiv");
        innerDiv.classList = "";
        for(let c = 0; c < cols; c++){
            let cell = document.createElement("div");
            cell.classList.add("square");
            innerDiv.appendChild(cell);
        }
        container.appendChild(innerDiv);
    }
}