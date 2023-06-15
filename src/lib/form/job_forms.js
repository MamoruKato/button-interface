// When the user clicks on <div>, open the popup
function openAddJobForm() {
    document.getElementById("AddJobForm").style.display = "block";
    createGoalSelection("pickup_goal_job_id","pickup_job_goal_select","select");
    createGoalSelection("dropoff_goal_job_id","dropoff_job_goal_select","select");

}

function closeJobForm() {
    var add_job_ok = document.getElementById('add_job_ok');
    var add_job_error = document.getElementById('add_job_error');
    var add_job_progress = document.getElementById('add_job_progress');

    add_job_ok.style.display = 'none';
    add_job_error.style.display = 'none';
    add_job_progress.style.display = 'none';

    document.getElementById("AddJobForm").style.display = "none";
}

function openRemoveJobForm()
{
    document.getElementById("RemoveJobForm").style.display = "block";
}

function closeRemoveJobForm()
{
    var remove_job_ok = document.getElementById('remove_job_ok');
    var remove_job_error = document.getElementById('remove_job_error');
    var remove_job_progress = document.getElementById('remove_job_progress');

    remove_job_ok.style.display = 'none';
    remove_job_error.style.display = 'none';
    remove_job_progress.style.display = 'none';

    document.getElementById("RemoveJobForm").style.display = "none"; 
}


function openJobListForm()
{   
    document.getElementById("jobListForm").style.display = "block";
}

function closeJobListForm()
{
    document.getElementById("jobListForm").style.display = "none"; 
}


function openJobMenuForm()
{   
    document.getElementById("jobMenuForm").style.display = "block";
}

function closeJobMenuForm()
{
    document.getElementById("jobMenuForm").style.display = "none"; 
}