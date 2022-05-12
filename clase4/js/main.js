const usersList = [];

usersList.push({
    email: 'franco@superrito.cl',
    firstName: 'Franco',
    lastName: 'Morales'
});

const getUsers = () => {
    let htmlOut = '<table class="table">';
    htmlOut = htmlOut + '<tr>';
    htmlOut = htmlOut + '<th>Email</th><th>First name</th><th>Last name</th><th></th><th></th>';
    htmlOut = htmlOut + '</tr>';
    usersList.forEach(item => {
        htmlOut = htmlOut + '<tr>';
        htmlOut = htmlOut + `<td>${item.email}</td>`;
        htmlOut = htmlOut + `<td>${item.firstName}</td>`;
        htmlOut = htmlOut + `<td>${item.lastName}</td>`;
        htmlOut = htmlOut + `<td><input type="button" class="btn btn-warning" value="edit" /></td>`;
        htmlOut = htmlOut + `<td><input type="button" class="btn btn-danger" value="delete" onclick="deleteUser('${item.email}')" /></td>`;
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
    if(indexUser(email) !== -1) {
        alert('El email ingresado ya se encuentra registrado.')
    }
    else {
        usersList.push({
            email,
            firstName,
            lastName
        });
        getUsers();
    }
}

const deleteUser = (email) => {
    const index = indexUser(email);
    if(index === -1) {
        alert('El usuario no existe')
    } else {
        if(confirm('Esta seguro?') === true) {
            usersList.splice(index);
            getUsers();
        }
    }
}

const indexUser = (email) => {
    let index = -1;
    let indexCount = 0;
    usersList.forEach(item => {
        if(item.email === email) index = indexCount;
        indexCount++;
    })
    return index;

    // Esta nos retorna un valor boolean true cuando encuentra un valor
    // return usersList.some(item => item.email === email);
}