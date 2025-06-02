document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const noFatherCheckbox = document.querySelector('input[name="no_father"]');
  const firstNameInput = document.getElementById('father-first-name');
  const middleNameInput = document.getElementById('father-middle-name');
  const lastNameInput = document.getElementById('father-last-name');

  // Checkbox change handler - disable/enable inputs and clear values if checked
  noFatherCheckbox.addEventListener('change', function () {
    const disabled = this.checked;
    [firstNameInput, middleNameInput, lastNameInput].forEach(input => {
      input.disabled = disabled;
      if (disabled) input.value = '';
    });
  });

  // Form submit validation
  form.addEventListener('submit', function (e) {
    // If checkbox is checked, skip validation
    if (noFatherCheckbox.checked) return;

    // Trimmed values
    const firstName = firstNameInput.value.trim();
    const middleName = middleNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    // Validate inputs
    if (!firstName || !middleName || !lastName) {
      e.preventDefault();
      swal("Warning", "Please fill in all required fields.", "warning");
    }
  });
});
