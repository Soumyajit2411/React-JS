import React from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails=(props)=>{

    const colorOptions=props.data.colorOptions.map((item,pos)=>{
      const ClassArr=[classes.ProductImage]
      if(pos===props.currentPreviewImagePos){
        ClassArr.push(classes.SelectedProductImage);
      }
        return(
            <img key={pos} className={ClassArr.join(' ')} src={item.imageUrl}
            alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
        );
    })

    const featureList=props.data.featureList.map((item,pos)=>{
      const ClassArr=[classes.FeatureItem]
      if(pos=== props.currentSelectedFeature){
        ClassArr.push(classes.SelectedFeatureItem);
      }
      return(
        <button onClick={()=>props.onFeatureItemClick(pos)} key={pos}className={ClassArr.join(' ')}>{item}</button>
      )
    })

    return(
        <div className={classes.ProductData}>

          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          
          <div>
            {colorOptions}
            {/* <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src={fitbit}
            alt="Red Colored Watch"/>
            <img className={classes.ProductImage} src={fitbit}
            alt="Blue Colored Watch"/>
            <img className={classes.ProductImage} src={fitbit}
            alt="Purple Colored Watch"/>
            <img className={classes.ProductImage} src={fitbit}
            alt="Yellow Colored Watch"/> */}
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          
          <div>
            {featureList}
          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
        
        </div>
    );
}

export default ProductDetails;