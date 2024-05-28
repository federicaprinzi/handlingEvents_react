import "./App.css";

const AlertClock = ({ showTime }) => {
  return <button onClick={showTime}>Che ore sono?</button>;
};

const App = () => {
  const showTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(currentTime);
  };

  return (
    <div>
      <AlertClock showTime={showTime} />
    </div>
  );
};

export default App;
