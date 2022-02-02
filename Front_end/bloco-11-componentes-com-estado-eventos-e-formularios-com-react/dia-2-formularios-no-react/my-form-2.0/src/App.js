import React from 'react';
import './App.css';
import estados from './states';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    type: '',
    click: undefined,
  }

  changeName = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  showData = () => {
    this.setState({ click: '1' })
  }

  render() {
    return <div>
      {!this.state.click &&
        <fieldset className='form'>
          <label>
            Nome:
            <input type="text"
              name='name'
              value={this.state.name}
              onChange={this.changeName}
              style={{ textTransform: 'uppercase' }}
              maxLength={40}
              required />
          </label>

          <label>
            Email:
            <input type="text"
              name='email'
              value={this.state.email}
              onChange={this.changeName}
              maxLength={50}
              required />
          </label>

          <label>
            CPF:
            <input type="text"
              name='cpf'
              value={this.state.cpf}
              onChange={this.changeName}
              maxLength={11}
              required />
          </label>

          <label>
            Endereço:
            <input type="text"
              name='address'
              value={this.state.address}
              onChange={this.changeName}
              maxLength={200}
              required />
          </label>

          <label>
            Cidade:
            <input type="text"
              name='city'
              value={this.state.city}
              onChange={this.changeName}
              maxLength={28}
              required />
          </label>

          <label>
            Estado:
            <select onChange={this.changeName} id="estado" name="state">
              {estados.map(({ nome }) => <option key={nome} value={nome}>{nome}</option>)}
            </select>
          </label>

          <label>
            Tipo:
            <label> Casa
              <input type='radio'
                name='type'
                value='Casa'
                onChange={this.changeName}
                required /></label>
            <label> Apartamento
              <input type='radio'
                name='type'
                value='Apartamento'
                onChange={this.changeName}
                required /></label>
          </label>
        </fieldset>
      }
      {/* <fieldset className='form'>
        <label>
          Resumo do currículo: <br />
          <textarea name="resuno" id="" cols="30" rows="10" maxLength='1000' required></textarea> <br /><br />
        </label>
        <label>
          Cargo: <br />
          <textarea name="resuno" id="" cols="30" rows="10" maxLength='40' required></textarea>
        </label>
        <label>
          Descrição do cargo: <br />
          <input type="text" maxLength='500' required />
        </label>

      </fieldset> */}
      <button onClick={this.showData}>Gerar Dados</button>
      {this.state.click &&
        <div>
          <p>{this.state.name}</p>
          <p>{this.state.email}</p>
          <p>{this.state.cpf}</p>
          <p>{this.state.address}</p>
          <p>{this.state.city}</p>
          <p>{this.state.state}</p>
          <p>{this.state.type}</p>
        </div>}
    </div>;
  }
}

export default App;