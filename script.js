"use strict";

const qnaEl = document.querySelector(".questions-and-answers");

// Selecting node array
const faqQnaEl = document.querySelectorAll(".faq-qna");
const questionEl = document.querySelectorAll(".question");
const answerEl = document.querySelectorAll(".answer");
const arrowEl = document.querySelectorAll(".icon-arrow");
let cList = 0;

qnaEl.addEventListener("click", function (e) {
  if (e.target.matches(".question") || e.target.matches(".icon-arrow")) {
    // removing active classes from non selected elements
    questionEl.forEach((el) => el.classList.remove("show-que"));
    answerEl.forEach((el) => el.classList.remove("show-ans"));
    arrowEl.forEach((el) => el.classList.remove("icon-arrow-rotate"));
    faqQnaEl.forEach((el) => el.classList.remove("active"));

    // Selecting parent element and adding active class
    const parent = e.target.parentNode;
    parent.classList.toggle("active");

    // Selecting child elemts
    const childQues = parent.querySelector(".question");
    const childAns = parent.querySelector(".answer");
    const childArr = parent.querySelector(".icon-arrow");

    // adding active classes to the selected elements
    childQues.classList.add("show-que");
    childAns.classList.add("show-ans");
    childArr.classList.add("icon-arrow-rotate");
  }
});
