var btn = document.getElementById("btn");
btn.addEventListener("click", startUppercase);

function startUppercase(){
    var char = document.getElementById("name"). value;
    var text = char.split(' ');
    let ans;
    
    for(let i = 0; i < text.length ; i++){
        ans = text[i].charAt(0).toUpperCase() + text[i].slice(1,text[i].length);
        console.log(ans);
        document.getElementById("result").innerText += ' '+ ans;
    }
    
}