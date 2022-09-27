const api_key=`AIzaSyAIGC7J5ud4Iwpnbvk2qxskEl-XbLWwfSE`;
const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=AIzaSyAIGC7J5ud4Iwpnbvk2qxskEl-XbLWwfSE`;
getdata= async ()=>{
    try{
        // let=res(url);
        let query=document.querySelector("#query").value;
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyAIGC7J5ud4Iwpnbvk2qxskEl-XbLWwfSE`
        let res=await fetch(url);
        let data=await res.json();
        console.log(data)
        append(data.items)

    }
    catch(data){
        console.log("error")
    }
}
let append=(data)=>{
    let container=document.querySelector("#container")
    container.innerHTML=null
    data.forEach(({id:{videoId},snippet:{title,thumbnails}}) => {
        document.querySelector("#popular").innerHTML="";
        let parent=document.createElement("div");
    //    var iframe=document.createElement("iframe");
    //    iframe.src=`https://www.youtube.com/embed/${videoId}`;
    //    iframe.allow="fullscreen";
       let img=document.createElement("img");
       img.src=thumbnails.default.url;
       let h3=document.createElement("h3");
       h3.innerText=title;
       console.log(thumbnails.default.url)
       parent.append(img,h3);
       let video = {
              title,
              videoId,
             
            };
        
            parent.onclick = () => {
              playVideo(video);
            };
       container.append(parent)
    });

}
let playVideo = (video) => {
    console.log(video)
     localStorage.setItem("video", JSON.stringify(video));
      window.location.href = "video.html";
    };

    getdata1= async ()=>{
        try{
            // let=res(url);
            let query=document.querySelector("#query").value;
            let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=latest-videos&key=AIzaSyAIGC7J5ud4Iwpnbvk2qxskEl-XbLWwfSE`
            let res=await fetch(url);
            let data=await res.json();
            console.log(data)
            append1(data.items)
    
        }
        catch(data){
            console.log("error")
        }
    }
    getdata1()
    let append1=(data)=>{
        let container=document.querySelector("#popular")
        
        data.forEach(({id:{videoId},snippet:{title,thumbnails}}) => {
            let parent=document.createElement("div");
        //    var iframe=document.createElement("iframe");
        //    iframe.src=`https://www.youtube.com/embed/${videoId}`;
        //    iframe.allow="fullscreen";
           let img=document.createElement("img");
           img.src=thumbnails.default.url;
           let h3=document.createElement("h3");
           h3.innerText=title;
           console.log(thumbnails.default.url)
           parent.append(img,h3);
           let video = {
                  title,
                  videoId,
                 
                };
            
                parent.onclick = () => {
                  playVideo1(video);
                };
           container.append(parent)
        });
    
    }
    let playVideo1 = (video) => {
        console.log(video)
         localStorage.setItem("video", JSON.stringify(video));
          window.location.href = "video.html";
        };    