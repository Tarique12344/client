import axios from 'axios';
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../Styles/attractions.css"



const Attractions = props => (
  

    <div className='allAttractions'>
    <div className='attractionsCard'>
        <div>
            <div className='text-name'>{props.attractions.title}</div>
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
      <div>
        <h1 className="title text-center">Attractions</h1>
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
    )
  }
}

export default AttractionsList