// Datos ficticios para los gráficos
const datosGraficoBarra = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [{
    label: 'Ventas',
    data: [350, 450, 300, 550, 400],
    backgroundColor: 'rgba(54, 162, 235, 0.6)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

const datosGraficoLinea = {
  labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
  datasets: [{
    label: 'Producción',
    data: [30, 40, 35, 50, 45],
    fill: false,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2
  }]
};

const datosGraficoTorta = {
  labels: ['Rojo', 'Verde', 'Azul'],
  datasets: [{
    data: [30, 20, 50],
    backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
  }]
};

const datosOtroGraficoBarra = {
  labels: ['A', 'B', 'C', 'D', 'E'],
  datasets: [{
    label: 'Puntuaciones',
    data: [70, 55, 80, 75, 65],
    backgroundColor: 'rgba(75, 192, 192, 0.6)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};

// Obtener contextos de los elementos canvas
const contextoGraficoBarra = document.getElementById('graficoBarra').getContext('2d');
const contextoGraficoLinea = document.getElementById('graficoLinea').getContext('2d');
const contextoGraficoTorta = document.getElementById('graficoTorta').getContext('2d');
const contextoOtroGraficoBarra = document.getElementById('otroGraficoBarra').getContext('2d');

// Crear los gráficos usando Chart.js con títulos y sin zoom
new Chart(contextoGraficoBarra, {
  type: 'bar',
  data: datosGraficoBarra,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de Barras'
      }
    },
    responsive: true// Desactiva la capacidad de respuesta (zoom)
  }
});

new Chart(contextoGraficoLinea, {
  type: 'line',
  data: datosGraficoLinea,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de Líneas'
      }
    },
    responsive: true // Desactiva la capacidad de respuesta (zoom)
  }
});

new Chart(contextoGraficoTorta, {
  type: 'doughnut',
  data: datosGraficoTorta,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de Torta'
      }
    },
    responsive: true // Desactiva la capacidad de respuesta (zoom)

  }
});

new Chart(contextoOtroGraficoBarra, {
  type: 'bar',
  data: datosOtroGraficoBarra,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Otro Gráfico de Barras'
      }
    },
    responsive: false // Desactiva la capacidad de respuesta (zoom)
  }
});
