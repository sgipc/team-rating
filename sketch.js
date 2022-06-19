function myFunction() {
  var Teams = [
    {
        "rank": "1",
        "handle": "KuetEffervescent",
        "rating": "1984",
        "contest_count": "5",
        "rating_change": "21",
        "last_contest": "4"
    },
    {
        "rank": "2",
        "handle": "KUET_FALCONS",
        "rating": "1738",
        "contest_count": "5",
        "rating_change": "45",
        "last_contest": "4"
    },
    {
        "rank": "3",
        "handle": "KUET_BreakDown",
        "rating": "1682",
        "contest_count": "5",
        "rating_change": "22",
        "last_contest": "4"
    },
    {
        "rank": "4",
        "handle": "KUET_Blaziken",
        "rating": "1674",
        "contest_count": "5",
        "rating_change": "40",
        "last_contest": "4"
    },
    {
        "rank": "5",
        "handle": "KUET_Sisyphus",
        "rating": "1590",
        "contest_count": "2",
        "rating_change": "84",
        "last_contest": "4"
    },
    {
        "rank": "6",
        "handle": "KUET_BUGMAN",
        "rating": "1525",
        "contest_count": "5",
        "rating_change": "39",
        "last_contest": "4"
    },
    {
        "rank": "7",
        "handle": "KUET_Musashis",
        "rating": "1499",
        "contest_count": "5",
        "rating_change": "-16",
        "last_contest": "4"
    },
    {
        "rank": "8",
        "handle": "trinityRaven",
        "rating": "1399",
        "contest_count": "2",
        "rating_change": "126",
        "last_contest": "4"
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
        "handle": "KUET_Crusaders",
        "rating": "1345",
        "contest_count": "2",
        "rating_change": "247",
        "last_contest": "4"
    },
    {
        "rank": "11",
        "handle": "KUET_Desperados",
        "rating": "1341",
        "contest_count": "2",
        "rating_change": "3",
        "last_contest": "4"
    },
    {
        "rank": "12",
        "handle": "KUET_Mayhem",
        "rating": "1329",
        "contest_count": "2",
        "rating_change": "-34",
        "last_contest": "4"
    },
    {
        "rank": "13",
        "handle": "Team_Phoenix",
        "rating": "1290",
        "contest_count": "5",
        "rating_change": "38",
        "last_contest": "4"
    },
    {
        "rank": "14",
        "handle": "Team_Blackburn",
        "rating": "1252",
        "contest_count": "1",
        "rating_change": "1252",
        "last_contest": "2"
    },
    {
        "rank": "15",
        "handle": "ShowStoppers",
        "rating": "1240",
        "contest_count": "2",
        "rating_change": "285",
        "last_contest": "4"
    },
    {
        "rank": "16",
        "handle": "KUET_Valkyries",
        "rating": "1054",
        "contest_count": "1",
        "rating_change": "1054",
        "last_contest": "4"
    },
    {
        "rank": "17",
        "handle": "KUET_LAZYCODERS",
        "rating": "1053",
        "contest_count": "2",
        "rating_change": "20",
        "last_contest": "4"
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

  Teams.sort((a, b)=>
  {
    if(parseInt(a.rating)==parseInt(b.rating)){
      if(parseInt(a.contest_count)<parseInt(b.contest_count)){
        return 1;
      }
      else{
        return -1;
      }
    }
    else{
      if(parseInt(a.rating)<parseInt(b.rating))
      {
        return 1;
      }
      else{
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

  var last_contest_no = "4";
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
                  tabCell.innerHTML = ("+"+ add).bold();

                 }
                 else{
                  tabCell.style.color = "red";
                tabCell.innerHTML = (""+add).bold();

                 }
              }
              else{
                tabCell.innerHTML = "?";
              }
              
            }
            else {
              if(parseInt(Teams[i][col[j]])<0){
                tabCell.style.color = "red";
                tabCell.innerHTML = (Teams[i][col[j]]).bold();
              }
              // else if( parseInt(Teams[i][col[j]])>0) {
                else{
  
                  tabCell.style.color = "green";
                  tabCell.innerHTML = ("+"+ Teams[i][col[j]]).bold();
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
