document.addEventListener('DOMContentLoaded', () => {
    // Generate fake users data
    const users = [];
    for (let i = 1; i <= 200; i++) {
        users.push({
            id: i,
            profile: `https://randomuser.me/api/portraits/thumb/men/${i % 100}.jpg`,
            name: `User ${i}`,
            email: `user${i}@example.com`,
            phone: `12345678${String(i).padStart(2, '0')}`,
            password: `password${i}`,
            deposited: Math.floor(Math.random() * 1000),
            withdrawal: Math.floor(Math.random() * 500),
            orderScheme: ['Basic', 'Standard', 'Premium'][i % 3],
            status: ['Active', 'Inactive'][i % 2],
            ip: `192.168.0.${i % 255}`,
            country: ['USA', 'UK', 'Canada', 'Australia'][i % 4]
        });
    }

    // Update cards
    document.getElementById('total-users').innerText = users.length;
    document.getElementById('total-deposits').innerText = users.reduce((acc, user) => acc + user.deposited, 0);
    document.getElementById('total-withdrawals').innerText = users.reduce((acc, user) => acc + user.withdrawal, 0);
    document.getElementById('total-orders').innerText = users.length * 2; // Assuming each user submitted 2 orders

    // Populate user table
    const userTable = document.getElementById('user-table');
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td><img src="${user.profile}" alt="Profile" width="50"></td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.password}</td>
            <td>${user.deposited}</td>
            <td>${user.withdrawal}</td>
            <td>${user.orderScheme}</td>
            <td>${user.status}</td>
            <td>${user.ip}</td>
            <td>${user.country}</td>
            <td>
                <button class="btn btn-primary btn-action" onclick="manageWallet(${user.id})">Wallet Management</button>
                <button class="btn btn-success btn-action" onclick="deposit(${user.id})">Deposit</button>
                <button class="btn btn-info btn-action" onclick="changeOrder(${user.id})">Order Scheme</button>
                <button class="btn btn-warning btn-action" onclick="lend(${user.id})">Lend</button>
                <button class="btn btn-dark btn-action" onclick="changeAddress(${user.id})">Change Deposit Address</button>
            </td>
        `;
        userTable.appendChild(row);
    });

    // Chart Implementation
    const ctx = document.getElementById('userChart').getContext('2d');
    const userChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Deposits',
                    data: Array.from({length: 6}, () => Math.floor(Math.random() * 1000)),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Withdrawals',
                    data: Array.from({length: 6}, () => Math.floor(Math.random() * 500)),
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Registrations',
                    data: Array.from({length: 6}, () => Math.floor(Math.random() * 200)),
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

function manageWallet(userId) {
    alert(`Manage Wallet for User ID: ${userId}`);
    // Code to display wallet management details and options
}

function deposit(userId) {
    alert(`Change Deposit for User ID: ${userId}`);
    // Code to change deposit amount
}

function changeOrder(userId) {
    alert(`Change Order Scheme for User ID: ${userId}`);
    // Code to change order scheme
}

function lend(userId) {
    alert(`Lend for User ID: ${userId}`);
    // Code to lend amount
}

function changeAddress(userId) {
    alert(`Change Deposit Address for User ID: ${userId}`);
    // Code to change deposit address
}