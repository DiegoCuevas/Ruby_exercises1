function opposite(number) {
    var opuesto;
    if (number < 0)
      opuesto = Math.abs(number);
    else
      opuesto = number * (-1)
    return opuesto
  }