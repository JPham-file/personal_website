

const change_theme_qual = () => {
  document.getElementById("style-link-q").setAttribute("href", "qualifications2.css")
  document.getElementById("style-link").setAttribute("href", "")
}


const change_theme_portfolio = () => {
  document.getElementById("style-link-p").setAttribute("href", "portfolio2.css")
  document.getElementById("style-link").setAttribute("href", "")
}

const change_theme_service = () => {
  document.getElementById("style-link-s").setAttribute("href", "service2.css")
  document.getElementById("style-link").setAttribute("href", "")
}


const switchcss = () => {
  document.getElementById("style-link").setAttribute("href", "index_style2.css")
}