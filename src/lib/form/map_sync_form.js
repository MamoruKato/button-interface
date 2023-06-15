// When the user clicks on <div>, open the popup
function openMapSyncForm() {
    document.getElementById("mapSyncForm").style.display = "block";
    //createMapSelection("dmap_names_div");
}

function closeMapSyncForm() {
    var smap_ok = document.getElementById('smap_ok');
    var smap_error = document.getElementById('smap_error');
    var smap_progress = document.getElementById('smap_progress');
    var sync_status = document.getElementById("connect2sync_status_message");

    smap_ok.style.display = 'none';
    smap_error.style.display = 'none';
    smap_progress.style.display = 'none';
    sync_status.style.color = 'grey';
    sync_status.innerHTML = "Waiting for input ...";
    
    document.getElementById("mapSyncForm").style.display = "none";
}
