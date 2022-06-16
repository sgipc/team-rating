function myFunction() {
  var Teams = [
    {
        "rank": "1",
        "handle": "KuetEffervescent",
        "rating": "1963",
        "contest_count": "4",
        "rating_change": "35",
        "last_contest": "3"
    },
    {
        "rank": "2",
        "handle": "KUET_FALCONS",
        "rating": "1693",
        "contest_count": "4",
        "rating_change": "-4",
        "last_contest": "3"
    },
    {
        "rank": "3",
        "handle": "KUET_BreakDown",
        "rating": "1660",
        "contest_count": "4",
        "rating_change": "99",
        "last_contest": "3"
    },
    {
        "rank": "4",
        "handle": "KUET_Blaziken",
        "rating": "1634",
        "contest_count": "4",
        "rating_change": "57",
        "last_contest": "3"
    },
    {
        "rank": "5",
        "handle": "KUET_Musashis",
        "rating": "1515",
        "contest_count": "4",
        "rating_change": "-28",
        "last_contest": "3"
    },
    {
        "rank": "6",
        "handle": "KUET_Sisyphus",
        "rating": "1506",
        "contest_count": "1",
        "rating_change": "1506",
        "last_contest": "3"
    },
    {
        "rank": "7",
        "handle": "KUET_BUGMAN",
        "rating": "1486",
        "contest_count": "4",
        "rating_change": "48",
        "last_contest": "3"
    },
    {
        "rank": "8",
        "handle": "KUET_Mayhem",
        "rating": "1363",
        "contest_count": "1",
        "rating_change": "1363",
        "last_contest": "3"
    },
    {
        "rank": "9",
        "handle": "KUET_Desperados",
        "rating": "1338",
        "contest_count": "1",
        "rating_change": "1338",
        "last_contest": "3"
    },
    {
        "rank": "10",
        "handle": "trinityRaven",
        "rating": "1273",
        "contest_count": "1",
        "rating_change": "1273",
        "last_contest": "1"
    },
    {
        "rank": "11",
        "handle": "Team_Blackburn",
        "rating": "1252",
        "contest_count": "1",
        "rating_change": "1252",
        "last_contest": "2"
    },
    {
        "rank": "12",
        "handle": "Team_Phoenix",
        "rating": "1252",
        "contest_count": "4",
        "rating_change": "69",
        "last_contest": "3"
    },
    {
        "rank": "13",
        "handle": "KUET_Crusaders",
        "rating": "1098",
        "contest_count": "1",
        "rating_change": "1098",
        "last_contest": "3"
    },
    {
        "rank": "14",
        "handle": "Loop_Breakers",
        "rating": "1051",
        "contest_count": "1",
        "rating_change": "1051",
        "last_contest": "2"
    },
    {
        "rank": "15",
        "handle": "KUET_LAZYCODERS",
        "rating": "1033",
        "contest_count": "1",
        "rating_change": "1033",
        "last_contest": "3"
    },
    {
        "rank": "16",
        "handle": "ShowStoppers",
        "rating": "955",
        "contest_count": "1",
        "rating_change": "955",
        "last_contest": "2"
    },
    {
        "rank": "17",
        "handle": "KUET_EXPLORERS",
        "rating": "946",
        "contest_count": "1",
        "rating_change": "946",
        "last_contest": "1"
    },
    {
        "rank": "18",
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

  // CREATE DYNAMIC TABLE.
  var table = document.createElement("table");

  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1);                   // TABLE ROW.

  for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");      // TABLE HEADER.

      console.log(typeof(col[i][0]));
      console.log(col[i][0]);
      //col[i] = col[i][0].toUpperCase() + col[i].slice(1);
      if( i==5){
        th.innerHTML =col[i][0].toUpperCase() + col[i].slice(1)+"_No";

      }
      else
      th.innerHTML =col[i][0].toUpperCase() + col[i].slice(1);
      tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.

  var last_contest_no = "3";
  for (var i = 0; i < Teams.length; i++) {

      tr = table.insertRow(-1);

      console.log(Teams[i]);
      for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);
         

          if(j==1){
            var link_ = "./teaminfo.html?id="+Teams[i][col[j]];
            var li = "<a href="+link_+">"+Teams[i][col[j]]+"</a>";
            tabCell.innerHTML = li;

          }
          else if(j==5)
          {
            var val = parseInt(Teams[i][col[j]]);
            val+=1;
            tabCell.innerHTML = val;

          }
          else if(j==4){
            if(Teams[i][col[j]]==Teams[i][col[2]]){
              if(Teams[i][col[5]]==last_contest_no)
              {
               
                var add = parseInt(Teams[i][col[j]])-1500;
                 if(add>=0){
                  tabCell.style.color = "green";
                  tabCell.innerHTML = "+"+ add;

                 }
                 else{
                  tabCell.style.color = "red";
                tabCell.innerHTML = add;

                 }
              }
              else{
                tabCell.innerHTML = "?";
              }
              
            }
            else {
              if(parseInt(Teams[i][col[j]])<0){
                tabCell.style.color = "red";
                tabCell.innerHTML = Teams[i][col[j]];
              }
              // else if( parseInt(Teams[i][col[j]])>0) {
                else{
  
                  tabCell.style.color = "green";
                  tabCell.innerHTML = "+"+ Teams[i][col[j]];
              }
              
            }
           
          }

          else
          tabCell.innerHTML = Teams[i][col[j]];
      }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById("showData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
};
