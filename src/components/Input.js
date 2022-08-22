import React, {PureComponent} from 'react';

class Input extends PureComponent {
    onChange = (e) => {
        const {value} = e?.target
        if(value?.length > 4) return
        this.props.input(value)
    }
    render() {
        const {value} = this.props
        return (
            <div className="container">
                <input value={value} onChange={(e) => this.onChange(e)}/>
            </div>
        );
    }
}

Input.propTypes = {};

export default Input;
