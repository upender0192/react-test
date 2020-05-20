import React from 'react';

const UserListComponent = ({...otherProps}) => (
    <tr>
        <td>{otherProps.id}</td>
        <td>{otherProps.name}</td>
        <td>{otherProps.email}</td>
        <td>{otherProps.address.street}</td>
    </tr>
)


export default UserListComponent;