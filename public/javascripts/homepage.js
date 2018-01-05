function battery_selection_change(){
    var selectionElement = document.getElementById("battery");
    var selectedValue = selectionElement.options[selectionElement.selectedIndex].value;
    var obj = JSON.parse(selectedValue);
    document.getElementById("voltage").value = obj.voltage;
    document.getElementById("current").value= obj.current;
    console.log('Hello World!!');
    
}