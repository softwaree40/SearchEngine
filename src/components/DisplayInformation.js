import React from "react"



const DisplayInformation = (props)=>{
   
    const imgImage = props.images.map((image)=> {

       return <img key={image.id} src={image.urls.regular} alt={image.description}/>
     

    })

 return (
    
    <div className="container-content">{imgImage}</div>
    
    )

}

export default DisplayInformation