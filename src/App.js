// import './App.css';
import {useState} from 'react';
import {emitData, emitAnalysis} from './socket'
import MainCss from './App.module.css'
import Form from 'react-bootstrap/Form';

// const options = {
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   }

function App() {

  const [selected, setSelect] = useState()

  const btnClick1 = () => {
    // console.log("LOL");
    emitData(selected)
  }

  const btnClick2 = () => {
    // console.log("LOL");
    const value = document.getElementById("data").innerHTML;
    emitAnalysis(value)
  }

  const select = () => {
    const value = document.getElementById("myselect").value;
    console.log(Number(value))
    setSelect(Number(value))
  }

  return (
    <div className={MainCss["main-body"]}>
        <div className={MainCss["our-header"]}>
            <h2><b>BDA Project: Text Mining</b></h2>
        </div>
        <div className={MainCss["our-card-container"]}>
            <div className={MainCss["our-card"]}>
                <h2>Input:</h2>
                <Form.Select id="myselect" aria-label="Default select example" onChange={()=> {select()}}>
                <option>Select Number of Lines:</option>
                <option value="1">1</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </Form.Select>
                <p></p>
                <button id="signin-btn" type="button" className="btn btn-outline-primary" onClick={() => btnClick1()}>Fetch Data</button>
            </div>
        </div>
        <div className = "second-main d-flex">
        <div className={MainCss["our-card-container"]}>
            <div className={MainCss["output-card"]}>
            <h2>Fetched Data:</h2>
            <p></p>
            <div id = "data"></div>
            </div>
            <button id="signin-btn" type="button" className="btn btn-outline-primary" onClick={() => btnClick2()}>Data Analysis</button>
        </div>
        <div id = "result">
        {/* <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Words</th>
            <th scope="col">Word Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>What</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>big</td>
            <td>3</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>data</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>is</td>
            <td>3</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>data?\nWhat</td>
            <td>2</td>
          </tr>
    </tbody>
      </table> */}
        </div>
        </div>
    </div>
)
}

export default App;
