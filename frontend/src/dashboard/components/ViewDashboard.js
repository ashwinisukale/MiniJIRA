import React from 'react';
import DashboardClient from '../../common/clients/DashboardClient';
import {Chart} from 'react-google-charts';

class ViewDashboard extends React.Component {
  state= {
    users: []
  }

  componentDidMount() {
    DashboardClient.adminGetData().then(res => this.setState({ users: res.data }) );
  }

  getModifiedData(data){
    let dummy = [];
    let index = 1;
    dummy[0]= new Array();
    dummy[0].push("Project Name")
    dummy[0].push("Number of task")

    data && data.map(row => {
        dummy[index] = dummy[index] || new Array();
        dummy[index].push(row.name);
        let count = Object.values(row.todos).reduce(((acc, num) => acc + num.length), 0);
        dummy[index].push(count);

        index ++;
    })
    return dummy;
  }

  render() {
    const data = this.getModifiedData(this.state.users);    
    return (

          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data = {data}
            options={{
              title: 'My Dashboard',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
     
    );
  }
}

export default ViewDashboard;