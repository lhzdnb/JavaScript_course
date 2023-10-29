let timeOutID = NaN;
function showAdded() {
    if (isNaN(timeOutID)) {
        timeOutID = setTimeout(deleteAdded, 2000);
    }
    else {
        clearTimeout(timeOutID);
        timeOutID = setTimeout(deleteAdded, 2000)
    }
    if (!document.querySelector('.added')) {
        document.querySelector('body').innerHTML +=
            `<p class="added">Added</p>`;
    }
}

function deleteAdded() {
    let added = document.querySelector('.added');
    added.remove();
}
