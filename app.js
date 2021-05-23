

let button = document.getElementById("gsm");
let butn = document.getElementById("sign");
let butnn = document.getElementById("static");
let num = document.getElementById("lucky");
let prime = document.getElementById("luno");
let one = document.getElementById("comp"); // skill-1
let oneo = document.getElementById("domp");
let ab = document.getElementById("liTwo"); //skill-2
let cd = document.getElementById("spanTwo")
let ef = document.getElementById("liThree"); //skill-3
let gh = document.getElementById("spanThree")
let ij = document.getElementById("liFour"); //skill-4
let kl = document.getElementById("spanFour")
let mn = document.getElementById("liFive"); //skill-5
let op = document.getElementById("spanFive")
let qr = document.getElementById("liSix"); //skill-6
let st = document.getElementById("spanSix")


let data = function() {
    button.style.color = 'blue';
     
}

let noData = function() {
    button.style.color = '';
    
}
button.addEventListener('mouseover', data);
button.addEventListener('mouseout', noData);
butn.addEventListener('mouseover', () => { butn.style.color = 'blue';});
butn.addEventListener('mouseout', () => {butn.style.color = '';});
butnn.addEventListener('mouseover', () => { butnn.style.color = 'blue';});
butnn.addEventListener('mouseout', () => { butnn.style.color = '';});

let get = document.createElement('p');
get.innerHTML = 'Hello';
let set = function() {
document.getElementById('spa').appendChild(get);

}
button.addEventListener('click', set);

// for lucky number
let luckyNum = function() {
    let no = Math.floor(Math.random() * 100);
num.innerHTML = no ;


}
let hideButton = function() {
    luno.style.visibility = 'hidden';
}


luno.addEventListener('click', luckyNum);
luno.addEventListener('click', hideButton);

// for skill 1

let scan = function() {
    oneo.innerHTML = '->Intermediate';
}
one.addEventListener('mouseover', scan);
one.addEventListener('mouseout', () => {oneo.innerHTML = '';});
//for skill 2
ab.addEventListener('mouseover', () => {cd.innerHTML = '->Intermediate'});
ab.addEventListener('mouseout', () => {cd.innerHTML = ''});
//for skill 3
ef.addEventListener('mouseover', () => {gh.innerHTML = '->Intermediate'});
ef.addEventListener('mouseout', () => {gh.innerHTML = ''});
//for skill 4
ij.addEventListener('mouseover', () => {kl.innerHTML = '->Intermediate'});
ij.addEventListener('mouseout', () => {kl.innerHTML = ''});
// for skill 5
mn.addEventListener('mouseover', () => {op.innerHTML = '->Intermediate'});
mn.addEventListener('mouseout', () => {op.innerHTML = ''});
// for skill 6
qr.addEventListener('mouseover', () => {st.innerHTML = '->Intermediate'});
qr.addEventListener('mouseout', () => {st.innerHTML = ''});

//for zodiac
let zodiacArray = ["Aquarius","Sagittarius","Aries","Capricorn", "Pisces", "Taurus", "Virgo", "Scorpio", "Libra", "Gemini", "Leo", "Cancer"];
let zod = document.getElementById("signn");
let zodButn = document.getElementById("moon");

let signFunc = function() {
    let arno = Math.floor(Math.random() * 12);
    zod.innerHTML = zodiacArray[arno];
}
zodButn.addEventListener('click', signFunc);
let hideButtonTwo = function() {
    zodButn.style.visibility = 'hidden';
}



zodButn.addEventListener('click', hideButtonTwo);
