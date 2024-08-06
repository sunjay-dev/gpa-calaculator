const br = document.createElement('br');
const p1 = document.getElementById('p1');
function create_select(number) {

  const inputText = document.createElement("input");
  inputText.className = "input_text";
  inputText.id=`inputId${number}`
  inputText.value = `Subject${number}`;

  const Usergradeselect = document.createElement("select");
  Usergradeselect.className = "form-select selectGrade";
  Usergradeselect.required = true;
  Usergradeselect.id = `mygrade${number}`
  let gradeArr = [ "A", "B+", "B", "C+", "C", "C-", "F"];
  let ValueArr = [ "3.5", "3", "2.5", "2", "1.5", "1", "0"];

  const no_option = document.createElement("option");
  no_option.innerHTML = "A+";
  no_option.value = "4";
  no_option.selected = true;
  Usergradeselect.appendChild(no_option);

  for (let i = 0; i < gradeArr.length; i++) {
    const option = document.createElement("option");
    option.innerHTML = gradeArr[i];
    option.value = ValueArr[i];
    Usergradeselect.appendChild(option)
  }


  const Subject_CH_select = document.createElement("select");
  Subject_CH_select.className = "form-select";
  Subject_CH_select.id = `subjectCH${number}`;

  const CH_options = document.createElement("option");
  CH_options.innerHTML = "Credit Hours";
  CH_options.value = "";
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



  const div = document.createElement("div");
  div.className = "mb-3 form-group";

  document.querySelector('form').appendChild(div);
  div.appendChild(inputText);
  div.appendChild(Usergradeselect);
  div.appendChild(Subject_CH_select);

}
 // Starting from here 
function create_input() {

  const optionSelected = document.getElementById("select_subject").value;
  if(optionSelected==="") return;
  
  const form = document.querySelector('form');
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }

  for (let i = 0; i < optionSelected; i++) {
    create_select(i + 1);
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


  document.querySelector('.footer').className = "readyClass";
  document.querySelector('.footer__copy').className = "readyClass__copy";

  
  document.querySelector('#Calculate_Button').addEventListener('click', function(e) {

    let Totalsum=0;
    let chSum=0;
    
    for (let i = 1; i <= optionSelected; i++) {
      
    let gradeValue= document.getElementById(`mygrade${i}`).value;
    let chValue = document.getElementById(`subjectCH${i}`).value;
      
      if(chValue){
      Totalsum+=(gradeValue*chValue);
      chSum+= +chValue;
      }
      else{
        let subjectValue = document.getElementById(`inputId${i}`).value;

        if(subjectValue)
        p1.innerHTML = `Oops! ${subjectValue} Credits Hours are not Selected.<br>Your GPA : NaN`;
        else
          p1.innerHTML = `Oops! Subject${i} Credits Hours are not Selected.<br>Your GPA : NaN`;
        return;
      }
    } 
let finalGPA = (Totalsum/chSum)
    p1.innerHTML = "Your GPA : "+finalGPA.toFixed(2);
  })
}

