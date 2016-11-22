var play = function(note) {
  note.load();
  note.play();
};

$(document).ready( function() {
  $('.instrument').on('click', 'button', function() {
    var note = $(this).html();
    var sound = $('#' + note + 'Audio')[0];
    play(sound);
  });

  $('.instrument').keydown(function(event) {
    var sound = $('#' + event.key + "Audio")[0];
    play(sound);
  });
});
