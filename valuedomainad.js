document.querySelector('script[src="//cache1.value-domain.com/xrea_header.js"]').remove();
document.querySelector("#vdbanner:first-child").remove();
(function () {
    var func = function () {
        var parent = document.querySelector("main#main")[0];
        if (parent === null) {
            return false;
        }
        var elements = ['<a href="https://www.value-domain.com/value-auth/?adref=xrea_ad&argument=w9Qy6aHQ&dmai=a5f3e009b2fa09" target="_blank" rel="nofollow" style="display:inline-block!important;position:relative!important;top:0!important;left:0!important;margin:0!important;padding:0!important;"><img src="https://www.value-domain.com/security/value-auth/img/valueauth_bnr.png" alt="¥0から使える、本人認証サービス Value-Auth" style="display:inline-block!important;position:relative!important;top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;max-width:468px;max-height:60px;vertical-align:bottom;"></a>'];
        var randElm = elements[Math.floor(Math.random() * elements.length)];
        var newBox = document.createElement("div");
        newBox.setAttribute('id', 'vdbanner');
        newBox.setAttribute("style", "display:block!important;padding:0!important;text-align:center!important;");
        newBox.innerHTML = randElm;
        parent.insertBefore(newBox, parent.firstChild);
    };
    try {
        window.addEventListener("load", func, false);
    } catch (e) {
        window.attachEvent("onload", func);
    }
})();
