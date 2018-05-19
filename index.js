const app = "I don't do much.";
var kitten=[];
function destructivelyAppendKitten(name) {
  kitten.push(name);
}

function destructivelyPrependKitten(name){
  kitten.prepend(name)
}

function destructivelyRemoveLastKitten() {
  kitten.pop()
}

