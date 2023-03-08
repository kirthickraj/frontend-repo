import React,{Component} from 'react';
import './Main.css'
import axios from 'axios'

class Main extends Component{

    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            price:'',
            size:''
        };
    }y
    
    handleIdChange=(event)=>{
        this.setState({id:event.target.value})
    };
    handlenameChange=(event)=>{
        this.setState({name:event.target.value})
    };
    handlepriceChange=(event)=>{
        this.setState({price:event.target.value})
    };
    handlesizeChange=(event)=>{
        this.setState({size:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            size: this.state.size,
        };
        
        axios.post('http://127.0.0.1:8080/post', data)
    }

    render(){
    return ( 
        <><center>
        <div className='container'>
            
        <form onSubmit={this.handleSubmit}>
            <h1>Registration Form</h1>
            
            <div className='row'>
                <label>Id : </label><br></br>
                <input type="text" id='id' placeholder='  Enter your Id...' value={this.state.id}
                    onChange={this.handleIdChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.id}</p> */}

            <div className='row'>
                <label>name : </label><br></br>
                <input type="text" id='text' placeholder='  Enter name...' value={this.state.name}
                    onChange={this.handlenameChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.username}</p> */}

            <div className='row'>
                <label>price : </label><br></br>
                <input type="text" id='text' placeholder='  Enter your ...' value={this.state.price}
                    onChange={this.handlepriceChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.email}</p> */}

            <div className='row'>
                <label>size: </label><br></br>
                <input type="text" id='text' placeholder='  Enter the SIZE.' value={this.state.size}
                    onChange={this.handlesizeChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.password}</p> */}
            <br></br>

            <div className='row'>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        </div></center>
        </>
     );
    }
}

export default Main