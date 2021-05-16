import React,{Component} from 'react';
import './App.css';
import BlogCard from './BlogCard';
import {isArrayEmpty as myEmpty} from './Utils';

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

  constructor(props){
    super(props);
    this.state={
      showBlogs:true,
      blogArr:[
        {
        id:1,
        title:'React Website1',
        description:'Soumyajit Roy personal website',
        LikeCount:0
        },
        {
        id:2,
        title:'React Website2',
        description:'Soumyajit Roy personal website',
        LikeCount:0
        },
        {
        id:3,
        title:'React Website3',
        description:'Soumyajit Roy personal website',
        LikeCount:0
        }
      ]
    }  
    console.log('Inside constructor');
  }
  
  onHideBtnClick=()=>{
    //let updatedState=!this.state.showBlogs;
    this.setState((prevState,prevProps)=>{
      return {showBlogs:!prevState.showBlogs}
    });
    console.log(this.state.showBlogs);
  }

  onLikeBtnClick=(pos)=>{
    const updatedBlogList=this.state.blogArr;
    const updatedBlogObj=updatedBlogList[pos];
    updatedBlogObj.LikeCount=updatedBlogObj.LikeCount+1;
    updatedBlogList[pos]=updatedBlogObj;
    this.setState({blogArr:updatedBlogList});
    // console.log(updatedBlogObj);
  }

  styles={
    margin:'16px',
    padding:'16px',
    boxSizing:'border-box',
    borderRadius:'5px',
    boxShadow:'0 2px 5px #ccc'
  }

  componentDidMount(){
    console.log('Mounted');
  }
  render(){
    console.log('Render called');

    const BlogCards=myEmpty(this.state.blogArr)?[]:this.state.blogArr.map((item,pos)=>{
  
      return(
        
        <BlogCard className={'Blog'} key={pos} title={item.title} 
        description={item.description} id={item.id} 
        LikeCount={item.LikeCount} onLikeBtnClick={()=>this.onLikeBtnClick(pos)}/>
  
        // <div className="BlogCard" key={item.id}>
        //   <h3>{item.title}</h3>
        //   <p>{item.description}</p>
        // </div>
        
      )
  
    })

    return (
      <div className="App">

        <button onClick={this.onHideBtnClick}>{this.state.showBlogs?'Hide List':'Show List'}</button>
        <br></br>
        {
        this.state.showBlogs?BlogCards:null
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
