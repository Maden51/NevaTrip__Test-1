import Card from './components/Card';
import data from './mockData.json';

function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="CardList">
          {data.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
