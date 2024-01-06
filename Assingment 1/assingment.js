/* All part */
const alll = () =>{
    fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    .then((res)=>res.json())
    .then((dat)=> display_all(dat.data));
};

const display_all = (dat) =>{
  
    const a = document.getElementById("all-container");
    dat.forEach((item)=>{
        const card = document.createElement("div");
        console.log(item);
        card.classList.add("box");
            card.innerHTML=`
            <img class = "box-img" src=${item.thumbnail} alt="">
            <h1 class = "box-title">${item.title}</h1>
            <img class = "img" src=${item.authors[0].profile_picture} alt="">
            <p class = "name">${item.authors[0].profile_name}</p>
            <p>${item.authors[0].verified}</p>
            <br/>
            <p class = "views">${item.others.views} views</p>
            `
            a.appendChild(card);
    });
};

/* end all part */

/* start music part */
const music = ()=>{
    fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    .then((res)=> res.json())
    .then((dat)=> display_music(dat.data))
};

const display_music = (dat)=>{
    const song = document.getElementById("song-container");
    dat.forEach((data)=>{
        if(data.category_id == "1001"){
            console.log(data);
            const card = document.createElement("div");
            card.classList.add("box");
            card.innerHTML=`
            <img class = "box-img" src=${data.thumbnail} alt="">
            <h1 class = "box-title">${data.title}</h1>
            <img class = "img" src=${data.authors[0].profile_picture} alt="">
            <p class = "name">${data.authors[0].profile_name}</p>
            <p>${data.authors[0].verified}</p>
            <br/>
            <p class = "views">${data.others.views} views</p>
            `
           
            song.appendChild(card);
        }
    });
}; 

/* end music part */

/* start comedy part */

const comedy = () =>{
    fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    .then((res)=> res.json())
    .then((dat)=> displaycomedy(dat.data))
}

const displaycomedy = (dat)=>{
    const comedy = document.getElementById("comedy-container");
    dat.forEach((data)=>{
        if(data.category_id == "1003"){
            
            const card = document.createElement("div");
            card.classList.add("box");
            card.innerHTML=`
            <img class = "box-img" src=${data.thumbnail} alt="">
            <h1 class = "box-title">${data.title}</h1>
            <img class = "img" src=${data.authors[0].profile_picture} alt="">
            <p class = "name">${data.authors[0].profile_name}</p>
            <p>${data.authors[0].verified}</p>
            <br/>
            <p class = "views">${data.others.views} views</p>
            `
            comedy.appendChild(card);
        }
    });
};

/* end comedy part */


/* start drawing part */

const darwing = () =>{
    fetch(`https://openapi.programming-hero.com/api/videos/category/$%7Bid%7D`)
    .then((res)=> res.json())
    .then((dat)=> display_drawing(dat.data))
}

const img = "Photo/icon.png";
const display_drawing = (dat)=>{
    console.log(dat);
    const create = document.createElement("img");
    create.classList.add("error");
    create.src = img;
    const photocontainer = document.getElementById("drawing-container");
    photocontainer.innerHTML = '';
    const h3 = document.createElement("h3");
    h3.classList.add("content");
    h3.innerText = "Opps! sorry, there is no conent here";
    photocontainer.appendChild(create);
    photocontainer.appendChild(h3);
};
