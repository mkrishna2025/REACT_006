import React from 'react';
import { ATTENDEES } from '../../data';
import LoadingScreen from 'react-loading-screen';

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
      /*setTimeout(() => {
        this.setState({ data: ATTENDEES, isFetching: false})
      }, 2000);*/

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
    return (
        <div>
            <div>Welcome to Attendees</div>
            <LoadingScreen
                loading={this.state.isFetching}
                bgColor='#f1f1f1'
                spinnerColor='#9ee5f8'
                textColor='#676767'
                text='Loading'
            /> 
            <table>
                <thead>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Department</td>
                </thead>
                <tbody>
                { 
                    this.state.data.map(item => <tr>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.Department}</td>
                    </tr>)
                }
                </tbody>
            </table>
            
        </div>
        
        
    );
  }
}
