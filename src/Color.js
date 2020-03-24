import React from 'react';
import Field from "./Field";
import Square from "./Square";
import hexToCMYK from './hextocmyk';
import './App.css';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '#FFFFF',
            CMYK: '',
        }
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //    this.setState({ value: event.target.value });
    // }

    handleSubmit(val) {
        this.setState({ value: val });
        this.setState({ CMYK: hexToCMYK(this.state.value) });
        //alert(this.state.CMYK);
        //document.getElementById('square').style.backgroundColor = this.state.value;
        // document.getElementById('square').innerHTML = hexToCMYK(this.state.value);
        //val.preventDefault();
    }
    render() {
        return (
            <div className="Color">
                <Field id="field" value={this.state.value} actSubmit={this.handleSubmit} ></Field>
                <Square id='square' value={this.state.value} CMYK={this.state.CMYK} ></Square>
            </div >
        )
    }
}
export default Color;
