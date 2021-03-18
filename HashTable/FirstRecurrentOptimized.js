function firstRecurrent(input) {
  model = input[0];
  
  for(i = 1; i < input.length; i++){
    if(model == input[i]) {
      return model;
    }
  }
  return undefined;
}

firstRecurrent([2,5,1,2,3,5,1,2,4])
