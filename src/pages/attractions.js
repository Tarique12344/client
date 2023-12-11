import axios from 'axios';
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../Styles/attractions.css"


import queencity from '../img/queencity.jpeg'
import paulbrownstadium from '../img/Paul-Brown-Stadium.jpg'
import downtowncinci from '../img/downtownCinci.jpg'
import garden from '../img/Garden.webp'
import market from '../img/Market.jpg'






const Attractions = props => (
  
  
  


    <div className='allAttractions'>
    <div className='attractionsCard'>
        <div>
            <div className='text-name title-Text'>{props.attractions.title}</div>
            <div className='text-name'>{props.attractions.address}</div>
            <div className='text-name'>{props.attractions.description}</div>
            <div className='text-name'>{props.attractions.ratings}</div>

        </div>
    </div>
</div>
)

 class AttractionsList extends Component {
  constructor(props) {
    super(props);

    // this.deleteAttractions = this.deleteAttractions.bind(this)

    this.state = {attractions: []};
  }

  componentDidMount() {
    axios.get('https://capstone-backend-a3vm.onrender.com/' + 'attractions/')
      .then(response => {
        this.setState({ attractions: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // deleteAttractions(id) {
  //   axios.delete('http://localhost:5000/' + 'attractions/'+id)
  //     .then(response => { console.log(response.data)});

  //   this.setState({
  //     attractions: this.state.attractions.filter(el => el._id !== id)
  //   })
  // }

  attractionsList() {
    return this.state.attractions.map(currentattractions => {
      return <Attractions attractions={currentattractions} key={currentattractions._id}/>;
    })
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
  
 

      <div>
        <h1 className="title text-center">Attractions in our beloved city</h1>
        {/* <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Address</th>
              <th>Description</th>
              <th>ratings</th>
            </tr>
          </thead>
          <tbody>
            { this.attractionsList() }
          </tbody>
        </table> */}
        <div className="attractionsContainer">
        {this.attractionsList()}
        </div>
      </div>
    </div>
  </div>
  
    )
  }
}

export default AttractionsList