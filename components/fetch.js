let search=async(query)=>{
    const url=`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=i7qiH154sRGXr1YCA39OlNlFKQcn9ufkgnWmczWWxTw`;

    try{
        let res=await fetch(url);
       let data=await res.json();
       return data.results;
    }catch(err){
        console.log(err);
    }
   

}
let create=(id)=>{
    return document.createElement(id);
}
let append=(data)=>{
    let display=document.getElementById('display');
    display.innerHTML=null;
    data.forEach(({alt_description,urls:{thumb}})=>{
        let div=create('div');
        let img=create('img');
        let title=create('h4');
        let tbox=create('div');
        img.src=thumb;
        title.innerText=alt_description;
        tbox.append(title);
        div.append(img,tbox);
        display.append(div);



    });
}
export{ search,create,append};