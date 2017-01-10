$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['', 'Nosotros', 'Areas-de-trabajo','Como-Trabajamos','Contactanos'],
      	sectionsColor : ['white','white','#3cc8b5','#042c5b','#e6b900'],
        navigation: true,
        css3: true

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


});
