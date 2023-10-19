document.addEventListener('DOMContentLoaded', function() {
    var popupContainer = document.getElementById('popup-container');
    var closeBtn = document.getElementById('close-btn');
    
    closeBtn.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });

    function showPopup() {
        popupContainer.style.display = 'flex';
        popupContainer.classList.add('slide-down'); 
    }
    
    var triggerButton = document.getElementById('trigger-button'); 
    triggerButton.addEventListener('click', showPopup);
});

document.addEventListener('DOMContentLoaded', function() {
    var today = new Date().toISOString().split('T')[0];
    var dateInput = document.getElementById('date');
    dateInput.setAttribute('min', today);
});

var API_ENDPOINT_1 = "https://ke0bn8p1ni.execute-api.us-east-1.amazonaws.com/step1"

document.getElementById("BUT").onclick = function(){
    console.log("Submit button clicked");
    var inputData = {
        "contact":$('#contact').val(),
        "firstName":$('#firstName').val(),
        "lastName":$('#lastname').val(),
        "email":$('#email').val(),           
        "date":$('#date').val(),          
        "jstatus":$('#jobStatus').val()           
    };
    $.ajax({
        url: API_ENDPOINT_1,
        type: 'POST',
        data:  JSON.stringify(inputData)  ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("BUT").innerHTML = "Profile Saved!";
        },
        error: function () {
            alert("error");
        }
    });
}
var API_ENDPOINT_2 = "https://q6sku0icn9.execute-api.us-east-1.amazonaws.com/step1"

document.getElementById("submit").onclick = function(){
    console.log("Subscribe button clicked");
    var inputData = {
        "emailInput":$('#emailInput').val(),
        "nameInput":$('#nameInput').val(),
        "contactInput":$('#contactInput').val()           
      };
  $.ajax({
        url: API_ENDPOINT_2,
        type: 'POST',
        data:  JSON.stringify(inputData)  ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("submit").innerHTML = "Deatails Saved!";
        },
        error: function () {
            alert("error");
        }
    });
}

