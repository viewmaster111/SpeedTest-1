var no = 12; // number of hearts
var speed = 99; // smaller number moves the hearts faster
var heart = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png";
var flag;
//var ns4up = (document.layers) ? 1 : 0;   browser sniffer

if (document.all)
{
var ie4up=true;
}
else
{
var ns4up=true;
}

var dx, xp, yp;    // coordinate and position variables
var am, stx, sty;  // amplitude and step variables
var i, doc_width = 800, doc_height = 600;
if (ns4up) {
doc_width = self.innerWidth;
//alert(self.innerWidth)
doc_height = self.innerHeight;
} else if (ie4up) {
doc_width = document.body.clientWidth;
doc_height = document.body.clientHeight;
}
dx = new Array();
xp = new Array();
yp = new Array();
amx = new Array();
amy = new Array();
stx = new Array();
sty = new Array();
flag = new Array();
for (i = 0; i < no; ++ i) {
dx[i] = 0;                        // set coordinate variables
xp[i] = Math.random()*(doc_width-30)+10;  // set position variables
yp[i] = Math.random()*doc_height;
amy[i] = 12+ Math.random()*20;         // set amplitude variables
amx[i] = 10+ Math.random()*40;
stx[i] = 0.02 + Math.random()/10; // set step variables
sty[i] = 0.7 + Math.random();     // set step variables
flag[i] = (Math.random()>0.5)?1:0;


if (i == 0) {
document.write("<div id=\"dot"+ i +"\" style=\"POSITION: ");
document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");
document.write("visible; TOP: 15px; LEFT: 15px;\"><img src=\"");
document.write(heart+ "\" border=\"0\"></div>");
} else {
document.write("<div id=\"dot"+ i +"\" style=\"POSITION: ");
document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");
document.write("visible; TOP: 15px; LEFT: 15px;\"><img src=\"");
document.write(heart+ "\" border=\"0\"></div>");
}

}



function snowIE() {  // IE main animation function
var DotStyle;
for (i = 0; i < no; ++ i) {  // iterate for every dot
if (yp[i] > doc_height-50) {
xp[i] = 10+ Math.random()*(doc_width-amx[i]-30);
yp[i] = 0;
stx[i] = 0.02 + Math.random()/10;
sty[i] = 0.7 + Math.random();
flag[i]=(Math.random()<0.5)?1:0;

}
if (flag[i])
dx[i] += stx[i];
else
dx[i] -= stx[i];
if (Math.abs(dx[i]) > Math.PI) {
yp[i]+=Math.abs(amy[i]*dx[i]);
xp[i]+=amx[i]*dx[i];
dx[i]=0;
flag[i]=!flag[i];
}
DotStyle=document.getElementById("dot"+i).style;
if (ie4up)
{
DotStyle.pixelTop=yp[i] + amy[i]*(Math.abs(Math.sin(dx[i])+dx[i]));
DotStyle.pixelLeft=xp[i] + amx[i]*dx[i];
}
else
{
DotStyle.top=yp[i] + amy[i]*(Math.abs(Math.sin(dx[i])+dx[i]));
DotStyle.left=xp[i] + amx[i]*dx[i];
}
}
setTimeout("snowIE()", speed);
}


snowIE();
