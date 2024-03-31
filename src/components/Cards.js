import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Fusagasugá",
    image: image1,
    url: "https://www.fusagasuga.gov.co",
  },
  {
    id: 2,
    title: "Cundinamarca",
    image: image2,
    url: "https://www.cundinamarca.gov.co/home/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zi_QJcPA3d3Q2MApwsDA3MPL09LJ0CPd2djc30wwkpiAJKG-AAjgZA_VGElHjpR6Xn5CdBXOOYl2Rska4fVZSallqUWqRXWgQUzigpKSi2UjVQNSgvL9dLz89Pz0nVS87PVTXApiUjv7hEPwJVpX5BboSBblRSZbmjoiIArqrzPQ!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/",
  },
  {
    id: 3,
    title: "Colombia",
    image: image3,
    url: "https://www.gov.co",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
