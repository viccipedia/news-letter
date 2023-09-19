//the target is to implement ther error states
//reggular expression for email validation
//write a function that validates the email
// id an empty paragraph for the error message
console.log('favour is very silly and naughty!!!');

const input = document.querySelector('.email');
const err = document.getElementById('error');
const btn = document.getElementById('btn');
const placeholder = input.getAttribute('placeholder');

function handleSubmit(e) {
  e.preventDefault();
  const email = input.value.trim();


  // Check if the email field is empty e.g if(email.length = < 0)
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    err.textContent = 'Valid email required.';
    input.classList.add('error-input');
    err.classList.add('error');
    reset(2000);
    return; // Prevent further processing
  } else if (emailRegex.test(email)) {
    // Email is valid, remove error message and allow form submission
    err.textContent = '';
    input.classList.remove('error');
    // Redirect to success.html (You can change this URL as needed)
    window.location.href = 'success.html';
  } else {
    // Email is not valid, display error message and style the input as red
    err.textContent = 'Enter a valid email address.';
    input.classList.add('error-input');
    err.classList.add('error');
    reset(8000);
  }
}
function reset(time){
    setTimeout(()=>{
        err.textContent = '';
        input.classList.remove('error-input');
        err.classList.remove('error');
        input.value = '';
        }, time)
}
 
btn.addEventListener('click', handleSubmit);

// // Get the input element
// const emailInput = document.querySelector('.email');

// // Set the selection range to the end of the input text
// emailInput.setSelectionRange(emailInput.value.length, emailInput.value.length);

// // Focus on the input to make the cursor appear at the end
// emailInput.focus(emailInput);

