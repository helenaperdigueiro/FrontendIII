import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from './services/api';
import './App.scss';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      endereco: []
    }
  }

  // async componentDidMount() {
  //   this.handleSubmit({ cep });
  // }

  handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`cep/v1/${cep}`);
      this.setState({ endereco: response.data });
      console.log(response.data);
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Encontre seu endereço</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o cep" required type="text" name="cep" id="cep" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.endereco && (
              <ol className="list-group list-group-numbered my-3">
                {this.state.endereco.map(({ cep, state, city, neighborhood, street }) => {
                  return (
                    <li key={cep}>
                      <p>{cep} {state} {city} {neighborhood} {street}</p>
                      {/* <a target="_blank" href={html_url} rel="noreferrer">{name}</a> */}
                    </li>
                  )
                })}
              </ol>
            )}
          </div>
        </main>
      </>
    );
  }
}