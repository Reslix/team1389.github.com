(function(){var e,t,n,r,i,s,o,u,a,f=this;r=0,a=0,o=0,u=null,n=function(e){return viewing_pane.style.left=""+e+"px"},t=function(e){var t;return r=parseInt(e),t="image-"+r,n(e*-1*viewing_width)},this.move_left=function(){return t(r===0?image_count-1:r-1)},this.move_right=function(){return t(r===image_count-1?0:r+1)},e=function(e){return document.getElementById(e)},this.onkeydown=function(e){e||(e=f.event);if(e.keyCode===39)return move_right();if(e.keyCode===37)return move_left()},i=!1,this.onload=function(){var n,r,s,o,u,a,l;if(i)return;i=!0,f.image_count=parseInt(e("image-count").innerHTML),s=e("viewing-container"),f.viewing_width=s.offsetWidth||s.clientWidth,r=""+f.viewing_width+"px",s.style.height=r,o=0,f.viewing_pane=e("viewing-pane"),l=f.viewing_pane.childNodes;for(u=0,a=l.length;u<a;u++)n=l[u],n.style!=null&&(n.style.width=r,n.style.left=""+o+"px",o+=viewing_width);return t(0)},document.addEventListener?document.addEventListener("DOMContentLoaded",this.onload,!1):document.attachEvent&&(s=function(){if(document.readyState==="complete")return f.onload(),document.detachEvent("onreadystatechange",s)},document.attachEvent("onreadystatechange",s))}).call(this);