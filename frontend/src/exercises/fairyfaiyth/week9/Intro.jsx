function getGreeting(hour) {
    if (hour < 12) {
        return "Good morning!";
    }
    if (hour < 18) {
        return "Good afternoon!";
    }
    return "Good evening!";
}

function Intro() {
    const now = new Date();
    const today = now.toLocaleDateString("en-KE", { dateStyle: "full" });

    return (
        <div>
            <h1>Faith Mutisya</h1>
            <p>I am learning web development at IYF Weekend Academy.</p>
            <p>I build projects with HTML, CSS, JavaScript and now React.</p>
            <p>My goal is to build CommunityHub with my team.</p>
            <p>Today is {today}</p>
            <p>{getGreeting(now.getHours())}</p>
        </div>
    );
}

export default Intro;
