var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Organic Farming',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        },
        {
            label: 'Fertilizer Consumed',
            backgroundColor: 'rgb(125, 44, 243)',
            borderColor: 'rgb(125, 44, 243)',
            data: [45, 30, 20, 2, 5, 10, 0]
        }]
    },

    // Configuration options go here
    options: {}
});

AOS.init({
    duration : 1200,
});