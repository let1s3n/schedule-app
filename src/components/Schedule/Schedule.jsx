import React, { Component } from "react";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lunes: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: ''
      },
      Martes: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: ''
      },
      Miercoles: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: ''
      },
      Jueves: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: ''
      },
      Viernes: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: ''
      },
      Sabado: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: ''
      },
      Domingo: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: ''
      },
    }
  }


  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      const dia = this.props.data.dia;
      const horario = this.props.data.horario;
      const curso = this.props.data.curso;

      console.log(dia, horario, curso);
      this.setState({
        [dia]: { ...this.state[dia], [horario]: curso }
      });

    }
  }


  render() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    return (
      <div className="my-5">
        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Lunes</th>
              <th scope="col">Martes</th>
              <th scope="col">Miercoles</th>
              <th scope="col">Jueves</th>
              <th scope="col">Viernes</th>
              <th scope="col">Sabado</th>
              <th scope="col">Domingo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">07:00 - 07:50</th>
              <td>{this.state.Lunes[1]}</td>
              <td>{this.state.Martes[1]}</td>
              <td>{this.state.Miercoles[1]}</td>
              <td>{this.state.Jueves[1]}</td>
              <td>{this.state.Viernes[1]}</td>
              <td>{this.state.Sabado[1]}</td>
              <td>{this.state.Domingo[1]}</td>
            </tr>
            <tr>
              <th scope="row">08:00 - 08:50</th>
              <td>{this.state.Lunes[2]}</td>
              <td>{this.state.Martes[2]}</td>
              <td>{this.state.Miercoles[2]}</td>
              <td>{this.state.Jueves[2]}</td>
              <td>{this.state.Viernes[2]}</td>
              <td>{this.state.Sabado[2]}</td>
              <td>{this.state.Domingo[2]}</td>
            </tr>
            <tr>
              <th scope="row">09:00 - 09:50</th>
              <td>{this.state.Lunes[3]}</td>
              <td>{this.state.Martes[3]}</td>
              <td>{this.state.Miercoles[3]}</td>
              <td>{this.state.Jueves[3]}</td>
              <td>{this.state.Viernes[3]}</td>
              <td>{this.state.Sabado[3]}</td>
              <td>{this.state.Domingo[3]}</td>
            </tr>

            <tr>
              <th scope="row">10:00 - 10:50</th>
              <td>{this.state.Lunes[4]}</td>
              <td>{this.state.Martes[4]}</td>
              <td>{this.state.Miercoles[4]}</td>
              <td>{this.state.Jueves[4]}</td>
              <td>{this.state.Viernes[4]}</td>
              <td>{this.state.Sabado[4]}</td>
              <td>{this.state.Domingo[4]}</td>
            </tr>

            <tr>
              <th scope="row">11:00 - 11:50</th>
              <td>{this.state.Lunes[5]}</td>
              <td>{this.state.Martes[5]}</td>
              <td>{this.state.Miercoles[5]}</td>
              <td>{this.state.Jueves[5]}</td>
              <td>{this.state.Viernes[5]}</td>
              <td>{this.state.Sabado[5]}</td>
              <td>{this.state.Domingo[5]}</td>
            </tr>

            <tr>
              <th scope="row">12:00 - 12:50</th>
              <td>{this.state.Lunes[6]}</td>
              <td>{this.state.Martes[6]}</td>
              <td>{this.state.Miercoles[6]}</td>
              <td>{this.state.Jueves[6]}</td>
              <td>{this.state.Viernes[6]}</td>
              <td>{this.state.Sabado[6]}</td>
              <td>{this.state.Domingo[6]}</td>
            </tr>

            <tr>
              <th scope="row">13:00 - 13:50</th>
              <td>{this.state.Lunes[7]}</td>
              <td>{this.state.Martes[7]}</td>
              <td>{this.state.Miercoles[7]}</td>
              <td>{this.state.Jueves[7]}</td>
              <td>{this.state.Viernes[7]}</td>
              <td>{this.state.Sabado[7]}</td>
              <td>{this.state.Domingo[7]}</td>
            </tr>

            <tr>
              <th scope="row">14:00 - 14:50</th>
              <td>{this.state.Lunes[8]}</td>
              <td>{this.state.Martes[8]}</td>
              <td>{this.state.Miercoles[8]}</td>
              <td>{this.state.Jueves[8]}</td>
              <td>{this.state.Viernes[8]}</td>
              <td>{this.state.Sabado[8]}</td>
              <td>{this.state.Domingo[8]}</td>
            </tr>

            <tr>
              <th scope="row">15:00 - 15:50</th>
              <td>{this.state.Lunes[9]}</td>
              <td>{this.state.Martes[9]}</td>
              <td>{this.state.Miercoles[9]}</td>
              <td>{this.state.Jueves[9]}</td>
              <td>{this.state.Viernes[9]}</td>
              <td>{this.state.Sabado[9]}</td>
              <td>{this.state.Domingo[9]}</td>
            </tr>

            <tr>
              <th scope="row">16:00 - 16:50</th>
              <td>{this.state.Lunes[10]}</td>
              <td>{this.state.Martes[10]}</td>
              <td>{this.state.Miercoles[10]}</td>
              <td>{this.state.Jueves[10]}</td>
              <td>{this.state.Viernes[10]}</td>
              <td>{this.state.Sabado[10]}</td>
              <td>{this.state.Domingo[10]}</td>
            </tr>

            <tr>
              <th scope="row">17:00 - 17:50</th>
              <td>{this.state.Lunes[11]}</td>
              <td>{this.state.Martes[11]}</td>
              <td>{this.state.Miercoles[11]}</td>
              <td>{this.state.Jueves[11]}</td>
              <td>{this.state.Viernes[11]}</td>
              <td>{this.state.Sabado[11]}</td>
              <td>{this.state.Domingo[11]}</td>
            </tr>

            <tr>
              <th scope="row">18:00 - 18:50</th>
              <td>{this.state.Lunes[12]}</td>
              <td>{this.state.Martes[12]}</td>
              <td>{this.state.Miercoles[12]}</td>
              <td>{this.state.Jueves[12]}</td>
              <td>{this.state.Viernes[12]}</td>
              <td>{this.state.Sabado[12]}</td>
              <td>{this.state.Domingo[12]}</td>
            </tr>

            <tr>
              <th scope="row">19:00 - 19:50</th>
              <td>{this.state.Lunes[13]}</td>
              <td>{this.state.Martes[13]}</td>
              <td>{this.state.Miercoles[13]}</td>
              <td>{this.state.Jueves[13]}</td>
              <td>{this.state.Viernes[13]}</td>
              <td>{this.state.Sabado[13]}</td>
              <td>{this.state.Domingo[13]}</td>
            </tr>

            <tr>
              <th scope="row">20:00 - 20:50</th>
              <td>{this.state.Lunes[14]}</td>
              <td>{this.state.Martes[14]}</td>
              <td>{this.state.Miercoles[14]}</td>
              <td>{this.state.Jueves[14]}</td>
              <td>{this.state.Viernes[14]}</td>
              <td>{this.state.Sabado[14]}</td>
              <td>{this.state.Domingo[14]}</td>
            </tr>

            <tr>
              <th scope="row">21:00 - 21:50</th>
              <td>{this.state.Lunes[15]}</td>
              <td>{this.state.Martes[15]}</td>
              <td>{this.state.Miercoles[15]}</td>
              <td>{this.state.Jueves[15]}</td>
              <td>{this.state.Viernes[15]}</td>
              <td>{this.state.Sabado[15]}</td>
              <td>{this.state.Domingo[15]}</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Schedule;