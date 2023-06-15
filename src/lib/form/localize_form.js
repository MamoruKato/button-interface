// When the user clicks on <div>, open the popup
function openLocalizeForm() {
    document.getElementById("localizeForm").style.display = "block";
    createGoalSelection("normal_localize_select","normal_localize_selection");
}

function closeLocalizeForm() {
    var localize_ok = document.getElementById('localize_ok');
    var localize_error = document.getElementById('localize_error');
    var localize_progress = document.getElementById('localize_progress');

    localize_ok.style.display = 'none';
    localize_error.style.display = 'none';
    localize_progress.style.display = 'none';

    document.getElementById("localizeForm").style.display = "none";
}
