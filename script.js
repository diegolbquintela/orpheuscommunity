"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// we can remove or add classes to the html
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
// we are not calling the function because we want it to be executed only after the click event happens.
//if we had called the function, it would've execute at first
overlay.addEventListener("click", closeModal);

//responding to keyboard(global) events
// Here we are just 'listening' for an envent, now we need to look for an event
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
