//the target is to implement ther error states
//reggular expression for email validation
//write a function that validates the email
// id an empty paragraph for the error message
console.log('favour is very silly and naughty!!!');

const inputElement = document.getElementById('myInput');
    const validationMessage = document.getElementById('validationMessage');

    inputElement.addEventListener('input', function() {
      const email = inputElement.value;
      if (isValidEmail(email)) {
        validationMessage.textContent = '';
        validationMessage.style.color = 'green';
      } else {
        validationMessage.textContent = 'Valid email required.';
        validationMessage.style.color = 'red';
      }
    });

    function isValidEmail(email) {
      // Regular expression for basic email validation
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    }

// // Get the input element
// const emailInput = document.querySelector('.email');

// // Set the selection range to the end of the input text
// emailInput.setSelectionRange(emailInput.value.length, emailInput.value.length);

// // Focus on the input to make the cursor appear at the end
// emailInput.focus(emailInput);

