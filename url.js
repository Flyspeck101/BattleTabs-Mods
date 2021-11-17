let documentURL = window.location.href;
let replayLinkFound = false;
let battleURL = (() => {
  if (documentURL.searchParams.get("replay")) {
    replayLinkFound = true;
    return documentURL.searchParams.get("replay");
  }
  return "";
})();
if (replayLinkFound) document.getElementById("bt").src = battleURL;
