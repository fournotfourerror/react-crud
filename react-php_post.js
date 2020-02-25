import React from 'react';
// import axios from 'axios';
import $ from 'jquery';


class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
          name:'',
          email:'',
          address:''
        }
      }
    
      changeName=(e)=>{
        this.setState({
          name:e.target.value
        })
      }
    
      changeEmail=(e)=>{
        this.setState({
          email:e.target.value
        })
      }
    
      changeAddress=(e)=>{
        this.setState({
          address:e.target.value
        })
      }
     

      componentDidMount(){
          $('button').click(function(){
            // e.preventDefault();
        let lname=$('#name').val();
        let lemail=$('#email').val();
        let laddress=$('#address').val();
        if(lname==="" || lemail==="" || laddress===""){
          alert("Fill all the fields");
          // this.refs.name.style.border="1px solid red"
        } else {
          $.ajax({
            type:"post",
            url:"http://localhost/reactcrud/index.php",
            data:{name:lname,email:lemail,address:laddress},
            success:function(data){
              alert("Data inserted successfully");
            }
          })
        }
          });
      }
        
    render(){
        return(
            <div>
               
      <div className="col-md-4 offset-4" style={{marginTop:"3%"}}>
        <div className="card bg-light" style={{boxShadow:"0px 8px 8px -8px #000"}}>
          <div className="card-body">
            <form>
              <input id="name" type="text" placeholder="Name" ref="name" onChange={(e)=>this.changeName(e)}className="form-control" /> <br>
              </br>
              <input id="email" type="email" placeholder="E-mail" ref="email" onChange={(e)=>this.changeEmail(e)} className="form-control"></input> <br>
              </br>
              <textarea id="address" className="form-control" ref="address" onChange={(e)=>this.changeAddress(e)} placeholder="Address"></textarea> <br></br>
              <button type="button" className="btn btn-primary btn-block"> Subscribe </button>
            </form>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Form;
