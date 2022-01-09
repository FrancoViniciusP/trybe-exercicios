const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  // escreva filterPeople abaixo
  const filterPeople = () => {
    let list = '';
    people.forEach(({name, bornIn, nationality}) => {
        if (nationality === 'Australian' && bornIn > 1900 && bornIn < 2001) {
          list += ` ${name}`;
      }
    })
    return list;
  } 

  console.log(filterPeople(...people));