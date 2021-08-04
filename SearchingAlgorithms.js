//linear search
 let linearSearch = (list,value)=>{
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return i;
        }
    }
    return -1;
}

var list =  [12, 45, 48, 5, 451, 2,34 ,43,54,66 ]
var value = 2;

linearSearch(list , value) // result should 5
