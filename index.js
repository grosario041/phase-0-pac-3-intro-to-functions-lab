function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log('hello'.toUpperCase( ));
  } 
function logWhisper(string) {
    console.log('HELLO'.toLowerCase( ))
}
function sayHiToHeadphonedRoommate (string) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    if (string == 'hello')
      return cantUnswer;
        else if (string == 'HELLO')
      return "YES INDEED!"
       else (string == "Let's have dinner together!")
      return "I would love to!"
    }