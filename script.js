const tombolCari = document.querySelector('.tombol-cari')
const keyword = document.querySelector('.keyword')
const container = document.querySelector('.container')

keyword.addEventListener('keyup', function () {
  fetch('ajax_cari.php?keyword=' + keyword.value)
    .then(response => response.text())
    .then(response => container.innerHTML = response)

})
