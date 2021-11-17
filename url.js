let documentURL = window.location.href;
let replayLinkFound = false;
let battleURL = "";
let params = new URLSearchParams(documentURL.search);
if (params != "") {
  replayLinkFound = true;
  battleURL = params.slice(8);
}
if (replayLinkFound) document.getElementById("bt").src = battleURL;
