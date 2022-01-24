import { useState } from "react";
import {usa} from "./lyrics";


function ConditionalList() {
  const [lyrics, setLyrics] = useState(["Born in the USA by Bruce Springsteen"]);
  const addLine = () => setLyrics([...lyrics, usa[lyrics.length]]);
  const removeLine = () => setLyrics(lyrics.slice(0,lyrics.length-1));

  return (
    <div className="container">
      <button onClick={addLine}>Add Line</button>
      <button onClick={removeLine}>Remove Line</button>
      <ul>
        {/* this works great until the 'lyrics.length' count becomes 0. At that point, 0 is displayed and not the Falsy display condition we wanted */}
        {/* SOLUTION */}
        {/* Enter the double-bang (!!). This converts any value to a true Boolean - either True or False */}
        {!!lyrics.length && lyrics.map(line => <li>{line}</li>)}
        {lyrics.length ? lyrics.map(line => <li>{line}</li>) : null}
      </ul>
    </div>
  );
}

export default ConditionalList;
