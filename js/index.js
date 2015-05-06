var name = "Franklin Delano Roosevelt";
var mono = "";

// Analyze the input //

mono += name[0];

for(i=0; i<name.length; i++) {
  
  if (name.charAt(i) === " ") {
    
    mono += name[i+1];
    
  }
  
}



document.getElementById("first").innerHTML= mono[0];
document.getElementById("middle").innerHTML= mono[1];
document.getElementById("last").innerHTML= mono[2];




               