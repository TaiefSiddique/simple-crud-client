// import { useLoaderData } from "react-router-dom";

// const Users = () => {
//     const users = useLoaderData();
//     return (
//         <div>
//             <ul>
//                 {users.forEach(element => {
//                     <li>Name: {element.name} Email: {element.email}</li>
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default Users;
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    const handleDeleteUser = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        Name: {user.name} Email: {user.email}
                        <Link to={`/users/${user._id}`}>Update</Link>
                        <button onClick={() => { handleDeleteUser(user._id) }}>Delete</button>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Users;
