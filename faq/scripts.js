const faqElement = document.getElementById("faqElement");
const faqAnswer = document.getElementById("faqAnswer");

faqElement.addEventListener("click", () => {
    if (faqAnswer.style.visibility === "visible") {
        faqAnswer.style.visibility = "hidden";
        return;
    }
    faqAnswer.style.visibility= "visible";
});