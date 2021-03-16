class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  
  _hash(key) {
    let hash = 0;
    for(let i = 0, i < key.length; i++ ) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  
  set(key, value) {
    let address = this._hash(key);
    //se não tem nada eu crio um array depois faço push
    if(!this.data[address]) {
      this.data[address] = [];
    }
    //se tiver eu não crio, somente faço push e retorno
    this.data[address].push([key, value]);
    return this.data;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
