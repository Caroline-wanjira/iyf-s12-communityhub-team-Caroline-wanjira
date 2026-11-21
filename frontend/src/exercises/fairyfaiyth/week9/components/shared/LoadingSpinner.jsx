function LoadingSpinner({ text = "Loading..." }) {
    return (
        <div role="status" aria-live="polite">
            <p>{text}</p>
        </div>
    );
}

export default LoadingSpinner;
