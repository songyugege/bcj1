$(document).ready(function(){

    // Start Student Counter function 

        var getcountervalues = document.querySelectorAll('.countervalue');
        // console.log(getcountervalues);


        getcountervalues.forEach(function(getcountervalue){
            // console.log(getcountervalue);

            getcountervalue.textContent = 0;

            const updatecounter = function(){

                const getcttarget = +getcountervalue.getAttribute('data-target');
                // console.log(getcttarget);
                // console.log(typeof getcttarget);

                const getctcontent = +getcountervalue.innerText;
                // console.log(getctcontent);
                // console.log(typeof getctcontent);

                const incnumber = getcttarget/100;
                // console.log(incnumber);

                if(getctcontent < getcttarget){
                    getcountervalue.textContent = getctcontent+incnumber;
                    setTimeout(updatecounter,50);
                }

            }

            updatecounter();

        });


    // End Student Counter Function 

    // Start Footer Section 
    const getyear = document.getElementById('getyear');
    const getfullyear = new Date().getUTCFullYear();
    getyear.textContent = getfullyear;
    // End Footer Section 

    // Start Graduate section 

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
  
        function drawChart() {
  
          var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Myanmar',     8],
            ['Thailand',      2],
            ['Singapore',  4],
            ['Indonesia', 2],
            ['Sirilanka',    8]
          ]);
  
          var options = {
            title: 'international Students',
            width:550,
            height:400
          };
  
          var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  
          chart.draw(data, options);
        }


    // Start Login & sticknote 
        // Start Login
        $("#openform").click(function(){
            document.getElementById('myform').style.display="block";
        });

        $("#closeform").click(function(){
            document.getElementById('myform').style.display="none";
        });
        // End Login
    // End Login & sticknote






});