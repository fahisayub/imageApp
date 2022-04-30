import { navbar } from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar();
import{search,append}from '../components/fetch.js'
import '../styles/navbar.css';
import '../styles/index.css'


let filter=document.getElementById('filter');
let sort=document.getElementById('sort');
let input= document.getElementById('query');
input.addEventListener('input',searchfn);
function searchfn(){
    debounce(main,1000);
}
let main=async()=>{
  let query= input.value ;
  let sortby=sort.value;
  let filterby=filter.value;
    let data=await search(query,sortby,filterby);
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
    let sortby=sort.value;
  let filterby=filter.value;
 let res = await search(`${this.id}`,sortby,filterby);
    append(res);
}
filter.addEventListener('change',sortnfilt);
sort.addEventListener('change',sortnfilt);
function sortnfilt (){
    if(input.value==undefined){
       csfn();
    }else{
        main();
    }
}






