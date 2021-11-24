import React, {Component} from "react";

class Main extends Component{
    state = {
        counter: 0,
        even: true
    }


    render(){
        let evenOrOdd = '';
        if (this.state.counter % 2 === 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        return(
            
            <div class ='container'>
                <h1>Total votes</h1>
                <h1 id='number' className={evenOrOdd}>
                    {this.state.counter}
                    </h1>
                <div class='buttons-wrapper'>
                <button class='btn success' onClick={this.increaseByOneHandler}>increase by one</button>
                <button class='btn info' onClick={this.decreaseByOneHandler}>decrease by one</button>
                <button class='btn warning' onClick={this.increaseByTwoHandler}>increase by two</button>
                <button class='btn danger' onClick={this.decreaseByTwoHandler}>decrease by two</button>
                <button class='btn default' onClick={this.resetHandler}>Reset</button>
                </div>
            </div>
        )
    }

    oddOrEvenHandler = () =>{
        if(this.state.counter % 2 === 0){
            document.getElementById('number').classList.remove('odd');
            document.getElementById('number').classList.add('even');
            this.setState({
                even : true
            })
        }
        else{
            document.getElementById('number').classList.remove('even');
            document.getElementById('number').classList.add('odd');
            this.setState({
                even : false
            })
        }
    }

    increaseByOneHandler = () =>{
        this.setState({
            counter : this.state.counter + 1
        })
    }

    decreaseByOneHandler = () =>{
        let newCounter = this.state.counter - 1;
        if(newCounter >= 0){
        this.setState({
            counter : newCounter
        })
        }
        else{
            this.setState({
                counter : 0
            })
        }
    }

    increaseByTwoHandler = () =>{
        this.setState({
            counter : this.state.counter + 2
        })
    }

    resetHandler = () =>{
        this.setState({
            counter : 0
        })
    }

    decreaseByTwoHandler = () =>{
        let newCounter = this.state.counter - 2;
        if(newCounter >= 0){
        this.setState({
            counter : newCounter
        })
        }
        else{
            this.setState({
                counter : 0
            })
        }
    }


}

export default Main;