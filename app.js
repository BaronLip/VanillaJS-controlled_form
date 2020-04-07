let user = {}

const handleChange = (event) => {
    event.preventDefault();
    
    let key = event.target.id;
    let value = event.target.value;

    user[key] = value;

    console.log(user);
}

const handleSubmit = (event) => {
    event.preventDefault();

    alert(`This is the ${user.name} and the ${user.email}`);
}