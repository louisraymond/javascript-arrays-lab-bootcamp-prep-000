const app = "I don't do much.";
var kitten=[];
function destructivelyAppendKitten(name) {
  Kitten.push(name);
}

function destructivelyPrependKitten(name){
  kitten.prepend(name)
}

function destructivelyRemoveLastKitten() {
  kitten.pop()
}

