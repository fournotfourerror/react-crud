import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/bootstrap.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Info from './Info';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:'SAMPLE REACT APPLICATION',
      act:0,
      index:'',
      datas:[]
    }
  }

  componentDidMount(){
    this.refs.name.focus()
  }

  fSubmit=(e)=>{
    e.preventDefault();
    console.log("Try");

    let datas=this.state.datas;
    let name=this.refs.name.value;
    let email=this.refs.email.value;

    if(this.state.act===0){
      let data={
        name,email
      }
      datas.push(data)
    }else{
      let index=this.state.index;
      datas[index].name=name;
      datas[index].email=email;
    }

    this.setState({
      datas:datas,
      act:0
    });

    this.refs.form.reset();
    this.refs.name.focus();
  }

  fRemove=(i)=>{
      let datas=this.state.datas;
      datas.splice(i,1)
      this.setState({
        datas:datas
      })
  }

  fEdit=(i)=>{
    let data=this.state.datas[i]
    this.refs.name.value=data.name;
    this.refs.email.value=data.email;

    this.refs.name.focus();
    this.setState({
      act:1,
      index:i
    })
  }
  render(){
  return (
    <div className="container" style={{border:"1px solid #4c659a",padding:"2%",margin:"1% auto"}}>
    <div className="App">
      <h2 style={{color:"#4c659a",fontWeight:"550"}}> {this.state.title} </h2> <br />
      {/* Nav Bar */}
      <Router>
      <nav className="navbar navbar-expand-md bg-primary navbar-dark">

  <Link to="/" className="navbar-brand" href="#">React Sample</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        {/* <a className="nav-link" href="#">Link</a>
         */}
         <Link to="/technologies" className="nav-link">Technologies Used</Link>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li> */}
    </ul>
  </div>
</nav>
<Switch>
    {/* <Route exact path="/" component={App}></Route> */}
    <Route path="/technologies" component={Info} />
</Switch>
</Router> 
 <br />
<div className="row"> 
<div className="col-md-4">
    <div className="card effect2">
      <div className="card-header bg-primary text-light">
        Last submitted data
      </div>
      <div className="card-body">
        <ul className="list-group">
        {
          this.state.datas.map((data,i)=>
            <li key={i} className="list-group-item">
                <span className="badge badge-primary">{i+1}</span> {data.name} <br /> {data.email}
                <button className="btn btn-light text-danger" onClick={()=>this.fRemove(i)}> <i className="fas fa-trash-alt"></i> </button> <span> &nbsp; </span>
                <button className="btn btn-light text-success" onClick={()=>this.fEdit(i)}> <i class="fas fa-pencil-alt"></i> </button>

            </li>
          )}
          </ul>
      </div>
    </div>
</div>

      <div className="col-md-4">
          <div className="card effect2">
            <div className="card-header bg-primary text-light"> Form </div>
            <div className="card-body">
              <form ref="form">
                <input type="text" placeholder="Name" ref="name" className="form-control" /> <br />
                <input type="email" placeholder="E-mail" ref="email" className="form-control" /> <br />
                <button className="btn btn-primary btn-block" onClick={(e)=>this.fSubmit(e)}> Submit </button>
              </form>
            </div>
          </div>
      </div>
    </div>
    </div>
    </div>
  );
}
}

export default App;
