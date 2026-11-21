function getMessage(timeOfDay) {
    if (timeOfDay === "morning") {
        return "Good morning";
    }
    if (timeOfDay === "afternoon") {
        return "Good afternoon";
    }
    return "Good evening";
}

function Greeting({ name = "Guest", timeOfDay = "morning" }) {
    return <h2>{getMessage(timeOfDay)}, {name}!</h2>;
}

export default Greeting;
