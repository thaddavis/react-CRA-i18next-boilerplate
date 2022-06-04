import React from "react";

interface P {
    children: React.ReactNode
}

export class ErrorBoundary extends React.Component<P, { hasError: boolean}> {
    constructor(props: P) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: typeof Error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: any, errorInfo: any) {
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
        console.error("ERROR", error, errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }