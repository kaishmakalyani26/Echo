const users = [
    { name: 'John Doe', age: 25 },
    { name: 'Alexander', age: 17 },
    { name: 'Nelson Mandela', age: 78 },
    { name: 'Mahatma Gandhi', age: 56 },
    { name: 'Nikol Tesla', age: 39 }
];

function sortAndDisplay() {
    users.sort((a, b) => a.age - b.age);
    let names = users.map(user => user.name).join(', ');
    window.alert(names);
}

function displayMobileMessage() {
    window.alert('Thank you for choosing mobile, [your name]');
}