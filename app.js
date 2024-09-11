let count = 0;
let text = prompt("birsey yaz");
for(let i = 0; i < text.length; i++){
    if(text[i] == Number(text[i])){
        count++;
    }
}
console.log("Metinde olan reqem sayi:" + count);