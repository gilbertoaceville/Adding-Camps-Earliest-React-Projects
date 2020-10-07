import React, {Component} from 'react'
import AddCampToUi from '../addCamp'





export class Navigation extends Component{

    handleCard = e =>{
        this.setState({
            ...this.state,
            showcard: true,
            show: !this.state.show
        })
    }

    handleHideCard = e =>{
        this.setState({
            ...this.state,
            showcard: false,
            show: !this.state.show
        })
    }

    state  = {
        showcard: false,
        bg : '',
        show: false
    }

 
    render(){
        return(
            <>
            <header>
                <nav style={{backgroundColor: this.props.bg}}>
                    <div className='brand'>
                        <h3>AceCamp</h3>
                    </div>
                    <div className='links'>
                        <ul>
                          {!this.state.show && <li onClick={this.handleCard.bind(this)}>Add Camp</li>}  
                           {this.state.show && <li onClick={this.handleHideCard.bind(this)}>Hide Camp</li>} 
                        </ul>
                    </div>
                </nav>
            </header>
            {this.state.showcard && <AddCampToUi goSubmit={this.props.submit}/>}
            </>
        )
    }
}