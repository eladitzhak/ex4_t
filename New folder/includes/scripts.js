console.log ("insite the JddS!");
var x = document.forms["myForm"]["fullName"].value;
// console.log(x);
var temp="";


function validateForm() {
    console.log("inside validation");
    x = document.forms["myForm"]["fullName"].value;
    console.log(x);
    temp=x.toLowerCase();

    console.log(temp);
    console.log("updated");
     if (x.includes("a")&& (x.includes("d")) && !(x.includes(" "))){
         console.log("ok");

         var stupidButton = {
             init: function() {
                 this.attachEvents();
             },

             attachEvents: function() {
                 $('#runaway-container').on('hover', this.flyAway);
                 $('#runaway').on('click', this.showWin);
             },

             flyAway: function(e) {
                 mLeft = Math.random() * 300;
                 mTop = Math.random() * 300;

                 $('#runaway-container').css('margin-left', mLeft);
                 $('#runaway-container').css('margin-top', mTop);
             },

             showWin: function(e) {
                 alert('Nice! Here, have a cookie!');
             }
         };

         stupidButton.init();



     }
     else {
         var h = document.createElement("H3");
         var t = document.createTextNode("cannot continue.. you must provide a d and omit space in full name");
         h.appendChild(t);
         document.body.appendChild(h);
         return false;

     }
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    return false;
}