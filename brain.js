var contact_details=[];
var index=null;
function getdetails()
{
     var details={};
    details.first_name=document.getElementById('first').value;
    if(details.first_name=="")
    {
        return;
    }
    details.last_name=document.getElementById('last').value;
    details.phone_number=document.getElementById('phone_number').value;
    details.Email_id=document.getElementById('mail_id').value;
    details.image="img/user_avatar.png"
    contact_details.push(details)
    //displaydetails(details);
    //alert(Object.keys(contact_details).length);
    myFunction(Object.keys(contact_details).length);    

}
function myFunction(len) {
    //alert(len);
  var im=document.createElement('img');
  im.setAttribute('src',"img/user_avatar.png");
  im.setAttribute('height','25px');
  im.setAttribute('width','25px');
  var del=document.createElement('img');
  del.setAttribute('src','img/info.png');
  del.setAttribute('height','20px');
  del.setAttribute('width','20px');
  del.setAttribute('data-toggle','modal');
  del.setAttribute('data-target','#myModal2');
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4=row.insertCell(3);
  cell1.appendChild(im);
  cell2.innerHTML=document.getElementById('first').value;
  cell3.innerHTML="          ";
  cell4.appendChild(del);
  cell4.onclick=function()
  {
    document.getElementById('first2').innerText=contact_details[len-1].first_name;
    document.getElementById('last2').innerText=contact_details[len-1].last_name;
    document.getElementById('phone_number2').innerText=contact_details[len-1].phone_number;
    document.getElementById('mail_id2').innerText=contact_details[len-1].Email_id;
    document.getElementById('image').src=contact_details[len-1].image;
    index=len-1;
   // alert(index);

  };
  
  
}
function DeleteRow(oButton) {
    var empTab = document.getElementById('myTable');   
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
}

function loadFile(event)
     {
              
        //alert(index);
        contact_details[index].image= URL.createObjectURL(event.target.files[0]);
        document.getElementById('image').src=contact_details[index].image;

    };

function Number_validation()
{
    var phone_pattern = /^\d{10}$/;
    if(document.getElementById('phone_number').value.match(phone_pattern))
    {
        return true;
    }
    else
    {
    alert("Enter valid phone number");    
    return false;
    }
}    
function Email_validation()
{
    var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(document.getElementById('mail_id').value.match(pattern))
    {
        return true;
    }
    else{
        alert('Enter valid Email-Id');
        return false;
    }
}
function FilterNames() {
    var input = document.getElementById("search_input");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
    var i,text,td;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        text= td.textContent || td.innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }