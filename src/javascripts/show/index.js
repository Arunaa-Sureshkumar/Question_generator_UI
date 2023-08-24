/* eslint-disable prefer-destructuring */
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
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import '../common/steroid';
// import { apply } from 'mathjs';

const api_path = process.env.API_PATH;
function show() {
  // const cardContainer = document.getElementById('card-container');

  fetch(`${api_path}/get_variables`)
    .then((response) => response.json())
    .then((data) => {
      console.log('get variable api', data);
      // for (let i = 0; i < Object.keys(data).length; i++) {
      //   console.log('ques data', data[i].Question);
      //   const card = document.createElement("div");
      //   card.className = "cardouterdiv card" + i;
      //   const h5 = document.createElement("h6");
      //   h5.className = 'card-header';
      //   h5.innerText = data[i].Ques_name;
      //   const cardbody = document.createElement('div');
      //   cardbody.className = 'card-body';
      //   const p = document.createElement("p");
      //   p.className = "card-title";
      //   p.innerText = data[i].Question;
      //   const a = document.createElement("a");
      //   a.className = "btn btn-primary edit1";
      //   a.id = "edit1";
      //   a.setAttribute("data-name", data[i].Unique_id);
      //   a.innerText = "Edit";
      //   a.addEventListener("click", (e) => {
      //     const uid = e.target.getAttribute('data-name');
      //     window.location.href = `questiongenerator.html?id=${uid}`;
      //   });
      //   const but = document.createElement('button');
      //   but.className = 'btn btn-danger';
      //   but.id = "delques";
      //   but.innerText = "Delete";
      //   but.setAttribute("data-name", data[i].Unique_id);
      //   but.addEventListener("click", (e) => {
      //     const uid = e.target.getAttribute('data-name');
      //     fetch(`${api_path}/delete`, {
      //       method: "DELETE",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({ Unique_id: uid }),
      //     })
      //       .then((response) => response.json())
      //       .then((data1) => {
      //         console.log(data1.message);
      //         // eslint-disable-next-line no-restricted-globals
      //         location.reload();
      //       })
      //       .catch((error) => {
      //         console.error("Error:", error);
      //       });
      //   });
      //   cardbody.append(p);
      //   cardbody.append(a);
      //   cardbody.append(but);
      //   card.append(h5);
      //   card.append(cardbody);
      //   cardContainer.append(card);
      // }
      const tableBody = document.getElementById("table-body");

      data.forEach((record) => {
        const newRow = document.createElement("tr");
        // newRow.addEventListener("click", () => {
        //   window.location.href = `questiongenerator.html?id=${record.Unique_id}`;
        // });
        const ques_code = document.createElement("td");
        ques_code.textContent = record.Code;
        const ques_type = document.createElement("td");
        ques_type.textContent = record.Ques_type;
        const ques_subtype = document.createElement("td");
        ques_subtype.textContent = record.Ques_subtype;
        const difficulty = document.createElement("td");
        difficulty.textContent = record.Difficulty;
        const ques_tag = document.createElement("td");
        ques_tag.textContent = record.Tags;
        const question = document.createElement("td");
        question.innerHTML = record.Question;
        // const actions = document.createElement("td");
        // actions.className = "actions";
        // actions.style.width = "50px";
        const editcell = document.createElement("td");
        editcell.style.width = "30px";
        const edit = document.createElement("button");
        edit.className = "fa fa-edit edit-btn";
        edit.style.color = "green";
        edit.style.border = "none";
        edit.id = "edit1";
        edit.setAttribute("data-name", record.Unique_id);
        edit.style.backgroundColor = "transparent";
        edit.addEventListener("click", () => {
          // const uid = e.target.getAttribute('data-name');
          window.location.href = `questiongenerator.html?id=${record.Unique_id}`;
        });
        editcell.appendChild(edit);
        // const edit = document.createElement("button");
        // edit.className = "fa fa-edit edit-btn";
        // edit.style.color = "green";
        // edit.style.border = "none";
        // edit.id = "edit1";
        // edit.setAttribute("data-name", record.Unique_id);
        // edit.style.backgroundColor = "transparent";
        // edit.addEventListener("click", () => {
        //   // const uid = e.target.getAttribute('data-name');
        //   // window.location.href = `questiongenerator.html?id=${uid}`;
        // });
        const delcell = document.createElement("td");
        delcell.style.width = "30px";
        const del = document.createElement("button");
        del.className = "fa fa-trash del-btn";
        del.style.color = "red";
        del.style.border = "none";
        del.style.backgroundColor = "transparent";
        del.id = "delques";
        del.setAttribute("data-name", record.Unique_id);
        del.addEventListener("click", (e) => {
          e.stopPropagation();
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
              location.reload();
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });
        delcell.appendChild(del);
        // actions.appendChild(edit);
        // actions.appendChild(del);
        // newRow.appendChild(ques_name);
        newRow.appendChild(ques_code);
        newRow.appendChild(ques_type);
        newRow.appendChild(ques_subtype);
        newRow.appendChild(difficulty);
        newRow.appendChild(ques_tag);
        newRow.appendChild(question);
        // newRow.appendChild(solution);
        newRow.appendChild(editcell);
        newRow.appendChild(delcell);
        tableBody.appendChild(newRow);
      });
      $('#data-table').DataTable();
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

$(document).ready(() => {
  show();
});
