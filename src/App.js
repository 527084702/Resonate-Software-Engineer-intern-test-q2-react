import './App.css';
import React from 'react';
//import List from './List';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
      return <div>Loading...</div>;
    } 
    else {
      console.log(this.state.items);
      return (
        <table>
          {items.map(user => (
            <table>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>User's address</th>
                <th>User's address Latitude and Longitude</th>
                <th>User's phone</th>
                <th>User's website</th>
                <th>User's company name</th>
                <th>User's company catchPhrase</th>
                <th>User's company bs</th>
              </tr>
              <tr key={user.id}>
                <td className='testab'>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{`${user.address.street}, ${user.address.suite},${user.address.city},${user.address.zipcode}`}</td>
                <td>{`${user.address.geo.lat}, ${user.address.geo.lng}`}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td>{user.company.catchPhrase}</td>
                <td>{user.company.bs}</td>
              </tr>
            </table>
          ))}
        </table>
      );
    }
  }
}

export default App;
