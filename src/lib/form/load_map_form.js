// When the user clicks on <div>, open the popup
function openLoadMapForm() {
    document.getElementById("loadMapForm").style.display = "block";
    createMapSelection("map_names_div");
}

function closeLoadMapForm() {
    var load_map_ok = document.getElementById('load_map_ok');
    var load_map_error = document.getElementById('load_map_error');
    var load_map_progress = document.getElementById('load_map_progress');

    load_map_ok.style.display = 'none';
    load_map_error.style.display = 'none';
    load_map_progress.style.display = 'none';

    document.getElementById("loadMapForm").style.display = "none";
}
