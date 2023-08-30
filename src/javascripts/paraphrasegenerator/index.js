// /* eslint-disable max-len */
// import 'bootstrap';
// // import $ from 'jquery';
// import '../../stylesheets/common/importers/_bootstrap.scss';
// import '../../stylesheets/common/importers/_fontawesome.scss';
// import '../common/steroid';

// // chat gpt
// const OPENAI_API_KEY = process.env.OPENAI_API;
// // const bTextToSpeechSupported = false;
// // const bSpeechInProgress = false;
// // const oSpeechRecognizer = null;
// // const oSpeechSynthesisUtterance = null;
// // const oVoices = null;
// const txtArray = [];
// // var be = txtOutput.value;
// let res;

// document.getElementById('txtOutput').addEventListener('change', (e) => {
//   if (e.length <= 0) {
//     console.log('loading');
//     res = document.getElementById('txtOutput').innerHTML = 'Loading';
//   } else {
//     console.log('unloading');
//   }
// });

// function Send() {
//   load();
//   const question = document.getElementById('generateQuestion').value;
//   let SQuestion;
//   if (paraphraser.value === 'paraphraser') {
//     SQuestion=`rewritequewithdifferentsituationfor50timeswithoutchanginginputvalues,${question}`;
//     console.log(typeof (SQuestion));
//   } else {
//     SQuestion = `create 50 similar ques with answer,options and formula used,${question}`;
//     console.log(SQuestion);
//   }

//   const oHttp = new XMLHttpRequest();
//   oHttp.open('POST', 'https://api.openai.com/v1/completions');
//   oHttp.setRequestHeader('Accept', 'application/json');
//   oHttp.setRequestHeader('Content-Type', 'application/json');
//   oHttp.setRequestHeader('Authorization', `Bearer ${OPENAI_API_KEY}`);

//   oHttp.onreadystatechange = function () {
//     if (oHttp.readyState === 4) {
//       // console.log(oHttp.status);
//       let oJson = {};
//       // if (txtOutput.value != "") txtOutput.value += "\n";
//       const roots = document.getElementById('root');
//       roots.style.display = 'none';
//       try {
//         oJson = JSON.parse(oHttp.responseText);
//       } catch (ex) {
//         txtOutput.value += `Error: ${ex.message}`;
//       }
//       if (oJson.error && oJson.error.message) {
//         txtOutput.value += `Error: ${oJson.error.message}`;
//       } else if (oJson.choices && oJson.choices[0].text) {
//         const s = oJson.choices[0].text;
//         txtOutput.value += s;
//         console.log(s);
//         txtArray.push(s);
//         console.log('hiiiii', txtArray);
//         let csvContent = 'data:text/csv;charset=utf-8,';
//         txtArray.forEach((rowArray) => {
//           csvContent += `${rowArray}\r\n`;
//         });

//         const encodedUri = encodeURI(csvContent);
//         window.open(encodedUri);
//         console.log('hi', s);
//       }
//     }
//   };

//   const iMaxTokens = 2048;
//   const sUserId = '1';
//   const dTemperature = 0.5;
//   const data = {
//     model: 'text-davinci-003',
//     prompt: SQuestion,
//     max_tokens: iMaxTokens,
//     user: sUserId,
//     temperature: dTemperature,
//     frequency_penalty: 0.0,
//     presence_penalty: 0.0,
//     stop: ['#', ';'],
//   };

//   oHttp.send(JSON.stringify(data));
//   if (txtOutput.value != '') txtOutput.value += '\n';
//   txtOutput.value += question;
// }

// function load() {
//   const load = document.createElement('h3');
//   load.id = 'text-typing';
//   load.innerText = 'Loading...';
//   console.log(load.innerText);
//   const root = document.getElementById('root');
//   root.appendChild(load);
// }
