import React,{Component} from 'react';
import './App.css';
import BlogCard from './BlogCard';
import {isArrayEmpty as Empty} from './Utils';

class App extends Component {
  firstName='Soumyajit';
  lastName='Roy';
  // const age=28;
  job='Student';

  mArr=[2,2,3,4]

  mObj={
    name:'Toto',
    age:0
  }

  inputPlaceholder='Enter Your Details';

  getFullName=(firstName,lastName)=>{
    return `${firstName} ${lastName}`
  }

  detailsInputBox=<input placeholder=
    {this.inputPlaceholder} autoComplete='true'/>;


  blogArr=[
    {
    id:1,
    title:'React Website1',
    description:'Soumyajit Roy personal website'
    },
    {
    id:2,
    title:'React Website2',
    description:'Soumyajit Roy personal website'
    },
    {
    id:3,
    title:'React Website3',
    description:'Soumyajit Roy personal website'
    }
  ]

  BlogCards=Empty(this.blogArr)?[]:this.blogArr.map((item,pos)=>{
  
    return(
      
      <BlogCard key={pos} title={item.title} description={item.description} id={item.id}/>

      // <div className="BlogCard" key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div>
      
    )

  })

  styles={
    margin:'16px',
    padding:'16px',
    boxSizing:'border-box',
    borderRadius:'5px',
    boxShadow:'0 2px 5px #ccc'
  }

  state={
    showBlogs:true
  }

  onHideBtnClick=()=>{
    this.setState({showBlogs:false});
    console.log(this.showBlogs);
  }

  render(){
    return (
      <div className="App">

        <button onClick={this.onHideBtnClick}>Hide List</button>
        <br></br>
        {
        this.state.showBlogs?this.BlogCards:null
        }
        
        <hr></hr>

        <div style={this.styles}>
        <h3>Full Name: {this.getFullName(this.firstName,this.lastName)}</h3>
        <p>Age: {this.mArr[0]}{this.mObj.age}</p>
        <p>Job: {this.job}</p>
        {this.detailsInputBox}
        <p>
          {
            this.mArr[1]>0?"Successful":"Failure"
          }
        </p>
        </div>
        
      </div>
    );
  }
}

export default App;
