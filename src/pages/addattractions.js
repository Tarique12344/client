import React, { Component } from 'react'
import axios from 'axios';
import '../Styles/addattractions.css'


import queencity from '../img/queencity.jpeg'
import paulbrownstadium from '../img/Paul-Brown-Stadium.jpg'
import wall from '../img/wall.jpg'
import signamerican from '../img/sign-american.png'
import downtown from '../img/downtownCinci.jpg'



 class Addattractions extends Component {
  constructor (props){
    super (props)
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeAttraction = this.onChangeAttraction.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      address: " ",
      attraction: " "
    }
  }
  onChangeAddress(e){
    this.setState({
      address: e.target.value
    })
  }
  onChangeAttraction(e){
    this.setState({
      attraction: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const addattractions ={
      address: this.state.address,
      attraction: this.state.attraction
    }
  console.log(addattractions)

  
  axios.post('https://capstone-backend-a3vm.onrender.com/addattraction/add', addattractions)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

  }
  render() {
    return (
      <div onScroll={ this.handleScroll } id="homePage">
    
      <div id="carouselExample SlidesOnly" className="carousel" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={queencity} class="d-block w-100 slideShow" id='homePage' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={paulbrownstadium} class="d-block w-100 slideShow" id='homePage'  alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={downtowncinci} class="d-block w-100 slideShow" id='HomePage' alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={garden} class="d-block w-100 slideShow" id='HomePage' alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={market} class="d-block w-100 slideShow" id='HomePage' alt="..."/>
    </div>
  </div>
  
      <div className='form3'>
      <div className="container">
      <h1 className='form1'>AddAttractions</h1>
          <br />
         <form onSubmit={this.onSubmit} className='form2'>
       
           <label  className='text '>Address:</label>
           <input type="text" placeholder="Enter Address" value={this.state.address} onChange={this.onChangeAddress}/>
           <br />
           <br />
           <label  className='text'>Attraction:</label>
           <input type="text" placeholder="Enter Attraction" value={this.state.attraction} onChange={this.onChangeAttraction}/>
          <br />
          <br />
           <div className="container">
       <input type="checkbox" id="start" />
       <label >
         <input type="submit" value="send" />
       </label>
     </div>
 
     </form>
   </div>
   </div>
   </div>
   </div>
    )
  }
}
export default Addattractions;