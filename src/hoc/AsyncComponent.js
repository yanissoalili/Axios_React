import React, { Component } from "react"
// a function return a class based component with render function to import component in another Component
// extra bundle in network '1.chunk.js' 
// the component will be loaded when need it
//in react version 16.6 and above react we can use React.lazy()
const asyncComponent = (importComponent) =>{
    return class extends Component{
        state = {
            component:null
        }
        componentDidMount(){
            importComponent()
            .then(cmp => { 
                
                this.setState({component: cmp.default})
                console.log(this.state.component)
            })
        }
        render(){
            const C = this.state.component
            return C ? <C {...this.props} /> :  null

        }
    }

}
export default asyncComponent