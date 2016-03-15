//Set some content from background page
chrome.storage.local.set({"auth": localStorage.auth},function (){
    // console.log(localStorage.auth)
    // console.log("Storage Succesful");
});
// //get all contents of chrome storage
// chrome.storage.local.get(null,function (obj){
//     console.log(JSON.stringify(obj));
// });

chrome.storage.onChanged.addListener(function (change, areaname){
    chrome.storage.local.set({"auth": localStorage.auth},function (){});
})