const url = window.location.search;
const params = new URLSearchParams(url);
const name = params.get('name');

$(document).ready(function () {
    const account = document.getElementById('account');
    const requests = document.getAnimations('requests');
    const records = document.getElementById('records');
    document.getElementById("navbarName").innerText = name;
    document.getElementById("textName").innerText = name;
    document.getElementById("mainName").innerText = name.toUpperCase();
})

function showSection(section) {
    if (section === 1) {
        account.style.display = 'block';
        requests.style.display = 'none';
        records.style.display = 'none';
    } else if (section === 2) {
        account.style.display = 'none';
        requests.style.display = 'block';
        records.style.display = 'none';
    } else {
        account.style.display = 'none';
        requests.style.display = 'none';
        records.style.display = 'block';
    }
}