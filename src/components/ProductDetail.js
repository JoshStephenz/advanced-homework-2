import React from "react";

function ProductDetail(props){
  let prods = props.prod

    return(
      <div className="grid_1_of_5 images_1_of_5" >
        <img src={prods.imgUrl} alt=""/>
        <h3>{prods.name} </h3>
        <p>{prods.description}</p>
        <h4>{prods.price}</h4>
        <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
      </div>
    );

}

export default ProductDetail;
