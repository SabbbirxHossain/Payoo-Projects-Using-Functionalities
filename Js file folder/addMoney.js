document.getElementById('btn-add-money').addEventListener('click',function(event){
  event.preventDefault();

  const add_Money = getInputFieldValueById('input-add-money');
  const add_Pin = getInputFieldValueById('input-pin-number');
  console.log(add_Money ,add_Pin);

 
})