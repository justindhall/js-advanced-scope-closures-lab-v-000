function produceDrivingRange(range) {
  return function(tripDistance) {
    if (range > tripDistance)
      return true;
    else
      return false;
  }
}