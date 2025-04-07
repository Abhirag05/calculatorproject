function buttonclick(val){
    document.getElementById("input").value+=val;
}
function clearInput(){
    document.getElementById("input").value=""
}
function equalClick(){
    var text=document.getElementById("input").value
    var result=eval(text)
    document.getElementById("input").value=result
}


