const methods = document.getElementById('adoptionMethods');
const start = document.getElementById('start');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');
const end = document.getElementById('end');

function showSection(section) {
    if (section === 1) {
        methods.style.display = 'none';
        start.style.display = 'block'
    } else if (section === 2) {
        start.style.display = 'none';
        form1.style.display = 'block';
    } else if (section === 3) {
        form1.style.display = 'none';
        form2.style.display = 'block';
    } else if (section === 4) {
        form2.style.display = 'none';
        form3.style.display = 'block';
    } else if (section === 5) {
        form3.style.display = 'none';
        form4.style.display = 'block';
    } else {
        form4.style.display = 'none';
        end.style.display = 'block';
    }
}