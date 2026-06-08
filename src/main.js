import './style.css'

const faqs = document.querySelectorAll(".faq");
console.log(faqs);

faqs.forEach((faq) => {
  const header = faq.querySelector(".faq-header");
  const answer = faq.querySelector(".faq-answer");
  const icon = faq.querySelector(".faq-icon");
  

  header.addEventListener("click", () => {
    answer.classList.toggle("hidden");

    if(answer.classList.contains("hidden")) {
      icon.src = "./assets/images/icon-plus.svg";
      icon.alt = "Plus icon";
    } else {
      icon.src = "./assets/images/icon-minus.svg";
      icon.alt = "Minus icon";
    }
  });
});
