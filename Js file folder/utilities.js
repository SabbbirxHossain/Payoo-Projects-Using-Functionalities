/**
 * Common Shared function
*/


// function getInputFieldValueById(){
//   const addMoney = document.getElementById('input-add-money').value;
//   return addMoney;
// }

function getInputFieldValueById(id){
  const inputValue = document.getElementById(id).value;
  const convertIntoFloat = parseFloat(inputValue);
  return convertIntoFloat;
}