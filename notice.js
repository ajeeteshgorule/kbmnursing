var div = document.getElementById('div');

var stdNo;

function selectAllData() {
    // document.getElementById('tbody1').innerHTML = "";
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
                        pp.innerHTML = "●  " + notice;
                    } else {
                        pp.innerHTML = "‣  " + '<a href="' + link + '" target="_blank">' + notice +'</a>';
                    }
                    div.appendChild(h2);
                    h2.appendChild(pp);


                });
        });
}

window.onload = selectAllData;