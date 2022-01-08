const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const getA = ((counter, name) => {
     return counter += (name.match(/a/gi).length);
  });

  function containsA() {
    return names.reduce(getA, 0)
  }

 console.log(containsA());