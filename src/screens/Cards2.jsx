import React from "react";
import Card from "../components/Card2";
import Sidebar from "../components/Sidebar";
import "../styles/cards.css";

const tarjetas = [
  {
    img: "https://images.adsttc.com/media/images/63c0/a935/7643/4a39/8498/948f/large_jpg/casa-tunich-apiron_13.jpg?1673570670",
    title: "Casa uno",
    subtitle: "Bonita",
    text: "Lorem ipsum dolor sit amet consectetur,",
    price: 500000,
  },
  {
    img: "https://images.adsttc.com/media/images/63c0/a935/7643/4a39/8498/948f/large_jpg/casa-tunich-apiron_13.jpg?1673570670",
    title: "Casa dos",
    subtitle: "Feita",
    text: "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur,",
    price: 200000,
  },
  {
    img: "https://images.adsttc.com/media/images/63c0/a935/7643/4a39/8498/948f/large_jpg/casa-tunich-apiron_13.jpg?1673570670",
    title: "Casa tres",
    subtitle: "Feita",
    text: "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur,",
    price: 500000,
  },
  {
    img: "https://images.adsttc.com/media/images/63c0/a935/7643/4a39/8498/948f/large_jpg/casa-tunich-apiron_13.jpg?1673570670",
    title: "kkkkkk",
    subtitle: "Culera",
    text: "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur,",
    price: 700000,
  },
];

const Cards2 = ({ searchText }) => {
	
	const filteredData = tarjetas.filter((tarjeta) =>
		tarjeta.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
		
    <>
    <Sidebar></Sidebar>
      <div className="cards">
        {filteredData.map((tarjeta) => (
          <Card
            key={tarjeta.title}
            title={tarjeta.title}
            img={tarjeta.img}
            subtitle={tarjeta.subtitle}
            text={tarjeta.text}
            price={tarjeta.price}
          />
        ))}
      </div>
    </>
  );
};

export default Cards2;
