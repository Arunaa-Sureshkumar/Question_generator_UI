/* eslint-disable camelcase */
/* eslint-disable prefer-template */
/* eslint-disable quotes */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import 'bootstrap';
import $ from 'jquery';
import '../../stylesheets/common/importers/_bootstrap.scss';
import '../../stylesheets/common/importers/_fontawesome.scss';
import '../common/steroid';

const api_path = process.env.API_PATH;
function show() {
  const cardContainer = document.getElementById('card-container');

  // fetch(`${api_path}/get_variables`)
  fetch(`${api_path}/get_variables`)
    .then((response) => response.json())
    .then((data) => {
      console.log('get variable api', data);
      for (let i = 0; i < Object.keys(data).length; i++) {
        console.log('ques data', data[i].Question);
        const card = document.createElement("div");
        card.className = "cardouterdiv card" + i;
        const h5 = document.createElement("h6");
        h5.className = 'card-header';
        h5.innerText = data[i].Ques_name;
        const cardbody = document.createElement('div');
        cardbody.className = 'card-body';
        const p = document.createElement("p");
        p.className = "card-title";
        p.innerText = data[i].Question;
        const a = document.createElement("a");
        a.className = "btn btn-primary edit1";
        a.id = "edit1";
        a.setAttribute("data-name", data[i].Unique_id);
        a.innerText = "Edit";
        a.addEventListener("click", (e) => {
          const uid = e.target.getAttribute('data-name');
          window.location.href = `questiongenerator.html?id=${uid}`;
        });
        const but = document.createElement('button');
        but.className = 'btn btn-danger';
        but.id = "delques";
        but.innerText = "Delete";
        but.setAttribute("data-name", data[i].Unique_id);
        but.addEventListener("click", (e) => {
          const uid = e.target.getAttribute('data-name');
          fetch(`${api_path}/delete`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ Unique_id: uid }),
          })
            .then((response) => response.json())
            .then((data1) => {
              console.log(data1.message);
              // eslint-disable-next-line no-restricted-globals
              location.reload(); // Output the response from the API
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });
        cardbody.append(p);
        cardbody.append(a);
        cardbody.append(but);
        card.append(h5);
        card.append(cardbody);
        cardContainer.append(card);
      }
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

$(document).ready(() => {
  show();
});
