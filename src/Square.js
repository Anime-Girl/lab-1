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
    render() {
        return (
            <div className="Square">
                <div style={{ backgroundColor: this.state.value }} class="block" id={this.state.id}> {this.state.CMYK} </div>
            </div>
        )
    }
}
export default Square;