'use strict';

$('.form-display').on('click', function() {
  $(this).addClass('hidden');
  $(this).next().removeClass('hidden');
});

