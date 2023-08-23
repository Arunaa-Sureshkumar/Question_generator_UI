/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-template */
/* eslint-disable no-useless-concat */
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
import 'select2';
import 'select2/dist/css/select2.css';
import '../../stylesheets/common/importers/_bootstrap.scss';
import '../../stylesheets/common/importers/_fontawesome.scss';
import '../common/steroid';
import 'quill/dist/quill.snow.css';
import Quill from 'quill';
import * as DOMPurify from 'dompurify';
import { DOMParser } from 'xmldom';
import * as ExcelJS from 'exceljs';
import {
  fraction, format, add, subtract, multiply, square,
} from 'mathjs';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],

  [{ header: 1 }, { header: 2 }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }],

  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],

  ['clean'],
];

const quill = new Quill('#editor-container', {
  modules: {
    toolbar: '#toolbar',
  },
  theme: 'snow',
});

const quillsoln = new Quill('#editor-containersoln', {
  modules: {
    toolbar: '#toolbarsoln',
  },
  theme: 'snow',
});

const editorbut = document.getElementById("editorbut");
editorbut.addEventListener("click", () => {
  const editorvalue = document.getElementById("editorvalue");
  editorvalue.classList.add("content-added");
  const sanitizedHtml = DOMPurify.sanitize(quill.root.innerHTML);
  editorvalue.innerHTML = sanitizedHtml;
  console.log(editorvalue.innerHTML);
  // document.getElementById("popup").style.display = "none";
});

const editorbutsoln = document.getElementById("editorbutsoln");
editorbutsoln.addEventListener("click", () => {
  const editorvalue = document.getElementById("editorvaluesoln");
  editorvalue.classList.add("content-added");
  const sanitizedHtml = DOMPurify.sanitize(quillsoln.root.innerHTML);
  editorvalue.innerHTML = sanitizedHtml;
  console.log(editorvalue.innerHTML);
});
const defVar = document.getElementById('defvar');
defVar.addEventListener('click', () => {
  addText("create");
  // document.getElementById("popup").style.display = "block";
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
let fracdbarray = [];
let vardbarray = [];
let optdbarray = [];
let optdbvariables = {};
let optdbvalues = {};
let alldbvariables = {};
const vi = 0;
let dballvariables = {};
let generateactions = {};
let generateactionvalue = {};
let loopnumber = 0;
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
  // let question = document.getElementById('question').value;
  // let question = document.getElementById('question').innerHTML;
  // const textarea = document.getElementById('question');
  // const wordToAdd = (` dvar${variable_number} `);
  // const cursorStart = textarea.selectionStart;
  // const cursorEnd = textarea.selectionEnd;
  // const textareaValue = textarea.value;
  // const modifiedValue = textareaValue.substring(0, cursorStart) + wordToAdd + textareaValue.substring(cursorEnd);
  // if (act === 'create') {
  //   question = modifiedValue;
  // }
  // console.log(modifiedValue);
  // console.log(question);
  // const newCursorPos = cursorStart + wordToAdd.length;
  // textarea.setSelectionRange(newCursorPos, newCursorPos);
  // }
  variables[variable] = 0;

  console.log("variable number check", variable_number);
  // const contentToInsert = `dvar${variable_number}`;
  // const index = quill.getSelection()?.index || quill.getLength();
  // if (quillval == 0) {
  //   quill.insertText(index - 1, contentToInsert);
  //   console.log("quillval0");
  // } else {
  //   quill.insertText(index, contentToInsert);
  // }
  // quillval++;
  // quill.setSelection(index + 2 + contentToInsert.length);
  if (quill.getSelection()) {
    quill.insertText(quill.getSelection().index, `dvar${variable_number}`);
  }
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
        const fracarray = fracdbarray.concat(fraccheckedvaribale);
        console.log("addaray", addarray);
        changerefresh(vardbarray, editnum, clickedinput, 'def', lcmarray, addarray, subarray, mularray, divarray, sqarray, sqrootarray, cubearray, curootarray, factarray, diffarray, perarray, logarray, fracarray, optdbarray);
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
  // document.getElementById('question').value = question;
  // document.getElementById('question').innerHTML = question;

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
  const fracarray = fracdbarray.concat(fraccheckedvariable);
  changerefresh(allvariables, editnum, clickedinput, 'def', lcmarray, addarray, subarray, mularray, divarray, sqarray, sqrootarray, cubearray, curootarray, factarray, diffarray, perarray, logarray, fracarray, optionvariable);
  // const vareditdivlabel = document.querySelector(`.vareditdiv${editnum} label`);
  // changerefresh(allvariables, editnum, clickedinput, 'def', lcmdb, adddb, subdb, muldb, divdb, squaredb, sqrootdb, cubedb, curootdb, factdb, diffdb, perdb, logdb, optionvariable);
}
let newallvariables = {};
function changerefresh(allvariables, editnum, clickedinput, variable, lcmcheckedvariables = lcmcheckedvariable, addcheckedvariables = addcheckedvariable, subcheckedvariables = subcheckedvariable, mulcheckedvariables = mulcheckedvariable, divcheckedvariables = divcheckedvariable, sqcheckedvariables = sqcheckedvariable, sqrootcheckedvariables = sqrootcheckedvariable, cubecheckedvariables = cubecheckedvariable, curootcheckedvariables = curootcheckedvariable, factcheckedvariables = factcheckedvariable, diffcheckedvariables = diffcheckedvariable, percheckedvariables = percheckedvariable, logcheckedvariables = logcheckedvariable, fraccheckedvariables = fraccheckedvariable, optionvariable = optionvariables) {
  console.log("global", lcmcheckedvariable);
  console.log("all variables", allvariables);
  console.log("lcmcheckedvariable", lcmcheckedvariables);
  console.log("variablr", variable);
  // console.log("test", lcmcheckedvariable);
  const actionlen = Object.keys(actions).length;
  let optnum = 2;
  let lcmnum = 0; let addnum = 0; let subnum = 0; let mulnum = 0; let divnum = 0; let squnum = 0; let squrootnum = 0; let cubnum = 0; let cubrootnum = 0; let factnum = 0; let diffenum = 0; let percenum = 0; let lognum = 0; let fracnum = 0;
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
    if (action == 'Fraction') {
      var splitArrays = splitarray(fraccheckedvariables);
      var array = splitArrays[fracnum++].map((key) => newallvariables[key]);
      var res = calculatefrac(array);
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
  console.log("dvar0 clicked");
  // var solution = document.getElementById("solution");
  // var newsolution = solution.value+" "+e.target.innerHTML
  // console.log("solution ",solution)
  // solution.value = newsolution;

  // const solution = document.getElementById('solution').value;
  // const textarea = document.getElementById('solution');
  // const word = e.target.innerHTML;
  // if (word.includes('(')) var wordToAdd = word.substring(word.indexOf('(') + 1, word.indexOf(')'));
  // else wordToAdd = e.target.innerHTML;
  // const cursorStart = textarea.selectionStart;
  // const cursorEnd = textarea.selectionEnd;
  // const textareaValue = textarea.value;
  // const modifiedValue = `${textareaValue.substring(0, cursorStart)} ${wordToAdd} ${textareaValue.substring(cursorEnd)}`;
  // textarea.value = modifiedValue;

  // const newCursorPos = cursorStart + wordToAdd.length + 1;
  // textarea.setSelectionRange(newCursorPos, newCursorPos);
  const contentToInsert = e.target.innerHTML;
  const index = quillsoln.getSelection()?.index - 1 || quillsoln.getLength();

  quillsoln.insertText(index - 1, contentToInsert);
  quillsoln.setSelection(index + contentToInsert.length);
  // if (quillsoln.getSelection()) {
  //   console.log("hiiiiiii");
  //   quillsoln.insertText(quillsoln.getSelection().index, e.target.innerHTML);
  // }
}

function modifysolutionchange(e) {
  // var solution = document.getElementById("solution");
  const { name } = e.target;
  const newname = name.charAt(0).toUpperCase() + name.slice(1);
  // // var newsolution = solution.value+" "+newname;
  // // console.log("solution ",solution)
  // // solution.value = newsolution;

  // const solution = document.getElementById('solution').value;
  // const textarea = document.getElementById('solution');
  // const wordToAdd = newname;
  // const cursorStart = textarea.selectionStart;
  // const cursorEnd = textarea.selectionEnd;
  // const textareaValue = textarea.value;
  // const modifiedValue = textareaValue.substring(0, cursorStart) + wordToAdd + textareaValue.substring(cursorEnd);
  // textarea.value = modifiedValue;

  // const newCursorPos = cursorStart + wordToAdd.length;
  // textarea.setSelectionRange(newCursorPos, newCursorPos);
  if (quillsoln.getSelection()) {
    quillsoln.insertText(quillsoln.getSelection().index, newname);
  }

  togglebutton();
  $('#checkboxes').toggle('slide');
  $('#checkboxselect').toggle('slide');
}

function deletebut(e) {
  const parentDiv = e.currentTarget.parentNode.parentNode;
  console.log(parentDiv, '||', e.currentTarget.previousElementSibling.id);
  const key = e.currentTarget.previousElementSibling.id;
  // const question = document.getElementById('question');
  // const newstring = (question.value).replace(e.currentTarget.previousElementSibling.id, '');
  // question.value = newstring;
  if (quill) {
    var editorContent = quill.root.innerHTML;
    // Replace "dvar0" with an empty string
    var modifiedContent = editorContent.replace(e.currentTarget.previousElementSibling.id, '');
    // Update the editor content
    quill.root.innerHTML = modifiedContent;
  }
  if (quillsoln) {
    var editorContent = quillsoln.root.innerHTML;
    var modifiedContent = editorContent.replace(e.currentTarget.previousElementSibling.id, '');
    quillsoln.root.innerHTML = modifiedContent;
  }
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

  // let solution = document.getElementById('solution').value;
  // const textarea = document.getElementById('solution');
  // const wordToAdd = (` cvar${change_var_number} `);
  // const cursorStart = textarea.selectionStart;
  // const cursorEnd = textarea.selectionEnd;
  // const textareaValue = textarea.value;

  // const modifiedValue = textareaValue.substring(0, cursorStart) + wordToAdd + textareaValue.substring(cursorEnd);
  // if (act === "create") {
  //   solution = modifiedValue;
  // }
  // // Move the cursor after the newly added word
  // const newCursorPos = cursorStart + wordToAdd.length;
  // textarea.setSelectionRange(newCursorPos, newCursorPos);
  // const contentToInsert = `cvar${change_var_number}`;
  // const index = quillsoln.getSelection()?.index || quillsoln.getLength();

  // quillsoln.insertText(index, contentToInsert);
  // quillsoln.setSelection(index + contentToInsert.length);
  if (quillsoln.getSelection()) {
    quillsoln.insertText(quillsoln.getSelection().index, `cvar${change_var_number}`);
  }
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
  // document.getElementById('solution').value = solution;
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
const calcfrac = document.getElementById('calcfrac');
calcfrac.addEventListener('click', lcmcalculation);
calcfrac.myParam = '15';
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
  element.style.backgroundColor = '#16df7e';

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
var fraccheckedvariable = [];
function selectvariables(e) {
  const element = document.getElementById(e.currentTarget.myParam);
  element.style.backgroundColor = '#198754';
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
  if (action == 15) {
    mathaction = 'Fraction';
    lcm = calculatefrac(checkedvalues);
    console.log('inside action==15', lcm);
    fraccheckedvariable.push(...checkedvariables);
    fraccheckedvariable.push('end');
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

const calculatefrac = (...[arr]) => {
  function simplifyFraction(numerator, denominator) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonDivisor = gcd(numerator, denominator);

    return {
      numerator: numerator / commonDivisor,
      denominator: denominator / commonDivisor,
    };
  }
  const simplifiedFraction = simplifyFraction(arr[0], arr[1]);
  const fracvalue = simplifiedFraction.numerator + "/" + simplifiedFraction.denominator;
  console.log(simplifiedFraction.numerator + "/" + simplifiedFraction.denominator);
  return fracvalue;
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
  // const defProperties = Object.keys(changevariables).filter((key) => key.startsWith('dvar'));

  // const defObject = {};

  // defProperties.forEach((key) => {
  //   defObject[key] = changevariables[key];
  // });
  // console.log('defarray', defObject);
  // const len = Object.keys(defObject).length;
  const dispgenvar = document.getElementById('dispgenvar');
  const dispgenvar2 = document.getElementById('dispgenvar2');
  dispgenvar.innerHTML = '';
  dispgenvar2.innerHTML = '';
  generatevariabledisplay("create");
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
function formatRichText(text) {
  const formattedText = [];
  const modifiedText = text.replace(/<\/?p>/g, '');
  if (!modifiedText.includes('<sup>') && !modifiedText.includes('<sub>')) {
    console.log("modified Text inside formatRichText", modifiedText);
    return [{ text: modifiedText }];
  }
  const parts = modifiedText.split(/(<sup>.*?<\/sup>|<sub>.*?<\/sub>|<b>.*?<\/b>)/);

  // eslint-disable-next-line no-restricted-syntax
  for (const part of parts) {
    if (part.startsWith('<sup>') && part.endsWith('</sup>')) {
      const superscriptText = part.slice(5, -6);
      formattedText.push({
        text: superscriptText,
        font: { vertAlign: 'superscript' },
      });
    } else if (part.startsWith('<sub>') && part.endsWith('</sub>')) {
      const subscriptText = part.slice(5, -6);
      formattedText.push({
        text: subscriptText,
        font: { vertAlign: 'subscript' },
      });
    } else {
      formattedText.push({ text: part });
    }
  }

  return formattedText;
}
const dvaractions = {};
const dvaractionvalue = {};
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Sheet1');
function generatevariabledisplay(act) {
  let defProperties; let defObject;
  if (act == "create") {
    defProperties = Object.keys(changevariables).filter((key) => key.startsWith('dvar'));

    defObject = {};

    defProperties.forEach((key) => {
      defObject[key] = changevariables[key];
    });
  } else {
    defProperties = Object.keys(dballvariables).filter((key) => key.startsWith('dvar'));

    defObject = {};
    defProperties.forEach((key) => {
      defObject[key] = dballvariables[key];
    });
  }
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
    select.id = `generateaction${i}`;
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
        dvaractions[Object.keys(defObject)[i]] = "Increment";
        changed[Object.keys(defObject)[i]] = Number(valuech.value);
      }
      dvaractionvalue[Object.keys(defObject)[i]] = Number(valuech.value);
    });

    cover.appendChild(label);
    cover.appendChild(defvarvalue);
    cover.appendChild(select);
    cover.appendChild(valuech);
    // outercover.appendChild(cover);
    dispgenvar.appendChild(cover);
    if (act == 'edit') {
      const generateaction = document.getElementById(`generateaction${i}`);
      console.log(generateactions);
      console.log(generateactionvalue);
      console.log(loopnumber);
      // const optionToSelect = generateaction.querySelector(`option[value="${dataFromDatabase}"]`);
      const actionval = generateactions[label.innerHTML];
      const optionToSelect = generateaction.querySelector(`option[value="${actionval}"]`);
      if (optionToSelect) {
        optionToSelect.selected = true;
      }
      valuech.value = generateactionvalue[label.innerHTML];
    }
  }

  const outer = document.createElement('div');
  outer.className = 'd-flex flex-column';
  const queslabel = document.createElement('label');
  queslabel.innerHTML = 'How many questions you want to generate';
  const dlabel = document.createElement('label');
  dlabel.className = 'dlabel';
  dlabel.id = 'dlabel';
  const genbut = document.createElement('button');
  genbut.id = 'genbut';
  genbut.innerText = 'Gen';
  genbut.className = 'p-1 btn btn-success genbtn';
  // const workbook = XLSX.utils.book_new();
  // let worksheet = workbook.Sheets.Sheet1;

  // worksheet.addRow({
  //   ques: replacedfirstquestion, opt1: optionvalues.option1, opt2: optionvalues.option2, opt3: optionvalues.option3, opt4: optionvalues.option4, ans: optionvalues.option1, soln: finalfirstSolution,
  // });
  // console.log("workbook", workbook);
  if (act == 'create') {
    genbut.addEventListener('click', () => {
      genbutfunction("create");
    });
  }
  const loop = document.createElement('input');
  loop.id = 'loop';
  loop.className = 'p-1 loopinp';
  loop.placeholder = 'Enter No. of question';
  loop.addEventListener('change', () => {
    loopnum = loop.value;
    console.log('loopnum', loopnum);
  });
  if (act == 'edit') {
    loop.value = loopnumber;
  }
  const downloadbut = document.createElement('button');
  downloadbut.innerText = 'Download';
  downloadbut.className = 'p-1 downloadbtn btn btn-success';

  downloadbut.addEventListener('click', () => {
    // ========================

    // const excelData = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
    // const blob = new Blob([excelData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    // const url = URL.createObjectURL(blob);

    // const link = document.createElement('a');
    // link.href = url;
    // link.download = 'output.xlsx';
    // link.click();

    // URL.revokeObjectURL(url);
    // console.log('downloaded');
    console.log(worksheet);
    const values = worksheet.getSheetValues();
    console.log(values);
    console.log(workbook);
    workbook.xlsx.writeBuffer()
      .then(buffer => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'rich_text_example.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
        console.log('Excel file with rich text formatting created and downloaded.');
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // ============================================
    // console.log("chnage variables inside genbut last", changevariables);
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
function genbutfunction(act, optionval = optionvalues, optionvariable = optionvariables, changevars = changevariables, constantvars = constantvariables, changedvar = changed, lcmcheckedvariables = lcmcheckedvariable, addcheckedvariables = addcheckedvariable, subcheckedvariables = subcheckedvariable, mulcheckedvariables = mulcheckedvariable, divcheckedvariables = divcheckedvariable, sqcheckedvariables = sqcheckedvariable, sqrootcheckedvariables = sqrootcheckedvariable, cubecheckedvariables = cubecheckedvariable, curootcheckedvariables = curootcheckedvariable, factcheckedvariables = factcheckedvariable, diffcheckedvariables = diffcheckedvariable, percheckedvariables = percheckedvariable, logcheckedvariables = logcheckedvariable, fraccheckedvariables = fraccheckedvariable) {
  // console.log("chnage variables inside genbut", changevariables);
  // const ques = document.getElementById('question').value;
  worksheet.columns = [
    { header: 'Question', key: 'ques', width: 35 },
    { header: 'Option1', key: 'opt1', width: 15 },
    { header: 'Option2', key: 'opt2', width: 15 },
    { header: 'Option3', key: 'opt3', width: 15 },
    { header: 'Option4', key: 'opt4', width: 15 },
    { header: 'Correct Ans', key: 'ans', width: 15 },
    { header: 'Solution', key: 'soln', width: 35 },
  ];
  const ques = document.getElementById('editorvalue').innerHTML;
  const replacedfirstquestion = ques.replace(/dvar\d+/g, (match) => {
    const res = Number(changevars[match]);
    return res;
  });
  console.log("final first question", replacedfirstquestion);
  const solution = document.getElementById('editorvaluesoln').innerHTML;

  const replacedfirstSolution = solution.replace(/dvar\d+/g, (match) => {
    const res = Number(constantvars[match]);
    return res;
  });
  const firstSoln = replacedfirstSolution.replace(/cvar\d+/g, (match) => {
    const res = Number(constantvars[match]);
    return res;
  });

  const finalfirstSoln = firstSoln.replace(/Cvar\d+/g, (match) => {
    // eslint-disable-next-line radix
    const extractedNumber = parseInt(match.match(/\d+/)[0]);
    const res = Number(constantvars['cvar' + extractedNumber]);
    return res;
  });

  const finalfirstSolution = finalfirstSoln.replace(/const\d+/g, (match) => {
    const res = Number(constantvars[match]);
    newvalues[match] = res;
    return res;
  });
  // console.log("options", optionvalues);
  const firstquestion = formatRichText(replacedfirstquestion);
  const firstquestionarray = [];
  for (let i = 0; i < firstquestion.length; i++) {
    firstquestionarray.push({ text: firstquestion[i].text, font: firstquestion[i].font });
  }
  const firstsolution = formatRichText(finalfirstSolution);
  const firstsolutionarray = [];
  for (let i = 0; i < firstsolution.length; i++) {
    firstsolutionarray.push({ text: firstsolution[i].text, font: firstsolution[i].font });
  }
  worksheet.getCell('A2').value = {
    richText: [
      ...firstquestionarray,
    ],
  };
  worksheet.getCell('B2').value = {
    richText: [
      { text: optionval.option1 },
    ],
  };
  worksheet.getCell('C2').value = {
    richText: [
      { text: optionval.option2 },
    ],
  };
  worksheet.getCell('D2').value = {
    richText: [
      { text: optionval.option3 },
    ],
  };
  worksheet.getCell('E2').value = {
    richText: [
      { text: optionval.option4 },
    ],
  };
  worksheet.getCell('F2').value = {
    richText: [
      { text: optionval.option1 },
    ],
  };
  worksheet.getCell('G2').value = {
    richText: [
      ...firstsolutionarray,
    ],
  };
  if (act == "create") {
    console.log("genbutfunction create");
  } else {
    console.log("genbut function edit");
  }
  const questioneditorvalue = document.getElementById('editorvalue');
  // const questioneditorvalue = quill.root.innerHTML;
  const spanelement = questioneditorvalue.querySelector('span');
  if (spanelement) {
    spanelement.parentNode.removeChild(spanelement);
  }
  const solneditorvalue = document.getElementById('editorvaluesoln');
  // const solneditorvalue = quillsoln.root.innerHTML;
  const spanelementsoln = solneditorvalue.querySelector('span');
  if (spanelementsoln) {
    spanelementsoln.parentNode.removeChild(spanelementsoln);
  }
  // const ques = document.getElementById('editorvalue').innerHTML;
  const loop = document.getElementById('loop').value;
  // const solution = document.getElementById('solution').value;
  // const solution = document.getElementById('editorvaluesoln').innerHTML;
  // console.log(solution);
  // console.log("cvariables",cvariables);
  // console.log("actions",actions);
  for (let i = 0; i < loop; i++) {
    let newvalues = {};
    // newvalues = Number(constantvariables);=
    newvalues = constantvars;
    const replacedSentence = ques.replace(/dvar\d+/g, (match) => {
      const res = Number(changevars[match]) + (Number(changedvar[match]) + Number(changedvar[match]) * i);
      // console.log(newvalues);

      newvalues[match] = res;
      // console.log("i res", res);
      return res;
    });
    // console.log("replacedsentence", replacedSentence);
    // const replacespan = replacedSentence.replace('ql-cursor', '');
    // console.log(questioneditorvalue.innerHTML);
    // const solution = document.getElementById('solution').value;
    const solution = document.getElementById('editorvaluesoln').innerHTML;

    const replacedSolution = solution.replace(/dvar\d+/g, (match) => {
      const res = Number(newvalues[match]);
      return res;
    });

    var num = 0; var anum = 0; var snum = 0; var mnum = 0; var dnum = 0; var sqnum = 0; var srnum = 0; var cnum = 0; var curnum = 0; var fnum = 0; var dinum = 0; var pernum = 0; var lognum = 0; var fracnum = 0;

    const crtSolution = replacedSolution.replace(/cvar\d+/g, (match) => {
      const action = actions[match];
      if (action === 'LCM') {
        var splitArrays = splitarray(lcmcheckedvariables);
        var array = splitArrays[num++].map((key) => newvalues[key]);
        var res = calculateLCM(array);
      }
      if (action === 'Add') {
        splitArrays = splitarray(addcheckedvariables);
        // var array = addcheckedvariable.map(key => newvalues[key]);
        var array = splitArrays[anum++].map((key) => newvalues[key]);
        var res = calculateADD(array);
      }
      if (action === 'Sub') {
        splitArrays = splitarray(subcheckedvariables);
        var array = splitArrays[snum++].map((key) => newvalues[key]);
        var res = calculateSUB(array);
      }
      if (action === 'Mul') {
        splitArrays = splitarray(mulcheckedvariables);
        // var array = mulcheckedvariable.map(key => newvalues[key]);
        var array = splitArrays[mnum++].map((key) => newvalues[key]);
        var res = calculateMUL(array);
      }
      if (action === 'Div') {
        splitArrays = splitarray(divcheckedvariables);
        // var array = divcheckedvariable.map(key => newvalues[key]);
        var array = splitArrays[dnum++].map((key) => newvalues[key]);
        var res = calculateDIV(array);
      }
      if (action === 'Square') {
        splitArrays = splitarray(sqcheckedvariables);
        // var array = sqcheckedvariable.map(key => newvalues[key]);
        var array = splitArrays[sqnum++].map((key) => newvalues[key]);
        var res = calculatesquare(array);
      }
      if (action === 'SqRoot') {
        splitArrays = splitarray(sqrootcheckedvariables);
        // var array = sqrootcheckedvariable.map(key => newvalues[key]);
        var array = splitArrays[srnum++].map((key) => newvalues[key]);
        var res = calculatesqroot(array);
      }
      if (action === 'Cube') {
        splitArrays = splitarray(cubecheckedvariables);
        // var array = cubecheckedvariable.map(key => newvalues[key]);
        var array = splitArrays[cnum++].map((key) => newvalues[key]);
        var res = calculatecube(array);
      }
      if (action === 'CubeRoot') {
        splitArrays = splitarray(curootcheckedvariables);
        // var array = curootcheckedvariable.map(key => newvalues[key]);
        var array = splitArrays[curnum++].map((key) => newvalues[key]);
        var res = calculatecuberoot(array);
      }
      if (action === 'Factorial') {
        splitArrays = splitarray(factcheckedvariables);
        // var array = factcheckedvariable.map(key => newvalues[key]);
        var array = splitArrays[fnum++].map((key) => newvalues[key]);
        var res = calculatefact(array);
      }
      if (action === 'Difference') {
        splitArrays = splitarray(diffcheckedvariables);
        // var array = diffcheckedvariable.map(key => newvalues[key]);
        var array = splitArrays[dinum++].map((key) => newvalues[key]);
        var res = calculatediff(array);
      }
      if (action === 'Percentage') {
        splitArrays = splitarray(percheckedvariables);
        var array = splitArrays[pernum++].map((key) => newvalues[key]);
        var res = calculateper(array);
      }
      if (action == 'Log') {
        splitArrays = splitarray(logcheckedvariables);
        var array = splitArrays[lognum++].map((key) => newvalues[key]);
        var res = calculatelog(array);
      }
      if (action == 'Fraction') {
        splitArrays = splitarray(fraccheckedvariables);
        var array = splitArrays[fracnum++].map((key) => newvalues[key]);
        var res = calculatefrac(array);
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
      const res = Number(constantvars[match]);
      if (act == "create") {
        newvalues[match] = res;
      } else {
        editnewvalues[match] = res;
      }
      return res;
    });
    const option1 = newvalues[Object.values(optionvariable)[0]];
    newoptions.option1 = option1;
    const optionlen = Object.keys(optionvariable).length;

    for (let i = 1; i < optionlen; i++) {
      const opt = `option${Number(i + 1)}`;
      const op = optionvariable[opt];

      const opvalue = newvalues[op[0]];
      if (op[1] == '+') {
        if (!Number(opvalue)) {
          newoptions[opt] = format(add(fraction(opvalue), fraction(op[2])));
        } else {
          newoptions[opt] = Number(opvalue) + Number(op[2]);
        }
      }
      if (op[1] == '-') {
        if (!Number(opvalue)) {
          newoptions[opt] = format(subtract(fraction(opvalue), fraction(op[2])));
        } else {
          newoptions[opt] = Number(opvalue) - Number(op[2]);
        }
      }
      if (op[1] == '*') {
        if (!Number(opvalue)) {
          newoptions[opt] = format(multiply(fraction(opvalue), fraction(op[2])));
        } else {
          newoptions[opt] = Number(opvalue) * Number(op[2]);
        }
      }
      if (op[1] == '^') {
        if (!Number(opvalue)) {
          newoptions[opt] = format(square(fraction(opvalue)));
        } else {
          newoptions[opt] = Number(opvalue) * Number(opvalue);
        }
      }
    }
    // console.log('optionvariables', optionvariables);
    // console.log('newoptions', newoptions);
    // const editorvalue = document.getElementById("editorvalue");
    // const divContent = document.getElementById('editorvalue').innerHTML;
    // console.log("quill content", excelContent);

    // =====================================
    // if (!worksheet) {
    //   var data = [{
    //     Questions: replacedSentence, Option1: newoptions.option1, Option2: newoptions.option2, Option3: newoptions.option3, Option4: newoptions.option4, CorrectAns: newoptions.option1, Solution: finalSolution, editorvalue: cleanText,
    //   }];
    //   worksheet = XLSX.utils.json_to_sheet(data);
    //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    // } else {
    //   var data = [{
    //     Questions: replacedSentence, Option1: newoptions.option1, Option2: newoptions.option2, Option3: newoptions.option3, Option4: newoptions.option4, CorrectAns: newoptions.option1, Solution: finalSolution, editorvalue: cleanText,
    //   }];
    //   const rowIndex = XLSX.utils.sheet_add_json(worksheet, data, { header: ['Questions', 'Option1', 'Option2', 'Option3', 'Option4', 'CorrectAns', 'Solution', 'editorval'], skipHeader: true, origin: -1 });
    //   const cellRef = XLSX.utils.encode_cell({ r: rowIndex, c: 0 });
    //   worksheet[cellRef] = replacedSentence;
    // }
    const questioncell = worksheet.getCell('A' + (i + 3));
    const opt1cell = worksheet.getCell('B' + (i + 3));
    const opt2cell = worksheet.getCell('C' + (i + 3));
    const opt3cell = worksheet.getCell('D' + (i + 3));
    const opt4cell = worksheet.getCell('E' + (i + 3));
    const anscell = worksheet.getCell('F' + (i + 3));
    const solncell = worksheet.getCell('G' + (i + 3));

    const editorvalue = document.getElementById("editorvalue");
    editorvalue.innerHTML = quill.root.innerHTML;
    const originalText = document.getElementById('editorvalue').innerHTML;
    const richText = formatRichText(replacedSentence);
    const solnrichText = formatRichText(finalSolution);
    // console.log("richText", richText);
    const accumulatedRichText = [];
    const solnrichTextarray = [];
    // worksheet.columns = [
    //   { header: 'Question', key: 'ques', width: 35 },
    //   { header: 'Option1', key: 'opt1', width: 15 },
    //   { header: 'Option2', key: 'opt2', width: 15 },
    //   { header: 'Option3', key: 'opt3', width: 15 },
    //   { header: 'Option4', key: 'opt4', width: 15 },
    //   { header: 'Correct Ans', key: 'ans', width: 15 },
    //   { header: 'Solution', key: 'soln', width: 35 },
    // ];
    // worksheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
    // worksheet.addRow({
    //   ques: replacedSentence, opt1: newoptions.option1, opt2: newoptions.option2, opt3: newoptions.option3, opt4: newoptions.option4, ans: newoptions.option1, soln: finalSolution,
    // });
    for (let i = 0; i < richText.length; i++) {
      accumulatedRichText.push({ text: richText[i].text, font: richText[i].font });
    }
    for (let i = 0; i < solnrichText.length; i++) {
      solnrichTextarray.push({ text: solnrichText[i].text, font: solnrichText[i].font });
    }
    console.log("change variables*********************", changevars);
    console.log("accumulatesrichtext......", accumulatedRichText);
    console.log("acumulatedsolntext.......", solnrichTextarray);
    console.log("option1.....", newoptions.option1);
    console.log("option2.....", newoptions.option2);
    console.log("option3.....", newoptions.option3);
    console.log("option4.....", newoptions.option4);
    console.log("option1.....", newoptions.option1);
    questioncell.value = {
      richText: [
        ...accumulatedRichText,
      ],
    };
    solncell.value = {
      richText: [
        ...solnrichTextarray,
      ],
    };
    opt1cell.value = {
      richText: [
        { text: newoptions.option1 },
      ],
    };
    opt2cell.value = {
      richText: [
        { text: newoptions.option2 },
      ],
    };
    opt3cell.value = {
      richText: [
        { text: newoptions.option3 },
      ],
    };
    opt4cell.value = {
      richText: [
        { text: newoptions.option4 },
      ],
    };
    anscell.value = {
      richText: [
        { text: newoptions.option1 },
      ],
    };
    const dlabel = document.getElementById('dlabel');
    dlabel.innerHTML = 'You can now download sheet';

    // ========================================
  }
  console.log("change variables******************", changevars);
  // console.log("chnage variables inside genbut last", changevariables);
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
    // const opinput = document.getElementById("option1");
    // const keys = Object.keys(cvariables);
    // opinput.value = cvariables[keys[keys.length-1]];
    // console.log("value",cvariables[keys[keys.length-1]])
    // optionvariables[e.target.myParam] = keys[keys.length-1]
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
  if (!Number(option1value)) {
    opinput.value = format(add(fraction(option1value), fraction(e.currentTarget.value)));
  } else {
    opinput.value = Number(option1value) + Number(e.currentTarget.value);
  }
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
  if (!Number(option1value)) {
    opinput.value = format(subtract(fraction(option1value), fraction(e.currentTarget.value)));
  } else {
    opinput.value = Number(option1value) - Number(e.currentTarget.value);
  }
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
  if (!Number(option1value)) {
    opinput.value = format(multiply(fraction(option1value), fraction(e.currentTarget.value)));
  } else {
    opinput.value = Number(option1value) * Number(e.currentTarget.value);
  }
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
  if (!Number(option1value)) {
    opinput.value = format(square(fraction(option1value)));
  } else {
    opinput.value = Number(option1value) * 2;
  }
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
        const fracarray = fracdbarray.concat(fraccheckedvariable);
        changerefresh(vardbarray, editnum, e.target, 'const', lcmarray, addarray, subarray, mularray, divarray, sqarray, sqrootarray, cubearray, curootarray, factarray, diffarray, perarray, logarray, fracarray, optdbarray);
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
const tagsarray = [];
function save() {
  console.log('hi');
  // const loop = document.getElementById('loop').value;
  console.log("dvaractions", dvaractions);
  console.log("dvaractionvalues", dvaractionvalue);
  console.log("loop", loopnum);
  const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;
  const tags = $('#tags').select2('data');
  for (let i = 0; i < tags.length; i++) {
    tagsarray.push(tags[i].text);
  }
  console.log("tags", tagsarray);
  const questype = document.getElementById("type").value;
  const quessubtype = document.getElementById("subtype").value;
  // var question = document.getElementById('editor-container').innerHTML;
  var question = quill.root.innerHTML;
  // var solution = document.getElementById('editor-containersoln').innerHTML;
  var solution = quillsoln.root.innerHTML;
  var code = document.getElementById('code').value;
  // var editorvalue = document.getElementById('editorvalue').innerHTML;
  // console.log(editorvalue);
  // console.log("/save/chnagevariables", changevariables);
  // console.log("cvariables", cvariables);
  // console.log("/save/sub", subcheckedvariable);
  // console.log("/save/add", addcheckedvariable);
  // console.log("/save/lcm", lcmcheckedvariable);
  // console.log("/save/mul", mulcheckedvariable);
  // console.log("/save/sq", sqcheckedvariable);
  // console.log("/save/allnewvariables", newallvariables);

  // console.log("/save/action", actions);
  // console.log("/save/optionvalue", optdbvalues);
  // console.log("/save/optionvariables", optdbvariables);
  // console.log("/save/optionvariables 2nd", optionvariables);
  // var allvariables = Object.assign(changevariables, cvariables, constantvariables);**
  console.log("change variables on save", changevariables);
  console.log("change variables on svae c variables", cvariables);
  console.log("change variables on save const var", constantvariables);
  const constProperties = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in constantvariables) {
    if (key.startsWith('const')) {
      constProperties[key] = constantvariables[key];
    }
  }
  console.log("change variables on save const var", constProperties);
  var allvariables = Object.assign(changevariables, cvariables, constProperties);
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
  // console.log("options", optionvars);
  // console.log("newoptionvariables", newoptionvariables);
  // console.log("all variables", allvariables);
  // console.log('inside save', optionvalues);
  fetch(`${api_path}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ques: question, soln: solution, variables: allvariables, options: optionvars, quesname: questionname, unique_id: idValue, actions: actionobj, lcmvariables: lcmcheckedvariable, addvariables: addcheckedvariable, subvariables: subcheckedvariable, mulvariables: mulcheckedvariable, divvariables: divcheckedvariable, sqvariables: sqcheckedvariable, sqrootvariables: sqrootcheckedvariable, cubevariables: cubecheckedvariable, curootvariables: curootcheckedvariable, factvariables: factcheckedvariable, diffvariables: diffcheckedvariable, pervariables: percheckedvariable, logvariables: logcheckedvariable, fracvariables: fraccheckedvariable, optionvariable: newoptionvariables, type: questype, subtype: quessubtype, difficulty: selectedDifficulty, tags: tagsarray, editorval: editorvalue, quescode: code, dvaractionsval: dvaractions, dvaractionvalues: dvaractionvalue, loop: loopnum,
    }),
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data.unique_id);
      console.log('Data', data);
      const questionsaved = document.getElementById("questionsaved");
      const h6 = document.createElement("small");
      h6.innerText = "Question Saved Successfully";
      questionsaved.appendChild(h6);
      // eslint-disable-next-line no-restricted-globals
      // location.reload();
      // window.location.href = 'questiongenerator.html';
    })
    .catch((error) => {
      console.error(error);
    });
}

const savevar = document.getElementById('save');
savevar.addEventListener('click', save);

const urlParams = new URLSearchParams(window.location.search);
let dvarcount = 0;
if (urlParams.has('id')) {
  const idValue = urlParams.get('id');
  fetch(`${api_path}/get_data/${idValue}`)
    .then((response) => response.json())
    .then(data => {
      // eslint-disable-next-line prefer-const
      let options = [];
      console.log("dvaractions", data.Generate_actions, data.Generate_action_val, data.Loop_num);
      console.log("retrived data", data.Question, data.Solution);
      generateactions = data.Generate_actions;
      generateactionvalue = data.Generate_action_val;
      loopnumber = data.Loop_num;
      optdbvalues = Object.assign(data.Options);
      optdbvariables = Object.assign(data.optionvariables);
      alldbvariables = Object.assign(data.Variables);
      const quescode = document.getElementById('code');
      quescode.value = data.Code;
      const questopic = document.getElementById('type');
      questopic.value = data.Ques_type;
      const quessubtopic = document.getElementById('subtype');
      quessubtopic.value = data.Ques_subtype;
      const tags = document.getElementById("tags");
      const optionsArray = Array.from(tags.options);

      // Now you have an array of all the option elements
      console.log(optionsArray);
      optionsArray.forEach((option) => {
        options.push(option.text);
      });
      console.log(options);
      data.Tags.forEach((tag) => {
        const option = document.createElement("option");
        option.value = tag;
        option.textContent = tag;
        option.selected = true;
        if (options.includes(tag)) {
          const defoption = tags.querySelector(`option[value="${tag}"]`);
          console.log(defoption);
          if (defoption) {
            defoption.selected = true;
          }
          console.log("tag", tag);
        } else {
          tags.appendChild(option);
          console.log("else tag", tag);
        }
      });
      const radioValues = ["easy", "medium", "hard"];
      const radioButtons = document.getElementsByName("difficulty");
      radioButtons.forEach((radio) => {
        if (radioValues.includes(radio.value)) {
          if (radio.value === data.Difficulty) {
            radio.checked = true;
          }
        }
      });
      const quesname = document.getElementById('questionname');
      quesname.value = data.Ques_name;
      // const question = document.getElementById('question');
      // question.value = data.Question;
      quill.root.innerHTML = data.Question;
      // const solution = document.getElementById('solution');
      // solution.value = data.Solution;
      quillsoln.root.innerHTML = data.Solution;
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
          dvarcount++;
          console.log("data variables", data.Variables);
          addText("edit", data.Variables);
          const newinput = document.getElementById(Object.keys(data.Variables)[i]);
          newinput.value = data.Variables[Object.keys(data.Variables)[i]];
          // console.log("oooo", Object.keys(data.Variables)[i], newinput.value);
          console.log("option variable", data.optionvariables);
          newinput.addEventListener("change", (e) => {
            getvalue1(e, data.lcm, data.add, data.sub, data.mul, data.div, data.square, data.sqroot, data.cube, data.curoot, data.fact, data.difference, data.percentage, data.log, data.Variables, data.optionvariables, data.frac);
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
          fracdbarray = data.frac;
          optdbarray = data.optionvariables;
          newinput.addEventListener("change", (e) => {
            getvalue1(e, data.lcm, data.add, data.sub, data.mul, data.div, data.square, data.sqroot, data.cube, data.curoot, data.fact, data.difference, data.percentage, data.log, data.Variables, data.optionvariables);
          });
          createcheckboxes(Object.keys(data.Variables)[i], data.Variables[Object.keys(data.Variables)[i]], 'const');
        }
      }
      console.log("dballvariables", dballvariables);
      console.log("dvarcount", dvarcount);
      generatevariabledisplay("edit");
      genbut.addEventListener("click", () => {
        console.log("{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}", data.optionvariables);
        const constantsdb = {};
        for (const key in data.Variables) {
          if (key.startsWith('const')) {
            constantsdb[key] = data.Variables[key];
          }
        }
        console.log("constantdb", constantsdb);
        genbutfunction("edit", data.Options, data.optionvariables, data.Variables, constantsdb, data.Generate_action_val, data.lcm, data.add, data.sub, data.mul, data.div, data.square, data.sqroot, data.cube, data.curoot, data.fact, data.difference, data.percentage, data.log, data.frac);
      });
    })
    .catch(error => console.error('Error:', error));
  // console.log('id retrived', idValue);
}
var customButton = document.querySelector('#custom-button');
customButton.addEventListener('click', () => {
  quill.focus();
  var contentLength = quill.getLength();
  quill.setSelection(contentLength, contentLength);
  addText("create");
});

var customButtonsoln = document.querySelector('#custom-buttonsoln');
customButtonsoln.addEventListener('click', () => {
  quillsoln.focus();
  var contentLength = quillsoln.getLength();
  quillsoln.setSelection(contentLength, contentLength);
  addvar("create");
});

// eslint-disable-next-line prefer-arrow-callback, func-names
$(document).ready(function () {
  $(".progLang").select2({
    tags: true,
  });
});

document.getElementById("quill-trigger").addEventListener("click", () => {
  document.getElementById("popup").style.display = "block";
});

// document.getElementById("closePopup").addEventListener("click", () => {
//   document.getElementById("popup").style.display = "none";
// });
// A can do a peice of job in dvar0 days. B can do a peice of jon in dvar1 days. how many days does a and b takes together to complete a job?

// Let's find lcm of 10 and 15 = 30
// one day's work of A = 30/10 = 3 workper day
// one day's work of B = 30/15 = 2 work per day
// one day's work of A and B together = 3+2 = 5 work per day
// A and B together will complete the work in
// Total work = 30
// A and B one day work = 5 Workperday
// no of days A and B together is 30/5 = 6 days
