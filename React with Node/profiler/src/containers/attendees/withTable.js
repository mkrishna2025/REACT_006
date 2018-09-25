import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          data: [],
          isFetching: false
      }
  }
  componentDidMount(){
      this.setState({ isFetching: true });

      fetch('http://trainingkit.azurewebsites.net/api/Users/GetAttendees')
      .then(response => {
        if(response.status == 200){
            return response.json();
        }
      })
      .then(response => {
          if(response.success){
            this.setState({ data: response.data, isFetching: false });
          } else{
              alert('Data Failed');
          }
      })
      .catch(error => {
        alert(error);
      })
  }
  render(){
    const columns = [{
        Header: 'Name',
        accessor: 'Name'
      }, {
        Header: 'Age',
        accessor: 'Age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        Header: 'Department',
        accessor: 'Department'
      }];

    return (
        <div>
            <div>Welcome to Attendees</div>
            <ReactTable
                data={this.state.data}
                columns={columns}
                loading={this.state.isFetching}
            />
        </div>
    );
  }
}
