


google.charts.load('current', {packages: ['corechart', 'line']});

function drawBackgroundColor(getdata) {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Rating');

    var tempdata = [];
    var c = []
    //tempdata.push(c);

    for( var i =0;i<getdata.length-2;i++)
    {
        var val = getdata[i];
        if(val=="0"){
            continue;
        }
        else{
            var point = [i+1, parseInt(val)];
            console.log(typeof(val));
            tempdata.push(point);
        }
    }

    console.log(tempdata.length+"  temp");
    data.addRows(tempdata);

    var maxx= data.length;


    var options = {
      hAxis: {
        title: 'Contest No.',
        format :'0'
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
      gridlines: { count: -1},
      series: {
        0: { pointShape: 'circle'}
    },
      
      
      backgroundColor: '#f1f8e9'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }



function loaddata(str) {

    console.log(typeof(str));
    var Teams_ratings = [
        {
            "handle": "name",
            "1": "RUET practice - 01",
            "2": "RUET practice - 02",
            "3": "RUET practice - 03",
            "4": "ICPC Collaborative - 26",
            "team":"team_"
        },
        {
            "handle": "KuetEffervescent",
            "1": "1757",
            "2": "1874",
            "3": "1930",
            "4": "1964",
            "team":"Mehrab Hossain Opi '2k17\nArnob Sarker '2k18\nSHarif Minhazul Emon '2k18\n"
        },
        {
            "handle": "KUET_BreakDown",
            "1": "1483",
            "2": "1642",
            "3": "1654",
            "4": "1716",
            "team":"Md. Mustafizur Rahman Arman '2k17\nMahadi Hasan '2k17\nLikhon Sarker '2k16"
        },
        {
            "handle": "KUET_FALCONS",
            "1": "1595",
            "2": "1621",
            "3": "1702",
            "4": "1699",
            "team":""
        },
        {
            "handle": "KUET_Blaziken",
            "1": "1177",
            "2": "1431",
            "3": "1566",
            "4": "1633",
            "team":""
        },
        {
            "handle": "KUET_Sisyphus",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1516",
            "team":""
        },
        {
            "handle": "KUET_Musashis",
            "1": "1386",
            "2": "1458",
            "3": "1501",
            "4": "1481",
            "team":""
        },
        {
            "handle": "KUET_BUGMAN",
            "1": "1289",
            "2": "1338",
            "3": "1391",
            "4": "1447",
            "team":""
        },
        {
            "handle": "KUET_Mayhem",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1358",
            "team":""
        },
        {
            "handle": "KUET_Desperados",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1330",
            "team":""
        },
        {
            "handle": "trinityRaven",
            "1": "0",
            "2": "1273",
            "3": "0",
            "4": "0",
            "team":""
        },
        {
            "handle": "Team_Phoenix",
            "1": "1015",
            "2": "1114",
            "3": "1179",
            "4": "1246",
            "team":""
        },
        {
            "handle": "Team_Blackburn",
            "1": "0",
            "2": "",
            "3": "1231",
            "4": "0",
            "team":""
        },
        {
            "handle": "KUET_Crusaders",
            "1": "0",
            "2": "",
            "3": "0",
            "4": "1090",
            "team":""
        },
        {
            "handle": "Loop_Breakers",
            "1": "0",
            "2": "",
            "3": "1043",
            "4": "0",
            "team":""
        },
        {
            "handle": "KUET_LAZYCODERS",
            "1": "0",
            "2": "",
            "3": "0",
            "4": "1027",
            "team":""
        },
        {
            "handle": "ShowStoppers",
            "1": "0",
            "2": "",
            "3": "951",
            "4": "0",
            "team":""
        },
        {
            "handle": "KUET_EXPLORERS",
            "1": "0",
            "2": "946",
            "3": "0",
            "4": "0",
            "team":""
        },
        {
            "handle": "KUET_Yeti",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "934",
            "team":""
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
                f=1;
            }
        }
    }



    var data = [];

  //  console.log("\n\n\n\n"+str+"  : "+col.length);


    for (var i = 0; i < Teams_ratings.length; i++) {
      //  console.log(Teams_ratings[i][col[4]]);
        if (Teams_ratings[i][col[4]] == str) {
            for (var j = 0; j < col.length; j++) {

                //if(j==col.length-2) continue;

                data.push(Teams_ratings[i][col[j]]);
                console.log(Teams_ratings[i][col[j]]);
            }
            console.log("paisi");
            break;
        }
    }
   // console.log(data.length);

    return data;
};

function previous(data)
{

    var contest_name = [
        "RUET IUPC Practice - 01",
        "RUET IUPC Practice - 02",
        "RUET IUPC Practice - 03",
        "ICPC Collaborative 26"
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
  for(var i = 0;i<data.length-2;i++){
    tr = table.insertRow(-1);
    var tabCell = tr.insertCell(-1);

    tabCell.innerHTML = i+1;
    tabCell = tr.insertCell(-1);
    tabCell.innerHTML = contest_name[i];

    var val = parseInt(data[i]);
    

    tabCell = tr.insertCell(-1);
    if(val==0){
        tabCell.innerHTML = ("0").bold();
    }
    else if(val-last>=0 )
    {
        var new_ = val - last;
        last = val;
        
        tabCell.style.color = "green";
        tabCell.innerHTML = ("+"+new_).bold();
    }
    else{ 
        var new_ = val - last;
        last = val;


        tabCell.style.color = "red";
        tabCell.innerHTML = (""+new_).bold();

    }

    tabCell = tr.insertCell(-1);
    tabCell.innerHTML = val;



        
}




  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById("previous_changes");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);

}


function indiFunction() {

   

    var myParam = location.search.split('id=')[1];
    var data = loaddata(myParam);
    console.log(data.length);
    console.log(data);
    google.charts.load('current', {packages: ['corechart', 'line']});

    google.charts.setOnLoadCallback(drawBackgroundColor(data));
    // for( var i in data){
    //     console.log(i);
    // }
    document.getElementById("Team_name").innerHTML = myParam + " ";
    document.getElementById("team_member").innerHTML = data[data.length-1] + " ";

    previous(data);





};
