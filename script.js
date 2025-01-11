function filterMedicines() {
    const filter = document.getElementById('searchInput').value.toUpperCase();
    const list = document.querySelector('.medicines-list ul');
    const items = list.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const name = items[i].getElementsByTagName('h2')[0];
        if (name) {
            const txtValue = name.textContent || name.innerText;
            items[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? '' : 'none';
        }
    }
}
