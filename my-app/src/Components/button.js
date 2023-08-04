import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function PrimaryButton() {

const [data, setState] = useState([]);

async function clickMe () {
    await axios ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
    })
    .then(function (response) {
            console.log(response);
            setState(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

return (
    <div>
    <h1 class="newText">My Table</h1>
    <table className = "customers">
    <tbody>
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Username</th>
    </tr>
    {data.map((obj) => {
        return (
            <tr key={obj.id}>
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td>{obj.username}</td>
            </tr>
        );
    })}
    </tbody>
    </table>
    <Button variant="primary" size="1g" onClick={clickMe}>
        You should click me for the info!
    </Button>
    </div>
    );
}

export default PrimaryButton;