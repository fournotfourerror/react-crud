import React from 'react';
import $ from 'jquery';

class Info extends React.Component{
    componentWillMount(){
        $.ajax({
            type:"post",
            url:"http://localhost/reactcrud/index.php",
            data:{sData:"1"},
            success:function(data){
               document.getElementById("data").innerHTML=data;
            }
        })
    }
    render(){
        return(
            <div>
                <div className="col-md-6 offset-3">
                    <table className="table table-condensed" border="1" style={{boxShadow:"0px 8px 8px -8px #000"}}>
                        <thead>
                            <tr style={{background:"#20368f"}} className="text-light">
                                <th> Name </th>
                                <th> Email </th>
                                <th> Address </th>
                            </tr>
                        </thead>
                        <tbody id="data"></tbody>
                    </table>
                </div>
            </div>
            
        )
    }
}

export default Info;
