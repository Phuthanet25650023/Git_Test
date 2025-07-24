
const Names = ['Mansi','Gaurav','Akansha','Sanya']; 
console.log(Names.map(Names => Names.length));
console.log(Names.map(Names => Names));

let X = (A,B)=>{
    console.log("Value A = "+A+" Value B = "+B)
    return A*B
};

let Y=(A,B)=>A+B;
console.log("Lambda Function X 5x5="+X(5,5));
console.log("Lambda Function Y 5+5="+Y(5,5));