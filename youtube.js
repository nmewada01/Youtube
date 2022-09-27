// //https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22maxResults%22%3A30%2C%22q%22%3A%22kgf%202%22%7D

// //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY

//AIzaSyACNR07sy8zuXX9DkBwN6MgyuqDZplIDc4

const API = "AIzaSyACNR07sy8zuXX9DkBwN6MgyuqDZplIDc4"; //remember the quotation




const find = async () => {

    try{
        const q = document.querySelector("#query").value;

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=AIzaSyACNR07sy8zuXX9DkBwN6MgyuqDZplIDc4`);

        //console.log(res);

        const data = await  res.json();
       //console.log(data.items)
       append(data.items);

    } catch (err){
        console.log(err)
    }
}

const append  = (videos) => {
    let show_videos = document.querySelector("#show_videos")

    show_videos.innerHTML = null;

    videos.forEach(({id: {videoId}, snippet: {title} }) => {                            //thumnails:{default:{url}}
            let div = document.createElement("div")
            
            let iframe = document.createElement("iframe")
            iframe.src= `https://www.youtube.com/embed/${videoId}`;

            iframe.width = "100%"
            iframe.height = "100%"
            iframe.allow = "fullscreen"

            // let thumbnail = document.createElement("h3")
            // thumbnail.src = `default.${url}`
            // console.log(thumbnail.src)

            let name = document.createElement("h4")
            name.innerText = title

            div.append(iframe,name);

            let data = {
                title,
                videoId,
            };

            div.onclick = () =>{
                    showVideos(data);
            };

            
            document.querySelector("#show_videos").append(div);
    });

};

const showVideos = (x) => {
    window.location.href = "video.html";
    localStorage.setItem("videos",JSON.stringify(x))

};





const url2 =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=in&videoCategoryId=17&key=AIzaSyACNR07sy8zuXX9DkBwN6MgyuqDZplIDc4`

fetch(url2)
.then(function(res){
    return res.json()
})
.then(function(res){
    append(res.items);
   //console.log(res)
})

