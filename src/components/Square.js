import React from 'react'

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            CMYK: props.CMYK,
            value: props.value
        };
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            value: newProps.value,
            CMYK: newProps.CMYK
        })
    }
    render() {
        return (
            <div className="Square">
                <div type="text" class="rectangle" value='this.state.value' style={{ backgroundColor: this.state.value }} id={this.state.id}></div>
                <h1>{this.state.CMYK}</h1>
            </div>
        )
    }
}
export default Square;