let documentURL = window.location.href;
let replayLinkFound = false;
let battleURL = (() => {
  if (new URLSearchParams(documentURL.searchParams).get("replay")) {
    replayLinkFound = true;
    return new URLSearchParams(documentURL.searchParams).get("replay");
  }
  return "";
})();
if (replayLinkFound) document.getElementById("bt").src = battleURL;
