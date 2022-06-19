


google.charts.load('current', { packages: ['corechart', 'line'] });

function drawBackgroundColor(getdata) {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Rating');

    var tempdata = [];
    var c = []
    //tempdata.push(c);

    for (var i = 0; i < getdata.length - 2; i++) {
        var val = getdata[i];
        if (val == "0") {
            continue;
        }
        else {
            var point = [i + 1, parseInt(val)];
           // console.log(typeof (val));
            tempdata.push(point);
        }
    }

    //console.log(tempdata.length + "  temp");
    data.addRows(tempdata);

    var maxx = data.length;


    var options = {
        hAxis: {
            title: 'Contest No.',
            format: '0'
        },
        vAxis: {
            title: 'Rating',
            // gridlines: { count: maxx+1}, //+1 is importent for the origingridline
            // viewWindow:{
            //   min: 0,
            //   max: maxx
            // },

        },
        pointSize: 8,
        gridlines: { count: -1 },
        series: {
            0: { pointShape: 'circle' }
        },


        backgroundColor: '#f1f8e9'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}



function loaddata(str) {

  //  console.log(typeof (str));
    var Teams_ratings = [
        {
            "handle": "handle",
            "1": "RUET - 01",
            "2": "RUET - 02",
            "3": "RUET -03",
            "4": "Collaborative - 26",
            "5": "Collaborative - 27",
            "team": "team"
        },
        {
            "handle": "KuetEffervescent",
            "1": "1757",
            "2": "1874",
            "3": "1928",
            "4": "1963",
            "5": "1984",
            "team": "Mehrab Hossain Opi '2k17\nArnob Sarker '2k18\nSHarif Minhazul Emon '2k18\\n"
        },
        {
            "handle": "KUET_BreakDown",
            "1": "1177",
            "2": "1487",
            "3": "1697",
            "4": "1660",
            "5": "1682",
            "team": "Md. Mustafizur Rahman Arman '2k17\nMahadi Hasan '2k17\nLikhon Sarker '2k16"
        },
        {
            "handle": "KUET_FALCONS",
            "1": "1595",
            "2": "1621",
            "3": "1561",
            "4": "1693",
            "5": "1738",
            "team": "Sabbir Hossain '2k18\nS.M. Zobayer Abedin '2k19\nSajjad Hossain Sadi '2k19"
        },
        {
            "handle": "KUET_Blaziken",
            "1": "1289",
            "2": "1484",
            "3": "1577",
            "4": "1634",
            "5": "1674",
            "team": "MD. Parvej Mia '2k18\nMd. Naimum Mukim '2k18\nMd. Liad Hossain '2k18"
        },
        {
            "handle": "KUET_Sisyphus",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1506",
            "5": "1590",
            "team": ""
        },
        {
            "handle": "KUET_Musashis",
            "1": "1483",
            "2": "1516",
            "3": "1543",
            "4": "1515",
            "5": "1499",
            "team": "Md. Shoriful Islam '2k18\nNur Mohammed Mehedy Hasan '2k18\nMD. Mehedi Hasan Emon '2k18"
        },
        {
            "handle": "KUET_BUGMAN",
            "1": "1386",
            "2": "1396",
            "3": "1438",
            "4": "1486",
            "5": "1525",
            "team": "Eleus Ahammad '2k19\nZahidul Islam noel '2k19\nAzin Ahamed Zian '2k19\\n"
        },
        {
            "handle": "KUET_Mayhem",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1363",
            "5": "1329",
            "team": ""
        },
        {
            "handle": "KUET_Desperados",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1338",
            "5": "1341",
            "team": ""
        },
        {
            "handle": "trinityRaven",
            "1": "0",
            "2": "1273",
            "3": "0",
            "4": "0",
            "5": "1399",
            "team": ""
        },
        {
            "handle": "Team_Phoenix",
            "1": "1015",
            "2": "1114",
            "3": "1183",
            "4": "1252",
            "5": "1290",
            "team": "Rifah Tasnim Haque Promi '2k17\nSuraiya Akter Mumu '2k17\nSubah Nawar '2k18"
        },
        {
            "handle": "Team_Blackburn",
            "1": "0",
            "2": "0",
            "3": "1252",
            "4": "0",
            "5": "0",
            "team": ""
        },
        {
            "handle": "KUET_Crusaders",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1098",
            "5": "1345",
            "team": ""
        },
        {
            "handle": "Loop_Breakers",
            "1": "0",
            "2": "0",
            "3": "1051",
            "4": "0",
            "5": "0",
            "team": ""
        },
        {
            "handle": "KUET_LAZYCODERS",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1033",
            "5": "1053",
            "team": ""
        },
        {
            "handle": "ShowStoppers",
            "1": "0",
            "2": "0",
            "3": "955",
            "4": "0",
            "5": "1240",
            "team": ""
        },
        {
            "handle": "KUET_EXPLORERS",
            "1": "0",
            "2": "946",
            "3": "0",
            "4": "0",
            "5": "0",
            "team": ""
        },
        {
            "handle": "KUET_Yeti",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "938",
            "5": "0",
            "team": ""
        },
        {
            "handle": "KUET_RANGERS",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "0",
            "5": "1374",
            "team": ""
        },
        {
            "handle": "KUET_Valkyries",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "0",
            "5": "1054",
            "team": ""
        },
        {
            "handle": "kuet_101",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "0",
            "5": "982",
            "team": ""
        },
        {
            "handle": "KUET_Phantoms",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "0",
            "5": "1021",
            "team": ""
        }
    ];

    var col = [];
    for (var i = 0; i < Teams_ratings.length; i++) {
        var f = 0;
        // console.log(Teams_ratings[i]);
        for (var key in Teams_ratings[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
                // if(f==0)
                // console.log(key);
                f = 1;
            }
        }
    }



    var data = [];

   //   console.log("\n\n\n\n"+str+"  : "+col.length);


    for (var i = 0; i < Teams_ratings.length; i++) {
       //   console.log(Teams_ratings[i][col[5]]);
        if (Teams_ratings[i][col[5]] == str) {
            for (var j = 0; j < col.length; j++) {

                //if(j==col.length-2) continue;

                data.push(Teams_ratings[i][col[j]]);
                //console.log(Teams_ratings[i][col[j]]);
            }
            //console.log("paisi");
            break;
        }
    }
    // console.log(data.length);

    return data;
};

function previous(data) {

    var contest_name = [
        "RUET IUPC Practice - 01",
        "RUET IUPC Practice - 02",
        "RUET IUPC Practice - 03",
        "ICPC Collaborative 26",
        "ICPC Collaborative 27"
    ]
    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    console.log(data);

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    var th = document.createElement("th");
    th.innerHTML = "Contest id";
    tr.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "Contest Name";
    tr.appendChild(th);


    // tr = table.insertRow(-1);  
    th = document.createElement("th");
    th.innerHTML = "Changes";
    tr.appendChild(th);

    // tr = table.insertRow(-1);  
    th = document.createElement("th");
    th.innerHTML = "New Rating";
    tr.appendChild(th);

    var last = 1500;
    var max_rating = 0;
    var current_rating = 0;
    for (var i = 0; i < data.length - 2; i++) {
        tr = table.insertRow(-1);
        var tabCell = tr.insertCell(-1);

        tabCell.innerHTML = i + 1;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = contest_name[i];

        var val = parseInt(data[i]);


        tabCell = tr.insertCell(-1);
        if (val == 0) {
            tabCell.innerHTML = ("?").bold();
        }
        else if (val - last >= 0) {
            var new_ = val - last;
            last = val;

            tabCell.style.color = "green";
            tabCell.innerHTML = ("+" + new_).bold();
            
        }

        else {
            var new_ = val - last;
            last = val;


            tabCell.style.color = "red";
            tabCell.innerHTML = ("" + new_).bold();

        }

        tabCell = tr.insertCell(-1);
        if (val == 0 && last != 1500) {
            tabCell.innerHTML = last;
            current_rating = last;
        }
        else{
            tabCell.innerHTML = val;
            current_rating = val;
        }

        max_rating = Math.max(max_rating, val);
    }

    document.getElementById("max_rating").innerHTML = max_rating + " ";
    document.getElementById("curent_rating").innerHTML = current_rating + " ";






    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("previous_changes");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}


function indiFunction() {

    var myParam = location.search.split('id=')[1];
    var data = loaddata(myParam);
    //console.log(data.length);
    //console.log(data);
    google.charts.load('current', { packages: ['corechart', 'line'] });

    google.charts.setOnLoadCallback(drawBackgroundColor(data));
    // for( var i in data){
    //     console.log(i);
    // }
    document.getElementById("Team_name").innerHTML = myParam + " ";
    document.getElementById("team_member").innerHTML = data[data.length - 1] + " ";

    previous(data);





};
