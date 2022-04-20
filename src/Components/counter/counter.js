import { Component } from 'react';
import './counter.css'

class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter
        }
    }

    INC = () => {
        console.log(this.state.counter)
        if (this.state.counter < 50) {
            this.setState(state => ({
                counter: state.counter + 1
            }))
        }
        this.render();
    }

    DEC = () => {
        console.log(this.state.counter)
        if (this.state.counter > -50) {
            this.setState(state => ({
                counter: state.counter - 1
            }))
        }
    }

    RND = () => {
        console.log(this.state.counter)
        const max = 50,
            min = -50;
        this.setState(state => ({
            counter: Math.round(Math.random() * (max - min) + min)
        }))

    }

    RESET = () => {
        console.log(this.state.counter)
        this.setState(state => ({
            counter: state.counter - state.counter
        }))
    }

    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке

    render() {
        const { counter } = this.state;
        return (
            <div class="counterApp">
                <div class="counter">{counter}</div>
                <div class="controls">
                    <button onClick={this.INC}>INC</button>
                    <button onClick={this.DEC}>DEC</button>
                    <button onClick={this.RND}>RND</button>
                    <button onClick={this.RESET}>RESET</button>
                </div>
            </div>
        )
    }
}

export default CounterApp;

/* ReactDOM.render(<CounterApp counter={5} />, document.getElementById('counterApp')); */

  // 1) Начальное значение счетчика должно передаваться через props +
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов