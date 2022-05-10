const usersList = [];

usersList.push({
    email: 'franco@superrito.cl',
    firstName: 'Franco',
    lastName: 'Morales'
});

const getUsers = () => {
    let htmlOut = '<table class="table">';
    htmlOut = htmlOut + '<tr>';
    htmlOut = htmlOut + '<th>Email</th><th>First name</th><th>Last name</th>';
    htmlOut = htmlOut + '</tr>';
    usersList.forEach(item => {
        htmlOut = htmlOut + '<tr>';
        htmlOut = htmlOut + `<td>${item.email}</td>`;
        htmlOut = htmlOut + `<td>${item.firstName}</td>`;
        htmlOut = htmlOut + `<td>${item.lastName}</td>`;
        htmlOut = htmlOut + '</tr>';
    });
    htmlOut = htmlOut + '</table>';
    document.getElementById('userTable').innerHTML = htmlOut;
}

const getUsersDestructuring = () => {
    usersList.forEach(item => {
        const {
            firstName
        } = item;
        alert(firstName);
    });
}

const addUser = (email, firstName, lastName) => {
    usersList.push({
        email,
        firstName,
        lastName
    });
    getUsers();
}