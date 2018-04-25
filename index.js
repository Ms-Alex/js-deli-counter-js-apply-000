<<<<<<< HEAD


function takeANumber(deliLine, name) {
  var yourNumber = deliLine.length + 1;
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${yourNumber} in line.`;
}

function nowServing(deliLine) {
  var first = deliLine.shift();
  if (deliLine.length === 0) {
=======
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var yourNumber = katzDeliLine + 1;
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${yourNumber} in line.`;
}

function nowServing(arr) {
  var first = katzDeli.shift();
  if (katzDeli.length === 0) {
>>>>>>> ec374a560ac284c73e87a991c2f300710cd37e01
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${first}.`;
}

<<<<<<< HEAD
function currentLine(deliLine) {
  var namesStr = "";
  for(var i = 0; i < deliLine.length; i++) {
    namesStr += `${i + 1}. ${deliLine[i]}`;
    if(i !== deliLine.length - 1) {
      namesStr+=", ";
    }
  }
  if (deliLine.length === 0) {
      return "The line is currently empty."; 
    }
  return `The line is currently: ${namesStr}`;  
=======
function currentLine(arr) {
  var startStr = "The line is currently:";
  var namesStr = "";
  var numStart = 1;
  
  for(var i = 0; i < arr.length; i++) {
    namesStr += `${numStart}. ${arr[i]}`;
    numStart += 1;
    
    while(i !== arr.length-1) {
      namesStr+=",";
    }
  }
  
  if (arr.length === 0) {
      return "The line is currently empty."; 
    }
    
  return startStr + namesStr;  
>>>>>>> ec374a560ac284c73e87a991c2f300710cd37e01
}
