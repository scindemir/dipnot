//adds one more author

//copy 
/*const addAuthor = document.querySelector('#addAuthor');
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

});*/

//add n
var n = 0;
isAAClicked = false;

const addAuthor = document.querySelector('#addAuthor');
addAuthor.addEventListener('click', function(e){
  e.preventDefault();
  n++;
  if (n<=2) {
    let list = document.querySelector('.form-selection--input--list');
    //name
    let newAuthorList = document.createElement('li');
    newAuthorList.classList.add('form-selection--input--item');
    list.appendChild(newAuthorList);
    let newAuthorInput = document.createElement('input');
    newAuthorInput.classList.add('textInput');
    newAuthorList.appendChild(newAuthorInput);
    newAuthorInput.setAttribute('name', `firstName${n}`);
    newAuthorInput.setAttribute('placeholder', `New autor's first name`);
    //middle name
    let newAuthorListM = document.createElement('li');
    newAuthorListM.classList.add('form-selection--input--item');
    list.appendChild(newAuthorListM);
    let newAuthorInputM = document.createElement('input');
    newAuthorInputM.classList.add('textInput');
    newAuthorListM.appendChild(newAuthorInputM);
    newAuthorInputM.setAttribute('name', `middleName${n}`);
    newAuthorInputM.setAttribute('placeholder', `New autor's middle name`);
    //last name
    let newAuthorListL = document.createElement('li');
    newAuthorListL.classList.add('form-selection--input--item');
    list.appendChild(newAuthorListL);
    let newAuthorInputL = document.createElement('input');
    newAuthorInputL.classList.add('textInput');
    newAuthorListL.appendChild(newAuthorInputL);
    newAuthorInputL.setAttribute('name', `lastName${n}`);
    newAuthorInputL.setAttribute('placeholder', `New autor's last name`);

    isAAClicked = true;

  } else if ( n>2) {
    alert('You can only add two extra authors');
  }
  
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
  let edition = form.elements.edition.value;
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
        result += middleLetter + ".";
      } 

      authorLastName = authorLastName.substr(0,1).toLocaleUpperCase('tr-TR')+authorLastName.substr(1);          
      result = authorLastName + ", " + result;

      if (isAAClicked) {
        if (n===1) {
          let NewAuthorName = form.elements.firstName1.value;
          let NewAuthorMiddleName = form.elements.middleName1.value;
          let NewAuthorLastName = form.elements.lastName1.value;
          
          NewAuthorLastName = NewAuthorLastName.substr(0,1).toLocaleUpperCase('tr-TR')+NewAuthorLastName.substr(1);          
          result = result + ", & " + NewAuthorLastName + ", ";
        
          NewAuthorName = NewAuthorName.toLocaleUpperCase('tr-TR');
          let firstLetter = "";
          let letters = NewAuthorName.split("");
          firstLetter = letters[0];
          result = result + firstLetter + ".";

          if (NewAuthorMiddleName != "") {
            NewAuthorMiddleName = NewAuthorMiddleName.toLocaleUpperCase('tr-TR');
            let middleLetter = "";
            let letters = NewAuthorMiddleName.split("");
            middleLetter = letters[0];
            result = result + middleLetter + "., ";
          } else {
            result = result + ", "
          }
        } else if (n===2) {
          let NewAuthorName = form.elements.firstName1.value;
          let NewAuthorMiddleName = form.elements.middleName1.value;
          let NewAuthorLastName = form.elements.lastName1.value;
          
          NewAuthorLastName = NewAuthorLastName.substr(0,1).toLocaleUpperCase('tr-TR')+NewAuthorLastName.substr(1);          
          result = result + ", & " + NewAuthorLastName + ", ";
        
          NewAuthorName = NewAuthorName.toLocaleUpperCase('tr-TR');
          let firstLetter = "";
          let letters = NewAuthorName.split("");
          firstLetter = letters[0];
          result = result + firstLetter + ".";

          if (NewAuthorMiddleName != "") {
            NewAuthorMiddleName = NewAuthorMiddleName.toLocaleUpperCase('tr-TR');
            let middleLetter = "";
            let letters = NewAuthorMiddleName.split("");
            middleLetter = letters[0];
            result = result + middleLetter + "., ";
          } else {
            result = result + ", "
          }

          let NewAuthorNameTwo = form.elements.firstName2.value;
          let NewAuthorMiddleNameTwo = form.elements.middleName2.value;
          let NewAuthorLastNameTwo = form.elements.lastName2.value;
          
          NewAuthorLastNameTwo = NewAuthorLastNameTwo.substr(0,1).toLocaleUpperCase('tr-TR')+NewAuthorLastNameTwo.substr(1);          
          result = result + ", & " + NewAuthorLastNameTwo + ", ";
        
          NewAuthorNameTwo = NewAuthorNameTwo.toLocaleUpperCase('tr-TR');
          let firstLetterTwo = "";
          let lettersTwo = NewAuthorNameTwo.split("");
          firstLetterTwo = lettersTwo[0];
          result = result + firstLetterTwo + ".";

          if (NewAuthorMiddleNameTwo != "") {
            NewAuthorMiddleNameTwo = NewAuthorMiddleNameTwo.toLocaleUpperCase('tr-TR');
            let middleLetter = "";
            let letters = NewAuthorMiddleNameTwo.split("");
            middleLetter = letters[0];
            result = result + middleLetter + "., ";
          } else {
            result = result + ", "
          }
        }
        
        
      } else {
        result = result + " "
      }

      result = result + "(" + yearOfPublication + "). ";

      title = title.substr(0,1).toLocaleUpperCase('tr-TR')+title.substr(1);
      let titleIt = title.italics();

      if (edition != "") {
        result = result + titleIt + " (" + edition + "). ";
      } else {
        result = result + titleIt + ". ";
      }
      
      publisher = publisher.substr(0,1).toLocaleUpperCase('tr-TR')+publisher.substr(1);
      result = result + publisher;

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