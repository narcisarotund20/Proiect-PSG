function showPlayerInfo(playerId) {
  var playerInfo = document.getElementById(playerId).getElementsByClassName('player-info')[0];
  playerInfo.classList.toggle('hidden');
}
