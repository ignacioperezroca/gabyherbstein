
var jqValidation = (function() {

  $('#btnSubmit').click(function(){
    sendContact();
  });

  $('#btnSubscription').click(function(){
    sendSubscription();
  });

  var sendContact = function(){
    $("input,select,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
          // additional error messages or events
        },
        submitSuccess: function($form, event) {
          // Prevent spam click and default submit behaviour
          $("#btnSubmit").attr("disabled", true);
          event.preventDefault();
          
          // get values from FORM
          // var name = $("input#name").val();
          var email = $("input#email").val();
          // var subject = $("input#subject").val();
          // var message = $("textarea#message").val();
          // var firstName = name; // For Success/Failure Message
          // Check for white space in name for Success/Fail message
          // if (firstName.indexOf(' ') >= 0) {
            // firstName = name.split(' ').slice(0, -1).join(' ');
          // }
          $.ajax({
            url: "./mail/contact_me.php",
            type: "POST",
            dataType: "json",
            data: {
              // name: name,
              email: email,
              // subject: subject,
              // message: message
            },
            cache: false,
            success: function(resp) {
              if(resp.status != 'ok'){
                // Fail message
                $('#contactForm .success').html("<div class='alert alert-danger'>");
                $('#contactForm .success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#contactForm .success > .alert-danger').append("<strong>Lo sentimos" + firstName + ", verifique de haber ingresado todos los datos correctamente");
                $('#contactForm .success > .alert-danger').append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");

                return false;
              }

              // Enable button & show success message
              $("#btnSubmit").attr("disabled", false);
              $('#contactForm .success').html("<div class='alert alert-success'>");
              $('#contactForm .success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                  .append("</button>");
              $('#contactForm .success > .alert-success').append("Su mensaje ha sido envíado.");
              $('#contactForm .success > .alert-success').append('</div>');
              //clear all fields
              $('#contactForm').trigger("reset");
            },
            error: function() {
              // Fail message
              $('#contactForm .success').html("<div class='alert alert-danger'>");
              $('#contactForm .success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                  .append("</button>");
              $('#contactForm .success > .alert-danger').append("<strong>Lo sentimos" + firstName + ", es probable que el servidor no este funcionando. Intenta más tarde.");
              $('#contactForm .success > .alert-danger').append('</div>');
              //clear all fields
              $('#contactForm').trigger("reset");
            },
          })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
      e.preventDefault();
      $(this).tab("show");
    });
  }


  var sendSubscription = function(){

    console.log('Entró a sendSubscription');

    $("input,select,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function($form, event) {
          // Prevent spam click and default submit behaviour
          $("#btnSubscription").attr("disabled", true);
          event.preventDefault();
          
          // get values from FORM
          var email = $("input#email").val();
          $.ajax({
            url: "./mail/subscribe_me.php",
            type: "POST",
            dataType: "json",
            data: {
              email: email
            },
            cache: false,
            success: function(resp) {
              console.log(resp);
              if(resp.status != 'ok'){
                console.log('Error el php');
                // Fail message
                $('#subscribeForm .success').html("<div class='alert alert-danger'>");
                $('#subscribeForm .success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#subscribeForm .success > .alert-danger').append("<strong>Lo sentimos" + ", hubo un error");
                $('#subscribeForm .success > .alert-danger').append('</div>');
                //clear all fields
                $('#subscribeForm').trigger("reset");

                return false;
              }
              console.log('Success el php');
              // Enable button & show success message
              $("#btnSubscription").attr("disabled", false);
              $('#subscribeForm .success').html("<div class='alert alert-success'>");
              $('#subscribeForm .success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                  .append("</button>");
              $('#subscribeForm .success > .alert-success').append("Recibimos su solicitud");
              $('#subscribeForm .success > .alert-success').append('</div>');
              //clear all fields
              $('#subscribeForm').trigger("reset");
            },
            error: function() {
              // Fail message
              $('#subscribeForm .success').html("<div class='alert alert-danger'>");
              $('#subscribeForm .success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                  .append("</button>");
              $('#subscribeForm .success > .alert-danger').append("<strong>Lo sentimos" + ", es probable que el servidor no este funcionando. Intenta más tarde.");
              $('#subscribeForm .success > .alert-danger').append('</div>');
              //clear all fields
              $('#subscribeForm').trigger("reset");
            },
          })
        },
        filter: function() {
          return $(this).is(":visible");
        },
    });
  }

  return{
    sendContact: sendContact,
    sendSubscription: sendSubscription
  }

})();

// When clicking on Full hide fail/success boxes
// $('#name').focus(function() {
//   $('#contactForm').html('');
// });

