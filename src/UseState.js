import React, { useState } from "react";
import data from "./data";
import app from "./App.css";

function UseState() {
  return (
    <React.Fragment>
      <Header />
      <DisplayContent />
    </React.Fragment>
  );
}

const Header = () => {
  return (
    <section className="header">
      <h1>Tour Options</h1>
    </section>
  );
};

const DisplayContent = () => {
  const [item, myState] = useState(data);
  return (
    <section className="dispContent">
      {item.map((data) => {
        const { id, city, cost, img, info } = data;
        return (
          <Fragments
            id={id}
            city={city}
            cost={cost}
            img={img}
            info={info}
            myState={myState}
            data={item}
          />
        );
      })}
    </section>
  );
};

const Fragments = (props) => {
  return (
    <article key={props.id} className="fragment">
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="title">
        <h2 className="city">{props.city}</h2>
        <h2 className="cost">${props.cost}</h2>
      </div>
      <p className="info">{props.info}</p>
      <button
        key={props.id}
        className="btn"
        type="button"
        onClick={() => NotInterested(props.id, props.myState, props.data)}
      >
        Not Interested
      </button>
    </article>
  );
};

const NotInterested = (id, myState, data) => {
  return myState(data.filter((items) => items.id !== id));
};
export default UseState;
