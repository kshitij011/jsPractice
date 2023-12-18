// const display = document.querySelector('#input');
// const clearInput = document.querySelector('#AC').addEventListener('click', ()=> display.value = '')

document.addEventListener('click',
function handleButtonClick(event) {
    const clickedElement = event.target;

    // Check if the clicked element is a button
    if (clickedElement.tagName === 'INPUT' && clickedElement.type === 'button') {
        const inputValue = clickedElement.value;

      // Get the input element
        const inputElement = document.getElementById('input');
        console.log(inputElement.value);

        // Perform different actions based on the button clicked
      switch (inputValue) {
        case 'AC':
          clearDisplay();
          break;
        case 'DE':
          deleteLastCharacter();
          break;
        case '=':
            displayResult();
            break;
        default:
          appendToDisplay(inputValue);
      }
    }

    // Function to clear the display
  function clearDisplay() {
    const inputElement = document.getElementById('input');
    inputElement.value = '';
  }

  // Function to delete the last character
  function deleteLastCharacter() {
    const inputElement = document.getElementById('input');
    const currentValue = inputElement.value;
    inputElement.value = currentValue.slice(0, -1);
  }

  // Function to append a value to the display
  function appendToDisplay(value) {
    const inputElement = document.getElementById('input');
    inputElement.value += value;
  }

  //Function to evaluate the result in the display
  function displayResult(){
    const inputElement = document.getElementById('input');
    inputElement.value = eval(inputElement.value);
  }
})