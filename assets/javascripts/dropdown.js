$(document).ready(function() {
  $('.dropdown-item').click(function () {
    if ($(this).text().trim() == 'Accessories')
    {
      $('#dropdownMenuButton').text('Accessories');
      $('.accessories').show();
      $('.hats').hide();
      $('.tops').hide();
    }
    else if ($(this).text().trim() == 'Hats')
    {
      $('#dropdownMenuButton').text('Hats');
      $('.hats').show();
      $('.accessories').hide();
      $('.tops').hide();
    }
    else if ($(this).text().trim() == 'Tops')
    {
      $('#dropdownMenuButton').text('Tops');
      $('.tops').show();
      $('.accessories').hide();
      $('.hats').hide();
    }
    else
    {
      $('dropdownMenuButton').text('All');
      $('.accessories').show();
      $('.hats').show();
      $('.tops').show();
    }
  })
});
