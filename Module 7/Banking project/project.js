function handledeposit(){
    var inputvalue = document.getElementById("deposit-ammount").value
    var depositammount = document.getElementById("deposit").innerText
    var convertinputvalue = numberconvert(inputvalue)
    var convertdepositvalue = numberconvert(depositammount)
    var sum = convertinputvalue + convertdepositvalue;
    document.getElementById("deposit").innerText = sum

var totalammount = document.getElementById("total").innerText
var convert_total = numberconvert(totalammount)
var totalammount = convertinputvalue+ convert_total;
document.getElementById("total").innerText = totalammount

    document.getElementById("deposit-ammount").value = ""


}

function handwithdraw(){
    var inputwithdraw = document.getElementById("withdraw-input").value
    var convertinputwithdraw = numberconvert(inputwithdraw)
    var inputammount = document.getElementById("withdraw").innerText
    var inputamountconvert = numberconvert(inputammount)
    
    

var totalammount = document.getElementById("total").innerText
var convert_total = numberconvert(totalammount)
var totalammount = convert_total-convertinputwithdraw;
document.getElementById("total").innerText = totalammount
    document.getElementById("withdraw").value = convertinputwithdraw
}

function handletotal(){

}
function numberconvert(value){
    return parseFloat(value)
}