var myMovie; 

function getMovie(){
    myMovie = document.getElementById("rudolph");
}

function control() { 
  if (myMovie.paused) 
    myMovie.play(); 
  else 
    myMovie.pause(); 
} 

function maximize() { 
    myMovie.width = 720; 
} 

function minimize() { 
    myMovie.width = 240;
} 

function reset() { 
    myMovie.width = 480; 
}