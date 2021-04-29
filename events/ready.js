module.exports = client => {
  var degisenOynuyor = [
    "boş altyapı"
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 30000);
  
  client.user.setStatus("online"); //dnd, idle, online, offline
  
}
