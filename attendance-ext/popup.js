'use strict';

const elRoomId = document.getElementById('roomId');
const elApiToken = document.getElementById('token');
chrome.storage.local.get(['chatConfig'], function(data) {
  // console.log(data);
  if (data.chatConfig) {
    elRoomId.innerText = data.chatConfig.roomId ?? "";
    elApiToken.innerText = data.chatConfig.token ?? "";
  }
});
// console.log(elRoomId.innerText, elApiToken.innerText, usernameElem.innerText);
