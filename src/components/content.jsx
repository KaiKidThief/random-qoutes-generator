import { useState } from "react";
import { qoutes } from "./qoutes";
 
export default function Content(){
 
    // USE THIS IF YOU WANT TO USE QOUTES VIA LOCAL 
    // const [qoute, setQoute] = useState("Click The Button To get the qoutes");
 
    // const handleClick = () => {
    //     const randomQoutes = Math.floor(Math.random() * qoutes.length);
    //     setQoute(qoutes[randomQoutes]);
    // };

    const [qoute, setQoute] = useState("CLICK THE BUTTON TO GET THE QOUTES");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);

const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          'X-Api-Key': '', // YOUR API KEY 
        }
      });

      const data = await response.json();
      if (data.length > 0) {
        setQoute(data[0].quote);
        setAuthor(data[0].author);
      } else {
        setQoute("No quote found.");
        setAuthor("");
      }
    } catch (error) {
      setQoute("Failed to fetch quote.");
      setAuthor("Try again later");
    } finally {
      setLoading(false);
    }
  };
 
    return(
        // USE THIS IF YOU WANT TO USE QOUTES VIA LOCAL 
        // <div className="flex bg-gray-600 h-screen items-center justify-center">
        //     <div className="flex flex-col items-center justify-center space-y-4">
        //         <div id="qoute" className=" text-white text-2xl">{qoute}</div>
        //         <button onClick={handleClick} id="newQoute" className=" bg-blue-300 w-fit h-fit p-2 items-center justify-center hover:bg-blue-400">Get Qoute's</button>
        //     </div>
        // </div>

        <div className="flex bg-gray-600 h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-4">
                <div id="qoute" className=" text-white text-2xl">"{qoute}"</div>
                <div className="text-white text-sm">- {author}</div>
                <button onClick={fetchQuote} disabled={loading} id="newQoute" className=" bg-blue-300 w-fit h-fit p-2 items-center justify-center hover:bg-blue-400">{loading ? "Loading..." : "Get Qoute"}</button>
            </div>
        </div>
    );
}