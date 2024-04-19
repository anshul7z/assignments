
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

function main(){
  let a=new Animal("cow","4");
  console.log(a.describe());
}
main();