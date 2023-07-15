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
var inputname=document.getElementById('inputbox').value
console.log(inputname)
const response= await fetch(`http://www.omdbapi.com/?s=${inputname}&apikey=87d25401`);
const data = await response.json();
for(let i=0; i<data.length;i++){
  const movieData=data.search[i];
  const card=document.createElement("div");
  div.className = "card";
  const movieTitle = document.createElement("h1");
  movieTitle.className = "movie";
  movieTitle.innerHTML = movieData.movie
  card.appendChild(movieTitle)
  Moviecontainer.appendChild(card)
}
}
search.addEventListener('click',(event)=>{
  //event.preventDefault()
  console.log("button clicked")
  movies();
}
)

