const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
        const otherIcon = item.querySelector(".plus-icon");
        otherIcon.src = "img/Vector (2).png";
      }
    });

    faq.classList.toggle("active");

    const icon = faq.querySelector(".plus-icon");
    if (faq.classList.contains("active")) {
      icon.src = "img/Vector (1).png"; 
    } else {
      icon.src = "img/Vector (2).png"; 
    }
  });
});
