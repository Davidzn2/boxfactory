$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['', 'Nosotros', 'Areas-de-trabajo','Como-Trabajamos','Contactanos'],
      	sectionsColor : ['white','white','#3cc8b5','#042c5b','#e6b900'],
        navigation: true,
        css3: true,
        menu:'#menu'

    });
    $('.materialboxed').materialbox();
    $('.modal').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200, // Transition out duration
            starting_top: '4%', // Starting top style attribute
            ending_top: '10%', // Ending top style attribute

          }
        );

    $('.carousel').carousel();
        $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
);
      


});
