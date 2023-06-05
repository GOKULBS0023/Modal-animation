const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");
const modalText = document.querySelector(".modal-text");

openBtn.addEventListener("click", ()=>{
    modal.classList.add("toggle-modal");
});
closeBtn.addEventListener("click", ()=>{
    modal.classList.remove("toggle-modal");
});

