function toogle(){
        console.log("clicked")

let horiznavbar=document.getElementById("horiznavbar");
let ham=document.getElementById("ham");
let close=document.getElementById("close");


if(horiznavbar.style.display=="block"){
        horiznavbar.style.display="none";
        close.style.display="none";
        ham.style.display="block";

// horiznavbar.style.transition="5s";
}
else{
        horiznavbar.style.display="block"
        ham.style.display="none";
        close.style.display="block";

        // horiznavbar.style.transition="5s";

}
}