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
const addquesbtn = document.getElementById("addquesbtn");
addquesbtn.addEventListener("click", () => {
  window.location.href = 'questiongenerator.html';
});
const api_path = process.env.API_PATH;
function show() {
  // const cardContainer = document.getElementById('card-container');

  fetch(`${api_path}/get_variables`)
    .then((response) => response.json())
    .then((data) => {
      console.log('get variable api', data);
      const tableBody = document.getElementById("table-body");

      data.forEach((record) => {
        const newRow = document.createElement("tr");
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
