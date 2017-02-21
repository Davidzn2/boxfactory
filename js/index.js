$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['', 'Nosotros', 'Areas-de-trabajo','Como-Trabajamos','Contactanos'],
      	sectionsColor : ['white','white','white','#919191','#383838'],
        navigation: true,
        css3: true,
        menu:'#menu',
        resize:true,  
        responsive:true

    });

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      });
      $('select').material_select();
      $('input#input_text, textarea#textarea1').characterCounter();
      $('.dropdown-button').dropdown();


});
