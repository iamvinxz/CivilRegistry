
document.addEventListener("DOMContentLoaded", function () {
    const sexRadios = document.getElementsByName("sex");
    const maritalRadios = document.getElementsByName("marital-status");

    const civilStatusDiv = document.getElementById("civil-status-personal");
    const marriedLastNameDiv = document.getElementById("form-married-last-name");
    let labelMiddleName = document.getElementById('middle-name-personal');
    let labelLastName = document.getElementById('last-name-personal');

    // Listen to sex radio buttons
    sexRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value === "female") {
                civilStatusDiv.style.display = "block";
                labelMiddleName.textContent = 'Your Maiden Middle Name';
                labelLastName.textContent = 'Your Maiden Last Name';
            } else{
                civilStatusDiv.style.display = "none";
                marriedLastNameDiv.style.display = "none"; // hide this too if not female
                labelMiddleName.textContent = 'Your Middle Name';
                labelLastName.textContent = 'Your Last Name';
            }
        });
    });

    // Listen to marital status radios
    maritalRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value === "married") {
                marriedLastNameDiv.style.display = "block";
            } else {
                marriedLastNameDiv.style.display = "none";
            }
        });
    });
    
    document.getElementById("birth-back-btn").addEventListener("click", function(event) {
        event.preventDefault(); 
        window.history.back();
    });
});

    



