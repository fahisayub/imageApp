import { navbar } from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar();
import{search,append}from '../components/fetch.js'
import '../styles/navbar.css';
import '../styles/index.css'



let input= document.getElementById('query');
input.addEventListener('input',searchfn);
function searchfn(){
    debounce(main,1000);
}
let main=async()=>{
  let query= input.value ;
  console.log(query);
    let data=await search(query);
    if(data==undefined){
        return;
    };
    append(data);

}
let id;
let debounce=(fn,delay)=>{
if(id){
    id=clearTimeout(id);
}
id=setTimeout(()=>{
    fn();
},delay)
}
let categories=document.getElementById('categories').children;
for(let el of categories){
    el.addEventListener('click',csfn);
    
}
async function csfn (){
 let res = await search(`${this.id}`);
    append(res);
}



