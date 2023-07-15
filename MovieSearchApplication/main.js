async function datafetch(){
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=87d25401')
    const data = await response.json();
      console.log(data);
      var ima=document.getElementById('pos');
      ima.src=data.Poster;
      var movie =document.getElementById('title');
      movie.textContent=data.Title;
      var date = document.getElementById('rel');
      date.textContent=data.Released;}
      datafetch();

const Moviecontainer=document.getElementById("Moviecontainer")
const search=document.getElementById("search")
async function movies(){
//Moviecontainer.innerHTML=""
var inputname=document.getElementById('inputbox').value;
console.log(inputname)
const response= await fetch(`http://www.omdbapi.com/?s=${inputname}&apikey=87d25401`);
const data = await response.json();
const card=document.createElement("div");
card.className = "card";
console.log(data)
for(let i=0; i<data.Search.length;i++){
  const movieData=data.Search[i];
  const movieTitle = document.createElement("h1");
  movieTitle.className = "movie";
  movieTitle.innerHTML = movieData.Title;
  card.appendChild(movieTitle)
  const releasedYear = document.createElement("p");
  releasedYear.innerHTML=movieData.Year;
  card.appendChild(releasedYear)
  const imdbID = document.createElement("p");
  imdbID.innerHTML=movieData.imdbID;
  card.appendChild(imdbID)
  const type = document.createElement("p");
  type.innerHTML=movieData.Type;
  card.appendChild(type);
  const poster = document.createElement("img");
  poster.src=movieData.Poster;
  card.appendChild(poster);
  Moviecontainer.appendChild(card)
}
}
search.addEventListener("click", ()=>{
  movies();
})

