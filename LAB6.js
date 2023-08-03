let BDate = "1998-08-16";
let Name = "Phuthanet Mekpayom";


console.log(BDate.slice(-2) + "/" +
    BDate.slice(-5, -3) + "/" +
    (parseInt(BDate.substring(0, 4)) + 543));
if ((2566 - (parseInt(BDate.substring(0, 4)) + 543)) > 18) console.log("Can Register");
else console.log("Can't Register");

let Email = "Phuthanet@mut.com"
if (Email.indexOf("@") > 0 && Email.indexOf(".") > 0) console.log("Email -> valid ")
else console.log("Email -> invalid ")

let Password = "C129e@e523";
if (Password.length > 8 &&Password.search(/[a-zA-Z0-9]/)>0&&Password.indexOf("@")>0
) console.log("Password -> valid ")
else console.log("Password -> invalid ")