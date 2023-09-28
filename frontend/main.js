const person = document.querySelector("#person");

async function getData() {
  const url = "http://localhost:7680/";
  const response = await fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
  if (!response.error) {
    response.data.forEach((i) => {
      let details = `
        <div>
            <h2>${i.name}</h2>
            <p>${i.age}</p>
        </div>
        
        `;
      person.innerHTML += details;
    });
  } else console.log(response.error.message);
}

getData();
