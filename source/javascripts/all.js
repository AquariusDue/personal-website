// Hello button code
var HelloModule = (function () {
  var triggerPush = function () {
    $.get('http://localhost:3000/hello'); // TODO: Change before deploying
  };

  return {
    updateButton: function () {
      $('div#hello-button').children('p.send').fadeOut(300);
      $('div#hello-button').children('p.sent').fadeIn(600);
      triggerPush();
    }
  }
})();

// Hello Button Event Handler
$('div#hello-button').click(HelloModule.updateButton);
