import React from "react"




class SearchBar extends React.Component{
    state = {searchItem: ""}

    onInputChange = (event)=>{
     this.setState({searchItem: event.target.value})
    

    }

    onFormSubmit = (event)=>{
     event.preventDefault()
     this.props.onSubmitSearch(this.state.searchItem)

    }
    
render(){

 return(<div>
       <form onSubmit={this.onFormSubmit}>

        <label>Search</label>
        <input type="text" name="search" placeholder="Enter Your Search" value={this.state.searchItem} onChange={this.onInputChange}/>
        <input type="Submit"/>
        
       </form>
       
 </div>
 )

}

}

export default SearchBar 