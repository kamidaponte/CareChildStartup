(window.webpackJsonpsumome=window.webpackJsonpsumome||[]).push([[2],{68:function(t,r,s){var n;void 0===(n=function(){return{lightOrDark:function(t){var r,s,n;return t.toHex&&(t="#"+t.toHex()),t.match(/^rgb/)?(r=(t=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1],n=t[2],s=t[3]):(r=(t=+("0x"+t.slice(1).replace(t.length<5&&/./g,"$&$&")))>>16,n=t>>8&255,s=255&t),Math.sqrt(r*r*.299+n*n*.587+s*s*.114)>127.5?"light":"dark"},whiteOrBlack:function(t){return"light"==this.lightOrDark(t)?"black":"white"},shadeColor:function(t,r){t=t.toString();var s=parseInt(t.slice(1),16),n=Math.round(2.55*r),e=(s>>16)+n,i=(s>>8&255)+n,h=(255&s)+n;return"#"+(16777216+65536*(e<255?e<1?0:e:255)+256*(i<255?i<1?0:i:255)+(h<255?h<1?0:h:255)).toString(16).slice(1)},
/**
     * A class to parse color values
     * @author Stoyan Stefanov <sstoo@gmail.com>
     * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
     * @license Use it if you like it
     */
RGBColor:function(t){this.ok=!1,"#"==t.charAt(0)&&(t=t.substr(1,6)),t=(t=t.replace(/ /g,"")).toLowerCase();for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3]),255]}},{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3]),parseInt(t[4])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),255]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),255]}}],s=0;s<r.length;s++){var n=r[s].re,e=r[s].process,i=n.exec(t);i&&(channels=e(i),this.r=channels[0],this.g=channels[1],this.b=channels[2],this.a=channels[3],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.a=this.a<0||isNaN(this.a)?0:this.a>255?255:this.a,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toRGBA=function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")"},this.toHex=function(){var t=this.r.toString(16),r=this.g.toString(16),s=this.b.toString(16);return 1==t.length&&(t="0"+t),1==r.length&&(r="0"+r),1==s.length&&(s="0"+s),"#"+t+r+s}},hexToRGBA:function(t,r){var s=new this.RGBColor(t);return s.a=r||1,s.toRGBA()}}}.call(r,s,r,t))||(t.exports=n)}}]);