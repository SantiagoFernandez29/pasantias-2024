document.addEventListener('DOMContentLoaded', function() {

document
  .querySelector(".button-toggle")
  .addEventListener("click", toggleInputType);

function toggleInputType(params) {
  
  const InputElement = document.querySelector(".input-toggle");
  if (InputElement.type === "password"){
    InputElement.type = "text";
  }
  else {
    InputElement.type = "password"; 
  }

  console.log(document.querySelector('.button-toggle'));


  const showIcon = document
    .querySelector(".show-icon")
    .classList.toggle("hidden");
  const hideIcon = document
    .querySelector(".hide-icon")
    .classList.toggle("show");
}
});
