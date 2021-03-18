function firstRecurrent(input) {
  let model = input[0];
  
  for(let i = 1; i < input.length; i++){
    if(model == input[i]) {
      return model;
    } else {
      model=input[i+1];
    }
  }

  return undefined;
}

firstRecurrent([2,5,5,0,3,5,1,0,4])
