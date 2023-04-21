import axios from "axios";
import { useEffect, useState } from "react";
import './index.css';
import './App.css'
import { Link } from "react-router-dom";
const App=()=>{
  const[quote,setQuote]=useState("");
  const[author,setAuthor]=useState("");
  let randomC=Math.floor(Math.random()*quote.length);


  const quoteAPI=async()=>{
    let quotesArray =[];
    try{
      const data = await axios.get("https://api.quotable.io/random");
      quotesArray=data.data
     document.getElementById("container").style.backgroundColor='rgb('+Math.round(Math.random()*300) +','+Math.round(Math.random()*300)+','+Math.round(Math.random()*300)+')'; 
    }
    catch(e){
      console.log(e);
    }  
    try{
       setQuote(quotesArray.content)
       setAuthor(quotesArray.author)
    }
    catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    quoteAPI();
  },[])


  return (
    <div className="App" id="App">
      <div className="quoteBox" id="container">
        <div className="container">
          <div className="quote" ><h3><i class="fa fa-quote-left" ></i>  {quote} <i class="fa fa-quote-right"></i></h3></div>
          <div className="author">{author}</div>
        </div>
        <div className="quoteButton"> <button onClick={quoteAPI}>New Quote</button>
        </div>
      </div>
    </div>
  );
  };
export default App;
