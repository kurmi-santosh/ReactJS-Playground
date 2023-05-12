import { useEffect, useState } from "react";

const CountryCapitalsGame = ({ data }) => {
  const [myData, setMyData] = useState([]);
  const [myButtons, setMyButtons] = useState([]);
  const [myValues, setMyValues] = useState([]);

  useEffect(() => {
    var entries = Object.entries(data);
    var myDataList = entries.map(([key, value], index) => {
      return {
        id: index,
        country: key,
        capital: value,
      };
    });
    setMyData(
      myDataList
        .map((value) => ({ value, randomNum: Math.random() }))
        .sort((a, b) => a.randomNum - b.randomNum)
        .map(({ value }) => value)
    );
  }, []);

  useEffect(() => {
    if (myValues.length > 1) {
      if (
        data[myValues[0]] === myValues[1] ||
        data[myValues[1]] === myValues[0]
      ) {
        let others = myData.filter((item) => !myValues.includes(item.country));
        setMyData(others);
        clearButtons();
      } else clearButtons("red");
    }
  }, [myValues.length]);

  const clearButtons = (color) => {
    let firstButton = document.getElementById(myButtons[0]);
    let secondButton = document.getElementById(myButtons[1]);
    if (color) {
      if (firstButton) firstButton.style.backgroundColor = color;
      if (secondButton) secondButton.style.backgroundColor = color;
    }
    setTimeout(() => {
      firstButton.style = undefined;
      secondButton.style = undefined;
      setMyValues([]);
      setMyButtons([]);
    }, [500]);
  };

  const handleButtonClick = (e) => {
    e.target.style.backgroundColor = "blue";
    setMyButtons([...myButtons, e.target.id]);
    setMyValues([...myValues, e.target.innerText]);
  };

  const countryButtons = myData.map((item) => {
    return (
      <button
        key={`con-${item.id}`}
        id={`con-${item.id}`}
        onClick={handleButtonClick}
      >
        {item.country}
      </button>
    );
  });

  const capitalButtons = myData.map((item) => {
    return (
      <button
        key={`cap-${item.id}`}
        id={`cap-${item.id}`}
        onClick={handleButtonClick}
      >
        {item.capital}
      </button>
    );
  });

  const buttons = [...countryButtons, ...capitalButtons];

  return <div>{buttons.length > 0 ? buttons : <p>Congratulations!</p>}</div>;
};

export default CountryCapitalsGame;
