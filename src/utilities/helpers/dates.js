export const formatDate = (date) => {
  let monthNames = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Deciembre"
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${day} ${monthNames[monthIndex]} ${year}, ${hours}:${minutes}` ;
}
