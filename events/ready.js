module.exports = client => {
  var durums = [
    "boş altyapı"
  ]
  
  setInterval(function() {
    var durum = durums[Math.floor(Math.random() * (durums.length))]
    client.user.setActivity(`${durum}`);

}, 2 * 30000);
  
  client.user.setStatus("online"); //dnd, idle, online, offline
  
}
