//NOT OFFICIAL PART OF SPEEDTEST This is Beta Assets. Anything Js, and is part of the beta -
//will be here. Everything essential to proper working will remain in the Beta.js file. 
var testStatus=0,dlStatus="",ulStatus="",pingStatus="";
var settings={time_ul:15,time_dl:15,count_ping:35,url_dl:"garbage.dat",url_ul:"empty.dat",url_ping:"empty.dat"};
var xhr=null;
function ulTest(done){
    var firstTick=true,startT=new Date().getTime(), prevT=new Date().getTime(),prevLoaded=0,speed=0.0;
    xhr=new XMLHttpRequest();
    xhr.upload.onprogress=function(event){
        var instspd=event.loaded<=0?speed:((event.loaded-prevLoaded)/((new Date().getTime()-prevT)/1000.0));
        if(isNaN(instspd)||!isFinite(instspd)) return;
        if(firstTick){
            firstTick=false;
        }else{
            speed=instspd<speed?(speed*0.4+instspd*0.6):(speed*0.8+instspd*0.2);
        }
        prevLoaded=event.loaded;
        prevT=new Date().getTime();
        ulStatus=((speed*8)/1048576.0).toFixed(2);
        if(((prevT-startT)/1000.0)>settings.time_ul){try{xhr.abort();}catch(e){} xhr=null; done();}
    }.bind(this);
    xhr.onload=function(){
		prevT=new Date().getTime(); prevLoaded=0; fistTick=true;
        xhr.open("POST",settings.url_ul+"?r="+Math.random(),true);
		xhr.send(r);
    }.bind(this);
    xhr.onerror=function(){
        ulStatus="Fail";
		xhr=null;
        done();
    }.bind(this);
    xhr.open("POST",settings.url_ul+"?r="+Math.random(),true);
	xhr.setRequestHeader('Content-Encoding','identity');
	var r=new ArrayBuffer(10485760);
	try{var w=new Float32Array(r);for(var i=0;i<w.length;i++)w[i]=Math.random();}catch(e){}
    xhr.send(r);
}
