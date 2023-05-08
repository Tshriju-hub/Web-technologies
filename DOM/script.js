document.getElementById("parent").innerHTML=("Hello world");
/*document.getElementById("parent").style.backgroundColor=("chocolate");*/
document.getElementById("parent").style.cssText=("background-color:plum; color:white");
document.getElementsByClassName("excercise")[0].innerHTML=("Shreeju Thapa");
document.getElementsByClassName("parent1")[0].style.cssText=("text-transform:uppercase;");
document.getElementsByTagName("h3")[2].innerHTML=("Hi,I am changed");
document.querySelector("#heading").style.cssText=("background:black; color:pink;");
document.querySelector(".heading1").style.cssText=("background:black; color:pink;");

const change= document.querySelectorAll("h2");
for(i=0;i<change.length;i++){
    change[i].innerHTML=("I am different");
}