// When the user clicks on <div>, open the popup
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    var add_goal_ok = document.getElementById('add_goal_ok');
    var add_goal_error = document.getElementById('add_goal_error');
    var add_goal_progress = document.getElementById('add_goal_progress');

    add_goal_ok.style.display = 'none';
    add_goal_error.style.display = 'none';
    add_goal_progress.style.display = 'none';

    document.getElementById("myForm").style.display = "none";
}

function openSaveForm() {
    document.getElementById("saveForm").style.display = "block";
}

    function closeSaveForm() {
    var save_goal_ok = document.getElementById('save_goal_ok');
    var save_goal_error = document.getElementById('save_goal_error');
    var save_goal_progress = document.getElementById('save_goal_progress');

    save_goal_ok.style.display = 'none';
    save_goal_error.style.display = 'none';
    save_goal_progress.style.display = 'none';

    document.getElementById("saveForm").style.display = "none";
}

function openRemoveForm() {
    document.getElementById("removeForm").style.display = "block";
    createGoalSelection("remove_goal_select", "remove_goal_selection");
}

function closeRemoveForm() {
    var remove_goal_ok = document.getElementById('remove_goal_ok');
    var remove_goal_error = document.getElementById('remove_goal_error');
    var remove_goal_progress = document.getElementById('remove_goal_progress');

    remove_goal_ok.style.display = 'none';
    remove_goal_error.style.display = 'none';
    remove_goal_progress.style.display = 'none';

    document.getElementById("removeForm").style.display = "none";
}

function openListAllGoalsForm()
{
    document.getElementById("listAllGoalsForm").style.display = "block";
    createGoalSelection("goal_names_div","goal_selection")
}

function closeListAllGoalsForm()
{
    document.getElementById("listAllGoalsForm").style.display = "none";
}

function openRemoveAllForm()
{
    document.getElementById("removeAllForm").style.display = "block";
}


function closeRemoveAllForm()
{
    document.getElementById("removeAllForm").style.display = "none";
}


function sendGoal()
{
    var goal_id = document.getElementById("goal_id");
    console.log(goal_id.textContent);
}

function openGoalMenuForm()
{   
    document.getElementById("goalMenuForm").style.display = "block";
}

function closeGoalMenuForm()
{
    document.getElementById("goalMenuForm").style.display = "none"; 
}