$(function(){

    $('#hamburger').click(function(){
        $('#sidebar').css('display','block');
        $('#overlay').css('display','block');
    });   
    $('#overlay').click(function(){
        $('#sidebar').css('display','none');
        $('#overlay').css('display','none');
    });        
    $('.sidebar-icon').click(function(){
        $('#sidebar').css('display','none');
        $('#overlay').css('display','none'); 
    });
     
});