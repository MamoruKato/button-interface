// When the user clicks on <div>, open the popup
function openJoystickForm() {
    toggled = true;
    document.getElementById("joyForm").style.display = "block";
    console.log(toggled);
}

function closeJoystickForm() {
    toggled = false;
    document.getElementById("joyForm").style.display = "none";
    console.log(toggled);

}
