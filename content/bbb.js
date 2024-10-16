


// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create charts
const charts = [
    {
        id: 'demographicChart',
        type: 'bar',
        data: {
            labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
            datasets: [
                {
                    label: 'Basic Plan',
                    data: [15, 25, 20, 15, 10],
                    backgroundColor: 'rgba(255, 99, 132, 0.8)'
                },
                {
                    label: 'Standard Plan',
                    data: [20, 30, 25, 20, 15],
                    backgroundColor: 'rgba(54, 162, 235, 0.8)'
                },
                {
                    label: 'Premium Plan',
                    data: [10, 20, 30, 25, 20],
                    backgroundColor: 'rgba(255, 206, 86, 0.8)'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Age Distribution by Subscription Type'
                }
            }
        }
    },
    {
        id: 'geographicChart',
        type: 'pie',
        data: {
            labels: ['USA', 'Canada', 'UK', 'Australia', 'Other'],
            datasets: [{
                data: [40, 15, 20, 10, 15],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'User Distribution by Country'
                }
            }
        }
    },
    {
        id: 'subscriptionChart',
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'New Subscriptions',
                data: [1000, 1200, 1400, 1300, 1600, 1800],
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'New Subscriptions Over Time'
                }
            }
        }
    },
    {
        id: 'revenueChart',
        type: 'bar',
        data: {
            labels: ['Basic', 'Standard', 'Premium'],
            datasets: [{
                label: 'Monthly Revenue',
                data: [500000, 1000000, 1500000],
                backgroundColor: 'rgba(255, 159, 64, 0.8)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Revenue by Subscription Type'
                }
            }
        }
    },
    {
        id: 'userBehaviorChart',
        type: 'radar',
        data: {
            labels: ['Mobile', 'Tablet', 'Smart TV', 'Desktop', 'Game Console'],
            datasets: [{
                label: 'Device Usage',
                data: [70, 60, 80, 65, 40],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Device Usage Patterns'
                }
            }
        }
    },
    {
        id: 'retentionChart',
        type: 'line',
        data: {
            labels: ['1 Month', '3 Months', '6 Months', '1 Year', '2 Years'],
            datasets: [{
                label: 'Retention Rate',
                data: [100, 80, 70, 60, 50],
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'User Retention Over Time'
                }
            }
        }
    }
];

// Function to initialize charts
function initializeCharts() {
    charts.forEach(chartInfo => {
        const canvas = document.getElementById(chartInfo.id);
        if (canvas) {
            const ctx = canvas.getContext('2d');
            new Chart(ctx, {
                type: chartInfo.type,
                data: chartInfo.data,
                options: chartInfo.options
            });
        } else {
            console.error(`Canvas with id ${chartInfo.id} not found`);
        }
    });
}

// Add Netflix-like hover effect to navigation
const navItems = document.querySelectorAll('nav ul li');
navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Initialize charts when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeCharts);