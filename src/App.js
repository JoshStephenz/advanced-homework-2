import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import SubHeader from "./components/SubHeader.js";
import TopNav from "./components/TopNav.js";
import Footer from "./components/Footer.js";
import ImageSlider from "./components/ImageSlider.js";
import ProductDetail from "./components/ProductDetail.js";



function App(props) {
  let state = props.state
  let filteredState = state;
  function filterState(type){
    filteredState = state.filter((prod)=>{
      console.log(type);
      return prod.category === type;
    });
    return filteredState.map((prod)=>{
      return <ProductDetail key={prod.id} prod={prod} />;
    });

  }
  let productDivs=filterState(props.currentCategory);

    return (
      <div className="App">
        <div className="wrap">
			    <div className="header">
            <Header />
			      <div className="clear"> </div>
            <SubHeader />
			      <div className="clear"> </div>
            <TopNav changeCategory={props.changeCategory}/>
			    </div>
					<ImageSlider />

				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">
							{productDivs}
						</div>
					</div>

				</div>
			</div>
			<div className="clear"> </div>
			<Footer />
		</div>

      </div>
    );
}

export default App;
