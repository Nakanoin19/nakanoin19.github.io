var html = '<div id="valuedomainad" style="width:100%;"><iframe frameborder="0" style="border:none;width:100%;" src="https://nsk-1010.github.io/valuedomainad.html"></iframe></div>'
document.querySelector("main#main").insertAdjacentHTML('beforebegin', html);
// document.querySelector("#vdbanner").setAttribute("style", "display: none!important;");
document.querySelector("body").insertBefore(document.querySelector("#vdbanner"), document.querySelector("main#main"))
