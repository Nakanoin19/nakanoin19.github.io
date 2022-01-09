var html = '<div id="valuedomainad" style="width:100%;"><iframe frameborder="0" style="border:none;width:100%;" src="https://nsk-1010.github.io/valuedomainad.html"></iframe></div>'
document.querySelector("main#main").insertAdjacentHTML('beforebegin', html);
document.querySelector('script[src="//cache1.value-domain.com/xrea_header.js"]').remove();
document.querySelector("#vdbanner").addEventListener("load", function() {
    document.querySelector("#vdbanner").remove();
});
