$(document).ready(function(){
    addcarousel();
    addmodal();
    addcourse();
    addEvent();
    courses();
    events()
   function addcarousel() {
       const url = "https://run.mocky.io/v3/f1f1176b-6eca-4c79-9984-45da7ecb7f22";
       //https://api.myjson.com/bins/a24j4
       fetch(url)
           .then(function (response) {
               return response.json()
           })

           .then(function (data) {
               let s= data.results;
               $('.carousel-caption').innerHTML=" ";
               for(let j of s) {
                   let name=j.name.first;
                   let price=j.name.last;
                   let pic=j.picture.large;

                   
                   $(`<div class="carousel-item"><img src=${pic} width="100%" height="400px" class="overlay"><div class="carousel-caption"><a href="coursedetail.html"><h5>${name}</h5><br/><h6>${price}</h6><button class="btn btn-info btn-sm">ثبت نام</button></a></div>  </div>`).appendTo('.carousel-inner');
                   $(`<li data-target="#slider1" data-slide-to="${j}"></li>`).appendTo('.carousel-indicators')
               }

               $('.carousel-item').first().addClass('active');
               $('.carousel-indicators > li').first().addClass('active');
               $('#slider1').carousel();
           });
   }
   function addmodal() {
       const url = "https://run.mocky.io/v3/f1f1176b-6eca-4c79-9984-45da7ecb7f22"
       //https://api.myjson.com/bins/a24j4
       fetch(url)
           .then(function (response) {
               return response.json()
           })

           .then(function (data) {
               let s= data.results;
                   let name=s[0].name.first;
                   let price=s[0].name.last;
                   $(`<p class="text-right">${name}</p><br/><p class="text-right">${price}</p>`).appendTo('.facilities');
           });
   }
   function addcourse() {
       const url = "https://run.mocky.io/v3/f1f1176b-6eca-4c79-9984-45da7ecb7f22"
       //https://api.myjson.com/bins/ybxh4
       //https://api.myjson.com/bins/1ch89w
       fetch(url)
           .then(function (response) {
               return response.json()
           })

           .then(function (data) {
               let s= data.results;
               if(s.length > 3){
               for (let j=0 ;j<3 ;j++) {
                   let name=s[j].name.first;
                   let price=s[j].name.last;
                   let date=s[j].gender;
                   $(`<li class="course text-right"><a href="coursedetail.html"><h6>${name}</h6></a><p class="text-muted mt-3">${date}<br>${price}</p><hr></li>`).appendTo('.courses');
               }
               for(j=3;j<5;j++){
                   let name=s[j].name.first;
                   let teacher=s[j].name.title;
                   let place=s[j].location.street.name;
                   let date=s[j].gender;
                   let price=s[j].name.last;
                   let pic=s[j].picture.large;
                   $(`<div class="card mb-2"><div class="row "><div class="col-md-4 align-self-center"><a href="coursedetail.html"><img src= ${pic} alt="" class="card-img img-fluid pr-3"></div> <div class="col-md-8"> <div class="card-body"><h6 class="card-title text-right">${name}</h6></a> <p class="card-text text-muted text-right"> <i class="fas fa-map-marker fa-sm  pl-2"></i>${place}<br><i class="fas fa-user fa-sm pl-2"></i>  ${teacher}  <br> <i class="far fa-clock fa-sm pl-2"></i> ${date}<br><i class="fas fa-dollar-sign fa-sm pl-2"></i> ${price} <a href="coursedetail.html" class="btn btn-sormei btn-sm mb-2">ثبت نام</a></p></div></div></div></div>`).appendTo('.course-img');

                   }
               }
              else if(s.length == 3){
                  for (let j=0;j<2;j++){
                       let name=s[j].name.first;
                       let price=s[j].name.last;
                       let date=s[j].gender;
                      $(`<li class="course text-right"><a href="coursedetail.html"><h6>${name}</h6></a><p class="text-muted mt-3">${date}<br>${price}</p><hr></li>`).appendTo('.courses');
                  }
                   for(j=2;j<3;j++){
                       let name=s[j].name.first;
                       let teacher=s[j].name.title;
                       let place=s[j].location.street.name;
                       let date=s[j].gender;
                       let price=s[j].name.last;
                       let pic=s[j].picture.large;
                       $(`<div class="card mb-2"><div class="row "><div class="col-md-4 align-self-center"><a href="coursedetail.html"><img src= ${pic} alt="" class="card-img img-fluid pr-3"></div> <div class="col-md-8"> <div class="card-body"><h6 class="card-title text-right">${name}</h6></a> <p class="card-text text-muted text-right"> <i class="fas fa-map-marker fa-sm  pl-2"></i>${place}<br><i class="fas fa-user fa-sm pl-2"></i>  ${teacher}  <br> <i class="far fa-clock fa-sm pl-2"></i> ${date}<br><i class="fas fa-dollar-sign fa-sm pl-2"></i> ${price} <a href="coursedetail" class="btn btn-sormei btn-sm mb-2">ثبت نام</a></p></div></div></div></div>`).appendTo('.course-img');

                   }
               }
              else if(s.length=2 || s.length==1){
                   for (let j=0 ;j<1 ;j++) {
                       let name=s[j].name.first;
                       let price=s[j].name.last;
                       let date=s[j].gender;
                       $(`<li class="course text-right"><a href="coursedetail.html"><h6>${name}</h6></a><p class="text-muted mt-3">${date}<br>${price}</p><hr></li>`).appendTo('.courses');
                   }
                   if(s.length>1){
                   for(j=1;j<3;j++){
                       let name=s[j].name.first;
                       let teacher=s[j].name.title;
                       let place=s[j].location.street.name;
                       let date=s[j].gender;
                       let price=s[j].name.last;
                       let pic=s[j].picture.large;
                       $(`<div class="card mb-2"><div class="row "><div class="col-md-4 align-self-center"><a href="coursedetail.html"><img src= ${pic} alt="" class="card-img img-fluid pr-3"></div> <div class="col-md-8"> <div class="card-body"><h6 class="card-title text-right">${name}</h6></a> <p class="card-text text-muted text-right"> <i class="fas fa-map-marker fa-sm  pl-2"></i>${place}<br><i class="fas fa-user fa-sm pl-2"></i>  ${teacher}  <br> <i class="far fa-clock fa-sm pl-2"></i> ${date}<br><i class="fas fa-dollar-sign fa-sm pl-2"></i> ${price} <a href="coursedetail.html" class="btn btn-sormei btn-sm mb-2">ثبت نام</a></p></div></div></div></div>`).appendTo('.course-img');

                   }
                   }
               }
           });
   }
   function addEvent() {
       const url = "https://run.mocky.io/v3/f1f1176b-6eca-4c79-9984-45da7ecb7f22";
       fetch(url)
           .then(function (response) {
               return response.json()
           })

           .then(function (data) {
               var x = window.matchMedia("(max-width: 767px)")
               let s= data.results;
                   for(let j=0;j<3;j++) {
                       let name=s[j].name.first;
                       let place=s[j].location.street.name;
                       let date=s[j].gender;
                       let price=s[j].name.last;
                       let pic=s[j].picture.large;
                       $(`<div class="col-md-4 card mb-5 mx-2"><a href="#"><img src=${pic} alt="" class="card-img-top"><div class="card-body"> <h6 class="card-title text-right">${name}</h6> </a><p class="card-text text-right">  <i class="fas fa-map-marker pl-2"></i>${place} </p> <p class="card-text text-right"> <i class="far fa-clock pl-2"></i>${date} </p><hr><a href="https://evand.com" class="btn btn-sormei btn-block mt-2">ثبت نام</a> </div> </div>`).appendTo('.event');

                   }
           });
   }
//for select option -courses page
    $(function () {
        $(".select").select2();
    });
    //end of search
    //course page
    function courses() {
        const url = "https://run.mocky.io/v3/f4229847-f8cc-4f7e-bff9-dc00fdea9a8d";
        //4ta  https://api.myjson.com/bins/ybxh4
        //10 ta   https://api.myjson.com/bins/igcjo
        //30 ta https://api.myjson.com/bins/pqqj8
        fetch(url)
            .then(function (response) {
                return response.json()
            })

            .then(function (data) {

                let s= data.results;
                    for(let j=0;j<6;j++) {
                        let name=s[j].name.first;
                        let teacher=s[j].name.title;
                        let place=s[j].location.street.name;
                        let date=s[j].gender;
                        let price=s[j].name.last;
                        let pic=s[j].picture.large;
                        $(`<div class="col-md-4"><div class="card mb-5"><img src=${pic} alt="" class="card-img-top mx-auto"><div class="card-body"> <h6 class="card-title text-right">${name}</h6> <p class="card-text text-right">  <i class="fas fa-map-marker pl-2"></i>${place}<br><br><i class="fas fa-user fa-sm pl-2"></i>  ${teacher} <br> <br><i class="far fa-clock fa-sm pl-2"></i> ${date}<br><br><i class="fas fa-dollar-sign fa-sm pl-2"></i> ${price}<a href="coursedetail.html" class="btn btn-sormei btn-sm">ثبت نام</a></p> </div> </div></div>`).appendTo('.coursecontent');
                    }

                if (s.length>6){
                   $('.loadmore').on('click',function () {
                        for(let j=6;j<s.length;j++) {
                            let name=s[j].name.first;
                            let teacher=s[j].name.title;
                            let place=s[j].location.street.name;
                            let date=s[j].gender;
                            let price=s[j].name.last;
                            let pic=s[j].picture.large;
                            $(`<div class="col-md-4"><div class="card mb-5"><img src=${pic} alt="" class="card-img-top mx-auto"><div class="card-body"> <h6 class="card-title text-right">${name}</h6> <p class="card-text text-right">  <i class="fas fa-map-marker pl-2"></i>${place}<br><br><i class="fas fa-user fa-sm pl-2"></i>  ${teacher} <br> <br><i class="far fa-clock fa-sm pl-2"></i> ${date}<br><br><i class="fas fa-dollar-sign fa-sm pl-2"></i> ${price}<a href="coursedetail.html" class="btn btn-sormei btn-sm">ثبت نام</a></p> </div> </div></div>`).appendTo('.coursecontent');

                        }

                        $('.loadmore').hide()
                    })
                }


            });
    }

    /*load more courses
               $(document).infiniteJscroll({
                        bottomOfPage:function(){
                           courses();
                        }
                    });*/



/*  $(document).scroll({
                        bottomOfPage:function(){
                            for(let j=6;j<s.length;j++) {
                                if(j!== s.length){
                                let name=s[j].name.first;
                                let teacher=s[j].name.title;
                                let place=s[j].location.street.name;
                                let date=s[j].gender;
                                let price=s[j].name.last;
                                let pic=s[j].picture.large;
                                $(`<div class="col-md-4"><div class="card mb-5"><img src=${pic} alt="" class="card-img-top mx-auto"><div class="card-body"> <h6 class="card-title text-right">${name}</h6> <p class="card-text text-right">  <i class="fas fa-map-marker pl-2"></i>${place}<br><br><i class="fas fa-user fa-sm pl-2"></i>  ${teacher} <br> <br><i class="far fa-clock fa-sm pl-2"></i> ${date}<br><br><i class="fas fa-dollar-sign fa-sm pl-2"></i> ${price}<a href="google.com" class="btn btn-sormei mb-2">ثبت نام</a></p> </div> </div></div>`).appendTo('.coursecontent');
                            }
                            }
                        }
                    });*/

//events page
    function events() {
        const url = "https://run.mocky.io/v3/f4229847-f8cc-4f7e-bff9-dc00fdea9a8d";
        //4ta  https://api.myjson.com/bins/ybxh4
        //10 ta  https://api.myjson.com/bins/16k04i
        //30 ta https://api.myjson.com/bins/pqqj8
        fetch(url)
            .then(function (response) {
                return response.json()
            })

            .then(function (data) {

                let s= data.results;
                for(let j=0;j<6;j++) {
                    let name=s[j].name.first;
                    let place=s[j].location.street.name;
                    let date=s[j].gender;
                    let pic=s[j].picture.large;
                    $(`<div class="col-md-4"><div class="card mb-5"><img src=${pic} alt="" class="card-img-top mx-auto"><div class="card-body"> <h6 class="card-title text-right">${name}</h6> <p class="card-text text-right">  <i class="fas fa-map-marker pl-2"></i>${place}<br><br><i class="far fa-clock fa-sm pl-2"></i> ${date}<hr><a href="google.com" class="btn btn-sormei btn-block btn-sm">ثبت نام</a></p> </div> </div></div>`).appendTo('.eventcontent');
                }

                if (s.length>6){
                    $('.loadmore').on('click',function () {
                        for(let j=6;j<s.length;j++) {
                            let name=s[j].name.first;
                            let place=s[j].location.street.name;
                            let date=s[j].gender;
                            let pic=s[j].picture.large;
                            $(`<div class="col-md-4"><div class="card mb-5"><img src=${pic} alt="" class="card-img-top mx-auto"><div class="card-body"> <h6 class="card-title text-right">${name}</h6> <p class="card-text text-right">  <i class="fas fa-map-marker pl-2"></i>${place}<br> <br><i class="far fa-clock fa-sm pl-2"></i> ${date}<hr><a href="google.com" class="btn btn-sormei btn-block btn-sm">ثبت نام</a></p> </div> </div></div>`).appendTo('.eventcontent');
                        }

                        $('.loadmore').hide()
                    })
                }


            });
    }


//classdetail page
    $('.dropify').dropify();



});


//coursecreatepg2 page
const $tableID = $('#table');
const $BTN = $('#export-btn');
const $EXPORT = $('#export');

const newTr = `
<tr class="hide">
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half">
    <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
    <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
  </td>
  <td>
    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Remove</button></span>
  </td>
</tr>`;

$('.table-add').on('click', 'i', () => {

    const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');

    if ($tableID.find('tbody tr').length === 0) {

        $('.tbody').append(newTr);
    }

    $tableID.find('table').append($clone);
});

$tableID.on('click', '.table-remove', function () {

    $(this).parents('tr').detach();
});

$tableID.on('click', '.table-up', function () {

    const $row = $(this).parents('tr');

    if ($row.index() === 1) {
        return;
    }

    $row.prev().before($row.get(0));
});

$tableID.on('click', '.table-down', function () {

    const $row = $(this).parents('tr');
    $row.next().after($row.get(0));
});

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN.on('click', () => {

    const $rows = $tableID.find('tr:not(:hidden)');
    const headers = [];
    const data = [];

    // Get the headers (add special header logic here)
    $($rows.shift()).find('th:not(:empty)').each(function () {

        headers.push($(this).text().toLowerCase());
    });

    // Turn all existing rows into a loopable array
    $rows.each(function () {
        const $td = $(this).find('td');
        const h = {};

        // Use the headers from earlier to name our hash keys
        headers.forEach((header, i) => {

            h[header] = $td.eq(i).text();
        });

        data.push(h);
    });

    // Output the result
    $EXPORT.text(JSON.stringify(data));
});

/*for second table in coursecreatepg2*/
const $tableID2 = $('#table2');
const $BTN2 = $('#export-btn2');
const $EXPORT2 = $('#export2');

const newTr2 = `
<tr class="hide2">
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half">
    <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
    <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
  </td>
  <td>
    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Remove</button></span>
  </td>
</tr>`;

$('.table-add2').on('click', 'i', () => {

    const $clone2 = $tableID2.find('tbody tr').last().clone(true).removeClass('hide2 table-line');

    if ($tableID2.find('tbody tr').length === 0) {

        $('.tbody2').append(newTr2);
    }

    $tableID2.find('table').append($clone2);
});

$tableID2.on('click', '.table-remove', function () {

    $(this).parents('tr').detach();
});

$tableID2.on('click', '.table-up', function () {

    const $row = $(this).parents('tr');

    if ($row.index() === 1) {
        return;
    }

    $row.prev().before($row.get(0));
});

$tableID2.on('click', '.table-down', function () {

    const $row = $(this).parents('tr');
    $row.next().after($row.get(0));
});

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN2.on('click', () => {

    const $rows = $tableID2.find('tr:not(:hidden)');
    const headers = [];
    const data = [];

    // Get the headers (add special header logic here)
    $($rows.shift()).find('th:not(:empty)').each(function () {

        headers.push($(this).text().toLowerCase());
    });

    // Turn all existing rows into a loopable array
    $rows.each(function () {
        const $td = $(this).find('td');
        const h = {};

        // Use the headers from earlier to name our hash keys
        headers.forEach((header, i) => {

            h[header] = $td.eq(i).text();
        });

        data.push(h);
    });

    // Output the result
    $EXPORT2.text(JSON.stringify(data));
});
/*login page*/
function openPage(pageName) {
    // Hide all elements with class="tabcontent" by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen").focus();
//end of tabs --login page

//coursecreate page--adding tags
function tagadder() {
    $('#tags').val('');
}



