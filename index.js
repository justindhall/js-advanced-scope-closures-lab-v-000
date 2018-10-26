function produceDrivingRange(blockRange) {
  return function(origin, terminus) {
    let startBlock = parseInt(origin);
    let endBlock = parseInt(terminus);
    let distanceTraveled = Math.abs(endBlock - startBlock);
    
    if (blockRange - distanceTraveled > 0) {
      return `within range by ;
    }
    else {
      return false;
    }
  }
}

