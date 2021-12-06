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
      let ordering = Object.values(order.order.delivery.deliveryPerson).join('');
      let person = Object.values(order.name).join('');
      let phone = Object.values(order.phoneNumber).join('');
      let street = Object.values(order.address.street).join('');
      let number = Object.values(order.address.number).join('');
      let apartment = Object.values(order.address.apartment).join('');
      console.log(`Olá ${ordering}, entrega para: ${person}, Telefone: ${phone}, R. ${street}, Nº ${number}, AP: ${apartment}`);       
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva'
    order.payment.total = 'R$ 50,00'
    let name = Object.values(order.name).join('');
    let pizza = Object.keys(order.order.pizza).join(', ');
    let drink = Object.values(order.order.drinks.coke.type).join('');
    let price = Object.values(order.payment.total).join('');
    console.log(`Olá ${name}, o total do seu pedido de ${pizza} e ${drink} é ${price}.`)

    

  
  }
  
  orderModifier(order);