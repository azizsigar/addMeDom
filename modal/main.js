const modalButton = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close");

modalButton.addEventListener("click", async () => {
    modal.style.visibility = "visible";

    closeButton.addEventListener("click", () => {
        modal.style.visibility = "hidden";
    });

    await new Promise(res => setTimeout(res, 2000));

    modal.style.visibility = "hidden";
});