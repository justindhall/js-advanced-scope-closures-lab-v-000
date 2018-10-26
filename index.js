function produceDrivingRange(blockRange) {
  return function(tripDistance) {
    if (range > tripDistance) {
      return true;
    }
    else {
      return false;
    }
  }
}

