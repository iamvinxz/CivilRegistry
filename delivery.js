document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type'); // ?type=personal or ?type=someone
  const recipientInput = document.getElementById('recipient-name');

  if (recipientInput) {
    if (type === 'personal') {
      const userFullName = "Juan Dela Cruz"; // replace with session value if available
      recipientInput.value = userFullName;
      recipientInput.readOnly = true;
    } else if (type === 'someone') {
      recipientInput.value = "";
      recipientInput.readOnly = false;
    }
  }

  const form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    // Get form field values trimmed
    const recipient = document.getElementById('recipient-name').value.trim();
    const street = document.getElementById('house-number-label').value.trim();
    const barangay = document.getElementById('selectBarangay').value;
    const contact = document.getElementById('contact-value').value.trim();
    const email = document.getElementById('email-address').value.trim();
    
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Basic contact number regex (digits, +, -, space allowed)
    const contactRegex = /^[\d+\-\s]{7,15}$/;

    // Validate each field
    if (!recipient) {
      e.preventDefault();
      swal("Warning", "Please enter the recipient's full name.", "warning");
      return;
    }

    if (!street) {
      e.preventDefault();
      swal("Warning", "Please enter the house number and street.", "warning");
      return;
    }

    if (!barangay || barangay === "Select Barangay" || barangay.includes("DISTRICT")) {
      e.preventDefault();
      swal("Warning", "Please select a valid Barangay.", "warning");
      return;
    }

    if (!contact || !contactRegex.test(contact)) {
      e.preventDefault();
      swal("Warning", "Please enter a valid contact number (7-15 digits, can include +, -, spaces).", "warning");
      return;
    }

    if (!email || !emailRegex.test(email)) {
      e.preventDefault();
      swal("Warning", "Please enter a valid email address.", "warning");
      return;
    }
  });
  
    document.getElementById('delivery-back').onclick = function (){
        window.history.back();
    }
});

