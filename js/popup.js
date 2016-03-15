document.getElementById("mybutton").addEventListener("click", function() {
  chrome.storage.local.get(null,function (obj){
    var token = JSON.stringify(JSON.parse(obj.auth).token);
    var textarea = document.getElementById("token");
    if (typeof(token) !== 'string'){
      textarea.value = 'You have no auth token.';
    } else {
      textarea.value = token.replace(/\"/g, '');
      textarea.focus();
      textarea.select();
      document.execCommand('Copy');
      document.getElementById("fs-success").style.display = "block";
    }
  });
}, false);

document.getElementById("mybutton").addEventListener("hover", function() {
  chrome.storage.local.set({"auth": {}},function (){
    console.log('new request')
  });
}, false);

// document.addEventListener("DOMContentLoaded",function (){
//     //Fetch all contents
//     console.log('loaded')
//     chrome.storage.local.set({},function (){
//       console.log('new request')
//     });
//     // chrome.storage.local.get(null,function (obj){
//     //   var token = JSON.stringify(JSON.parse(obj.auth).token);
//     //   if (token === undefined){
//     //     alert('You don\'t have auth token.')
//     //   } else {
//     //     window.prompt("Copy to clipboard: Ctrl+C, Enter", token);
//     //   }
//     // });
// });

