// When the user clicks on <div>, open the popup
function openDownloadMapForm() {
    document.getElementById("downloadMapForm").style.display = "block";
    createMapSelection("dmap_names_div");
}

function closeDownloadMapForm() {
    var dmap_ok = document.getElementById('dmap_ok');
    var dmap_error = document.getElementById('dmap_error');
    var dmap_progress = document.getElementById('dmap_progress');

    dmap_ok.style.display = 'none';
    dmap_error.style.display = 'none';
    dmap_progress.style.display = 'none';
    document.getElementById("downloadMapForm").style.display = "none";
}
