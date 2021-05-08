function getParagraph1(){
    var inputs = [];
    for(var i=1; i<=6; i++){
        inputs.push(document.getElementById("input" + i).value);
    }
    document.getElementById("show_paragraph_1").innerHTML = inputs.join(". ");
}
function getParagraph2(){
    var inputs = [];
    for(var j=7; i<=12; i++){
        inputs.push(document.getElementById("input" + j).value);
    }
    document.getElementById("show_paragraph_2").innerHTML = inputs.join(". ");
}