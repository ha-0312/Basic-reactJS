import React from 'react'
import { v4 as uuid } from 'uuid'
import TextField from '@atlaskit/textfield'
import Button from '@atlaskit/button'
import CrossIcon from '@atlaskit/icon/glyph/cross';


class MyComponent extends React.Component {
    optionDateFormat = {year: 'numeric', month: 'long', day: 'numeric'}
    state = {
        name : '',
        dateOfBirth: new Date('1996-05-06').toLocaleDateString([], this.optionDateFormat),
        gender: true, // true : Name, false : Nữ
        address: '',
        arrName: []
    }

    getCurrentDate() {
        return (new Date().toLocaleDateString([], this.optionDateFormat))
    }

    handleOnchangeName = (event) => {
        this.setState({
            name : event.target.value
        })        
    }
    handleOnchangeGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleOnchangeAddress = (event) => {
        this.setState({
            address : event.target.value
        })        
    }
    handleClickButton = (event) =>{
        event.preventDefault()
        this.state.name && this.state.address && this.setState({
            arrName : this.state.arrName.concat({
                id: uuid(),
                name: this.state.name,
                gender: this.state.gender === true ? 'Nam' : 'Nữ',
                address: this.state.address
            })
        })
        this.setState({
            name : '',
            address: ''
        })
        
    }

    render() {
        return (
            <>
                <div className='content'>
                    <form className='formContent'>
                        <div style={{width: '50%'}}>
                            <label>Input your name</label>
                            <TextField placeholder='Input your name'  type='text' value={this.state.name} onChange={(e) => this.handleOnchangeName(e)}/>        
                        </div>
                        <div style={{width: '50%'}}>
                            <label>Current Address</label>
                            <TextField placeholder='Your current address'  type='text' value={this.state.address} onChange={(e) => this.handleOnchangeAddress(e)}/>        
                        </div>
                        <div>
                            <label>Gender</label>
                            <input id='rdNam' type='radio' value='true' name='gender' defaultChecked 
                            onChange={(event) => this.handleOnchangeGender(event)}/>
                            <label value='true' onChange={(event) => this.handleOnchangeGender(event)} htmlFor="rdNam">Nam</label>
                            <input id='rdNu' type='radio' value='false' name='gender'
                            onChange={(event) => this.handleOnchangeGender(event)}/>
                            <label value='false' onChange={(event) => this.handleOnchangeGender(event)} htmlFor="rdNu">Nữ</label>
                        </div>
                        <br></br>
                        <Button onClick={(event) => this.handleClickButton(event)}>Create new user</Button>
                    </form>                   
                    
                    <div className='info'>
                        <label style={{fontWeight: 500, fontSize: 24}}>User information</label>
                        {this.state.arrName.map(({id, name, gender, address}) =>
                            <div key={id} className='infoUser'>
                                <div><b>FullName: </b><span className='detailInfo'>{name}</span> - <b>Gender: </b> <span className='detailInfo'>{gender}</span>
                                - <b>Current Address: </b> <span className='detailInfo'>{address}</span>
                                <span style={{marginLeft: '5px', textAlign: 'left', float: 'right'}}><CrossIcon size='medium' primaryColor='red'></CrossIcon></span></div>
                            </div>            
                        )}
                    </div>
                </div>                             
            </>
        )
    }
}
export default MyComponent;
