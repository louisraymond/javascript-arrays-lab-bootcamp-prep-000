const app = "I don't do much.";

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

 function appendKitten(name){
   return [...kittens,name] 
   
 }
   
 function destructivelyremovefirstkitten(){
kittens.shift();
return kittens
 } 