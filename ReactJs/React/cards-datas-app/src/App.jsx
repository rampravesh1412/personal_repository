import "./App.css";
import Card from "./component/Card/Card";

function App() {
  const cardData = [
    {
      id: 1,
      price: 25000,
      place: "Lalkila",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore labore commodi quia magnam. Sequi, aspernatur? Illo officiis quis consectetur magni dicta reiciendis assumenda ipsam aperiam aspernatur exercitationem tempore sequi perferendis vel maiores odit et, alias voluptatibus sint expedita facilis laudantium. Odit qui optio quasi, officia cum animi unde aspernatur.",
      img: "https://media.istockphoto.com/id/530741074/photo/red-fort-lal-qila-with-indian-flag-delhi-india.jpg?s=2048x2048&w=is&k=20&c=UuQ070An-rGX-U4lYOgD6CBouM0nP8rRbk0mX0l92Ak=",
    },
    {
      id: 2,
      price: 10000,
      place: "QutabMinar",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore labore commodi quia magnam. Sequi, aspernatur? Illo officiis quis consectetur magni dicta reiciendis assumenda ipsam aperiam aspernatur exercitationem tempore sequi perferendis vel maiores odit et, alias voluptatibus sint expedita facilis laudantium. Odit qui optio quasi, officia cum animi unde aspernatur.",
      img: "https://www.delhimetrotimes.in/photos/2019/01/13/qutub-minar.jpg",
    },
    {
      id: 3,
      price: 15000,
      place: "India Gate",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore labore commodi quia magnam. Sequi, aspernatur? Illo officiis quis consectetur magni dicta reiciendis assumenda ipsam aperiam aspernatur exercitationem tempore sequi perferendis vel maiores odit et, alias voluptatibus sint expedita facilis laudantium. Odit qui optio quasi, officia cum animi unde aspernatur.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/India_Gate_in_New_Delhi_03-2016.jpg/300px-India_Gate_in_New_Delhi_03-2016.jpg",
    },
    {
      id: 4,
      price: 20000,
      place: "Shree Ram Mandir",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore labore commodi quia magnam. Sequi, aspernatur? Illo officiis quis consectetur magni dicta reiciendis assumenda ipsam aperiam aspernatur exercitationem tempore sequi perferendis vel maiores odit et, alias voluptatibus sint expedita facilis laudantium. Odit qui optio quasi, officia cum animi unde aspernatur.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7YJ-qhZahob5BeP4fHZ-vYAKocBLK_-cpqw&usqp=CAU",
    },
    {
      id: 5,
      price: 25000,
      place: "Ramsetu",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore labore commodi quia magnam. Sequi, aspernatur? Illo officiis quis consectetur magni dicta reiciendis assumenda ipsam aperiam aspernatur exercitationem tempore sequi perferendis vel maiores odit et, alias voluptatibus sint expedita facilis laudantium. Odit qui optio quasi, officia cum animi unde aspernatur.",
      img: "https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2022/09/setu.jpg",
    },
    {
      id: 6,
      price: 30000,
      place: "Virdhavan",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore labore commodi quia magnam. Sequi, aspernatur? Illo officiis quis consectetur magni dicta reiciendis assumenda ipsam aperiam aspernatur exercitationem tempore sequi perferendis vel maiores odit et, alias voluptatibus sint expedita facilis laudantium. Odit qui optio quasi, officia cum animi unde aspernatur.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwueGlWo15ZfwDU-WDAsU5Ie0pRei9jj5bWA&usqp=CAU",
    },
    {
      id: 7,
      price: 35000,
      place: "KedarNath",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore labore commodi quia magnam. Sequi, aspernatur? Illo officiis quis consectetur magni dicta reiciendis assumenda ipsam aperiam aspernatur exercitationem tempore sequi perferendis vel maiores odit et, alias voluptatibus sint expedita facilis laudantium. Odit qui optio quasi, officia cum animi unde aspernatur.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAex-VsX5ng3iux-qPiyAWy--PwkpOEYpUlA&usqp=CAU",
    },
    {
      id: 8,
      price: 40000,
      place: "Ind vs Pak",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore labore commodi quia magnam. Sequi, aspernatur? Illo officiis quis consectetur magni dicta reiciendis assumenda ipsam aperiam aspernatur exercitationem tempore sequi perferendis vel maiores odit et, alias voluptatibus sint expedita facilis laudantium. Odit qui optio quasi, officia cum animi unde aspernatur.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wD0SDkIVSAzkWelXxhpCGizx7gh7irYefQ&usqp=CAU",
    },
    {
      id: 9,
      price: 45000,
      place: "Ind vs Aus",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore labore commodi quia magnam. Sequi, aspernatur? Illo officiis quis consectetur magni dicta reiciendis assumenda ipsam aperiam aspernatur exercitationem tempore sequi perferendis vel maiores odit et, alias voluptatibus sint expedita facilis laudantium. Odit qui optio quasi, officia cum animi unde aspernatur.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAMDf5tVS62q8QovTVhjoyWT3kbKuAOYwnw&usqp=CAU",
    },
  ];
  console.log(cardData);
  return (
    <>
      <div className="App-Heading">
        <h1>
          <span>Plan with RPK</span>
        </h1>
      </div>
      <div>
        <Card
          imgData={cardData[0].img}
          priceData={cardData[0].price}
          placeData={cardData[0].place}
          discriptionData={cardData[0].discription}
        />
        <Card
          imgData={cardData[1].img}
          priceData={cardData[1].price}
          placeData={cardData[1].place}
          discriptionData={cardData[1].discription}
        />
        <Card
          imgData={cardData[2].img}
          priceData={cardData[2].price}
          placeData={cardData[2].place}
          discriptionData={cardData[2].discription}
        />
        <Card
          imgData={cardData[3].img}
          priceData={cardData[3].price}
          placeData={cardData[3].place}
          discriptionData={cardData[3].discription}
        />
        <Card
          imgData={cardData[4].img}
          priceData={cardData[4].price}
          placeData={cardData[4].place}
          discriptionData={cardData[4].discription}
        />
        <Card
          imgData={cardData[5].img}
          priceData={cardData[5].price}
          placeData={cardData[5].place}
          discriptionData={cardData[5].discription}
        />
        <Card
          imgData={cardData[6].img}
          priceData={cardData[6].price}
          placeData={cardData[6].place}
          discriptionData={cardData[6].discription}
        />
        <Card
          imgData={cardData[7].img}
          priceData={cardData[7].price}
          placeData={cardData[7].place}
          discriptionData={cardData[7].discription}
        />
        <Card
          imgData={cardData[8].img}
          priceData={cardData[8].price}
          placeData={cardData[8].place}
          discriptionData={cardData[8].discription}
        />
      </div>
    </>
  );
}

export default App;
