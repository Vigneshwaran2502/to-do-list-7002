var inpname = document.getElementById("name");
var outrows = document.getElementById("rows");
var inpage = document.getElementById("age");
var inpcourse = document.getElementById("course");
var inpemail = document.getElementById("email");
var inpphone = document.getElementById("phone");

function getvalue() {
    
    if (
        !inpname.value.trim() ||
        !inpage.value.trim() ||
        !document.querySelector('input[name="gender"]:checked') ||
        !inpcourse.value.trim() ||
        !inpemail.value.trim() ||
        !inpphone.value.trim()
    ) {
        alert("Please fill all required fields.");
        return;
    }

    var genderRadio = document.querySelector('input[name="gender"]:checked');
    var genderValue = genderRadio ? genderRadio.value : "";
    var coursevalue = inpcourse.value;
    var emailvalue = inpemail.value;
    var phonevalue = inpphone.value;

    var rowitems = document.createElement("tr");
    rowitems.innerHTML = `
        <td>${inpname.value}</td>
        <td>${inpage.value}</td>
        <td>${genderValue}</td>
        <td>${coursevalue}</td>
        <td>${emailvalue}</td>
        <td>${phonevalue}</td>
        <td><button type="button" class="delete-btn">Delete</button></td>
    `;
    outrows.appendChild(rowitems);

    // Add delete functionality
    rowitems.querySelector('.delete-btn').onclick = function() {
        rowitems.remove();
        alert("data deleted successfully");
    };

    // Clear form fields
    inpname.value = "";
    inpage.value = "";
    inpemail.value = "";
    inpcourse.value = "";
    inpphone.value = "";
    if (genderRadio) genderRadio.checked = false;

    alert("data added successfully");
}