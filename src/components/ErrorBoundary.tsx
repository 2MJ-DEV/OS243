'use client'
import React from 'react'

type Props = {
    children: React.ReactNode
}

type State = {
    hasError: boolean
    error: Error | null
}

export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Logger l'erreur dans un service externe
        console.error("Erreur capturée par ErrorBoundary:", error, errorInfo)
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>Oups ! Une erreur est survenue.</h2>
                    <p>{this.state.error?.message}</p>
                    <button onClick={this.handleReset}>Réessayer</button>
                </div>
            )
        }

        return this.props.children
    }
}