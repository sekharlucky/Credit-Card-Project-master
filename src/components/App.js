import React, { useState, useRef } from 'react';

import Img1 from '../Images/Side Colour.png';
import Img2 from '../Images/Card front.png';
import Img3 from '../Images/cardBackImg.png';

function App() {
  const myNameRef = useRef(null);

  const myNumberRef1 = useRef(null);
  const myNumberRef2 = useRef(null);
  const myNumberRef3 = useRef(null);
  const myNumberRef4 = useRef(null);
  const myExpMonth = useRef(null);
  const myExpYear = useRef(null);
  const myCvc = useRef(null);

  const [cardName, setcardName] = useState('');
  const [cardNumber, setcardNumber] = useState('');
  const [cardCvc, setcardCvc] = useState('');
  const [cardExpm, setexpM] = useState('');
  const [cardExpY, setexpY] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cardCvc.length);
    if (
      cardName.length === 0 ||
      cardNumber.length === 0 ||
      cardCvc.length === 0
    ) {
      setError(true);
    }
    if (
      cardName &&
      cardNumber &&
      cardNumber.length === 16 &&
      cardCvc.length === 3 &&
      cardCvc &&
      cardExpm &&
      cardExpm.length === 2 &&
      cardExpY &&
      cardExpY.length === 2
    ) {
      console.log(cardName, cardNumber, cardCvc);
      if (myNameRef.current) {
        myNameRef.current.innerHTML = cardName;
      }
      if (myCvc.current) {
        myCvc.current.innerText = cardCvc;
      }
      if (myExpMonth.current) {
        myExpMonth.current.innerText = cardExpm;
      }
      if (myExpYear.current) {
        myExpYear.current.innerText = cardExpY;
      }

      let x = '';
      for (let j = 0; j < 16; j = j + 4) {
        for (let i = j; i < j + 4; i++) {
          x = x + cardNumber[i];
        }
        if (j === 0) {
          if (myNumberRef1.current) {
            myNumberRef1.current.innerText = x;
            console.log(x);
          }
        }
        if (j === 4) {
          if (myNumberRef2.current) {
            myNumberRef2.current.innerText = x;
            console.log(x);
          }
        }
        if (j === 8) {
          if (myNumberRef3.current) {
            myNumberRef3.current.innerText = x;
            console.log(x);
          }
        }
        if (j === 12) {
          if (myNumberRef4.current) {
            myNumberRef4.current.innerText = x;
            console.log(x);
          }
        }
        x = '';
      }
    } else {
      alert('Check all details');
    }
  };

  return (
    <div className="p-w-parent">
      <div id="purple-div">
        <img id="purple-img" src={Img1} alt="card left img" />
      </div>

      <div id="white-div">
        <div className="container">
          <img className="card-img" src={Img2} alt="card front side" />
          <p id="c-number">
            <span className="num-span" ref={myNumberRef1}>
              0000
            </span>{' '}
            &nbsp; &nbsp;
            <span className="num-span" ref={myNumberRef2}>
              0000
            </span>{' '}
            &nbsp; &nbsp;
            <span className="num-span" ref={myNumberRef3}>
              0000
            </span>{' '}
            &nbsp; &nbsp;
            <span className="num-span" ref={myNumberRef4}>
              0000
            </span>
          </p>
          <span id="right">
            <span className="month-span" id="ExpM-in-card" ref={myExpMonth}>
              00
            </span>
            <span>/</span>
            <span className="year-span" ref={myExpYear}>
              00
            </span>
          </span>
          <span id="left" ref={myNameRef}>
            JANE APPLESEED
          </span>
        </div>

        <div className="container c2">
          <img className="card-img" src={Img3} alt="card back side" />

          <span id="card-cvc" ref={myCvc}>
            000
          </span>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="Entry-container">
            <div>
              <label className="input-indicator">CARDHOLDER NAME</label>
              <input
                type="text"
                placeholder="e.g Jane Appleseed"
                id="Name-input"
                onChange={(e) => setcardName(e.target.value)}
              />
            </div>
            <div className="required-div">
              {error && cardName.length <= 0 ? (
                <label className="required">Cardholder name required</label>
              ) : (
                ''
              )}
            </div>
            <div>
              <label className="input-indicator">CARD NUMBER</label>
              <input
                type="number"
                placeholder="e.g.1234 5678 9123 0000"
                id="Number-input"
                value={cardNumber}
                onChange={(e) => {
                  const inputValue = e.target.value.slice(0, 16); // Limit input to 16 characters
                  setcardNumber(inputValue);
                }}
              />
            </div>
            <div className="required-div">
              {error && cardNumber.length <= 0 ? (
                <label className="required">Card number required</label>
              ) : (
                ''
              )}
            </div>

            <div id="Date-Cvc-pr">
              <div className="input-indicator">
                EXP. DATE (MM/YY)
                <input
                  type="number"
                  placeholder="MM"
                  id="ExpM-input"
                  value={cardExpm}
                  onChange={(e) => {
                    const inputValue = e.target.value.slice(0, 2); // Limit input to 2 characters
                    setexpM(inputValue);
                  }}
                />
                <input
                  type="number"
                  placeholder="YY"
                  id="ExpY-input"
                  value={cardExpY}
                  onChange={(e) => {
                    const inputValue = e.target.value.slice(0, 2); // Limit input to 2 characters
                    setexpY(inputValue);
                  }}
                />
              </div>
              &nbsp; &nbsp; &nbsp;
              <div className="input-indicator">
                CVC
                <input
                  type="number"
                  placeholder="e.g. 123"
                  id="card-cvc-input"
                  value={cardCvc}
                  onChange={(e) => {
                    const inputValue = e.target.value.slice(0, 3); // Limit input to 3 characters
                    setcardCvc(inputValue);
                  }}
                />
                {error && cardCvc.length <= 0 ? (
                  <label className="required">CVC must be number</label>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div>
              <input type="submit" value="Confirm" id="confirm-button" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
