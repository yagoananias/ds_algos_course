function firstRecurrent(input) {
  let model = {};
  
  for(let i = 0; i < input.length; i++){
    if(model[input[i]]) {
      return input[i];
    } else {
      model[input[i]] = true;
    }
  }

  return undefined;
}

firstRecurrent([2,5,1,0,3,6,7,4,4])
