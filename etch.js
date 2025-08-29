let clickCount = 0;
document.querySelectorAll(".dimensions button").forEach((element) => {
    element.addEventListener("click", (e) => {
        if (clickCount >= 3) return;
        clickCount++;
        let [a, b] = e.target.textContent.split("x").map(Number);
        let totalBoxes = a * b;
        requestedBoxes(totalBoxes);
    console.log(totalBoxes);
});
});
let requestedBoxes = (totalBoxes) => {
    let gridSize = Math.sqrt(totalBoxes);
    
    let containerSize = `calc(${100 / gridSize}% - 2px)`;
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = containerSize;
        box.style.height = "30px";
        document.querySelector(".container").appendChild(box);
        box.addEventListener("mouseover", (e) => {    
            e.target.style.backgroundColor = "grey";
    });
  }
};
