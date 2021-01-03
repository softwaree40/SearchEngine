import React from "react"



const DisplayInformation = (props)=>{
   
    const imgImage = props.images.map((image)=> {

       return <img src={image.urls.regular} alt={image.description}/>
     

    })

 return (
    
    <div>{imgImage}</div>
    
    )

}

export default DisplayInformation