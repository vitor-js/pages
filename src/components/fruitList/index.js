//# packages
import React, { useEffect, useState } from "react";

//# styles
import "./style.css";

function FruitList({ data = [] }) {
  useEffect(() => {
    if (data.length === 0) return;
    console.log(data);
    setDataState(data);
  }, [data]);

  const [dataState, setDataState] = useState([]);

  return (
    <>
      {dataState.map((value, index) => (
        <div
          style={{ marginTop: index === 1 ? 10 : 20 }}
          className="row containerItem"
        >
          <div className="col-7 description-item">
            <h1>{value.name}</h1>
            <p>{value.blubber}</p>
            <p>{value.calories}</p>
            <p>{value.fiber}</p>
            <p>{value.portion}</p>
            <p>{value.protein}</p>
          </div>
          <div className="col-5 ">
            <div
              style={{ backgroundImage: `url(${value.photo})` }}
              className="image-item"
            >
              <h1 className="titleMobile">{value.name}</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FruitList;
