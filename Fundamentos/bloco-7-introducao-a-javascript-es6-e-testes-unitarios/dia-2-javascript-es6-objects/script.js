/* ------- PART 1 ------ */

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order ) => {
      // Adicione abaixo as informações necessárias.
      let ordering = order.order.delivery.deliveryPerson;
      let person = order.name;
      let phone = order.phoneNumber;
      let street = order.address.street;
      let number = order.address.number;
      let apartment = order.address.apartment;
      console.log(`Olá ${ordering}, entrega para: ${person}, Telefone: ${phone}, R. ${street}, Nº ${number}, AP: ${apartment}`);       
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva'
    order.payment.total = 'R$ 50,00'
    let name = order.name;
    let pizza = Object.keys(order.order.pizza).join(', ');
    let drink = order.order.drinks.coke.type;
    let price = order.payment.total;
    console.log(`Olá ${name}, o total do seu pedido de ${pizza} e ${drink} é ${price}.`)  
  }
  
  orderModifier(order);

/* ------ PART 2 -------- */

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurno = (lesson2) => {lesson2['turno'] = 'noite';}

  addTurno(lesson2);

  const keyList = (obj) => {console.log(Object.keys(obj));}

  keyList(lesson1);

  const objLength = (obj) => {console.log(Object.keys(obj).length);}

  objLength(lesson2);

  const valueList = (obj) => {console.log(Object.values(obj));}

  valueList(lesson3);

 
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);
  

  const studants = () => {
    let total = 0;
    for (let i in allLessons) {
        total += allLessons[i].numeroEstudantes;
    }
    console.log(total);      
  }

  studants();

  const getValueByNumber = (obj, number) => {
    console.log(Object.values(obj)[number]);
  }

  getValueByNumber(lesson1, 0);
// Output: 'Matématica'


  const verifyPair = (obj, chave, value) => {
      (obj[chave] === value) ?  console.log(true) : console.log(false);
  } 

  verifyPair(lesson3, 'materia' , 'noite');

/* -------- BONUS -------- */

  const mathStudants = () => {
    let total = 0;
    for(let i in allLessons) {
        if (allLessons[i].materia === 'Matemática') {
            total += allLessons[i].numeroEstudantes;
        }
    }
    return total;
  }

  console.log(mathStudants());

  const createReport = (obj, teacher) => {
    let total = 0;
    let report = {
        professor: teacher,
        aulas: [],
        estudantes: [],
    };
    for(let i in obj) {
        if (obj[i].professor === teacher) {
            report.aulas.push(obj[i].materia);
            total += obj[i].numeroEstudantes;
            report.estudantes = total;
        }
    }
    return report;
  } 

  console.log(createReport(allLessons, 'Maria Clara'))