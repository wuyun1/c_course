var aaa = require("./aaa.js");

aaa("#include<stdio.h>\nint main(){ printf(\"   asdfsafasdf     \");    return 0; }",
    function(e,d){
        console.log(d);
    });