let sentence2 = "phuthanet Mekpayom";
console.log(sentence2.toLowerCase());
console.log(sentence2.toUpperCase());
console.log(sentence2.toLocaleLowerCase());
console.log(sentence2.toLocaleUpperCase());
console.log(sentence2.startsWith("Phut"));
console.log(sentence2.startsWith("phut"));
console.log(sentence2.endsWith("yom"));
console.log(sentence2.endsWith("YoM"));
console.log("String :"+sentence2);
console.log("Length :"+sentence2.length);
console.log(sentence2.slice(0, 6));//ช่วง String
console.log(sentence2.slice(-20, 17));
console.log(sentence2.substring(5, 2)); 
console.log("String[7] :"+sentence2[7]);
console.log(sentence2.includes("phuthanet"));
console.log("marcuscode".indexOf("M"));
console.log("marcuscode".lastIndexOf("k"));

let emails = [
    'Matteo@mail.com',
    'Chris123@YAHOO.COM',
    'FancyMail@Gmail.Com'
    ];
    
    console.log("Sanitized emails:");
    for (let email of emails) {
    console.log(email.toLowerCase());
    }


let date ="2023-08-03";//---> 03/08/2023
console.log(date.slice(-2,)+"/"+date.slice(-5,-3)+"/"+date.substring(0,4));

let x=1.5e-3;
console.log(x);
console.log(1>x?"True":"False");

let E = "There is a red rabbit in that tree";
console.log("Match rabbit:", E.match("rabbit"));


let usernames = [
    "Metin123",
    "mateo.marcus",
    "2020chris"
];

for (let username of usernames) {
    if (username.match(/^[A-Z][a-zA-Z0-9]+$/)) {
        console.log(username+ "-> valid");
    } else {
        console.log(username+" -> invalid");
    }
}


let Str = "In the middle of difficulty lies opportunity.";
console.log(Str.search("middle"));
console.log(Str.search("center"));

let str = "Contact me at metin12@mail.com when you need help.";
console.log(str.search(/[a-z0-9]+@mail.com/)); // 14

let str2 = "The cat and the rat are living in this house.";
console.log(str2.search(/[\w]at/));

let B = "This is a bold text and another bold text here.";
console.log(B.replace("bold", "italic"));

let C = "This is a bold text and another bold text here.";
console.log(C.replace(/bold/g, "italic"));