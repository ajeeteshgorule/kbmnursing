// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
    
// }

// window.onload = function () {
//     var Minutes = 60 * 1,
//         display = document.getElementById('title');
//     startTimer(Minutes, display);
  
// }








firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("admin.html")
    }else{
        document.getElementById("user").innerHTML =user.email
    }
})
setInterval(expire,590000);
setInterval(logout,600000);

function logout(){
    firebase.auth().signOut()

    // console.log("Your session is ended");
    // alert("Your session is ended");
}
function expire(){
var time =document.getElementById('time');
time.innerHTML='Your session close in 10 second!'
var session =document.getElementById('session')
session.style.background="red"
var body =document.getElementById('body')
// body.style.borderBottom =" 5px solid red"
body.style.color="red"
session.style.fontSize="16px"

}


// when browser close auto logout 

window.onbeforeunload = logout;






// ==========================================================================

var div = document.getElementById('div');

var stdNo;

function selectAllData() {
    document.getElementById('tbody1').innerHTML = "";
    stdNo = 0;
    firebase.database().ref('notice').once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    // fetch data from database
                    var notice = CurrentRecord.val().Notice;
                    var date = CurrentRecord.val().Date;
                    var link = CurrentRecord.val().Link;
                    // var gen = CurrentRecord.val().Gender;


                    //  showing notice on board
                    var h2 = document.createElement('p');
                    var pp = document.createElement('p');
                    if (link == "") {
                        pp.innerHTML = "•  " + notice;
                    } else {
                        pp.innerHTML = "‣  " + '<a href="' + link + '" target="_blank">' + notice +'</a>';
                    }
                    div.appendChild(h2);
                    h2.appendChild(pp);


                    AddItemsToTable(notice, date, link);
                });
        });
}

window.onload = selectAllData;

var stdNo = 0;
var noticeList = [];


function AddItemsToTable(notice, date, link,) {

    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    // var td5 = document.createElement('td');
    noticeList.push([notice, date, link, ]);
    td1.innerHTML = ++stdNo;
    td2.innerHTML = notice;
    td3.innerHTML = date;
    td4.innerHTML = link;
    // td5.innerHTML = gen;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    // trow.appendChild(td5);

    var controlDiv = document.createElement('div');
    // onclick="Fillboxes(null)"
    // controlDiv.innerHTML = '<button type="button" class="btn btn-primary my-2" data-toggle="modal" data-target="#exampleModalCenter" onclick="Fillboxes(null)">Add New Record </button>'
    controlDiv.innerHTML += '<button type="button" class="btn btn-primary my-2 ml-2" data-toggle="modal" data-target="#exampleModalCenter" onclick="Fillboxes(' + stdNo + ')">Edit Record </button>'

    trow.appendChild(controlDiv);

    tbody.appendChild(trow);


}

var ModNotice = document.getElementById('NoticeMod')
var ModDate = document.getElementById('DateMod')
var ModLink = document.getElementById('LinkMod')
// var ModGen = document.getElementById('GenMod')

var BtnAdd = document.getElementById('AddModBtn')
var BtnUpd = document.getElementById('UpdModBtn')
var BtnDel = document.getElementById('DelModBtn')


function Fillboxes(index) {
    if (index == null) {
        var date = new Date();
        // get the date as a string
        var n = date.toDateString();
        // get the time as a string
        var time = date.toLocaleTimeString();
        console.log(n + ' ' + time)

        ModNotice.value = "";
        ModDate.value = n + ' ' + time;
        ModLink.value = "";
        // ModGen.value = "";
        // ModDate.enabled=true;
        ModDate.disabled = true;
        BtnAdd.style.display = "inline-block";
        BtnUpd.style.display = "none";
        BtnDel.style.display = "none";


    }
    else {
        --index;
        ModNotice.value = noticeList[index][0];
        ModDate.value = noticeList[index][1];
        ModLink.value = noticeList[index][2];
        // ModGen.value = noticeList[index][3];
        ModDate.disabled = true;
        BtnAdd.style.display = "none";
        BtnUpd.style.display = "inline-block";
        BtnDel.style.display = "inline-block";
    }

}

function AddNotice() {
    firebase.database().ref("notice/" + ModDate.value).set(
        {
            Notice: ModNotice.value,
            Date: ModDate.value,
            Link: ModLink.value
            // Gender: ModGen.value

        },
        (error) => {
            if (error) {
                alert("record was not added, there was some problem.");
            }
            else {
                window.location.reload();
                alert("record was added.")
                // selectAllData();
                // when record added hide the modal
                // $("#exampleModalCenter").modal('hide');
            }
        }
    )
}

function UpdNotice() {
    firebase.database().ref("notice/" + ModDate.value).update(
        {
            Notice: ModNotice.value,
            // Date: ModDate.value,
            Link: ModLink.value,
            // Gender: ModGen.value

        },
        (error) => {
            if (error) {
                alert("record was not updated, there was some problem.");
            }
            else {
                window.location.reload();
                alert("record was update.")
                // selectAllData();
                // when record added hide the modal
                // $("#exampleModalCenter").modal('hide');
            }
        }
    )
}

function DelNotice() {
    firebase.database().ref("notice/" + ModDate.value).remove().then(
        function () {
            window.location.reload();
            alert("record was deleted.")
        }
    )
}




 
 
