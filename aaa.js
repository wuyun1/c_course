var fs = require("fs");
var execSync = require("child_process").exec;
var tempName = "t"+(new Date().getTime()*Math.random()).toString();
var ccmdstr = "g++ "+tempName+".c -o "+tempName+".exe&&chmod 0777 "+tempName+".exe&&./"+tempName+".exe";
if(process.platform.indexOf("win")==0) {
  ccmdstr="g++ "+tempName+".c -o "+tempName+".exe&&"+tempName+".exe";
}
function runC(code,fn){

 
    fs.writeFileSync(tempName+".c",code);
    
    execSync(ccmdstr,function (error, stdout, stderr) {
      if (error) {
        fn(error,stderr);
      }else{
        fn(null,stdout);
      }
      
      if(fs.existsSync(tempName+".c")){
        fs.unlinkSync(tempName+".c");
      }
      if(fs.existsSync(tempName+".exe")){
        fs.unlinkSync(tempName+".exe");
      }
      
    });

 
  
}

//runC("#include<stdio.h>\nint main(){printf(\"asdfsd\");return 0;}", function (err,data) {  console.log(data);});

module.exports = runC;
