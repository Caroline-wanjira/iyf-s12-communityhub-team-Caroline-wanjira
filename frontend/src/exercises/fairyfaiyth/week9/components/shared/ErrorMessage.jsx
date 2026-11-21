function ErrorMessage({ message, onRetry }) {
    return (
        <div role="alert">
            <p>{message}</p>
            {onRetry && <button onClick={onRetry}>Try Again</button>}
        </div>
    );
}

export default ErrorMessage;
