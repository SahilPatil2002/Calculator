function dis(val){
    document.getElementById("input").value += val;
}

function clr(){
    document.getElementById("input").value = "";
}

function del(){
    input.value = input.value.slice(0, - 1);
}

function calculate(){
    let outputScreen = document.getElementById("input");
    try{
        outputScreen.value = eval(outputScreen.value);
            }
            catch(err)
            {
                alert("invalid")
            }
    }