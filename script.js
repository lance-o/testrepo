let x = 0;
let y = 0;

let keyWDown = false;
let keyADown = false;
let keySDown = false;
let keyDDown = false;

function IsKey(prospective,key) {
  let ret = false;
  if(prospective === key.toLowerCase()){
    ret = true;
  }
  return ret;
}

function DoKeyDown(key) {
    
    if(IsKey("w", key)){
        console.log("W down");
        keyWDown = true;
    }
    if(IsKey("a", key)){
        console.log("A down");
        keyADown = true;
    }
    if(IsKey("s", key)){
        console.log("S down");
        keySDown = true;
    }
    if(IsKey("d", key)){
        console.log("D down");
        keyDDown = true;
    }
}

function DoKeyUp(key) {
    
    if(IsKey("w", key)){
        console.log("W up");
        keyWDown = false;
    }
    if(IsKey("a", key)){
        console.log("A up");
        keyADown = false;
    }
    if(IsKey("s", key)){
        console.log("S up");
        keySDown = false;
    }
    if(IsKey("d", key)){
        console.log("D up");
        keyDDown = false;
    }
}

function Update(){
    const p1 = document.getElementById("Woingo");
    if(keyWDown){
        y--;
    }
    if(keyADown){
        x--;
    }
    if(keySDown){
        y++;
    }
    if(keyDDown){
        x++;
    }
    p1.style.left = `${x}px`;
    p1.style.top = `${y}px`;
    console.log("frame");
    window.requestAnimationFrame(Update);
}

window.requestAnimationFrame(Update);

window.addEventListener("keydown", function (e) { 
    DoKeyDown(e.key);
});

window.addEventListener("keyup", function (e) { 
    DoKeyUp(e.key);
});
