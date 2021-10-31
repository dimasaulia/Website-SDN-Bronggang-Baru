$(document).ready(function(){
    $("#ikon").click(function(){
        $( "#cari" ).trigger( "click" );
    });

    $("#iconMenu").click(function(){
        $("menu").toggleClass("close");  
        console.log("Hallo");
    })
});