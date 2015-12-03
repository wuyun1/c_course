/**
 * Created by WYQ on 2015/12/1.
 */

  var initcount = 0;
  function reRequire(mopath){
    var pwd =require('path').resolve(mopath);
    require.cache[pwd]&&delete require.cache[pwd];
    return require(pwd);
  }
  var run =function (err,env)  {
    console.log(initcount++);
    //console.log(env.app);
    var app = env.app;

    app.use("/serverapi",reRequire("./serverapi/myroute.js"));
  }



  module.exports=run;
