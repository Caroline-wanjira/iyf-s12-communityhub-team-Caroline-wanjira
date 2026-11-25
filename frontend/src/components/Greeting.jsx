export default function Greeting({ name = "Guest", timeOfDay }) {
    let message = "Hello";
    
    if (timeOfDay === "morning") {
        message = "Good morning";
    } else if (timeOfDay === "afternoon") {
        message = "Good afternoon";
    } else if (timeOfDay === "evening") {
        message = "Good evening";
    }

    return (
        <div className="greeting-card">
            <h2>{message}, {name}!</h2>
        </div>
    );
}