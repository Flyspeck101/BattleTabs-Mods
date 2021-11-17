let documentURL = window.location.href;
let replayLinkFound = false;
let battleURL = "";
let params = new URLSearchParams(documentURL.searchParams);
if (params.get("replay")) {
  replayLinkFound = true;
  battleURL = params.get("replay")
}
if (replayLinkFound) document.getElementById("bt").src = battleURL;
