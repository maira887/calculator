class calculator{
    constructor(num1=30,num2=20){
        this.num1=30
        this.num2=20;
    }
    Add(){
    console.log("Addition"),
    this.add=this.num1+this.num2
    console.log(this.add);
    return  {
        num1:this.num1,
        num2:this.num2,
        result:this.num1+this.num2,
        type:"Add"

    }
}


    Sub(){
    console.log("subtraction");
    this.sub=this.num1-this.num2
    console.log(this.sub);
       }
    

    Multiply(){
    console.log("Multiplication");
    this.mul=this.num1*this.num2
    console.log(this.mul);
    }

    Divide(){
    console.log("divide");
    this.div=this.num1/this.num2
    console.log(this.div);
    }
}
class Calculation extends calculator{
    constructor(){
        this.myCalculation = [
          {
            num1: 10,
            num2: 10,
            result: 20,
            type: "Add",
          },
          {
            num1: 10,
            num2: 10,
            result: 100,
            type: "multiply",
          },
        ];
    }
getAllCalculation(){

}
}
const calculation= new calculator()
     add=calculation.Add()
     console.log(add);
     sub=calculation.Sub()
     console.log(sub);
     mul=calculation.mul()
     console.log(mul);
     div=calculation.div()
     console.log(mul);
    