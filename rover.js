var curiosity = {
    direction : "N",
    x: 0,
    y: 0,
    log: []
  };
  
  var apolo = {
    direction : "W",
    x: 5,
    y: 5,
    log: []
  };
  
  function turnLeft (rover) {
    console.log("Antes", rover.direction)
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "N"
        break;
      case "S":
        rover.direction = "E"
        break;
      case "W":
        rover.direction = "S"
        break;
    }
    console.log("Despues", rover.direction)
  }
  
  function turnRight (rover) {
    console.log("Antes", rover.direction)
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "S"
        break;
      case "S":
        rover.direction = "W"
        break;
      case "W":
        rover.direction = "N"
        break;
    }
  console.log("Despues", rover.direction)
  }
  
  function moveForward (rover){
    //Condiciones
    switch (rover.direction) {
      case "N":
        if(rover.y - 1 > -1)
          rover.y = rover.y - 1;
        break;
      case "E":
        if(rover.x + 1 < 10)
          rover.x = rover.x + 1;
        break;
      case "S":
        if(rover.y + 1 < 10)
          rover.y = rover.y + 1;
        break;
      case "W":
        if(rover.x - 1 > -1)
          rover.x = rover.x -1;
        break;
      }
      console.log("X= ", rover.x ,"Y= ", rover.y);
  }
  
  function moveBackward (rover){ 
      switch (rover.direction) {
        case "N":
          if(rover.y + 1 < 10)
            rover.y = rover.y + 1;
          break;
        case "E":
          if(rover.x - 1 > -1)
            rover.x = rover.x - 1;
          break;
        case "S":
          if(rover.y - 1 > -1)
            rover.y = rover.y - 1;
          break;
        case "W":
          if(rover.x + 1 < 10)
            rover.x = rover.x + 1;
          break; 
        }
      
    console.log("X= ", rover.x , "Y= ", rover.y);
  }
  
  function moveBody (instrucciones, rover){
    console.log(instrucciones)
    for(var i = 0; i<instrucciones.length; i++){
      switch (instrucciones[i]) {
        case "f":
          moveForward(rover)
          break;
        case "b":
          moveBackward(rover)
          break;
        case "r":
          turnRight(rover)
          break;
        case "l":
          turnLeft(rover)
          break;
        default:
         console.log("Escribes mal las instrucciones")
          break;
      }
    rover.log.push({
      x : rover.x,
      y : rover.y,
      direction : rover.direction
    }) 
    }
  }
  
  
  
  module.exports = {turnLeft, turnRight, moveForward, moveBackward, moveBody}
  
  
  