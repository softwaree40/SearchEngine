import React from "react"
import SearchBar from "./components/SearchBar"
import DisplayInformation from "./components/DisplayInformation"
import axios from "axios"
import './App.css';
//Handle fetch request from this component
class App extends React.Component {
     
      state ={images: []}

    onSubmitSearch = async(search)=>{
         
      const response = await axios.get("https://api.unsplash.com/search/photos",{
       
        params:{query: search},
        headers:{
          
          Authorization:"Client-ID O0eLxffRLJOk5iTIaZDvBAoSCQsL5S7Z_5FoBoXu_3I"

        }
      });
      
      this.setState({images: response.data.results})

    }
    
   
  render(){


    return (
      <div className="App">
         <SearchBar onSubmitSearch={this.onSubmitSearch}/>
         <hr/>
         <DisplayInformation images={this.state.images}/>
      </div>
    );
  }
  
}

export default App;
