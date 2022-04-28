import Cards from "./components/Cards";
import Nav from "./components/Nav";
import data from "./data";

export default function App() {
  let cardsData = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });
  return (
    <>
      <Nav />
      <div className="wrap-cards">{cardsData}</div>
    </>
  );
}
