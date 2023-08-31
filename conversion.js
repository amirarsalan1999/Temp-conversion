let inputVal = document.querySelector("input");
let message = document.getElementById("message");
let cTof;
let fToc; 
let flag = false;
function reset () {
    inputVal.value = "";
    message.innerHTML = "";
}
function change () {
    if(!flag){
        document.title = "Converter \xB0F to \xB0C";
        document.getElementById("title").innerHTML = "Converter \xB0F to \xB0C";
        inputVal.placeholder = "\xB0F";
        flag = true;
    }else{
        document.title = "Converter \xB0C to \xB0F";
        document.getElementById("title").innerHTML = "Converter \xB0C to \xB0F";
        inputVal.placeholder = "\xB0C";
        flag = false;
    }
}
function converter () {
    cTof = parseFloat((+inputVal.value * 9/5) + 32).toFixed(2);
    fToc = parseFloat((+inputVal.value - 32) * 5/9).toFixed(2);  
        if(!flag){
                if(inputVal.value.length < 1){
                    document.getElementById("message").innerHTML = "Write correct value!";
                }
                else if(cTof == "NaN"){
                    document.getElementById("message").innerHTML = "Wrong value!";
                }else{
                    document.getElementById("message").innerHTML = inputVal.value + "\xB0C is : " + cTof + "\xB0F";
                }
        }else{
                if(inputVal.value.length < 1){
                    document.getElementById("message").innerHTML = "Write correct value!";
                }
                else if(fToc == "NaN"){
                    document.getElementById("message").innerHTML = "Wrong value!";
                }else{
                    document.getElementById("message").innerHTML = inputVal.value + "\xB0F is : " + fToc + "\xB0C";
                }
        }
} 
