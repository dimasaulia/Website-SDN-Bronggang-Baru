$(document).ready(function(){
    $("#upload").click(function(){
        $( "#formFoto" ).trigger( "click" );
        console.log("hello");
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function(e) {
            $('#fotoProfil').attr('src', e.target.result);
          }

          reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
      }

    $("#formFoto").change(function() {
        readURL(this);
    });
});