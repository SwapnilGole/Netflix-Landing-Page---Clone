// Accordion
const accordionitemheaders = document.querySelectorAll(
  ".accordion-item-header"
);
accordionitemheaders.forEach((accordionitemheaders) => {
  accordionitemheaders.addEventListener("click", (event) => {
    accordionitemheaders.classList.toggle("active");
    const accordionitembody = accordionitemheaders.nextElementSibling;
    if (accordionitemheaders.classList.contains("active")) {
      accordionitembody.style.maxHeight = accordionitembody.scrollHeight + "px";
    } else {
      accordionitembody.style.maxHeight = 0;
    }
  });
});
