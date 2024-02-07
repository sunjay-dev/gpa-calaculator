function sendWhatsAppMessage(rating) {
  // Replace 'YOURPHONE_NUMBER' with your actual phone number, including the country code
  var phoneNumber = '+923099030247';

  // Adjust the pre-written message as needed
  var message = "I tried the GPA Calculator and, I would give it " + rating + "/5 stars!";

  // Create the WhatsApp link
  var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  // Open the link in a new tab or window
  window.open(whatsappLink, '_blank');
}


function calculate() {
  let gradeOOPs = parseFloat(document.getElementById('gradeOOPs').value);
  let gradeLAAG = parseFloat(document.getElementById('gradeLAAG').value);
  let gradeOOPSPRACTICAL = parseFloat(document.getElementById('gradeOOPSPRACTICAL').value);
  let gradeETHICS = parseFloat(document.getElementById('gradeETHICS').value);
  let gradePS = parseFloat(document.getElementById('gradePS').value);
  let gradeSWE = parseFloat(document.getElementById('gradeSWE').value);
  let gradePP = parseFloat(document.getElementById('gradePP').value);

  let OOPs = 3;
  let LAAG = 3;
  let OOPSPRACTICAL = 1;
  let ETHICS = 2;
  let PS = 2;
  let SWE = 3;
  let PP = 3;

  let sum = (gradeOOPs * OOPs) + (gradeLAAG * LAAG) + (gradeOOPSPRACTICAL * OOPSPRACTICAL) + (gradeETHICS * ETHICS) + (gradePS * PS) + (gradeSWE * SWE) + (gradePP * PP);

  let total = OOPs + LAAG + OOPSPRACTICAL + ETHICS + PS + SWE + PP;

  document.getElementById('result').innerHTML = "Your GPA is: " + (sum / total).toFixed(2);
}



function validateForm() {
  // Get the selected values from the grade dropdowns
  let gradeOOPs = document.getElementById('gradeOOPs').value;
  let gradeLAAG = document.getElementById('gradeLAAG').value;
  let gradeOOPSPRACTICAL = document.getElementById('gradeOOPSPRACTICAL').value;
  let gradeETHICS = document.getElementById('gradeETHICS').value;
  let gradePS = document.getElementById('gradePS').value;
  let gradeSWE = document.getElementById('gradeSWE').value;
  let gradePP = document.getElementById('gradePP').value;

  // Check if any of the fields are empty
  if (gradeOOPs === "" || gradeLAAG === "" || gradeOOPSPRACTICAL === "" ||
      gradeETHICS === "" || gradePS === "" || gradeSWE === "" || gradePP === "") {
    alert("Please select a grade for each subject.");
    return false; // Prevent the form from submitting
  }

  else
  calculate();
}
