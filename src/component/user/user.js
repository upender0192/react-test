import React from 'react';
import UserListComponent from './user-list/user-list'

class UserComponent extends React.Component {
    constructor(){
        super()

        this.state = {
            user : [],
            isloaded:false
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then( response => {this.setState({
            user:response});
            console.log(this.state.user);   
        }
                
        )
    }

    render(){
        return(
            <table border="1">
                <thead>
                    <tr>
                        <td>S.no</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Website</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.user.map(({website,...otherProps}) => 
                            <UserListComponent key={website}  {...otherProps}></UserListComponent>    
                        )
                    }
                </tbody>
            </table>
            
        )
    }
}

export default UserComponent;