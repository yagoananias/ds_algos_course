//Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

//Given an array = [2,4,5]
// It should return undefined

class FirstRecurrent {
  a = [2,5,1,2,3,5,1,2,4];
  b = [2,1,1,2,3,5,1,2,4];
  c = [2,4,5];
  
  isRecurrent(a) {
    let counter = 0;
    for(let i = 0; i < a.length; i++) {
      if(a[i] == counter) {
        counter++;
      }
    }
  }
}
