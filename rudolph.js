var myMovie = document.getElementById("rudolph"); 

function control() { 
  if (myMovie.paused) 
    myMovie.play(); 
  else 
    myMovie.pause(); 
} 

function maximize() { 
    myMovie.width = 960; 
} 

function minimize() { 
    myMovie.width = 240; 
} 

function normalize() { 
    myMovie.width = 480; 
}