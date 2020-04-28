
var btn=document.querySelectorAll("button");
for(var j=0;j<btn.length;j++)
{
  btn[j].addEventListener("click",function()
{
  playAudio(this.classList[0]);
  aniamation(this.classList[0]);
});
}
function playAudio(name)
{
  var audio;
  switch(name)
  {
    case "w":
    audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;
    case "a":
    audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case "s":
    audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
    case "d":
    audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;
    case "j":
    audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case "k":
    audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case "l":
    audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    default:
  }
}
function aniamation(key)
{
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function()
{
  document.querySelector("."+key).classList.remove("pressed");
},100);
}
document.addEventListener("keydown",function()
{
  playAudio(event.key);
  aniamation(event.key);

})
