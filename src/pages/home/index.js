//# Packages
import React, { useEffect, useState } from "react";

//# components
import FuitList from "../../components/fruitList";

//# service
import api from "../../service/api";

//# styles
import "./style.css";

function Home() {
  const [stateDataFruit, setStateDataFruid] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleGetData = async () => {
    setIsLoading(true);
    try {
      const { data: result } = await api.get("/fruits.json");
      setStateDataFruid(result);
      setIsLoading(false);
    } catch {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="container">
      <div className="fruitContainer">
        {stateDataFruit.length !== 0 && <FuitList data={stateDataFruit} />}
      </div>
    </div>
  );
}

export default Home;
