import React from 'react'

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isError : false,
            errorMessage:''
        }
    }

    // Return new state with errorMessage, if error occurs, that can be used inside fall back UI message.
    static getDerivedStateFromError(e){
        return{
            isError:true,
            errorMessage:`Something Went Wrong: ${e}`
        }
    }

    // If we want to log error and their information to some log File or Database, that can be done here.
    componentDidCatch(error,info){        
          console.log(error)
          console.log(info)       
    }

    // Return Fall Back UI in case of any error during rendering of Components under it.
    render(){
        if(this.state.isError)
        return(
            <div><h3>{this.state.errorMessage}</h3></div>
        )
        return (this.props.children)
    }
}

export default ErrorBoundary