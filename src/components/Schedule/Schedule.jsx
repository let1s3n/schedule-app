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
    return (
      <div className="container p-3 mb-5 mx-auto">
        <div className="row bg-secondary">
          <div className="col p-3 border-end bg-white"></div>
          <div className="col p-3 border border-start-0 border-bottom-0">Lunes</div>
          <div className="col p-3 border border-start-0 border-bottom-0">Martes</div>
          <div className="col p-3 border border-start-0 border-bottom-0">Miércoles</div>
          <div className="col p-3 border border-start-0 border-bottom-0">Jueves</div>
          <div className="col p-3 border border-start-0 border-bottom-0">Viernes</div>
          <div className="col p-3 border border-start-0 border-bottom-0">Sábado</div>
          <div className="col p-3 border border-start-0 border-bottom-0">Domingo</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">7:00 - 7:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[1]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[1]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[1]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[1]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[1]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[1]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[1]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">8:00 - 8:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[2]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[2]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[2]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[2]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[2]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[2]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[2]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">9:00 - 9:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[3]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[3]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[3]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[3]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[3]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[3]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[3]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">10:00 - 10:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[4]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[4]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[4]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[4]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[4]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[4]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[4]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">11:00 - 11:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[5]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[5]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[5]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[5]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[5]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[5]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[5]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">12:00 - 12:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[6]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[6]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[6]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[6]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[6]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[6]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[6]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">13:00 - 13:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[7]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[7]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[7]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[7]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[7]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[7]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[7]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">14:00 - 14:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[8]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[8]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[8]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[8]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[8]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[8]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[8]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">15:00 - 15:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[9]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[9]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[9]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[9]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[9]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[9]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[9]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">16:00 - 16:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[10]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[10]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[10]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[10]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[10]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[10]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[10]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">17:00 - 17:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[11]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[11]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[11]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[11]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[11]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[11]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[11]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">18:00 - 18:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[12]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[12]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[12]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[12]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[12]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[12]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[12]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">19:00 - 19:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[13]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[13]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[13]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[13]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[13]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[13]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[13]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border border-bottom-0 bg-secondary">20:00 - 20:50</div>
          <div className="col p-3 border-top border-end">{this.state.Lunes[14]}</div>
          <div className="col p-3 border-top border-end">{this.state.Martes[14]}</div>
          <div className="col p-3 border-top border-end">{this.state.Miercoles[14]}</div>
          <div className="col p-3 border-top border-end">{this.state.Jueves[14]}</div>
          <div className="col p-3 border-top border-end">{this.state.Viernes[14]}</div>
          <div className="col p-3 border-top border-end">{this.state.Sabado[14]}</div>
          <div className="col p-3 border-top border-end">{this.state.Domingo[14]}</div>
        </div>
        <div className="row">
          <div className="col p-3 border bg-secondary">21:00 - 21:50</div>
          <div className="col p-3 border-top border-bottom border-end">{this.state.Lunes[15]}</div>
          <div className="col p-3 border-top border-bottom border-end">{this.state.Martes[15]}</div>
          <div className="col p-3 border-top border-bottom border-end">{this.state.Miercoles[15]}</div>
          <div className="col p-3 border-top border-bottom border-end">{this.state.Jueves[15]}</div>
          <div className="col p-3 border-top border-bottom border-end">{this.state.Viernes[15]}</div>
          <div className="col p-3 border-top border-bottom border-end">{this.state.Sabado[15]}</div>
          <div className="col p-3 border-top border-bottom border-end">{this.state.Domingo[15]}</div>
        </div>
      </div>
    );
  }
}

export default Schedule;