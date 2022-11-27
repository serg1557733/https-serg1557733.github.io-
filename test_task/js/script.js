const buttonShowMore = document.querySelector('.main__button');
fetch("js/data.json")
  .then(function (data) {
    return data.json();
  })
  .then(function (render) {
    const html = render.map(
      (data) =>
      `<tr>
          <td>${data.Ticker}</td>
          <td>${data.name}</td>
          <td>${data.SCTR}</td>
      </tr>`
      );
      console.log(render);
      
    document.getElementById("data").innerHTML = html.join('');
    if (render.length>11) {
      buttonShowMore.classList.add('active');
    }
  })
  .catch(function (err) {
    console.log("Error: " + err.message);
  });
