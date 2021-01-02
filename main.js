//adds one more author
const addAuthor = document.querySelector('#addAuthor');
addAuthor.addEventListener('click', function(e){
  e.preventDefault();
  let cloneOne = document.querySelectorAll('.authorName')[0].cloneNode(true);
  document.querySelectorAll(".cloneList")[0].appendChild(cloneOne);
  document.querySelectorAll(".cloneList .authorName")[0].className = "form-selection--input--item";

  let cloneTwo = document.querySelectorAll('.authorMiddleName')[0].cloneNode(true);
  document.querySelectorAll(".cloneList")[0].appendChild(cloneTwo);
  document.querySelectorAll(".cloneList .authorMiddleName")[0].className = "form-selection--input--item";

  let cloneThree = document.querySelectorAll('.authorLastName')[0].cloneNode(true);
  document.querySelectorAll(".cloneList")[0].appendChild(cloneThree);
  document.querySelectorAll(".cloneList .authorLastName")[0].className = "form-selection--input--item";
})