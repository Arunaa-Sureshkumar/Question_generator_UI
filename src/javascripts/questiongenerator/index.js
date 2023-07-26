/* eslint-disable quotes */
/* eslint-disable arrow-parens */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-loop-func */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable camelcase */

import 'bootstrap';
import $, { event } from 'jquery';
import * as XLSX from 'xlsx';
import '../../stylesheets/common/importers/_bootstrap.scss';
import '../../stylesheets/common/importers/_fontawesome.scss';
import '../common/steroid';

const defVar = document.getElementById('defvar');
defVar.addEventListener('click', () => {
  addText("create");
});
const api_path = process.env.API_PATH;

let variable_number = 0;
let change_var_number = 0;
const variables = {};
const changevariables = {};
const changevarvariables = {};
const cvariables = {};
const constantvariables = {};
let assigned_var; let variable; let changevariable; let changevarvariable;
const checkboxnum = 0;
let question;
const questionvar = document.getElementById('question');
let previousval;
let lcmdbarray = [];
let adddbarray = [];
let subdbarray = [];
let muldbarray = [];
let divdbarray = [];
let sqdbarray = [];
let sqrootdbarray = [];
let cubedbarray = [];
let curootdbarray = [];
let factdbarray = [];
let diffdbarray = [];
let perdbarray = [];
let logdbarray = [];
let vardbarray = [];
let optdbarray = [];
let optdbvariables = {};
let optdbvalues = {};
let alldbvariables = {};
const vi = 0;
let dballvariables = {};
function addText(act, dbvariables) {
  const urlParams = new URLSearchParams(window.location.search);
  if (act == "edit") {
    dballvariables = Object.assign(dbvariables);
  }
  console.log("addtext", vardbarray);
  console.log("dballvariables", dballvariables);
  console.log("act", act);
  const inpvar = 0;
  const variableList = document.getElementById('variableList');
  // question = document.getElementById("question").value;
  // question = question+"dvar"+ variable_number;
  // variable = "var"+variable_number;
  // variables[variable] = 0;
  //   console.log(question)
  // if (act === "create") {
  //   const question = document.getElementById('question');
  //   question.value = ` dvar${variable_number} `;
  //   console.log("create", question);
  // }
  // if (act === "create") {
  console.log("inside act create");
  let question = document.getElementById('question').value;
  const textarea = document.getElementById('question');
  const wordToAdd = (` dvar${variable_number} `);
  const cursorStart = textarea.selectionStart;
  const cursorEnd = textarea.selectionEnd;
  const textareaValue = textarea.value;
  const modifiedValue = textareaValue.substring(0, cursorStart) + wordToAdd + textareaValue.substring(cursorEnd);
  if (act === 'create') {
    question = modifiedValue;
  }
  console.log(modifiedValue);
  console.log(question);
  const newCursorPos = cursorStart + wordToAdd.length;
  textarea.setSelectionRange(newCursorPos, newCursorPos);
  // }
  variables[variable] = 0;

  const div = document.createElement('div');
  const vardiv = document.createElement('div');
  vardiv.className = `d-flex flex-row vareditdiv${variable_number}`;
  const text = document.createElement('label');
  text.innerHTML = `dvar${variable_number}`;
  text.setAttribute('data-bs-toggle', 'tooltip');
  text.title = 'Add var to solution';
  text.setAttribute('for', `dvar${variable_number}`);
  text.style.fontWeight = 'bold';
  text.style.color = 'rgb(22, 223, 126)';
  const editicon = document.createElement('span');
  editicon.className = 'fa fa-edit';
  editicon.id = `edit${variable_number}`;
  editicon.style.marginLeft = '23px';
  editicon.style.marginTop = '4px';
  editicon.style.color = '#198754';
  vardiv.appendChild(text);
  vardiv.appendChild(editicon);
  const inpspandiv = document.createElement('div');
  inpspandiv.className = 'inpspandiv';
  const changeinput = document.createElement('input');
  changeinput.id = `dvar${variable_number}`;
  changevariable = `dvar${variable_number}`;
  changeinput.className = 'vardispinput';
  div.className = 'd-flex flex-column variablediv';
  div.id = `dvardiv${variable_number}`;
  const iconspan = document.createElement('span');
  iconspan.className = 'fa fa-trash';
  iconspan.id = `del${variable_number}`;
  iconspan.style.color = 'rgb(255, 0, 0)';
  iconspan.style.marginLeft = '6px';
  div.append(vardiv);
  inpspandiv.append(changeinput);
  inpspandiv.append(iconspan);
  div.append(inpspandiv);

  text.addEventListener('click', modifysolution);
  iconspan.addEventListener('click', deletebut);
  editicon.addEventListener('click', editlabel);
  editicon.myParam = 'dvar';
  let getvaluenum = 0;

  function getvalue(e) {
    const clickedinput = e.target;
    e.preventDefault();
    console.log("getvalue function");
    console.log("newallvariables", newallvariables);
    const allvariables = Object.assign(changevariables, cvariables, constantvariables, dballvariables, newallvariables);
    console.log("changevariables", changevariables);
    console.log("allvariables", allvariables);

    const changevar = document.getElementById(clickedinput.id).value;
    console.log('this', clickedinput.id, changevar);

    changevariables[clickedinput.id] = changevar;
    // createcheckboxes(changeinput.id,changevar,"quesvar")
    const editnum = e.target.id.slice(-1);
    const vareditdivlabel = document.querySelector(`.vareditdiv${editnum} label`);
    if (getvaluenum == 0) createcheckboxes(vareditdivlabel.innerHTML, changevar, 'quesvar');

    if (getvaluenum > 0) {
      if (urlParams.has('id')) {
        const lcmarray = lcmdbarray.concat(lcmcheckedvariable);
        const addarray = adddbarray.concat(addcheckedvariable);
        const subarray = subdbarray.concat(subcheckedvariable);
        const mularray = muldbarray.concat(mulcheckedvariable);
        const divarray = divdbarray.concat(divcheckedvariable);
        const sqarray = sqdbarray.concat(sqcheckedvariable);
        const sqrootarray = sqrootdbarray.concat(sqrootcheckedvariable);
        const cubearray = cubedbarray.concat(cubecheckedvariable);
        const curootarray = curootdbarray.concat(curootcheckedvariable);
        const factarray = factdbarray.concat(factcheckedvariable);
        const diffarray = diffdbarray.concat(diffcheckedvariable);
        const perarray = perdbarray.concat(percheckedvariable);
        const logarray = logdbarray.concat(logcheckedvariable);
        console.log("addaray", addarray);
        changerefresh(vardbarray, editnum, clickedinput, 'def', lcmarray, addarray, subarray, mularray, divarray, sqarray, sqrootarray, cubearray, curootarray, factarray, diffarray, perarray, logarray, optdbarray);
      } else {
        changerefresh(allvariables, editnum, clickedinput, 'def');
      }
    }

    getvaluenum++;
  }

  changeinput.addEventListener('change', getvalue);
  // changevariables[changevariable] = 0;

  const defvardisplay = document.getElementById('defvardisplay');
  defvardisplay.append(div);

  function handleButtonClick(e) {
    const clickedButton = e.target;
    assigned_var = document.getElementById('assigned_vari').value;
    variables[variable] = assigned_var;
    document.getElementById('assigned_vari').value = 0;
  }

  // e.preventDefault();
  document.getElementById('question').value = question;
  variable_number++;
  console.log('changevariables', changevariables);
}

function getvalue1(event, lcmdb, adddb, subdb, muldb, divdb, squaredb, sqrootdb, cubedb, curootdb, factdb, diffdb, perdb, logdb, variables, optionvariable) {
  const clickedinput = event.target;
  console.log("It is running .....");
  console.log("clickedinput in getvalue1", clickedinput);
  console.log("varibles passed", variables);
  console.log("option variables", optionvariable);
  // event.preventDefault();
  console.log("getvalue1 function");
  const allvariables = Object.assign(variables);
  // console.log("changevariables", changevariables);
  console.log("variables ", variables);
  console.log("allvariables", allvariables);
  const changevar = document.getElementById(clickedinput.id).value;
  console.log('this', clickedinput.id, changevar);

  changevariables[clickedinput.id] = changevar;
  allvariables[clickedinput.id] = changevar;
  // createcheckboxes(changeinput.id,changevar,"quesvar")
  const editnum = event.target.id.slice(-1);
  const lcmarray = lcmdbarray.concat(lcmcheckedvariable);
  const addarray = adddbarray.concat(addcheckedvariable);
  const subarray = subdbarray.concat(subcheckedvariable);
  const mularray = muldbarray.concat(mulcheckedvariable);
  const divarray = divdbarray.concat(divcheckedvariable);
  const sqarray = sqdbarray.concat(sqcheckedvariable);
  const sqrootarray = sqrootdbarray.concat(sqrootcheckedvariable);
  const cubearray = cubedbarray.concat(cubecheckedvariable);
  const curootarray = curootdbarray.concat(curootcheckedvariable);
  const factarray = factdbarray.concat(factcheckedvariable);
  const diffarray = diffdbarray.concat(diffcheckedvariable);
  const perarray = perdbarray.concat(percheckedvariable);
  const logarray = logdbarray.concat(logcheckedvariable);
  changerefresh(allvariables, editnum, clickedinput, 'def', lcmarray, addarray, subarray, mularray, divarray, sqarray, sqrootarray, cubearray, curootarray, factarray, diffarray, perarray, logarray, optionvariable);
  // const vareditdivlabel = document.querySelector(`.vareditdiv${editnum} label`);
  // changerefresh(allvariables, editnum, clickedinput, 'def', lcmdb, adddb, subdb, muldb, divdb, squaredb, sqrootdb, cubedb, curootdb, factdb, diffdb, perdb, logdb, optionvariable);
}
let newallvariables = {};
function changerefresh(allvariables, editnum, clickedinput, variable, lcmcheckedvariables = lcmcheckedvariable, addcheckedvariables = addcheckedvariable, subcheckedvariables = subcheckedvariable, mulcheckedvariables = mulcheckedvariable, divcheckedvariables = divcheckedvariable, sqcheckedvariables = sqcheckedvariable, sqrootcheckedvariables = sqrootcheckedvariable, cubecheckedvariables = cubecheckedvariable, curootcheckedvariables = curootcheckedvariable, factcheckedvariables = factcheckedvariable, diffcheckedvariables = diffcheckedvariable, percheckedvariables = percheckedvariable, logcheckedvariables = logcheckedvariable, optionvariable = optionvariables) {
  console.log("global", lcmcheckedvariable);
  console.log("all variables", allvariables);
  console.log("lcmcheckedvariable", lcmcheckedvariables);
  console.log("variablr", variable);
  // console.log("test", lcmcheckedvariable);
  const actionlen = Object.keys(actions).length;
  let optnum = 2;
  let lcmnum = 0; let addnum = 0; let subnum = 0; let mulnum = 0; let divnum = 0; let squnum = 0; let squrootnum = 0; let cubnum = 0; let cubrootnum = 0; let factnum = 0; let diffenum = 0; let percenum = 0; let lognum = 0;
  let checkbox;
  if (variable == 'def') checkbox = document.querySelector(`[data-name="dvardiv${editnum}"]`);
  if (variable == 'const') checkbox = document.querySelector(`[data-name="constdiv${editnum}"]`);
  if (variable == 'change') checkbox = document.querySelector(`[data-name="chvardiv${editnum}"]`);
  console.log("checkbox and editnum", checkbox, editnum);
  console.log(document.querySelector(`[data-name="constdiv1"]`));
  const checkboxinput = checkbox.querySelector('input');
  checkboxinput.value = clickedinput.value;
  // let newallvariables = {}
  for (let i = 0; i < actionlen; i++) {
    const value = Object.keys(actions)[i];
    const action = actions[Object.keys(actions)[i]];
    const changeinput = document.querySelector(`input[name="${value}"]`);
    // console.log("changeinput", changeinput);
    // console.log("value", changeinput.value);
    // console.log("allvariables", allvariables);
    // console.log("change", changevariables);
    newallvariables = Object.assign(allvariables, changevariables);
    console.log("new all variables", newallvariables);
    if (action == 'LCM') {
      var splitArrays = splitarray(lcmcheckedvariables);
      console.log("splitarrays", splitArrays);
      var array = splitArrays[lcmnum++].map((key) => {
        console.log("map", key);
        // return allvariables[key];
        return newallvariables[key];
      });
      console.log("array", array);
      var res = calculateLCM(array);
      console.log("res", res);
      changeinput.value = res;
    }
    if (action == 'Add') {
      console.log("addcheckedvariable", addcheckedvariables);
      var splitArrays = splitarray(addcheckedvariables);
      console.log("splitarrays", splitArrays);
      var array = splitArrays[addnum++].map((key) => {
        console.log("addmap", key);
        // return allvariables[key];
        return newallvariables[key];
      });
      var res = calculateADD(array);
      changeinput.value = res;
    }
    if (action == 'Sub') {
      var splitArrays = splitarray(subcheckedvariables);
      var array = splitArrays[subnum++].map((key) => newallvariables[key]);
      var res = calculateSUB(array);
      changeinput.value = res;
    }
    if (action == 'Mul') {
      var splitArrays = splitarray(mulcheckedvariables);
      var array = splitArrays[mulnum++].map((key) => newallvariables[key]);
      var res = calculateMUL(array);
      changeinput.value = res;
    }
    if (action == 'Div') {
      var splitArrays = splitarray(divcheckedvariables);
      var array = splitArrays[divnum++].map((key) => newallvariables[key]);
      var res = calculateDIV(array);
      changeinput.value = res;
    }
    if (action == 'Square') {
      var splitArrays = splitarray(sqcheckedvariables);
      var array = splitArrays[squnum++].map((key) => newallvariables[key]);
      var res = calculatesquare(array);
      changeinput.value = res;
    }
    if (action == 'SqRoot') {
      var splitArrays = splitarray(sqrootcheckedvariables);
      var array = splitArrays[squrootnum++].map((key) => newallvariables[key]);
      var res = calculatesqroot(array);
      changeinput.value = res;
    }
    if (action == 'Cube') {
      var splitArrays = splitarray(cubecheckedvariables);
      var array = splitArrays[cubnum++].map((key) => newallvariables[key]);
      var res = calculatecube(array);
      changeinput.value = res;
    }
    if (action == 'CubeRoot') {
      var splitArrays = splitarray(curootcheckedvariables);
      var array = splitArrays[cubrootnum++].map((key) => newallvariables[key]);
      var res = calculatecuberoot(array);
      changeinput.value = res;
    }
    if (action == 'Factorial') {
      var splitArrays = splitarray(factcheckedvariables);
      var array = splitArrays[factnum++].map((key) => newallvariables[key]);
      var res = calculatefact(array);
      changeinput.value = res;
    }
    if (action == 'Difference') {
      var splitArrays = splitarray(diffcheckedvariables);
      var array = splitArrays[diffenum++].map((key) => newallvariables[key]);
      var res = calculatediff(array);
      changeinput.value = res;
    }
    if (action == 'Percentage') {
      var splitArrays = splitarray(percheckedvariables);
      var array = splitArrays[percenum++].map((key) => newallvariables[key]);
      var res = calculateper(array);
      changeinput.value = res;
    }
    if (action == 'Log') {
      var splitArrays = splitarray(logcheckedvariables);
      var array = splitArrays[lognum++].map((key) => newallvariables[key]);
      var res = calculatelog(array);
      changeinput.value = res;
    }
    console.log("changeinput.value and res and changeinput id", changeinput.value, res, changeinput.id);
    newallvariables[changeinput.id] = res;
    allvariables[changeinput.id] = res;
    cvariables[changeinput.id] = res;
    changevariables[changeinput.id] = res;
  }
  console.log('option variables', optionvariable);
  console.log('all variables', allvariables);
  console.log("new all variables", newallvariables);
  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const option3 = document.getElementById('option3');
  const option4 = document.getElementById('option4');
  console.log("options", option1.value, option2.value, option3.value, option4.value);
  option1.value = allvariables[optionvariable.option1];
  console.log("option1.valuePPPPP", optionvariables);
  console.log(optnum); // always 2
  console.log("optionvariable", optdbvalues);
  const option = optionvariable[`option${optnum}`];
  console.log('option', option);
  // var arrayValue = option[0];
  // console.log("arrayvalue",arrayValue);
  const firstvalue = allvariables[option[0]];
  optionvalues.option1 = firstvalue;
  console.log('firstvalue', firstvalue);
  if (option[1] == '+') option2.value = Number(firstvalue) + Number(option[2]);

  if (option[1] == '-') option2.value = Number(firstvalue) - Number(option[2]);

  if (option[1] == '*') option2.value = Number(firstvalue) * Number(option[2]);

  if (option[1] == '^') option2.value = Number(firstvalue) * Number(firstvalue);
  optnum++;
  optionvalues.option2 = option2.value;

  const option3v = optionvariable.option3;
  const option3val = allvariables[option3v[0]];
  if (option3v[1] == '+') option3.value = Number(option3val) + Number(option3v[2]);
  if (option3v[1] == '-') {
    option3.value = Number(option3val) - Number(option3v[2]);
    console.log('option3value', option3.value);
  }
  if (option3v[1] == '*') option3.value = Number(option3val) * Number(option3v[2]);
  if (option3v[1] == '^') option3.value = Number(option3val) * Number(option3val);
  optionvalues.option3 = option3.value;

  const option4v = optionvariable.option4;
  console.log("option4v", option4v);
  const option4val = allvariables[option4v[0]];
  if (option4v[1] == '+') option4.value = Number(option4val) + Number(option4v[2]);
  if (option4v[1] == '-') option4.value = Number(option4val) - Number(option4v[2]);
  if (option4v[1] == '*') option4.value = Number(option4val) * Number(option4v[2]);
  if (option4v[1] == '^') option4.value = Number(option4val) * Number(option4val);
  console.log("option4", option4.value);
  optionvalues.option4 = option4.value;
  console.log("optionvalues", optionvalues);
  const len1 = Object.keys(changevariables)[0];
  console.log('len1', len1);
}

function editlabel(e) {
  console.log('edit label', e.target);
  console.log('edit', e.target.myParam);
  console.log(e.target.id);
  console.log(e.currentTarget.previousElementSibling.getAttribute('for'));
  const labelElement = e.currentTarget.previousElementSibling;
  const labelname = e.currentTarget.previousElementSibling.innerHTML;
  const inputElement = document.createElement('input');
  inputElement.value = labelElement.textContent;
  inputElement.style.width = '70px';
  inputElement.addEventListener('blur', () => {
    labelElement.textContent = `${inputElement.value}(${labelname})`;
    inputElement.replaceWith(labelElement);

    if (e.target.myParam == 'dvar') {
      console.log('after input');
      const editnum = e.target.id.slice(-1);
      console.log(e.target);
      const checkboxlabel = document.querySelector(`[data-name="dvardiv${editnum}"] label`);
      console.log('checkboxlabel', checkboxlabel);
      checkboxlabel.innerHTML = `${inputElement.value}(${labelname})`;
    }

    if (e.target.myParam == 'chvar') {
      console.log('after input');
      const editnum = e.target.id.slice(-1);
      console.log('editnum', editnum);
      const checkboxlabel = document.querySelector(`[data-name="chvardiv${editnum}"] label`);
      console.log('checkboxlabel', checkboxlabel);
      checkboxlabel.innerHTML = `${inputElement.value}(${labelname})`;
    }

    if (e.target.myParam == 'const') {
      console.log('after input');
      const editnum = e.target.id.slice(-1);
      console.log('editnum', editnum);
      const checkboxlabel = document.querySelector(`[data-name="constdiv${editnum}"] label`);
      console.log('checkboxlabel', checkboxlabel);
      checkboxlabel.innerHTML = `${inputElement.value}(${labelname})`;
    }
  });

  labelElement.replaceWith(inputElement);
  inputElement.focus();

  // change dvardiv_ label
}
function modifysolution(e) {
  // var solution = document.getElementById("solution");
  // var newsolution = solution.value+" "+e.target.innerHTML
  // console.log("solution ",solution)
  // solution.value = newsolution;

  const solution = document.getElementById('solution').value;
  const textarea = document.getElementById('solution');
  const word = e.target.innerHTML;
  if (word.includes('(')) var wordToAdd = word.substring(word.indexOf('(') + 1, word.indexOf(')'));
  else wordToAdd = e.target.innerHTML;
  const cursorStart = textarea.selectionStart;
  const cursorEnd = textarea.selectionEnd;
  const textareaValue = textarea.value;
  const modifiedValue = `${textareaValue.substring(0, cursorStart)} ${wordToAdd} ${textareaValue.substring(cursorEnd)}`;
  textarea.value = modifiedValue;

  const newCursorPos = cursorStart + wordToAdd.length + 1;
  textarea.setSelectionRange(newCursorPos, newCursorPos);
}

function modifysolutionchange(e) {
  // var solution = document.getElementById("solution");
  const { name } = e.target;
  const newname = name.charAt(0).toUpperCase() + name.slice(1);
  // var newsolution = solution.value+" "+newname;
  // console.log("solution ",solution)
  // solution.value = newsolution;

  const solution = document.getElementById('solution').value;
  const textarea = document.getElementById('solution');
  const wordToAdd = newname;
  const cursorStart = textarea.selectionStart;
  const cursorEnd = textarea.selectionEnd;
  const textareaValue = textarea.value;
  const modifiedValue = textareaValue.substring(0, cursorStart) + wordToAdd + textareaValue.substring(cursorEnd);
  textarea.value = modifiedValue;

  const newCursorPos = cursorStart + wordToAdd.length;
  textarea.setSelectionRange(newCursorPos, newCursorPos);

  togglebutton();
  $('#checkboxes').toggle('slide');
  $('#checkboxselect').toggle('slide');
}

function deletebut(e) {
  const parentDiv = e.currentTarget.parentNode.parentNode;
  console.log(parentDiv, '||', e.currentTarget.previousElementSibling.id);
  const key = e.currentTarget.previousElementSibling.id;
  const question = document.getElementById('question');
  const newstring = (question.value).replace(e.currentTarget.previousElementSibling.id, '');
  question.value = newstring;
  const solution = document.getElementById('solution');
  solution.value = (solution.value).replace(e.currentTarget.previousElementSibling.id, '');
  delete changevariables[key];
  console.log(changevariables);
  const dcheck = document.querySelectorAll(`div[data-name="${parentDiv.id}"]`);
  dcheck.forEach((div) => {
    div.remove();
  });
  parentDiv.remove();
  // dcheck.remove();
}
// ####################################
let lcm = 0;
const selectvar = document.getElementById('checkedvar');
const chunkvar = document.getElementById('chunkvar');
chunkvar.addEventListener('click', () => {
  addvar("create");
});
let divvar = 0;
var calclcm;
let chvardivval;
let assignname;
function addvar(act) {
  const variableList = document.getElementById('variableList');
  // var solution = document.getElementById("solution").value;
  // solution = solution + "cvar" + change_var_number;
  // variable = "cvar"+change_var_number;
  // variables[variable] = 0;

  let solution = document.getElementById('solution').value;
  const textarea = document.getElementById('solution');
  const wordToAdd = (` cvar${change_var_number} `);
  const cursorStart = textarea.selectionStart;
  const cursorEnd = textarea.selectionEnd;
  const textareaValue = textarea.value;

  const modifiedValue = textareaValue.substring(0, cursorStart) + wordToAdd + textareaValue.substring(cursorEnd);
  if (act === "create") {
    solution = modifiedValue;
  }
  // Move the cursor after the newly added word
  const newCursorPos = cursorStart + wordToAdd.length;
  textarea.setSelectionRange(newCursorPos, newCursorPos);

  const changevardiv = document.createElement('div');
  const butspandiv = document.createElement('div');
  butspandiv.className = `d-flex flex-row changevardiv${change_var_number}`;
  const button = document.createElement('button');
  button.id = `cvar${change_var_number}`;
  button.innerHTML = `cvar${change_var_number}`;
  button.setAttribute('data-bs-toggle', 'tooltip');
  button.title = 'Select Functionalities. Use Assign to add var to solution';
  button.className = 'changevarbutton';
  button.style.fontWeight = 'bold';
  changevardiv.className = 'd-flex flex-column';
  const editicon = document.createElement('span');
  editicon.className = 'fa fa-edit';
  editicon.id = `changeedit${change_var_number}`;
  editicon.style.color = '#198754';
  editicon.style.marginLeft = '15px';
  editicon.style.marginTop = '4px';
  chvardivval = `chvardiv${divvar}`;
  changevardiv.id = chvardivval;
  changevardiv.style.marginRight = '20px';

  editicon.addEventListener('click', editlabel);
  editicon.myParam = 'chvar';
  // const cvarspan = document.createElement("span");
  // cvarspan.className = "bi bi-trash";
  // cvarspan.id="cdel"+variable_number;
  // cvarspan.style.color="rgb(255, 0, 0)";
  // butspandiv.append(button)
  // butspandiv.append(cvarspan)
  butspandiv.appendChild(button);
  butspandiv.appendChild(editicon);
  // changevardiv.append(button)
  // changevardiv.append(editicon)
  changevardiv.appendChild(butspandiv);
  // changevardiv.append(cvarspan)
  divvar++;

  const changevarinput = document.createElement('input');
  changevarinput.id = `cvar${change_var_number}`;
  changevarinput.name = `cvar${change_var_number}`;
  changevarvariable = `cvar${change_var_number}`;

  function changevarvalue(event) {
    const clickedinput1 = event.target;
    event.preventDefault();
    const changevar = document.getElementById(clickedinput1.id).value;
    //   console.log("inside changevarvalue",clickedinput1.id,changevar);
    changevariables[clickedinput1.id] = changevar;
  }

  changevarinput.addEventListener('change', changevarvalue);
  // changevarvariables[changevarvariable] = 0;

  const chanvardisplay = document.getElementById('chanvardisplay');
  chanvardisplay.appendChild(changevardiv);

  function handleButtonClick(e) {
    const clickedButton = e.target;
    console.log('uio', clickedButton.id);
    togglebutton();

    assignname = document.getElementById('calcassign');
    assignname.name = clickedButton.id;
  }

  button.addEventListener('click', handleButtonClick);
  calclcm = document.getElementById('calclcm');
  calclcm.name = changevarvariable;
  const lcmstore = changevarinput.id;
  changevarinput.value = lcm;
  // e.preventDefault();
  document.getElementById('solution').value = solution;
  change_var_number++;
}

// ##################

function togglebutton() {
  if (getComputedStyle(myDropdown, null).display === 'none') {
    myDropdown.style.display = 'block';
  } else {
    myDropdown.style.display = 'none';
  }
}

var calclcm = document.getElementById('calclcm');
calclcm.addEventListener('click', lcmcalculation);
calclcm.myParam = '1';
const calcadd = document.getElementById('calcadd');
calcadd.addEventListener('click', lcmcalculation);
calcadd.myParam = '2';
const calcsub = document.getElementById('calcsub');
calcsub.addEventListener('click', lcmcalculation);
calcsub.myParam = '3';
const calcmul = document.getElementById('calcmul');
calcmul.addEventListener('click', lcmcalculation);
calcmul.myParam = '4';
const calcdiv = document.getElementById('calcdiv');
calcdiv.addEventListener('click', lcmcalculation);
calcdiv.myParam = '5';
const calcsquare = document.getElementById('calcsquare');
calcsquare.addEventListener('click', lcmcalculation);
calcsquare.myParam = '6';
const calcsqroot = document.getElementById('calcsqroot');
calcsqroot.addEventListener('click', lcmcalculation);
calcsqroot.myParam = '7';
const calccube = document.getElementById('calccube');
calccube.addEventListener('click', lcmcalculation);
calccube.myParam = '8';
const calccuberoot = document.getElementById('calccuberoot');
calccuberoot.addEventListener('click', lcmcalculation);
calccuberoot.myParam = '9';
const calcfact = document.getElementById('calcfact');
calcfact.addEventListener('click', lcmcalculation);
calcfact.myParam = '10';
const calcassign = document.getElementById('calcassign');
calcassign.addEventListener('click', modifysolutionchange);
const calcdiff = document.getElementById('calcdiff');
calcdiff.addEventListener('click', lcmcalculation);
calcdiff.myParam = '12';
const calcper = document.getElementById('calcper');
calcper.addEventListener('click', lcmcalculation);
calcper.myParam = '13';
const calclog = document.getElementById('calclog');
calclog.addEventListener('click', lcmcalculation);
calclog.myParam = '14';
// calcassign.myParam = ""

const calclcmaction = calclcm.value;

const checkboxes = document.getElementById('checkboxes');
let checkedbutton;
let butnum = 0;
let quesvardivnum = 0;
let solvardivnum = 0;
let constvardivnum = 0;
function createcheckboxes(key, keyval, vartype) {
  const checkboxall = document.getElementById('checkboxall');
  const outerdivcheckbox = document.createElement('div');

  if (vartype == 'quesvar') {
    outerdivcheckbox.setAttribute('data-name', `dvardiv${quesvardivnum}`);
    quesvardivnum++;
  }
  if (vartype == 'solvar') {
    outerdivcheckbox.setAttribute('data-name', `chvardiv${solvardivnum}`);
    solvardivnum++;
  }
  if (vartype == 'const') {
    outerdivcheckbox.setAttribute('data-name', `constdiv${constvardivnum}`);
    constvardivnum++;
  }

  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  label.innerHTML = key;
  label.setAttribute('for', key);
  checkbox.type = 'checkbox';
  checkbox.value = keyval;
  checkbox.id = key;
  checkbox.name = 'allvariables';
  checkbox.className = `chx ${key}`;
  checkbox.style.width = '50px';
  checkbox.style.margin = '4px';
  checkbox.style.marginTop = '20px';
  checkbox.style.marginBottom = '20px';
  checkbox.style.marginRight = '40px';
  outerdivcheckbox.appendChild(label);
  outerdivcheckbox.appendChild(checkbox);
  checkboxall.appendChild(outerdivcheckbox);
}
function createbutton() {
  const checkboxselect = document.getElementById('checkboxselect');
  checkedbutton = document.createElement('button');
  checkedbutton.id = 'checkedvar';
  checkedbutton.innerHTML = 'select';
  checkboxselect.appendChild(checkedbutton);
  checkedbutton.className = 'btn btn-success';
}
const tempFlow = [];
const tempFlowValue = [];
let action;
const checkedvalues = [];
function lcmcalculation(e) {
  const element = e.target;
  changeButtonColor(element);
  action = e.currentTarget.myParam;
  if (butnum === 0) {
    createbutton();
    butnum = 1;
  }
  const selectvar = document.getElementById('checkedvar');
  // selectvar.addEventListener("click",selectvariables.bind(selectvar,action,checkedvalues),{ once: true });

  const checkboxes = document.querySelectorAll('input[name="allvariables"]');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', (e) => {
      if (tempFlow.includes(e.target.id)) {
        const index = tempFlow.indexOf(e.target.id);
        tempFlow[index] = undefined;
        tempFlowValue[index] = undefined;
        tempFlowValue.push(e.target.value);
        tempFlow.push(e.target.id);
      } else {
        tempFlow.push(e.target.id);
        tempFlowValue.push(e.target.value);
      }
    });
  }

  selectvar.addEventListener('click', selectvariables);
  selectvar.myParam = element.id;
}

let activeButton = null;
let originalColor = null;
function changeButtonColor(button) {
  if (activeButton) {
    activeButton.style.backgroundColor = originalColor;
  }
  activeButton = button;
  originalColor = button.style.backgroundColor;
  button.style.backgroundColor = "#16df7e";
}

var lcmcheckedvariable = [];
var addcheckedvariable = [];
var subcheckedvariable = [];
var mulcheckedvariable = [];
var divcheckedvariable = [];
var sqcheckedvariable = [];
var sqrootcheckedvariable = [];
var cubecheckedvariable = [];
var curootcheckedvariable = [];
var factcheckedvariable = [];
var diffcheckedvariable = [];
var percheckedvariable = [];
var logcheckedvariable = [];
function selectvariables(e) {
  const element = document.getElementById(e.currentTarget.myParam);
  element.style.backgroundColor = '#0dba4b';
  const checkboxes = document.querySelectorAll('input[name="allvariables"]:checked');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  const checkedvalues = tempFlowValue.filter((el) => el !== undefined).map(Number);
  const checkedvariables = tempFlow.filter((el) => el !== undefined);
  console.log('checkedvariables', checkedvariables);
  console.log('default', changevariables);
  console.log('changeing', cvariables);
  tempFlowValue.length = 0;
  tempFlow.length = 0;

  let mathaction;
  if (action == 1) {
    mathaction = 'LCM';
    lcm = calculateLCM(checkedvalues);
    lcmcheckedvariable.push(...checkedvariables);
    lcmcheckedvariable.push('end');
  }
  if (action == 2) {
    mathaction = 'Add';
    lcm = calculateADD(checkedvalues);
    addcheckedvariable.push(...checkedvariables);
    addcheckedvariable.push('end');
  }
  if (action == 3) {
    mathaction = 'Sub';
    lcm = calculateSUB(checkedvalues);
    subcheckedvariable.push(...checkedvariables);
    subcheckedvariable.push('end');
  }
  if (action == 4) {
    mathaction = 'Mul';
    lcm = calculateMUL(checkedvalues);
    mulcheckedvariable.push(...checkedvariables);
    mulcheckedvariable.push('end');
  }
  if (action == 5) {
    mathaction = 'Div';
    lcm = calculateDIV(checkedvalues);
    divcheckedvariable.push(...checkedvariables);
    divcheckedvariable.push('end');
  }
  if (action == 6) {
    mathaction = 'Square';
    lcm = calculatesquare(checkedvalues);
    sqcheckedvariable.push(...checkedvariables);
    sqcheckedvariable.push('end');
  }
  if (action == 7) {
    mathaction = 'SqRoot';
    lcm = calculatesqroot(checkedvalues);
    sqrootcheckedvariable.push(...checkedvariables);
    sqrootcheckedvariable.push('end');
  }
  if (action == 8) {
    mathaction = 'Cube';
    lcm = calculatecube(checkedvalues);
    cubecheckedvariable.push(...checkedvariables);
    cubecheckedvariable.push('end');
  }
  if (action == 9) {
    mathaction = 'CubeRoot';
    lcm = calculatecuberoot(checkedvalues);
    curootcheckedvariable.push(...checkedvariables);
    curootcheckedvariable.push('end');
  }
  if (action == 10) {
    mathaction = 'Factorial';
    lcm = calculatefact(checkedvalues);
    factcheckedvariable.push(...checkedvariables);
    factcheckedvariable.push('end');
  }
  if (action == 11) {
    mathaction = 'Assign';
    lcm = calculatefact(checkedvalues);
  }
  if (action == 12) {
    mathaction = 'Difference';
    lcm = calculatediff(checkedvalues);
    diffcheckedvariable.push(...checkedvariables);
    diffcheckedvariable.push('end');
  }
  if (action == 13) {
    mathaction = 'Percentage';
    lcm = calculateper(checkedvalues);
    percheckedvariable.push(...checkedvariables);
    percheckedvariable.push('end');
  }
  if (action == 14) {
    mathaction = 'Log';
    lcm = calculatelog(checkedvalues);
    console.log('inside action==14', lcm);
    logcheckedvariable.push(...checkedvariables);
    logcheckedvariable.push('end');
  }
  changevarinput(lcm, mathaction);
  togglebutton();
  $('#checkboxes').toggle('slide');
  $('#checkboxselect').toggle('slide');
  //   console.log("lcm last")
}

const i = 0;

const calculateLCM = (...[arr]) => {
  const gcd2 = (a, b) => {
    if (!b) return b === 0 ? a : NaN;
    return gcd2(b, a % b);
  };
  const lcm2 = (a, b) => a * b / gcd2(a, b);
  let n = 1;
  for (let i = 0; i < arr.length; ++i) {
    n = lcm2(arr[i], n);
  }
  return n;
};

const calculateADD = (...[arr]) => {
  let n = 0;
  for (let i = 0; i < arr.length; ++i) {
    n += Number(arr[i]);
  }
  return n;
};

const calculateSUB = (...[arr]) => {
  let n = 0;
  n = arr[0] - arr[1];
  return n;
};

const calculateMUL = (...[arr]) => {
  let n = 1;
  for (let i = 0; i < arr.length; ++i) {
    n *= Number(arr[i]);
  }
  return n;
};

const calculateDIV = (...[arr]) => {
  let n = 1;
  n = arr[0] / arr[1];
  return n;
};

const calculatesquare = (...[arr]) => {
  let n = 1;
  for (let i = 0; i < arr.length; ++i) {
    n = arr[i] * arr[i];
  }
  return n;
};

const calculatecube = (...[arr]) => {
  let n = 1;
  for (let i = 0; i < arr.length; ++i) {
    n = arr[i] * arr[i] * arr[i];
  }
  return n;
};

const calculatesqroot = (...[arr]) => {
  let n = 1;
  for (let i = 0; i < arr.length; ++i) {
    n = Math.sqrt(arr[i]);
  }
  return n;
};

const calculatecuberoot = (...[arr]) => {
  let n = 1;
  for (let i = 0; i < arr.length; ++i) {
    n = Math.cbrt(arr[i]);
  }
  return n;
};

const calculatefact = (...[arr]) => {
  function factorial(n) {
    if (n < 0) {
      return 'number has to be positive.';
    }
    if (n == 0 || n == 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  for (let i = 0; i < arr.length; ++i) {
    n = factorial(arr[i]);
  }
  return n;
};

const calculatediff = (...[arr]) => {
  let n = 0;
  n = arr[0] - arr[1];
  if (n < 0) n *= -1;
  return n;
};
const calculateper = (...[arr]) => {
  n = (arr[0] / arr[1]) * 100;
  return n;
};

const calculatelog = (...[arr]) => {
  n = Math.log(arr[0]) / Math.log(arr[1]);
  console.log('log value', n);
  return n;
};

let newvariable = 0;
var actions = {};
function changevarinput(lcm, mathaction) {
  const cinpspandiv = document.createElement('div');
  const chvarinput = document.createElement('input');
  const actionvar = document.createElement('small');
  actionvar.innerHTML = mathaction;
  actionvar.style.color = 'rgb(22, 223, 126)';
  actionvar.style.fontStyle = 'italic';

  //   console.log(calclcm.name)
  chvarinput.id = calclcm.name;
  chvarinput.value = lcm;
  chvarinput.className = 'chvarinp';
  chvarinput.name = `cvar${newvariable}`;
  newvariable++;

  // cvariables[chvarinput.name] = chvarinput.value;

  cvariables[chvarinput.name] = chvarinput.value;
  actions[chvarinput.name] = mathaction;
  const chvardiv = document.getElementById(chvardivval);
  const cvarspan = document.createElement('span');
  cvarspan.className = 'fa fa-trash';
  cvarspan.id = `cdel${variable_number}`;
  cvarspan.style.color = 'rgb(255, 0, 0)';
  cvarspan.style.marginLeft = '6px';

  cinpspandiv.appendChild(chvarinput);
  cinpspandiv.appendChild(cvarspan);
  chvardiv.appendChild(actionvar);
  chvardiv.appendChild(cinpspandiv);

  // changesolnvar(calclcm.name,lcm)
  // const vareditdivlabel = document.querySelector('.changevardiv label');
  // console.log("varedit",vareditdivlabel.innerHTML);
  // createcheckboxes(vareditdivlabel.innerHTML,lcm,"solvar")
  const button = chvarinput.parentNode.previousElementSibling.previousElementSibling.querySelector('button');

  createcheckboxes(button.innerHTML, lcm, 'solvar');
  // updatechangevarinput(lcm,calclcm.name)
  cvarspan.addEventListener('click', deletebut);
}
function updatechangevarinput(lcm, id) {
  const updatechvarinput = document.getElementById(id);
  updatechangevarinput.addEventListener('change', valuechange);
  updatechvarinput.value = lcm;
  changesolnvar(calclcm.name, lcm);
}
function valuechange(e) {
  const clickedinput = e.target;
  e.preventDefault();
  //   console.log("isss",clickedinput.id);
}

function changesolnvar(id, lcm) {
  const solution = document.getElementById('solution');
  const solnval = solution.value;
  const changedsoln = solnval.replace(id, lcm);
  solution.value = changedsoln;
}

//  onclick question + = addText
//  onclick solution + = addvar
//  button dynamic onclick  = handlebuttonclick
//  open togglebutton
//  lcm displayed
//  calclcm onclick = lcmcalculation
//  checkboxes created
//  checkvar onclick = togglevar, calc lcm

// lcm button ,checkboxes

const generatebtn = document.getElementById('generatebtn');
const dispgenvar = document.getElementById('dispgenvar');
generatebtn.addEventListener('click', () => {
  generatevariabledisplay();
});
let loopnum;
const changed = {};
let gendefvar = 0;
const newoptions = {};
function splitarray(lcmcheckedvariable) {
  const splitArrays = [];
  let currentArray = [];
  for (let i = 0; i < lcmcheckedvariable.length; i++) {
    if (lcmcheckedvariable[i] === 'end') {
      splitArrays.push(currentArray);
      currentArray = [];
    } else {
      currentArray.push(lcmcheckedvariable[i]);
    }
  }
  splitArrays.push(currentArray);
  return splitArrays;
}

function generatevariabledisplay() {
  console.log('inside genratevariabledisplay', changevariables);
  const defProperties = Object.keys(changevariables).filter((key) => key.startsWith('dvar'));

  const defObject = {};

  defProperties.forEach((key) => {
    defObject[key] = changevariables[key];
  });
  console.log('defarray', defObject);
  const len = Object.keys(defObject).length;

  let cover;
  for (let i = 0; i < len; i++) {
    cover = document.createElement('div');
    cover.className = 'd-flex flex-column coverdiv mb-5';
    cover.setAttribute('data-name', `dvardiv${gendefvar}`);
    gendefvar++;
    const label = document.createElement('label');
    label.innerHTML = Object.keys(defObject)[i];
    label.className = 'p-1';
    const defvarvalue = document.createElement('label');

    defvarvalue.innerHTML = defObject[Object.keys(defObject)[i]];

    defvarvalue.className = 'p-1 genvarvalue';
    defvarvalue.id = `genvalue${i}`;
    const select = document.createElement('select');
    select.className = 'p-1 selectbut';
    // Use the Option constructor: args text, value, defaultSelected, selected
    var option = new Option('select', 'value', false, false);
    select.appendChild(option);

    // Use createElement to add an option:
    option = document.createElement('option');
    option.value = 'Increment';
    option.text = 'Increment';
    select.appendChild(option);

    const valuech = document.createElement('input');
    valuech.className = 'p-1 valuechinp';
    valuech.placeholder = 'Enter value to increment';
    valuech.addEventListener('change', (e) => {
      const difvalue = Number(defvarvalue.innerHTML);

      if (option.value === 'Increment') {
        changed[Object.keys(defObject)[i]] = Number(valuech.value);
      }
    });

    cover.appendChild(label);
    cover.appendChild(defvarvalue);
    cover.appendChild(select);
    cover.appendChild(valuech);
    // outercover.appendChild(cover);
    dispgenvar.appendChild(cover);
  }
  const outer = document.createElement('div');
  outer.className = 'd-flex flex-column';
  const queslabel = document.createElement('label');
  queslabel.innerHTML = 'How many questions you want to generate';
  const dlabel = document.createElement('label');
  dlabel.className = 'dlabel';
  const genbut = document.createElement('button');
  genbut.id = 'genbut';
  genbut.innerText = 'Gen';
  genbut.className = 'p-1 btn btn-success genbtn';
  const workbook = XLSX.utils.book_new();
  let worksheet = workbook.Sheets.Sheet1;
  genbut.addEventListener('click', () => {
    const ques = document.getElementById('question').value;
    console.log(ques);
    const loop = document.getElementById('loop').value;
    const solution = document.getElementById('solution').value;
    // console.log(solution);
    // console.log("cvariables",cvariables);
    // console.log("actions",actions);

    for (let i = 0; i < loop; i++) {
      var newvalues = {};
      // newvalues = Number(constantvariables);
      newvalues = constantvariables;
      console.log('newvalues after adding const', newvalues);
      const replacedSentence = ques.replace(/dvar\d+/g, (match) => {
        const res = Number(changevariables[match]) + (Number(changed[match]) + Number(changed[match]) * i);
        // console.log(newvalues);
        newvalues[match] = res;
        return res;
      });
        // console.log(newvalues);
      const solution = document.getElementById('solution').value;

      const replacedSolution = solution.replace(/dvar\d+/g, (match) => {
        const res = Number(newvalues[match]);
        return res;
      });

      var num = 0; var anum = 0; var snum = 0; var mnum = 0; var dnum = 0; var sqnum = 0; var srnum = 0; var cnum = 0; var curnum = 0; var fnum = 0; var dinum = 0; var pernum = 0; var lognum = 0;

      const crtSolution = replacedSolution.replace(/cvar\d+/g, (match) => {
        const action = actions[match];
        if (action === 'LCM') {
          var splitArrays = splitarray(lcmcheckedvariable);
          var array = splitArrays[num++].map((key) => newvalues[key]);
          var res = calculateLCM(array);
        }
        if (action === 'Add') {
          splitArrays = splitarray(addcheckedvariable);
          // var array = addcheckedvariable.map(key => newvalues[key]);
          var array = splitArrays[anum++].map((key) => newvalues[key]);
          var res = calculateADD(array);
        }
        if (action === 'Sub') {
          splitArrays = splitarray(subcheckedvariable);
          var array = splitArrays[snum++].map((key) => newvalues[key]);
          var res = calculateSUB(array);
        }
        if (action === 'Mul') {
          splitArrays = splitarray(mulcheckedvariable);
          // var array = mulcheckedvariable.map(key => newvalues[key]);
          var array = splitArrays[mnum++].map((key) => newvalues[key]);
          var res = calculateMUL(array);
        }
        if (action === 'Div') {
          splitArrays = splitarray(divcheckedvariable);
          // var array = divcheckedvariable.map(key => newvalues[key]);
          var array = splitArrays[dnum++].map((key) => newvalues[key]);
          var res = calculateDIV(array);
        }
        if (action === 'Square') {
          splitArrays = splitarray(sqcheckedvariable);
          // var array = sqcheckedvariable.map(key => newvalues[key]);
          var array = splitArrays[sqnum++].map((key) => newvalues[key]);
          var res = calculatesquare(array);
        }
        if (action === 'SqRoot') {
          splitArrays = splitarray(sqrootcheckedvariable);
          // var array = sqrootcheckedvariable.map(key => newvalues[key]);
          var array = splitArrays[srnum++].map((key) => newvalues[key]);
          var res = calculatesqroot(array);
        }
        if (action === 'Cube') {
          splitArrays = splitarray(cubecheckedvariable);
          // var array = cubecheckedvariable.map(key => newvalues[key]);
          var array = splitArrays[cnum++].map((key) => newvalues[key]);
          var res = calculatecube(array);
        }
        if (action === 'CubeRoot') {
          splitArrays = splitarray(curootcheckedvariable);
          // var array = curootcheckedvariable.map(key => newvalues[key]);
          var array = splitArrays[curnum++].map((key) => newvalues[key]);
          var res = calculatecuberoot(array);
        }
        if (action === 'Factorial') {
          splitArrays = splitarray(factcheckedvariable);
          // var array = factcheckedvariable.map(key => newvalues[key]);
          var array = splitArrays[fnum++].map((key) => newvalues[key]);
          var res = calculatefact(array);
        }
        if (action === 'Difference') {
          splitArrays = splitarray(diffcheckedvariable);
          // var array = diffcheckedvariable.map(key => newvalues[key]);
          var array = splitArrays[dinum++].map((key) => newvalues[key]);
          var res = calculatediff(array);
        }
        if (action === 'Percentage') {
          splitArrays = splitarray(percheckedvariable);
          var array = splitArrays[pernum++].map((key) => newvalues[key]);
          var res = calculateper(array);
        }
        if (action == 'Log') {
          splitArrays = splitarray(logcheckedvariable);
          var array = splitArrays[lognum++].map((key) => newvalues[key]);
          var res = calculatelog(array);
        }

        // var res = calculateLCM()keys.map(key => obj[key]);
        const capvar = match.charAt(0).toUpperCase() + match.slice(1);
        newvalues[match] = res;
        newvalues[capvar] = res;

        return res;
      });
      const finalSoln = crtSolution.replace(/Cvar\d+/g, (match) => {
        const res = Number(newvalues[match]);
        return res;
      });
      const finalSolution = finalSoln.replace(/const\d+/g, (match) => {
        const res = Number(constantvariables[match]);
        newvalues[match] = res;
        return res;
      });
      const option1 = newvalues[Object.values(optionvariables)[0]];
      newoptions.option1 = option1;
      const optionlen = Object.keys(optionvariables).length;

      for (let i = 1; i < optionlen; i++) {
        const opt = `option${Number(i + 1)}`;
        const op = optionvariables[opt];

        const opvalue = newvalues[op[0]];
        if (op[1] == '+') newoptions[opt] = Number(opvalue) + Number(op[2]);
        if (op[1] == '-') newoptions[opt] = Number(opvalue) - Number(op[2]);
        if (op[1] == '*') newoptions[opt] = Number(opvalue) * Number(op[2]);
        if (op[1] == '^') newoptions[opt] = Number(opvalue) * Number(opvalue);
      }
      console.log('optionvariables', optionvariables);
      console.log('newoptions', newoptions);
      if (!worksheet) {
        var data = [{
          Questions: replacedSentence, Option1: newoptions.option1, Option2: newoptions.option2, Option3: newoptions.option3, Option4: newoptions.option4, CorrectAns: newoptions.option1, Solution: finalSolution,
        }];
        worksheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      } else {
        var data = [{
          Questions: replacedSentence, Option1: newoptions.option1, Option2: newoptions.option2, Option3: newoptions.option3, Option4: newoptions.option4, CorrectAns: newoptions.option1, Solution: finalSolution,
        }];
        const rowIndex = XLSX.utils.sheet_add_json(worksheet, data, { header: ['Questions', 'Option1', 'Option2', 'Option3', 'Option4', 'CorrectAns', 'Solution'], skipHeader: true, origin: -1 });
        const cellRef = XLSX.utils.encode_cell({ r: rowIndex, c: 0 });
        worksheet[cellRef] = replacedSentence;
      }
      dlabel.innerHTML = 'You can now download sheet';
    }
  });
  const loop = document.createElement('input');
  loop.id = 'loop';
  loop.className = 'p-1 loopinp';
  loop.placeholder = 'Enter No. of question';
  loop.addEventListener('change', () => {
    loopnum = loop.value;
    console.log('loopnum', loopnum);
  });
  const downloadbut = document.createElement('button');
  downloadbut.innerText = 'Download';
  downloadbut.className = 'p-1 downloadbtn btn btn-success';

  downloadbut.addEventListener('click', () => {
    const excelData = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
    const blob = new Blob([excelData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'output.xlsx';
    link.click();

    URL.revokeObjectURL(url);
    console.log('downloaded');
  });
  const loopdiv = document.createElement('div');
  loopdiv.className = 'd-flex flex-row';
  loopdiv.appendChild(queslabel);
  loopdiv.appendChild(loop);
  const gendownloadbutdiv = document.createElement('div');
  gendownloadbutdiv.className = 'd-flex flex-row';
  gendownloadbutdiv.appendChild(genbut);
  gendownloadbutdiv.appendChild(dlabel);
  gendownloadbutdiv.appendChild(downloadbut);
  outer.appendChild(document.createElement('hr'));
  // outer.appendChild(queslabel)
  // outer.appendChild(loop)
  outer.appendChild(loopdiv);
  // outer.appendChild(genbut)
  // outer.appendChild(dlabel)
  // outer.appendChild(downloadbut)
  outer.appendChild(gendownloadbutdiv);
  dispgenvar2.appendChild(outer);
}

var optionvariables = {};
var optionvalues = {};
// const addoption = document.getElementById("addoption");
// addoption.addEventListener("click",addoptions);
const optlabel1 = document.getElementById('optlabel1');
optlabel1.addEventListener('click', otheroptions);
optlabel1.myParam = optlabel1.getAttribute('name');
const optlabel2 = document.getElementById('optlabel2');
optlabel2.addEventListener('click', otheroptions);
optlabel2.myParam = optlabel2.getAttribute('name');
const optlabel3 = document.getElementById('optlabel3');
optlabel3.addEventListener('click', otheroptions);
optlabel3.myParam = optlabel3.getAttribute('name');
const optlabel4 = document.getElementById('optlabel4');
optlabel4.addEventListener('click', otheroptions);
optlabel4.myParam = optlabel4.getAttribute('name');
let actionnum = 0;
function otheroptions(e) {
  if (e.target.myParam == 'option1') {
    $('#optionfunc').toggle('slide');
    console.log('cvariables', cvariables);
    console.log('dvariables', changevariables);
    console.log('const variables', constantvariables);
    // console.log("allvariables",allvariables);
    const allvariables = Object.assign(changevariables, cvariables, alldbvariables);
    console.log('allvaribles in options', allvariables);
    const len = Object.keys(allvariables).length;
    const alloptionvar1 = document.getElementById('alloptionvar1');
    let optionbut;

    if (actionnum == 0) {
      for (let i = 0; i < len; i++) {
        optionbut = document.createElement('button');
        optionbut.id = `option1${Object.keys(allvariables)[i]}`;
        optionbut.className = 'btn btn-success';
        optionbut.style.marginRight = '15px';
        optionbut.innerHTML = Object.keys(allvariables)[i];
        alloptionvar1.append(optionbut);
        optionbut.addEventListener('click', selectoption1);
      }
      actionnum++;
    }
    $('#alloptionvar1').toggle('slide');
    function selectoption1(e) {
      console.log('option1', e.currentTarget.innerHTML);
      const option1val = allvariables[e.currentTarget.innerHTML];
      console.log('optionval1', option1val);
      const option1input = document.getElementById('option1');
      option1input.value = option1val;
      optionvalues.option1 = option1val;
      optionvariables.option1 = e.currentTarget.innerHTML;
      $('#alloptionvar1').toggle('slide');
      console.log('optionvalues', optionvalues);
    }
  }
  $('#optionfunc').toggle('slide');
  const optadd = document.getElementById('optadd');
  const optsub = document.getElementById('optsub');
  const optmul = document.getElementById('optmul');
  const optsq = document.getElementById('optsq');
  const optnuminp = document.getElementById('optnum');
  optnuminp.value = 0;
  optadd.addEventListener('click', optaddnum);
  optadd.myParam = e.target.myParam;
  optsub.addEventListener('click', optsubnum);
  optsub.myParam = e.target.myParam;
  optmul.addEventListener('click', optmulnum);
  optmul.myParam = e.target.myParam;
  optsq.addEventListener('click', updateoptinputsq);
  optsq.myParam = e.target.myParam;
}
function optaddnum(e) {
  // console.log("name",e.currentTarget.myParam);
  // console.log("optadd");
  $('#optnum').toggle('slide');
  const optinput = document.getElementById('optnum');

  optinput.addEventListener('change', updateoptinputadd);
  optinput.myParam = e.currentTarget.myParam;
}
function updateoptinputadd(e) {
  // console.log(e.currentTarget.value);
  const option1value = document.getElementById('option1').value;
  const opinput = document.getElementById(e.currentTarget.myParam);
  opinput.value = Number(option1value) + Number(e.currentTarget.value);
  optionvalues[opinput.id] = opinput.value;
  console.log('optionvalues', optionvalues);
  const keys = Object.keys(cvariables);
  optionvariables[e.currentTarget.myParam] = [keys[keys.length - 1], '+', e.currentTarget.value];
  console.log('optionvariables', optionvariables);
  $('#optnum').toggle('slide');
  $('#optionfunc').toggle('slide');
}

function optsubnum(e) {
  $('#optnum').toggle('slide');
  const optinput = document.getElementById('optnum');
  optinput.addEventListener('change', updateoptinputsub);
  optinput.myParam = e.currentTarget.myParam;
}
function updateoptinputsub(e) {
  const option1value = document.getElementById('option1').value;
  const opinput = document.getElementById(e.currentTarget.myParam);
  opinput.value = Number(option1value) - Number(e.currentTarget.value);
  optionvalues[opinput.id] = opinput.value;
  console.log('optionvalues', optionvalues);
  const keys = Object.keys(cvariables);
  optionvariables[e.currentTarget.myParam] = [keys[keys.length - 1], '-', e.currentTarget.value];
  // $("#optnum").toggle("slide");
  // $("#optionfunc").toggle("slide");
}
function optmulnum(e) {
  // console.log("name",e.currentTarget.myParam);
  // console.log("optadd");
  $('#optnum').toggle('slide');
  const optinput = document.getElementById('optnum');
  optinput.addEventListener('change', updateoptinputmul);
  optinput.myParam = e.currentTarget.myParam;
}
function updateoptinputmul(e) {
  // console.log(e.currentTarget.value);
  const option1value = document.getElementById('option1').value;
  const opinput = document.getElementById(e.currentTarget.myParam);
  opinput.value = Number(option1value) * Number(e.currentTarget.value);
  optionvalues[opinput.id] = opinput.value;
  console.log('optionvalues', optionvalues);
  const keys = Object.keys(cvariables);
  optionvariables[e.currentTarget.myParam] = [keys[keys.length - 1], '*', e.currentTarget.value];
  // console.log("optionvariables",optionvariables)
  // $("#optnum").toggle("slide");
  // $("#optionfunc").toggle("slide");
}
function optsqnum(e) {
  // console.log("name",e.currentTarget.myParam);
  // console.log("optadd");
  $('#optnum').toggle('slide');
  const optinput = document.getElementById('optnum');
  optinput.addEventListener('change', updateoptinputsq);
  optinput.myParam = e.currentTarget.myParam;
}
function updateoptinputsq(e) {
  // console.log(e.currentTarget.value);
  const option1value = document.getElementById('option1').value;
  const opinput = document.getElementById(e.currentTarget.myParam);
  console.log('updatsquare', e.currentTarget.myParam);
  console.log('opinput', opinput);
  opinput.value = Number(option1value) * Number(option1value);
  optionvalues[opinput.id] = opinput.value;
  console.log('optionvalues', optionvalues);
  const keys = Object.keys(cvariables);
  optionvariables[e.currentTarget.myParam] = [keys[keys.length - 1], '^', 2];
  // console.log("optionvariables",optionvariables)
  // $("#optnum").toggle("slide");
  $('#optionfunc').toggle('slide');
}

let constvarnum = 0;

const constvarbut = document.getElementById('constvarbut');
constvarbut.addEventListener('click', addconstantvar);

function addconstantvar() {
  const div = document.createElement('div');
  div.className = 'd-flex flex-column constdiv';
  div.id = `constdiv${constvarnum}`;
  const constinpdiv = document.createElement('div');
  constinpdiv.className = 'd-flex flex-row flex-wrap';
  const labeditdiv = document.createElement('div');
  labeditdiv.className = 'd-flex flex-row';
  const constlabel = document.createElement('label');
  constlabel.innerHTML = `const${constvarnum}`;
  constlabel.setAttribute('data-bs-toggle', 'tooltip');
  constlabel.title = 'Add var to solution';
  constlabel.setAttribute('for', `const${constvarnum}`);
  constlabel.style.fontWeight = 'bold';
  constlabel.style.color = 'rgb(22, 223, 126)';
  const editicon = document.createElement('span');
  editicon.className = 'fa fa-edit';
  editicon.id = `editconst${constvarnum}`;
  editicon.style.color = '#198754';
  editicon.style.marginLeft = '15px';
  editicon.style.marginTop = '4px';

  constlabel.addEventListener('click', modifysolution);
  editicon.addEventListener('click', editlabel);
  editicon.myParam = 'const';

  const constinp = document.createElement('input');
  constinp.id = constlabel.innerHTML;
  constinp.className = 'constvarin';
  let getvalueconst = 0;
  constinp.addEventListener('change', (e) => {
    constantvariables[constlabel.innerHTML] = e.currentTarget.value;
    const allvariables = Object.assign(changevariables, cvariables, constantvariables);
    const editnum = e.target.id.slice(-1);
    const urlParams = new URLSearchParams(window.location.search);
    if (getvalueconst == 0) createcheckboxes(constlabel.innerHTML, e.currentTarget.value, 'const');
    if (getvalueconst > 0) {
      if (urlParams.has('id')) {
        const lcmarray = lcmdbarray.concat(lcmcheckedvariable);
        const addarray = adddbarray.concat(addcheckedvariable);
        const subarray = subdbarray.concat(subcheckedvariable);
        const mularray = muldbarray.concat(mulcheckedvariable);
        const divarray = divdbarray.concat(divcheckedvariable);
        const sqarray = sqdbarray.concat(sqcheckedvariable);
        const sqrootarray = sqrootdbarray.concat(sqrootcheckedvariable);
        const cubearray = cubedbarray.concat(cubecheckedvariable);
        const curootarray = curootdbarray.concat(curootcheckedvariable);
        const factarray = factdbarray.concat(factcheckedvariable);
        const diffarray = diffdbarray.concat(diffcheckedvariable);
        const perarray = perdbarray.concat(percheckedvariable);
        const logarray = logdbarray.concat(logcheckedvariable);
        changerefresh(vardbarray, editnum, e.target, 'const', lcmarray, addarray, subarray, mularray, divarray, sqarray, sqrootarray, cubearray, curootarray, factarray, diffarray, perarray, logarray, optdbarray);
      } else {
        changerefresh(allvariables, editnum, e.target, 'const');
      }
    }
    getvalueconst++;
    console.log('constantvariables', constantvariables);
  });

  const deliconspan = document.createElement('span');
  deliconspan.className = 'fa fa-trash';
  deliconspan.id = `constdel${constvarnum}`;
  deliconspan.style.color = 'rgb(255, 0, 0)';
  deliconspan.style.marginLeft = '6px';
  deliconspan.style.marginTop = '4px';
  deliconspan.addEventListener('click', deletebut);
  constinpdiv.appendChild(constinp);
  constinpdiv.appendChild(deliconspan);
  labeditdiv.appendChild(constlabel);
  labeditdiv.appendChild(editicon);
  // div.appendChild(constlabel);
  div.appendChild(labeditdiv);
  // div.appendChild(constinp);
  div.appendChild(constinpdiv);
  const constvardisp = document.getElementById('constvardisp');
  constvardisp.appendChild(div);
  constvarnum++;
}

$(document).ready(() => {
  $('.dropdownbut').click(() => {
    $('#checkboxselect').toggle('slide');
    $('#checkboxes').toggle('slide');
  });
});

function save() {
  console.log('hi');
  var question = document.getElementById('question').value;
  var solution = document.getElementById('solution').value;
  console.log("/save/chnagevariables", changevariables);
  console.log("cvariables", cvariables);
  console.log("/save/sub", subcheckedvariable);
  console.log("/save/add", addcheckedvariable);
  console.log("/save/lcm", lcmcheckedvariable);
  console.log("/save/mul", mulcheckedvariable);
  console.log("/save/sq", sqcheckedvariable);
  console.log("/save/allnewvariables", newallvariables);

  console.log("/save/action", actions);
  console.log("/save/optionvalue", optdbvalues);
  console.log("/save/optionvariables", optdbvariables);
  console.log("/save/optionvariables 2nd", optionvariables);
  // var allvariables = Object.assign(changevariables, cvariables, constantvariables);**
  var allvariables = Object.assign(changevariables, cvariables, constantvariables);
  console.log("/save/allvariables", allvariables);
  if (Object.keys(optionvalues).length === 0) {
    var optionvars = Object.assign(optdbvalues);
    var newoptionvariables = Object.assign(optdbvariables);
  } else {
    var optionvars = Object.assign(optionvalues);
    var newoptionvariables = Object.assign(optionvariables);
  }
  if (Object.keys(optionvariables).length === 0) {
    console.log("optdbvariables excecuted");
    var newoptionvariables = Object.assign(optdbvariables);
  } else {
    console.log("optionvariables excecuted");
    var newoptionvariables = Object.assign(optionvariables);
  }
  console.log("optionvars", optionvars);
  var questionname = document.getElementById('questionname').value;
  const urlParams = new URLSearchParams(window.location.search);
  var actionobj = Object.assign(actions);
  let idValue = "";
  if (urlParams.has('id')) {
    idValue = urlParams.get('id');
  }
  console.log("options", optionvars);
  console.log("newoptionvariables", newoptionvariables);
  console.log("all variables", allvariables);
  // console.log('inside save', optionvalues);
  fetch(`${api_path}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ques: question, soln: solution, variables: allvariables, options: optionvars, quesname: questionname, unique_id: idValue, actions: actionobj, lcmvariables: lcmcheckedvariable, addvariables: addcheckedvariable, subvariables: subcheckedvariable, mulvariables: mulcheckedvariable, divvariables: divcheckedvariable, sqvariables: sqcheckedvariable, sqrootvariables: sqrootcheckedvariable, cubevariables: cubecheckedvariable, curootvariables: curootcheckedvariable, factvariables: factcheckedvariable, diffvariables: diffcheckedvariable, pervariables: percheckedvariable, logvariables: logcheckedvariable, optionvariable: newoptionvariables,
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Data', data);
      // window.location.href = 'questiongenerator.html';
    })
    .catch((error) => {
      console.error(error);
    });
}

const savevar = document.getElementById('save');
savevar.addEventListener('click', save);

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('id')) {
  const idValue = urlParams.get('id');
  fetch(`${api_path}/get_data/${idValue}`)
    .then((response) => response.json())
    .then(data => {
      console.log("retrived data", data.Question, data.Solution);
      optdbvalues = Object.assign(data.Options);
      optdbvariables = Object.assign(data.optionvariables);
      alldbvariables = Object.assign(data.Variables);
      const quesname = document.getElementById('questionname');
      quesname.value = data.Ques_name;
      const question = document.getElementById('question');
      question.value = data.Question;
      const solution = document.getElementById('solution');
      solution.value = data.Solution;
      const option1 = document.getElementById('option1');
      option1.value = data.Options.option1;
      const option2 = document.getElementById('option2');
      option2.value = data.Options.option2;
      const option3 = document.getElementById('option3');
      option3.value = data.Options.option3;
      const option4 = document.getElementById('option4');
      option4.value = data.Options.option4;
      console.log("variables", data.Variables);
      const variablelen = Object.keys(data.Variables).length;
      for (let i = 0; i < variablelen; i++) {
        console.log("var", Object.keys(data.Variables)[i]);
        if (Object.keys(data.Variables)[i].includes("dvar")) {
          console.log("data variables", data.Variables);
          addText("edit", data.Variables);
          const newinput = document.getElementById(Object.keys(data.Variables)[i]);
          newinput.value = data.Variables[Object.keys(data.Variables)[i]];
          // console.log("oooo", Object.keys(data.Variables)[i], newinput.value);
          console.log("option variable", data.optionvariables);
          newinput.addEventListener("change", (e) => {
            getvalue1(e, data.lcm, data.add, data.sub, data.mul, data.div, data.square, data.sqroot, data.cube, data.curoot, data.fact, data.difference, data.percentage, data.log, data.Variables, data.optionvariables);
          });
          createcheckboxes(Object.keys(data.Variables)[i], data.Variables[Object.keys(data.Variables)[i]], 'quesvar');
        }
        if (Object.keys(data.Variables)[i].includes("cvar")) {
          addvar("edit");
          const key = Object.keys(data.Variables)[i];
          const value = data.Variables[key];
          const action = data.Actions[key];
          changevarinput(value, action);
          // createcheckboxes(Object.keys(data.Variables)[i], data.Variables[Object.keys(data.Variables)[i]], 'solvar');
        }
        if (Object.keys(data.Variables)[i].includes("const")) {
          addconstantvar();
          const newinput = document.getElementById(Object.keys(data.Variables)[i]);
          newinput.value = data.Variables[Object.keys(data.Variables)[i]];
          lcmdbarray = data.lcm;
          adddbarray = data.add;
          subdbarray = data.sub;
          muldbarray = data.mul;
          divdbarray = data.div;
          sqdbarray = data.square;
          sqrootdbarray = data.sqroot;
          cubedbarray = data.cube;
          curootdbarray = data.curoot;
          factdbarray = data.fact;
          diffdbarray = data.difference;
          perdbarray = data.percentage;
          logdbarray = data.log;
          vardbarray = data.Variables;
          optdbarray = data.optionvariables;
          newinput.addEventListener("change", (e) => {
            getvalue1(e, data.lcm, data.add, data.sub, data.mul, data.div, data.square, data.sqroot, data.cube, data.curoot, data.fact, data.difference, data.percentage, data.log, data.Variables, data.optionvariables);
          });
          createcheckboxes(Object.keys(data.Variables)[i], data.Variables[Object.keys(data.Variables)[i]], 'const');
        }
      }
    })
    .catch(error => console.error('Error:', error));
  // console.log('id retrived', idValue);
}

// const showvar = document.getElementById('show');
// showvar.addEventListener('click', show);
//   CKEDITOR.ClassicEditor.create(document.getElementById("editor"), {

//     toolbar: {
//         items: [
//             'exportPDF','exportWord', '|',
//             'findAndReplace', 'selectAll', '|',
//             'heading', '|',
//             'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript', 'removeFormat', '|',
//             'bulletedList', 'numberedList', 'todoList', '|',
//             'outdent', 'indent', '|',
//             'undo', 'redo',
//             '-',
//             'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
//             'alignment', '|',
//             'link', 'insertImage', 'blockQuote', 'insertTable', 'mediaEmbed', 'codeBlock', 'htmlEmbed', '|',
//             'specialCharacters', 'horizontalLine', 'pageBreak', '|',
//             'textPartLanguage', '|',
//             'sourceEditing'
//         ],
//         shouldNotGroupWhenFull: true
//     },

//     list: {
//         properties: {
//             styles: true,
//             startIndex: true,
//             reversed: true
//         }
//     },
//     heading: {
//         options: [
//             { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
//             { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
//             { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
//             { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
//             { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
//             { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
//             { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
//         ]
//     },
//     placeholder: 'Welcome to CKEditor 5!',
//     fontFamily: {
//         options: [
//             'default',
//             'Arial, Helvetica, sans-serif',
//             'Courier New, Courier, monospace',
//             'Georgia, serif',
//             'Lucida Sans Unicode, Lucida Grande, sans-serif',
//             'Tahoma, Geneva, sans-serif',
//             'Times New Roman, Times, serif',
//             'Trebuchet MS, Helvetica, sans-serif',
//             'Verdana, Geneva, sans-serif'
//         ],
//         supportAllValues: true
//     },
//     fontSize: {
//         options: [ 10, 12, 14, 'default', 18, 20, 22 ],
//         supportAllValues: true
//     },
//     htmlSupport: {
//         allow: [
//             {
//                 name: /.*/,
//                 attributes: true,
//                 classes: true,
//                 styles: true
//             }
//         ]
//     },
//     htmlEmbed: {
//         showPreviews: true
//     },
//     link: {
//         decorators: {
//             addTargetToExternalLinks: true,
//             defaultProtocol: 'https://',
//             toggleDownloadable: {
//                 mode: 'manual',
//                 label: 'Downloadable',
//                 attributes: {
//                     download: 'file'
//                 }
//             }
//         }
//     },
//     mention: {
//         feeds: [
//             {
//                 marker: '@',
//                 feed: [
//                     '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
//                     '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
//                     '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflé',
//                     '@sugar', '@sweet', '@topping', '@wafer'
//                 ],
//                 minimumCharacters: 1
//             }
//         ]
//     },
//     removePlugins: [
//         'CKBox',
//         'CKFinder',
//         'EasyImage',
//         'RealTimeCollaborativeComments',
//         'RealTimeCollaborativeTrackChanges',
//         'RealTimeCollaborativeRevisionHistory',
//         'PresenceList',
//         'Comments',
//         'TrackChanges',
//         'TrackChangesData',
//         'RevisionHistory',
//         'Pagination',
//         'WProofreader',
//         'MathType',
//         'SlashCommand',
//         'Template',
//         'DocumentOutline',
//         'FormatPainter',
//         'TableOfContents'
//     ]
// }).then(editor => {
//   // Access CKEditor value and display in text box
//   const outputTextBox = document.querySelector('#output');
//   editor.model.document.on('change:data', () => {
//     outputTextBox.innerHTML = editor.getData();
//     console.log(outputTextBox.innerText);
//   });

//   console.log("outer",outputTextBox.innerText);
// })
// .catch(error => {
//   console.error(error);
// });

// const toolbarOptions = [
//   ['bold', 'italic', 'underline', 'strike'], // toggled buttons
//   ['blockquote', 'code-block'],

//   [{ header: 1 }, { header: 2 }], // custom button values
//   [{ list: 'ordered' }, { list: 'bullet' }],
//   [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
//   [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
//   [{ direction: 'rtl' }], // text direction

//   [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
//   [{ header: [1, 2, 3, 4, 5, 6, false] }],

//   [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//   [{ font: [] }],
//   [{ align: [] }],

//   ['clean'], // remove formatting button
// ];
// const quill = new Quill('#editor', {
//   modules: {
//     toolbar: toolbarOptions,
//   },
//   theme: 'snow',
// });

// function getTextFromEditor() {
//   // var text = quill.getText();
//   // alert(text);
//   const tempDiv = document.createElement('div');
//   tempDiv.innerHTML = quill.root.innerHTML;

//   const text = tempDiv.textContent || tempDiv.innerText;
//   console.log(text);
// }
// const but = document.getElementById("button");
// but.addEventListener("click",getTextFromEditor);

// A can do a peice of job in dvar0 days. B can do a peice of jon in dvar1 days. how many days does a and b takes together to complete a job?

// Let's find lcm of 10 and 15 = 30
// one day's work of A = 30/10 = 3 workper day
// one day's work of B = 30/15 = 2 work per day
// one day's work of A and B together = 3+2 = 5 work per day
// A and B together will complete the work in
// Total work = 30
// A and B one day work = 5 Workperday
// no of days A and B together is 30/5 = 6 days
