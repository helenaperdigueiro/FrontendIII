import { Component } from 'react';
import './App.css';

export default class Lista extends Component {
  constructor() {
    super();
    this.state = {
      produtos: [
        { id: 0, nome: "melancia", imagem: "https://revistacampoenegocios.com.br/wp-content/uploads/2020/11/Melancia-01-1024x725.jpg" },
        { id: 1, nome: "batata", imagem: "https://cdn-icons-png.flaticon.com/512/1135/1135501.png" },
        { id: 2, nome: "banana", imagem: "https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_615x300.jpg" },
        { id: 3, nome: "maca", imagem: "https://tinyurl.com/6hbw43vs" },
        { id: 4, nome: "biscoito", imagem: "https://shortest.link/1CMu" }
      ]
    }
  }

  remover = id => {
    const listaNova = this.state.produtos.filter(produto => produto.id !== id)
    this.setState({
      produtos: listaNova
    })
  }

  render() {
    return (
      <>
      
        <ul>
          {this.state.produtos.map(({id, imagem, nome}) => {
            return (
              <li onClick={() => this.remover(id)}>
                <img src={imagem} alt={nome} />
                <h3>{nome}</h3>
              </li>
            )
          })}
        </ul>
        </>
    )
  }
}
