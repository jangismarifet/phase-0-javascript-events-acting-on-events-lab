const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "100px";

const moveDodgerLeft = (event) => {
    if (event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left - 10}px`;
        if (left < 0) {
            dodger.style.left = `${left + 10}px`;
        }
    }

}
const moveDodgerRight = (event) => {
    if (event.key === "ArrowRight") {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left + 10}px`;
        if (left > 360) {
            dodger.style.left = `${left - 10}px`;
        }
    }
}

document.addEventListener("keydown", moveDodgerRight);
document.addEventListener("keydown", moveDodgerLeft);
