import React from 'react';

class About extends React.Component{
    goBackPrevious = () => {
        this.props.history.push("/")
    }
    render(){
        return(
            <>
                <h3>Im From About</h3>
                <button onClick={this.goBackPrevious}>GO Back</button>
            </>
        )
    }
}

export default About;