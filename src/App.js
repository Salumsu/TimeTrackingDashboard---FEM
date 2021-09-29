import Profile from "./components/Profile";
import Cards from "./components/Cards";
import CardDetailesProvider from "./contexts/CardDetails";
import TimeFrameProvider from "./contexts/TimeFrame";

function App() {
  return (
    <div className="App">
      <TimeFrameProvider>
        <CardDetailesProvider>
          <div className="grid">
            <Profile />
            <Cards />
          </div>
        </CardDetailesProvider>
      </TimeFrameProvider>
    </div>
  );
}

export default App;
