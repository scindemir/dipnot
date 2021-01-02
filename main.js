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
});

//trasnformation
const transformButton = document.querySelector('#transform');
transformButton.addEventListener('click', function(e){
  e.preventDefault();
  
  const form = document.querySelector('.form-selection');
  let authorName = form.elements.firstName.value;
  let authorMiddleName = form.elements.middleName.value;
  let authorLastName = form.elements.lastName.value;
  let yearOfPublication = form.elements.yearOfPublication.value;
  let title = form.elements.title.value;
  let location = form.elements.location.value;
  let publisher = form.elements.publisher.value;
  let result = ""; 
  

  if(form.elements.citation.value == 'book'){
    if(form.elements.standard.value == 'apa7') {
      
      authorName = authorName.toLocaleUpperCase('tr-TR');
      let firstLetter = "";
      let letters = authorName.split("");
      firstLetter = letters[0];
      result += firstLetter + ". ";

      if (authorMiddleName != "") {
        authorMiddleName = authorMiddleName.toLocaleUpperCase('tr-TR');
        let middleLetter = "";
        let letters = authorMiddleName.split("");
        middleLetter = letters[0];
        result += middleLetter + ". ";
      } 

      authorLastName = authorLastName.substr(0,1).toLocaleUpperCase('tr-TR')+authorLastName.substr(1);          
      result = authorLastName + ", " + result;

      result = result + "(" + yearOfPublication + "). ";

      title = title.substr(0,1).toLocaleUpperCase('tr-TR')+title.substr(1);
      let titleIt = title.italics();
      result = result + titleIt + ". ";

      location = location.substr(0,1).toLocaleUpperCase('tr-TR')+location.substr(1);
      result = result + location + ": ";

      publisher = publisher.substr(0,1).toLocaleUpperCase('tr-TR')+publisher.substr(1);
      result = result + publisher + ".";
    }
  
    //if(form.elements.standard.value == 'mla8') {
      
    //}
  }

  /*if(form.elements.standard.value == 'apa7') {

  }

  if(form.elements.standard.value == 'mla8') {
    
  }*/

  if(result != ""){
    $("#yourResult").html(result); 
  }
});