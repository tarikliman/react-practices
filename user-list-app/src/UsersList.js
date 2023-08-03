const UsersList  = (props) => {


    return(
        <ul>
            {props.UsersList.map( (user) => {
                return(
                    <li>{user.username}{user.age}</li>
            );
            })}
        </ul>
    );
}
export default UsersList;