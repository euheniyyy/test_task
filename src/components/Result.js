import React, {PureComponent} from 'react';
import '../styles/Result.css';

class Result extends PureComponent {
    render() {
        const {result} = this.props
        return (
            <div className="container">
                Output: {Object.values(result)?.map((color, index) => <div key={`-${index}`} className={`ball ${color ? 'black' : 'white'}-ball`}/>)}
            </div>
        );
    }
}

Result.propTypes = {};

export default Result;
