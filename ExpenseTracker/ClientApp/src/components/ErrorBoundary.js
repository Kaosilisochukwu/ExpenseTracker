import React, { Component } from "react"
import { Link } from "react-router-dom"

class ErrorBoundary extends Component{

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
       
    }

    render() {

        if (this.state.hasError) {
            return <div>
                <h1>Something went wrong</h1>
                <Link to="/" className="btn btn-primary">
                    Return Home
                </Link>
                </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary;