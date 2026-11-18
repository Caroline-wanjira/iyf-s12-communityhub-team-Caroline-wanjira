function Intro() {
  const name = "Caroline Wanjira";
  const now = new Date();
  const hour = now.getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good morning! A fresh start for some coding.";
  } else if (hour < 18) {
    greeting = "Good afternoon! Keep the momentum going.";
  } else {
    greeting = "Good evening! Time to wrap up and review today's progress.";
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>
        I am a financial strategist and author who enjoys turning ideas into
        impact. I like breaking down complex problems into clear, practical
        steps.
      </p>
      <p>
        I am an aspiring software developer learning React through the IYF
        weekend academy. I am building skills in HTML, CSS and JavaScript, and
        I am excited to apply them to real projects.
      </p>
      <p>
        On the CommunityHub team, I am the team lead and I am working on the
        user profiles feature. My goal is to build something useful that
        brings people in a community together.
      </p>
      <p>Today is {now.toLocaleDateString()}</p>
      <p>{greeting}</p>
    </div>
  );
}

export default Intro;