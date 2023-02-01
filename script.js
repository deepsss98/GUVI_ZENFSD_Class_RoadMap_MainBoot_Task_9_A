function upload_details(event)
{
    
    let food="";
    let fname=document.getElementById("first-name").value;
    let lname=document.getElementById("last-name").value;
    let addres=document.getElementById("address").value;
    let pcode=document.getElementById("pincode").value;
    let state=document.getElementById("state_id").value;
    let country=document.getElementById("country_id").value;
    let gender=document.querySelector('input[name="gender"]:checked').value;
    document.querySelectorAll('input[name="cfood"]:checked').forEach(function (element){ 
        food+=element.defaultValue+","; 
    });
    food=food.substring(0,food.length-1);
    
    const table_body_structure=`<tr>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${addres}</td>
    <td>${state}</td>
    <td>${country}</td>
    <td>${pcode}</td>
    <td>${gender}</td>
    <td>${food}</td>
    </tr>`

    document.getElementById("table_body").innerHTML+=table_body_structure;

    let form=document.querySelector("form");
    form.reset();

}



form_validation = (event) => {
    event.preventDefault();
if(document.getElementById("first-name").value === "")
{
     alert("Please fill in the first-name field");
}
else if(document.getElementById("last-name").value === "")
{
     alert("Please fill in the last-name field");
}
else if(document.getElementById("address").value === "")
{
     alert("Please fill in the address field");
}
else if(document.getElementById("pincode").value === "")
{
     alert("Please fill in the pincode field");
}
else if(document.querySelector('input[name="gender"]:checked').value ==="")
{
     alert("Please select the gender field");
}
else if(document.querySelectorAll('input[type="checkbox"]:checked').length <2)
{
     alert("Please select atleast two choice of food");
}
else if(document.getElementById("state_id").value === "")
{
     alert("Please fill in the state field");
}
else if(document.getElementById("country_id").value === "")
{
     alert("Please fill in the country field");
}
else
{
        upload_details(event);
}
};

let btn=document.querySelector("button");
btn.addEventListener("click", form_validation);