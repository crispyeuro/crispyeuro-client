/*'Search functionality to be implemented in further tasks.'*/
function getSearchValue() {
    var url = window.location.search;
    var urlValue = new URLSearchParams(url);
    document.getElementsByClassName("searchValueContainer")[0].innerHTML = '"' + urlValue.get('search') + '"';
}
