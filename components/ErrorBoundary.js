import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  //getDerivedStateFromError detect the error and render it on the dom not in the console
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  //componentDidCatch prints the error and the type
  //it returns componentStack its an object bitkhabbir l error sar wein
  componentDidCatch(error,info){
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>something went wrong</h1>
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
