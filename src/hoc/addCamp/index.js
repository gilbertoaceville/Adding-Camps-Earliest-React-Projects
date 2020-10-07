import React, {createRef} from 'react'

export default class AddCampToUi extends React.Component{

imageLink = createRef()
imageName = createRef()

handleAddCampToUi= e =>{
    e.preventDefault()
    let camp = {
        name: this.imageName.current.value,
        picture: this.imageLink.current.value
    }
    this.props.goSubmit(camp)
    e.target.reset()
}

    render(){
        return(
            <>
            <div className='form'>
                <form onSubmit={this.handleAddCampToUi.bind(this)}>
                    <input ref={this.imageLink} type='link' placeholder='Insert Image Link' />
                    <input ref={this.imageName} type="name" placeholder='Insert Image Name'/>
                    <div className='btn'>
                        <button type='submit'>Add Camp</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}