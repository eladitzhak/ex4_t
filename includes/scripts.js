// 1.fill all info and try to click on submit
// 2.fill all info again and try again
//3.MANUALLY fill the data again (specially in FULLNAME :)



console.log ("insite the JddS!");
var counter = 0;

var webInput=document.getElementById("webInput");
var runawaybtn=document.getElementById("runaway");
var flagClicked=0;
window.onload=function(){

//check why validation form does not call

    console.log("1");

    // console.log(x);
    var input_id=document.getElementById("input_id");
    var submitButton=document.getElementById("click");

};







    console.log("nenenew");

    var stupidButton = {
        init: function () {
            this.attachEvents();
        },

        attachEvents: function () {
            $('#runaway-container').on('hover', this.flyAway);
            $('#runaway').on('click', this.showWin);
        },

        flyAway: function (e) {
            mLeft = Math.random() * 300;
            mTop = Math.random() * 300;

            $('#runaway-container').css('margin-left', mLeft);
            $('#runaway-container').css('margin-top', mTop);
        },

        showWin: function (e) {

            alert('Nice! GOOD JOB!!');
            var x = document.getElementById('input_id').value;
            counter++;
            console.log("count is", counter);
            if ((counter > 2) && (flagClicked >0)) {
                var x2 = document.getElementById("click");
                if (x2.type === "hidden") {
                    x2.type = "submit";
                }
            } else if (counter == 1) {
                var temp = document.getElementById("myForm");
                clearform();

                temp.reset();
                setTimeout(function(){

                    document.body.removeChild(document.body.lastChild);
                }, 5000);
            }else if (counter == 2){
                input_id.value="";
                runawaybtn.disabled=true;
                dis();

            }

        }
    };


    stupidButton.init();
function checkInput(){
    console.log("asd");
    if (counter==2){
        counter++;
        input_id.style.backgroundColor="red";
        runawaybtn.disabled=false;
        flagClicked=1;
        input_id.value="";
        setTimeout(function(){

            input_id.style.opacity = "0";
        }, 2000);
        input_id.style.marginLeft="500px";

        input_id.style.columnGap = "50px";
        webInput.style.cursor="wait";
        input_id.style.marginLeft="-90px";
        oops();
        if (input_id.value!=""){
            input_id.value="";
        }


    }
};
    function validateForm() {
        console.log("inside validation");
        console.log(document.body.lastChild);
        if ((document.body.lastChild.innerHTML)==("cannot continue.. you must provide a d and omit space in full name")){
            var oP = document.body.getElementsByTagName("h3")[0];
            document.body.removeChild(oP);
        }

        x = document.forms["myForm"]["fullName"].value;
        console.log(x);
        temp = x.toLowerCase();

        console.log(temp);
        if (x.includes("a") && (x.includes("d")) && !(x.includes(" "))) {
            console.log("ok");
            return true;
            // return false;

        } else {
            h3();
            return false;
        }
        if (x == "") {
            alert("Name must be filled out");
            return false;
        }

    }

    function h3() {

        {
            var h = document.createElement("H3");
            var t = document.createTextNode("cannot continue.. you must provide a d and omit space in full name");
            h.appendChild(t);
            document.body.appendChild(h);
            console.log("aftter added the h3",document.body.lastChild);
            return false;

        }

    }

    function clearform() {

        {
            var h = document.createElement("H3");
            var t = document.createTextNode("Your wish is my command,form cleared successfuly! :)");
            h.appendChild(t);
            document.body.appendChild(h);
            // var temp = document.getElementsById("myForm");
            return false;

        }

    }

function oops() {

    {
        var h = document.createElement("H3");
        var t = document.createTextNode("OOPS... sorry for that! :)");
        h.appendChild(t);
        document.body.appendChild(h);
        // var temp = document.getElementsById("myForm");
        setTimeout(function(){

            document.body.removeChild(document.body.lastChild);
        }, 4000);

        return false;

    }

}

function dis() {

    {
        var h = document.createElement("H3");
        var t = document.createTextNode("make sure to fill fields MANUALLY!! :)");
        h.appendChild(t);
        document.body.appendChild(h);
        // var temp = document.getElementsById("myForm");
        setTimeout(function () {

            document.body.removeChild(document.body.lastChild);
        }, 4000);

        return false;

    }
}
