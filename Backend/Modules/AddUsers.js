const User = require('./User'); 

const users = [
    {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'securepassword123',
    },
    {
        username: 'jane_smith',
        email: 'jane@example.com',
        password: 'mypassword456',
    },
    {
        username: 'alice_johnson',
        email: 'alice@example.com',
        password: 'alicepassword789',
    },
    {
        username: 'bob_brown',
        email: 'bob@example.com',
        password: 'bobspassword321',
    },
];

const insertUsers = async () => {
    try {
        for (const userData of users) {
            const user = new User(userData);
            await user.save();
            console.log(`User ${user.username} added to the database.`);
        }
    } catch (error) {
        console.error('Error adding users:', error);
    }
};

module.exports = insertUsers;
