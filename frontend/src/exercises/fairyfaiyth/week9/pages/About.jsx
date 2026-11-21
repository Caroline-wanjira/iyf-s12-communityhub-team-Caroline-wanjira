import useLocalStorage from "../hooks/useLocalStorage.js";
import useToggle from "../hooks/useToggle.js";

function About() {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    const [showMore, { toggle }] = useToggle(false);

    return (
        <div>
            <h1>About CommunityHub</h1>
            <label htmlFor="theme">Theme</label>
            <select id="theme" value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            <p>
                <button onClick={toggle}>{showMore ? "Show less" : "Show more"}</button>
            </p>
            {showMore && <p>CommunityHub is built by our team at IYF Weekend Academy.</p>}
        </div>
    );
}

export default About;
