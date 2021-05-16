import React,{Component} from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';

class App extends Component{
  state={
    productData:ProductData,
    currentPreviewImagePos:0,
    currentSelectedFeature:0
  }

  onColorOptionClick=(pos)=>{
    this.setState({currentPreviewImagePos:pos});
  }

  onFeatureItemClick=(pos)=>{
    this.setState({currentSelectedFeature:pos})
  }

  render(){
    return (
      <div className="App">

        <Topbar/>
        <div className={classes.MainContainer}>

          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions
            [this.state.currentPreviewImagePos].imageUrl}
            currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
