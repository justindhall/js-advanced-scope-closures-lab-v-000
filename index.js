function produceDrivingRange(blockRange) {
  return function(origin, terminus) {
    let startBlock = parseInt(origin);
    let endBlock = parseInt(terminus);
    let distanceTraveled = Math.abs(endBlock - startBlock);
    let difference = blockRange - distanceTraveled;
    
    if (difference > 0) {
      return `within range by ${difference}`;
    }
    else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(total) {
    return percentage * total;
  }
}

function createDiver() {
  let driverId = 0;
  
  return class {
    constructor(name, )
  }
}
