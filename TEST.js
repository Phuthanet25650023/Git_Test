/*let user = {name: "Metin",age: 28};
let x =2;

console.log(x)
function TEST(a,b)
{
    return a+b;
}
function hello()
{
console.log("Hello World!");
console.log("Phuthanet 6211850006")
console.log("5+5 = "+TEST(5,5)+" True "+true+1)
}

console.log(user);
console.log([10, 20, 30, 40, 50]);
console.log(hello());

hello()


let Name = "Metin";
let height = 179.2;
console.log("%s is %f inches height", Name, height);
console.log("%d + %d = %d", 3, 5, 3.5 + 5.2);
*/

let x = 61;//Gread
let m = 4, y = 2023;
console.log(x > 100 ? "Error" : (x >= 71 ? "Gread A" : (x >= 61 ? "Gread B" : (x >= 51 ? "Gread C" : (x >= 41 ? "Gread D" : (x < 41 && x >= 0 ? "Gread F" : (x < 0 ? "Error" : "")))))))

if (m == 4 || m == 6 || m == 9 || m == 11) for (i = 1; i <= 30; i++)console.log("Day =" + i);
else if (m == 2) 
{
    if (y % m == 1) for (i = 1; i <= 28; i++)console.log("Day =" + i);
    else for (i = 1; i <= 29; i++)console.log("Day =" + i);
}
else for (i = 1; i <= 31; i++)console.log("Day =" + i);

function Gread(score) {
    try {
        if (score < 0 || score > 100) return "error";
        else if (score >= 0 && score <= 40) return "Gread F";
        else if (score >= 41 && score <= 50) return "Gread D";
        else if (score >= 51 && score <= 60) return "Gread C";
        else if (score >= 61 && score <= 70) return "Gread B";
        else if (score >= 71 && score <= 100) return "Gread A";
    } catch (error) {
        console.log(error)
    }
}
Gread(x);

let people = [80,78,50,39,25,59,88,100,85,61];

for(i=0;i<10;i++)
{
    console.log("Prople "+i+" : "+Gread(+people[i])+" Score : "+people[i]);
}