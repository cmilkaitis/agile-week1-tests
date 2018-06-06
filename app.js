$(document).ready(function() {
    let arr = []; 
    
    $("#btn").click(function() {
        let term = $("#search-text").val();
        arr.push(term);
        $("#content").append(`<p>${term}</p>`);
        $("#search-text").val("");
    }); 
    console.log(arr);
});
