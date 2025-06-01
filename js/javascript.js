const container = document.querySelector(".container");
const gridSizeBtn = document.querySelector("#prompt-btn");

let size = 16;
createGrid(size,size);

gridSizeBtn.addEventListener("click", () =>{
    while(true){
        size = parseInt(prompt("Enter a number between 0-100"));
        if(size >= 1 && size <= 100){
            
            container.innerHTML = "";
            createGrid(size,size);
            break;
        }else{
            alert("Invalid input");
        }
    }
});


function createGrid(rows, cols){

    let gridDiv;
    let innerDiv;

    for(let r = 0; r < rows; r++){

        innerDiv = document.createElement("div");
        innerDiv.classList = "squaresDiv";
        for(let c = 0; c < cols; c++){
            let cell = document.createElement("div");
            cell.classList.add("square");
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = getRandomColor();
            })
            innerDiv.appendChild(cell);
        }
        container.appendChild(innerDiv);
    }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

gridSizeBtn.addEventListener("click", () =>{
    let size
});