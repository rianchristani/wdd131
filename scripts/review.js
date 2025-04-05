document.addEventListener("DOMContentLoaded", () => {
    const submitCount = localStorage.getItem("submitCount") || 0;
    document.querySelector("#submitCount").textContent = submitCount;
});
