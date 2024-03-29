import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

export default class Discount extends Component {

  state={
    discountStart:0,
    discountEnd: 30
  }

  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart+1
      })
    }
  }

  componentDidUpdate(){
    setTimeout(()=>{
      this.percentage()
    }, 28)
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className="discount_wrapper">

          <Fade
            onReveal={()=>{this.percentage()}}
          >
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th June</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis veritatis a reprehenderit perferendis consequuntur necessitatibus veniam mollitia eum ratione accusamus accusantium cum ullam dolore sint alias distinctio, possimus illum quae.</p>

              
              <MyButton
                text="Purchase Tickets"
                bck="#FFA800"
                color="#FFFFFF"
                link="http://google.com"
              />
              

            </div>
          </Slide>

        </div>
      </div>
    )
  }
}
