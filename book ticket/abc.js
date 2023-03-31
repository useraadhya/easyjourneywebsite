const from=document.getElementById('from')
 const to=document.getElementById('to')
 const date=document.getElementById('date')
content=document.getElementById('')
 //use backticks if we want to write html code in script tag
 
  function search()
 {    
event.preventDefault();
  console.log(date)
    let data="";
     url=`https://railway-w6eh.onrender.com/proxy?from=${from.value}&to=${to.value}&date=${date.value}`;
     fetch(url).then((response)=>{
       return response.json();
     }).then((trains)=>{
      

 if (from.value=="" || to.value=="" || date.value=="")
      {
        // alert('Input field is empty,please fill the complete details')
    console.log('hii')}
   
    else{
      console.log(trains)
      console.log((trains.data[0]));
      console.log(trains.data.length);

  for(i=0;i<trains.data.length;i++){
   console.log(trains.data[i].train_base.train_name);
data+=
   `<div class=trains_indi> <div class="col1" ><div id="col1row1">${trains.data[i].train_base.train_name}</div>
        <br ><div id="col1row2" >${trains.data[i].train_base.train_no}</div>
    </div>
   <div class="col2">
    <div id="col2row1">${trains.data[i].train_base.from_time}</div>
    <br><div id="col2row2" >${trains.data[i].train_base.from_stn_name}</div>
   </div>
   <div class="col3"><span class="circle-1 pull-left"></span>
    <span class="circle-2 pull-right"></span>
    <span class="divider-line"></span>
    ${trains.data[i].train_base.travel_time} hours</div>

   <div class="col4">
    <div id="col4row1">${trains.data[i].train_base.to_time}</div>
    <br ><div id="col4row2">${trains.data[i].train_base.to_stn_name}</div>
   </div></div>
   <br>`
   

 
        document.querySelector('.bgd-color').style.display='flex';
  window.scrollTo(0,document.body.scrollHeight);
  //document.body.scrollheight -to scroll to bottom
 }
 data+=`<center><a class="link-redirect" target="_blank" href="https://www.railyatri.in/train-ticket?utm_source=tt_landing_dweb_header_ttb">BOOK TICKET<a></center>
  <br>
  <center><a target="_blank" href="http://127.0.0.1:5504/tourist_places.html">SEARCH FOR TOURIST PLACES</a></center> `
  document.getElementById("table-body").innerHTML=data;
}}
 
 )}
   
//  search()
  //  document.getElementById('close').addEventListener('click',
  //   function(){
  //       document.querySelector('.bgd-color').style.display='none';
    // });
   