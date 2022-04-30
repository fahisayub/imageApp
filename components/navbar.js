let navbar=()=>{
    return` <div id='search'>
    <input type="text" id="query"  placeholder="search image">
</div>
<div id='categories'>
    <a id='car' >Car</a>
    <a id='bike' >Bike</a>
    <a id='music' >Music</a>
    <a id='technology'>Technology</a>
    <div>
    <label for="">Sort by</label>
    <select name="sort" id="sort">
    <option value="latest">Latest</option>
    <option value="oldest">Oldest</option>
    <option value="popular">Popular</option>
    <option value="views">Views</option>
</select>
</div>
   <div>
   <label for="">Filter</label>
   <select name="filter" id="filter">
       <option value="landscape">Landscape</option>
       <option value="portrait">Portrait</option>
       <option value="squarish">Squarish</option>
   </select>
   </div>
</div>`;
}
export{navbar};