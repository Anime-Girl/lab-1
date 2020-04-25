import React from 'react';
import Field from './Field';
import Square from './Square';
import hexToCMYK from '../hextocmyk';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      CMYK: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(val) {
    this.setState(
      {
        value: val,
        CMYK: hexToCMYK(val),
      },
    );
  }

  render() {
    return (
      <div className="Color">
        <Field id="field" value={this.state.value} actSubmit={this.handleSubmit} />
        <Square id="square" value={this.state.value} CMYK={this.state.CMYK} />
      </div>
    );
  }
}
export default Color;
