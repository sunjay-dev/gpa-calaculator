const br = document.createElement('br');
const MyCard = document.getElementById('results');
const card_body = document.querySelector('.card-body');

function create_select(number, subject_name, credits_hour) {

  const inputText = document.createElement("input"); //Subject1 created
  inputText.className = "input_text"; //subject1 class
  inputText.id = `inputId${number}` //input id 
  inputText.value = subject_name || `Subject${number}`; //subject1 value

  const Usergradeselect = document.createElement("select"); //select for Grade
  Usergradeselect.className = "form-select selectGrade"; //select class name
  Usergradeselect.required = true; // select required
  Usergradeselect.id = `mygrade${number}` //select id
  let gradeArr = ["A", "B+", "B", "C+", "C", "C-", "F"]; //select grades
  let ValueArr = ["3.5", "3", "2.5", "2", "1.5", "1", "0"]; //select values

  const no_option = document.createElement("option"); // unselected option for select created
  no_option.innerHTML = "A+"; // unselected option innerhtml
  no_option.value = "4";   // unselected option value
  no_option.selected = true; // unselected option bydefault selected
  Usergradeselect.appendChild(no_option); // unselected option appeneded

  for (let i = 0; i < gradeArr.length; i++) { //loop to create selectable options
    const option = document.createElement("option");
    option.innerHTML = gradeArr[i];
    option.value = ValueArr[i];  //
    Usergradeselect.appendChild(option);
  }


  const Subject_CH_select = document.createElement("select"); //select for Credit hours
  Subject_CH_select.className = "form-select";
  Subject_CH_select.id = `subjectCH${number}`;

  const CH_options = document.createElement("option");
  CH_options.innerHTML = credits_hour || "Credit Hours";
  CH_options.value = credits_hour || "";
  CH_options.disabled = true;
  CH_options.selected = true;
  CH_options.required = true;
  Subject_CH_select.appendChild(CH_options);


  let CH = [3, 2, 1];
  for (let i = 0; i < CH.length; i++) {
    const option = document.createElement("option");
    option.innerHTML = CH[i];
    option.value = CH[i];
    Subject_CH_select.appendChild(option)
  }



  const div = document.createElement("div"); // div to handle all 3 options
  div.className = "mb-3 form-group";

  document.querySelector('form').appendChild(div);
  div.appendChild(inputText);
  div.appendChild(Usergradeselect);
  div.appendChild(Subject_CH_select);

}
// Starting from here 
function create_input() {

  const optionSelected = document.getElementById("select_subject").value;
  if (optionSelected === "") return;

  const form = document.querySelector('form');

  let start_of_loop = 0;
  if (form.childElementCount > 0) { //remove old elements
    alert("inside")
    form.removeChild(form.lastChild);
    form.removeChild(form.lastChild);

    if (optionSelected < form.childElementCount) {
      while (optionSelected != form.childElementCount) { //if number of new selects are less then before
        form.removeChild(form.lastChild);
      }
    }
    start_of_loop = form.childElementCount;
  }

  for (; start_of_loop < optionSelected; start_of_loop++) {
    create_select(start_of_loop + 1);
  }

  const div = document.createElement("div");
  div.className = "d-grid gap-2 col-6 mx-auto mt-3 b1";

  const Calculate_button = document.createElement("button");
  Calculate_button.id = "Calculate_Button";
  Calculate_button.className = "btn btn-primary";
  Calculate_button.textContent = "Calculate";
  Calculate_button.type = "button";

  div.appendChild(Calculate_button)
  form.appendChild(div)
  form.appendChild(br)

  if (document.querySelector('.footer')) {
    document.querySelector('.footer').className = "readyClass";
    document.querySelector('.footer__copy').className = "readyClass__copy";
  }

  document.querySelector('#Calculate_Button').addEventListener('click', function (e) {

    let Totalsum = 0;
    let chSum = 0;

    for (let i = 1; i <= optionSelected; i++) {

      let gradeValue = document.getElementById(`mygrade${i}`).value;
      let chValue = document.getElementById(`subjectCH${i}`).value;

      if (chValue) {
        Totalsum += (gradeValue * chValue);
        chSum += +chValue;
      }
      else {
        let subjectValue = document.getElementById(`inputId${i}`).value;

        if (subjectValue)
          p1.innerHTML = `Oops! ${subjectValue} Credits Hours are not Selected.<br>Your GPA : NaN`;
        else
          p1.innerHTML = `Oops! Subject${i} Credits Hours are not Selected.<br>Your GPA : NaN`;
        return;
      }
    }
    let finalGPA = (Totalsum / chSum)
    p1.innerHTML = "Your GPA : " + finalGPA.toFixed(2);
  })
}


function create_input_for_params(number_of_subjects, subject_names, credits_hours) {

  const optionSelected = number_of_subjects;
  document.getElementById("select_subject").value = number_of_subjects;
  const form = document.querySelector('form');


  for (let start_of_loop = 0; start_of_loop < optionSelected; start_of_loop++) {
    create_select(start_of_loop + 1, subject_names[start_of_loop], credits_hours[start_of_loop]);
    // console.log(start_of_loop + 1, subject_names[start_of_loop], credits_hours[start_of_loop]);
  }



  const div = document.createElement("div");
  div.className = "d-grid gap-2 col-6 mx-auto mt-3 b1";

  const Calculate_button = document.createElement("button");
  Calculate_button.id = "Calculate_Button";
  Calculate_button.className = "btn btn-primary";
  Calculate_button.textContent = "Calculate";
  Calculate_button.type = "button";

  div.appendChild(Calculate_button)
  form.appendChild(div)
  form.appendChild(br)

  if (document.querySelector('.footer')) {
    document.querySelector('.footer').className = "readyClass";
    document.querySelector('.footer__copy').className = "readyClass__copy";
  }

  document.querySelector('#Calculate_Button').addEventListener('click', function (e) {

    let Totalsum = 0;
    let chSum = 0;

    for (let i = 1; i <= optionSelected; i++) {

      let gradeValue = document.getElementById(`mygrade${i}`).value;
      let chValue = document.getElementById(`subjectCH${i}`).value;

      if (chValue) {
        Totalsum += (gradeValue * chValue);
        chSum += +chValue;
      }
      else {
        let subjectValue = document.getElementById(`inputId${i}`).value;

        if (subjectValue)
          p1.innerHTML = `Oops! ${subjectValue} Credits Hours are not Selected.<br>Your GPA : NaN`;
        else
          p1.innerHTML = `Oops! Subject${i} Credits Hours are not Selected.<br>Your GPA : NaN`;
        return;
      }
    }
    let finalGPA = (Totalsum / chSum);
    showGpaCard(finalGPA.toFixed(2), Totalsum, chSum);
  })
}
function URLValues() {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get('n')) {

    const n = urlParams.get('n');
    let subject_names = urlParams.get('subjects') ? urlParams.get('subjects').split(',') : [];
    let credits_hours = urlParams.get('credits') ? urlParams.get('credits').split(',') : [];
    credits_hours = credits_hours.map(element => parseInt(element));
    create_input_for_params(n, subject_names, credits_hours);

  }
}

function showGpaCard(gpa, Totalsum, chSum) {

  let h5 = document.createElement("h5")
  h5.className = "card-title";
  h5.innerHTML = "Results";
  card_body.appendChild(h5);

  let p1 = document.createElement("p")
  p1.innerHTML = `Total Credit Hours for this Semester: <strong>${chSum}</strong>`;
  card_body.appendChild(p1);

  let p2 = document.createElement("p")
  p2.innerHTML = `Your Total Quality Points for this Semester: <strong>${Totalsum}</strong>`;
  card_body.appendChild(p2);


  let p3 = document.createElement("p")
  p3.innerHTML = `Your GPA is: <strong id="gpa">${gpa}</strong>`;
  card_body.appendChild(p3);

  MyCard.style.display = 'block';  // Make the GPA card visible
}

function showShareCard() {

  let p1 = document.createElement("p")
  p1.innerHTML = "*Copy The Link and Share With Custom Subject Name and Credit Hours";
  card_body.appendChild(p1);

  let Inputdiv = document.createElement("div")
  Inputdiv.className = "input-group";

  let inputURL = document.createElement("input");
  inputURL.id="copy_input";
  inputURL.readOnly = true;
  inputURL.className = "form-control";
  inputURL.value=URLgenerator();

  let btnCopy = document.createElement("button");
  btnCopy.className= "btn btn-primary";
  btnCopy.id = "copyButton";
  btnCopy.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"></path>
      </svg>`;

  card_body.appendChild(Inputdiv);
  Inputdiv.appendChild(inputURL);
  Inputdiv.appendChild(btnCopy);

  btnCopy.addEventListener('click', function () {
  // Select the text field
  
  inputURL.select();
  inputURL.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  document.execCommand('copy');

  // Optionally, you can display an alert or some feedback
  alert('Copied: ' + inputURL.value);
});

  MyCard.style.display = 'block';
}

function CloseCard() {
  MyCard.style.display = "none";
  while (card_body.firstChild) {
    card_body.removeChild(card_body.firstChild)
  }
}


function URLgenerator(){
  let newURL= window.location.href;
  let n = document.getElementById('select_subject').value;
  newURL+= `?n=${n}&subjects=`;

  for (let i = 1; i <= n; i++) {
    newURL+= document.getElementById(`inputId${i}`).value;
    newURL+=",";
  }
  newURL+="&credits=";
  for (let i = 1; i <= n; i++) {
    newURL+= document.getElementById(`subjectCH${i}`).value;
    newURL+=",";
  }

return newURL;
}



URLValues();
