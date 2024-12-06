document.getElementById('btn-add-money').addEventListener('click',function(event){
  event.preventDefault();

  const add_Money = getInputFieldValueById('input-add-money');
  const pinNumber = getInputFieldValueById('input-pin-number');
  // console.log(add_Money ,add_Pin);

  if(pinNumber === 1234){

  }else{
    alert("Please try again.Invalid pin or Amount");
  }

 
})