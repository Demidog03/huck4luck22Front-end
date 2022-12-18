/*Search box elements*/
const searchBox = document.querySelector(".search-box")
const searchBtn = document.querySelector(".search-box .search-btn")
const cancelBtn = document.querySelector(".search-box .cancel-btn")
const searchInput = document.querySelector(".search-box input")
const searchData = document.querySelector(".search-box .search-data")
const searchH3 = document.querySelector(".search-container h3")

/*Table elements*/
const table = document.querySelector(".table")
const tr = table.querySelectorAll("tr")
let txtValue, td
searchBtn.onclick = () => {
    searchBox.classList.add('active')
    searchInput.classList.add('active')
    searchBtn.classList.add('active')
    cancelBtn.classList.add('active')
    searchH3.classList.add('hidden')
    if(searchInput.value != ''){
        searchData.classList.add('active')
        searchData.innerHTML = 'You typed: ' + searchInput.value

        for (let i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0]
            if(td){
                txtValue = td.textContent || td.innerHTML
                if(txtValue.toUpperCase().indexOf(searchInput.value.toUpperCase()) > -1){
                    tr[i].style.display = ""
                }
                else{
                    tr[i].style.display = "none"
                }
            }
        }


    }
    else{

    }
}
cancelBtn.onclick = () => {
    searchBox.classList.remove('active')
    searchInput.classList.remove('active')
    searchBtn.classList.remove('active')
    cancelBtn.classList.remove('active')
    searchData.classList.remove('active')
    searchH3.classList.remove('hidden')
    searchInput.value = ''
}



