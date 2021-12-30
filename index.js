window.addEventListener("load", function(){
    fetch("controller.php")
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++)
        {
            let { company, title, date, city, state, country,description } = data[i];
            let mainDiv = document.createElement('div');
            let infoDiv = document.createElement('div');
            let divDescription = document.createElement("div");
            divDescription.classList.add("info", "d-none");
            divDescription.setAttribute("data-title",title);
            mainDiv.classList.add("mb");
            let divCompany = document.createElement('div');
            divCompany.textContent = `Compañia: ${company}`;
            let divTitle = document.createElement('div');
            divTitle.textContent = `Titulo: ${title}`;
            let divDate = document.createElement('div');
            divDate.textContent = `Fecha de publicacion: ${date}`;
            let divPlace = document.createElement('div');
            divPlace.textContent = `lugar:  ${city} /${state}/${country}`;
            divDescription.classList.add("description");
            divDescription.textContent = `${description}`;
            let button = document.createElement("button");
            button.textContent = "Ver detalle";
            button.setAttribute("type", "button");
            button.classList.add("show-more");
            button.setAttribute("data-title",title);
            
            infoDiv.appendChild(button);
            infoDiv.appendChild(divDescription);
            mainDiv.appendChild(divCompany);
            mainDiv.appendChild(divTitle);
            mainDiv.appendChild(divDate);
            mainDiv.appendChild(divPlace);
            mainDiv.appendChild(infoDiv);
            app.appendChild(mainDiv); // 
        }
    })
    .catch(console.error);
  });
  
  

  document.addEventListener("click", (evt) => {
    if (evt.target.closest(".show-more")) {
      evt.target.nextElementSibling.classList.toggle("d-none");
    }
  });