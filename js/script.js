var x=0;
function addExpense(){
    date = document.getElementById("date").value;
    description = document.getElementById("description").value;
    amount = document.getElementById("amount").value;
    if(amount && date && description){
        document.getElementById("tableBody").insertRow(0).innerHTML = "<tr><td class='tableCell'>"+date+"</td><td class='tableCell'>"+description+"</td><td class='tableCell'>"+amount+"</td></tr>";
        if(parseInt(amount)){
            x+= parseInt(amount);
        }
        document.getElementById("totalExpense").innerHTML = x;
    }
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
    return false;
}   