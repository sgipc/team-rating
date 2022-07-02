function myFunction() {
  var Teams = [
    {
      "rank": "1",
      "handle": "KuetEffervescent",
      "rating": "1996",
      "contest_count": "6",
      "rating_change": "12",
      "last_contest": "5"
    },
    {
      "rank": "2",
      "handle": "KUET_FALCONS",
      "rating": "1766",
      "contest_count": "6",
      "rating_change": "28",
      "last_contest": "5"
    },
    {
      "rank": "3",
      "handle": "KUET_Blaziken",
      "rating": "1698",
      "contest_count": "6",
      "rating_change": "24",
      "last_contest": "5"
    },
    {
      "rank": "4",
      "handle": "KUET_BreakDown",
      "rating": "1689",
      "contest_count": "6",
      "rating_change": "7",
      "last_contest": "5"
    },
    {
      "rank": "5",
      "handle": "KUET_Sisyphus",
      "rating": "1584",
      "contest_count": "3",
      "rating_change": "-6",
      "last_contest": "5"
    },
    {
      "rank": "6",
      "handle": "KUET_BUGMAN",
      "rating": "1541",
      "contest_count": "6",
      "rating_change": "16",
      "last_contest": "5"
    },
    {
      "rank": "7",
      "handle": "KUET_Musashis",
      "rating": "1535",
      "contest_count": "6",
      "rating_change": "36",
      "last_contest": "5"
    },
    {
      "rank": "8",
      "handle": "trinityRaven",
      "rating": "1383",
      "contest_count": "3",
      "rating_change": "-16",
      "last_contest": "5"
    },
    {
      "rank": "9",
      "handle": "KUET_RANGERS",
      "rating": "1374",
      "contest_count": "1",
      "rating_change": "1374",
      "last_contest": "4"
    },
    {
      "rank": "10",
      "handle": "ShowStoppers",
      "rating": "1349",
      "contest_count": "3",
      "rating_change": "109",
      "last_contest": "5"
    },
    {
      "rank": "11",
      "handle": "KUET_Crusaders",
      "rating": "1345",
      "contest_count": "2",
      "rating_change": "247",
      "last_contest": "4"
    },
    {
      "rank": "12",
      "handle": "KUET_Desperados",
      "rating": "1341",
      "contest_count": "2",
      "rating_change": "3",
      "last_contest": "4"
    },
    {
      "rank": "13",
      "handle": "KUET_Mayhem",
      "rating": "1340",
      "contest_count": "3",
      "rating_change": "11",
      "last_contest": "5"
    },
    {
      "rank": "14",
      "handle": "Team_Phoenix",
      "rating": "1257",
      "contest_count": "6",
      "rating_change": "-33",
      "last_contest": "5"
    },
    {
      "rank": "15",
      "handle": "Team_Blackburn",
      "rating": "1252",
      "contest_count": "1",
      "rating_change": "1252",
      "last_contest": "2"
    },
    {
      "rank": "16",
      "handle": "KUET_Valkyries",
      "rating": "1227",
      "contest_count": "2",
      "rating_change": "173",
      "last_contest": "5"
    },
    {
      "rank": "17",
      "handle": "KUET_LAZYCODERS",
      "rating": "1114",
      "contest_count": "3",
      "rating_change": "61",
      "last_contest": "5"
    },
    {
      "rank": "18",
      "handle": "Loop_Breakers",
      "rating": "1051",
      "contest_count": "1",
      "rating_change": "1051",
      "last_contest": "2"
    },
    {
      "rank": "19",
      "handle": "KUET_Phantoms",
      "rating": "1021",
      "contest_count": "1",
      "rating_change": "1021",
      "last_contest": "4"
    },
    {
      "rank": "20",
      "handle": "kuet_101",
      "rating": "982",
      "contest_count": "1",
      "rating_change": "982",
      "last_contest": "4"
    },
    {
      "rank": "21",
      "handle": "KUET_EXPLORERS",
      "rating": "946",
      "contest_count": "1",
      "rating_change": "946",
      "last_contest": "1"
    },
    {
      "rank": "22",
      "handle": "KUET_Yeti",
      "rating": "938",
      "contest_count": "1",
      "rating_change": "938",
      "last_contest": "3"
    }
  ]

  // EXTRACT VALUE FOR HTML HEADER. 
  // ('Book ID', 'Book Name', 'Category' and 'Price')
  var col = [];
  for (var i = 0; i < Teams.length; i++) {
    for (var key in Teams[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  Teams.sort((a, b) => {
    if (parseInt(a.rating) == parseInt(b.rating)) {
      if (parseInt(a.contest_count) < parseInt(b.contest_count)) {
        return 1;
      }
      else {
        return -1;
      }
    }
    else {
      if (parseInt(a.rating) < parseInt(b.rating)) {
        return 1;
      }
      else {
        return -1;
      }
    }
  });



  // CREATE DYNAMIC TABLE.
  var table = document.createElement("table");

  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1);                   // TABLE ROW.

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");      // TABLE HEADER.

    console.log(typeof (col[i][0]));
    console.log(col[i][0]);
    //col[i] = col[i][0].toUpperCase() + col[i].slice(1);
    if (i == 5) {
      th.innerHTML = col[i][0].toUpperCase() + col[i].slice(1) + "_No";

    }
    else
      th.innerHTML = col[i][0].toUpperCase() + col[i].slice(1);
    tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.

  var last_contest_no = "5";
  for (var i = 0; i < Teams.length; i++) {

    tr = table.insertRow(-1);

    console.log(Teams[i].rank, Teams[i].rating, Teams[i].last_contest);

    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = Teams[i].rank;

    tabCell = tr.insertCell(-1);
    var link_ = "./teaminfo.html?id=" + Teams[i].handle;
    var li = "<a href=" + link_ + ">" + Teams[i].handle + "</a>";
    tabCell.innerHTML = li;

    tabCell = tr.insertCell(-1);
    tabCell.innerHTML = Teams[i].rating;

    tabCell = tr.insertCell(-1);
    tabCell.innerHTML = Teams[i].contest_count;

    tabCell = tr.insertCell(-1);
    if (Teams[i].last_contest == last_contest_no) 
    {

      var add = parseInt(Teams[i].rating_change);
      if (add >= 0) {
        tabCell.style.color = "green";
        tabCell.innerHTML = ("+" + add).bold();

      }
      else {
        tabCell.style.color = "red";
        tabCell.innerHTML = ("" + add).bold();
      }

    }
    else {
      tabCell.innerHTML = "?";

    }

    tabCell = tr.insertCell(-1);
    tabCell.innerHTML=  parseInt(Teams[i].last_contest)+1;

  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById("showData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
};
