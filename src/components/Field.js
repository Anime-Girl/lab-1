import React from 'react'

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            value: props.value,
            actSubmit: props.actSubmit,
        }
        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(val) {
        this.setState({ value: val });
    }
    onClick = () => {
        this.state.actSubmit(this.state.value);
    }
    render() {
        return (
            <div class="button" className='Field' >
                Color:
                <input id={this.state.id} value={this.state.value} onChange={e => this.onChange(e.target.value)} />
                <button id="ourbutton" onClick={this.onClick} type="submit" value="Submit">content</button>
            </div >
        )
    }
}
export default Field;