function getSelectedRadioValue(radioGroupName) {
  const radioButtons = document.getElementsByName(radioGroupName);
  let selectedValue = '';

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedValue = radioButtons[i].value;
      break;
    }
  }
  return selectedValue;
}
