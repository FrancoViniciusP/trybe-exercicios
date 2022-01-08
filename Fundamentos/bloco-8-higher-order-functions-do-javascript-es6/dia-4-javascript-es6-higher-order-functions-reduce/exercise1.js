const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const newArray = (acc, currentValue) => { 
      return acc.concat(currentValue, []);
  };

  function flatten() {
    return arrays.reduce(newArray);
  }
  
  console.log(flatten());