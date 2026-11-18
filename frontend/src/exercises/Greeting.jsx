function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function GreetingDemo() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default GreetingDemo;