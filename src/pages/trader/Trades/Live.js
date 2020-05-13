import React, { Component } from 'react'
import Stepone from './steps/Stepone';
import Steptwo from './steps/Steptwo';
// import Steptre from './steps/Steptre';

export default class Verification extends Component {

    state={
        step:1,
        entry_price:0.00,
        stop_loss1:0,
        stop_loss2:0,
        tp1:0,
        tp2:0,
        time_frame:'',
        comment:'',
        asset:''
    }

    nextstep = () =>{

        const { step } =this.state
        this.setState({step:step+1})
    }

    prevstep = () =>{

        const { step } =this.state
        this.setState({step:step-1})
    }
    

    handlechange=(event)=>{

        this.setState({[event.target.name]:event.target.value})

    }
  render() {
    const {step,entry_price,stop_loss1,stop_loss2,tp1,tp2,time_frame,comment,asset} =this.state
    const values={entry_price,stop_loss1,stop_loss2,tp1,tp2,time_frame,comment,asset}

    switch(step){
        case 1:
            return (
                <Stepone 
                nextstep={this.nextstep}
                handlechange={this.handlechange}
                values={values}
            />
            )

        case 2:
            return (
                <Steptwo
                     prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}
                />
            )
        // case 3:
        //         return (
        //             <Steptre
        //                   prevstep={this.prevstep}
        //                     handlechange={this.handlechange}
        //                     values={values}
        //             />
        //         )

         default:
                 return null
        

    }
  }
}