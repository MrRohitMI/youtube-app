var vid=JSON.parse(localStorage.getItem("video"));
console.log(vid)
let {title,videoId}=vid
console.log(title)
var box=document.querySelector("#box")
var iframe=document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${videoId}`;
iframe.style.width="60%";
iframe.style.height="600px";
iframe.allow="fullscreen"
box.append(iframe)
