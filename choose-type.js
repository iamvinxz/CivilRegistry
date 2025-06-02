const docBtn = document.querySelectorAll('.document-type button');

let selectedDocument = '';

// Get the 'type' parameter from URL (e.g., 'personal' or 'someone')
const urlParams = new URLSearchParams(window.location.search);
const userType = urlParams.get('type'); // could be null if not set

// Listen for document type button clicks
docBtn.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'selected' class from all buttons
        docBtn.forEach(btn => btn.classList.remove('selected'));

        // Add 'selected' class to clicked button
        this.classList.add('selected');

        // Save the selected document text
        selectedDocument = this.textContent.trim();
        console.log("Selected document:", selectedDocument);
    });
});

// Handle Back button click
document.getElementById('type-back-btn').onclick = function () {
    if (userType) {
        // Redirect back to choose-for.php preserving the 'type' param
        window.location.href = `choose-for.php?type=${userType}`;
    } else {
        // Otherwise, just go back in history
        window.history.back();
    }
}

// Handle Continue button click
document.getElementById('choose-type-submit').onclick = function () {
    const keepCheck = document.getElementById('TermsandPolicy').checked;

    if (!keepCheck) {
        swal("Invalid Request", "Please Agree with Terms and Policy", "warning");
        return;
    }

    if (selectedDocument === "") {
        swal("Invalid Request", "Please choose type of document", "warning");
        return;
    }

    // Map selected document to the corresponding URL page
    let baseUrl = '';
    switch (selectedDocument) {
        case "Birth Certificate":
            baseUrl = 'birth-certificate.php';
            break;
        case "Marriage Certificate":
            baseUrl = 'marriage-certificate.php';
            break;
        case "Death Certificate":
            baseUrl = 'death-certificate.php';
            break;
        case "Cenomar":
            baseUrl = 'cenomar.php';
            break;
        default:
            swal("Invalid Request", "Unknown document type", "warning");
            return;
    }

    // Append the type param if it exists
    if (userType) {
        window.location.href = `${baseUrl}?type=${userType}`;
    } else {
        window.location.href = baseUrl;
    }
}
