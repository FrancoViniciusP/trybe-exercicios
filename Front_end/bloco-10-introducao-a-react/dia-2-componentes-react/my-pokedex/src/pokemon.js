import React,{ Component }  from "react"; 

class Pokemon extends Component {
    
    render() {
        const { name, type, image, averageWeight:{ value, measurementUnit }} = this.props;
            return (
                <p> {name}, {type}, {image}, {value},{measurementUnit} </p>
            )
    }
}

export default Pokemon;
