import React from "react"
import SearchBar from "./components/SearchBar"
import DisplayInformation from "./components/DisplayInformation"
import './App.css';
//Handle fetch request from this component
class App extends React.Component {
     
    onSubmitSearch =(search)=>{
      console.log(search)
        


    }
   
  render(){


    return (
      <div className="App">
         <SearchBar onSubmitSearch={this.onSubmitSearch}/>
         <hr/>
         <DisplayInformation/>
      </div>
    );
  }
}

export default App;
