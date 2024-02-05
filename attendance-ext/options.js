'use strict';

const elRoomId = document.getElementById('roomId');
const elApiToken = document.getElementById('token');
chrome.storage.local.get(['chatConfig'], function(data) {
  // console.log(data);
  if (data.chatConfig) {
    elRoomId.value = data.chatConfig.roomId ?? "";
    elApiToken.value = data.chatConfig.token ?? "";
  }
});
// console.log(elRoomId.value, elApiToken.value, usernameElem.value);

const buttonClick = function(){
  const button = document.getElementById('config-set');
  button.addEventListener('click', function() {
    const chatConfig = {
      roomId: elRoomId.value,
      token: elApiToken.value
    };
    console.log(chatConfig);

    chrome.storage.local.set({chatConfig: chatConfig}, function() {
      console.log('chatConfig is ' + chatConfig);
    });
  });
};
buttonClick();
