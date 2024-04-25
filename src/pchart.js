import React from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';

Chart.register(ArcElement);

function PieChart(){
    const data = {
        labels: ['Paypal', 'M-pesa', 'Crypto', 'Credit-cards', 'Debit-cards'],
        datasets: [
            {
                data: [300, 50, 100, 200, 300],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)','rgba(30,25,122,0.5)', 'rgba(0,0,0,0.5)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} />;
}

export default PieChart;