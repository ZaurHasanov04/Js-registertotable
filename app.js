let x;
x=8
data=[]

class UserData{
    constructor(_name,_surname,_email,_date){
        this.Name=_name;
        this.Surname=_surname;
        this.Email=_email;
        this.Date=_date;
    }

    showData(){
        console.log(this.Name + " / " +this.Surname)
    }
}

// HTML ve CSS i kod mentigi ile idare etme

// DOM

// div adinda bir element yarat
// yaradilan elemente box adinda class elave et
// yaratdigin div elementini body taglarini icerisine elave et

// for(let i=1;i<10;i++){
//     myDiv=document.createElement('div')
//     myDiv.innerHTML=i;
//     myDiv.setAttribute("class","box")
//     myDiv.style.backgroundColor="blue"
//     document.body.appendChild(myDiv)
// }


// submitBtn e sec
//  click funskiyasi yaz
//  inputlardan datani gotur
// goturulen datalardan obyekt yarad
// objyeti ekranda goster

submitBtn=document.querySelector("#submitBtn")
submitBtn.addEventListener("click",function(){
   userName=document.querySelector('.userName')
   userSurname=document.querySelector('.userSurname')
   userEmail=document.querySelector('.userEmail')
   userBirthDate=document.querySelector('.userBirthDate')
   user=new UserData(userName.value,userSurname.value,userEmail.value,userBirthDate.value)
   data.push(user)
//    mytable=document.createElement('tr')
//    elem=document.querySelector('.tbl');

// var mytable=document.createElement('tr')
// mytable.setAttribute("class","box")

// document.getElementById("myTable").appendChild(mytable)
// for(let i=1; i<5; i++){
//    var mytd=document.createElement('td')
   
   
//    mytable.appendChild(mytd)
   
   
// }




var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = userName.value;
  cell2.innerHTML = userSurname.value;
  cell3.innerHTML=userEmail.value;
  cell4.innerHTML=userBirthDate.value;


})


