setTimeout(() => {
  let documentURL = new URL(window.location.href);
  let replayLinkFound = false;
  let battleURL = "";
  let params = documentURL.search;
  if (params != "") {
    replayLinkFound = true;
    battleURL = params.slice(8);
  }
  if (replayLinkFound) document.getElementById("bt").src = battleURL;
}, 500);
