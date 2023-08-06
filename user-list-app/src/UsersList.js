const UsersList  = (props) => {

    return(
        <ul>
            {props.userList.map( (user) => {
                return(
                    <li>{user.username} - {user.age} years old</li>
            );
            })}
        </ul>
    );
}
export default UsersList;