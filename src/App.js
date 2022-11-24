import "./App.css";
import React, { useState, useEffect, useRef } from "react";

const App = () => {
  console.log(1);

  const [data, setData] = useState();
  console.log("JEETH");

  useEffect(() => {
    const getTeam = async () => {
      try {
        console.log("Once");
        const response = await fetch("/api/standings");
        const responseData = await response.json();

        console.log(responseData);

        console.log("Sonra");

        const clubInfo =
          responseData.any["response"][0]["league"]["standings"][0];
        const clubInfos = JSON.stringify(clubInfo);
        // setData(JSON.stringify(clubInfo));

        console.log(clubInfo[0].team.name);

        console.log(clubInfo);

        let infos = clubInfo.map(function (arrayItem) {
          // console.log(arrayItem.all.win)
          console.log(arrayItem);
          return (
            <div key={Math.random()}>
              {" "}
              <table>
                {/* <li>{arrayItem.team.logo}</li>
 <li>{arrayItem.team.name}</li>
 <li>{arrayItem.all.win}</li>
 <li>{arrayItem.all.draw}</li>
 <li>{arrayItem.all.lose}</li>
 <li>{arrayItem.all.goals.for}</li> */}

                <tbody>
                  <tr>
                    <th>{}</th>
                    <br />
                    <td>
                      <th>Team Name</th>
                      <div>{arrayItem.team.name}</div>
                    </td>
                    <br />

                    <td>
                      <th>Win</th>

                      <div>{arrayItem.all.win} </div>
                    </td>
                    <br />
                    <td>
                      <th>Draw</th>
                      <div>{arrayItem.all.draw}</div>
                    </td>

                    <br />

                    <td>
                      <th>Lose</th>
                      <div>{arrayItem.all.lose} </div>
                    </td>

                    <br />

                    <td>
                      <th>Scored</th>
                      <div>{arrayItem.all.goals.for}</div>
                    </td>

                    <br />

                    <td>
                      <th>Conceed</th>
                      <div>{arrayItem.all.goals.against} </div>
                    </td>

                    <br />

                    <td>
                      <th>Difference</th>
                      <div>{arrayItem.goalsDiff} </div>
                    </td>

                    <br />

                    <td>
                      <th>Total Point</th>
                      <div>{arrayItem.points}</div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <img src={arrayItem.team.logo} alt="Team Logo"></img>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        });

        return setData(infos);

        //   //               <td>{props.t.all.played}</td>
        //   //               <td>{props.t.all.win} </td>
        //   //               <td>{props.t.all.draw}</td>
        //   //               <td>{props.t.all.lose} </td>
        //   //               <td>{props.t.all.goals.for}</td>
        //   //               <td>{props.t.all.goals.against} </td>
        //   //               <th>{props.t.goalsDiff} </th>
        //   //               <th>{props.t.points}</th>
      } catch (err) {
        console.log(err);
      }
    };
    getTeam();
  }, []);

  return (
    <React.Fragment>
      <div>{data}</div>
      <div>{"Hello"}</div>
<div>{"Whatzzzzz up!!"}</div>
      {/* 
 {data.forEach(function (arrayItem) {


<div>{arrayItem.all.win}</div>


})};  */}
      {/* <Points t={data}></Points> */}
    </React.Fragment>

    //  <div> {data}  </div>
  );
};

export default App;
/* < Points t={data}/>   */
