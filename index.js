(async () => {
    const easyCookieSrc = 'https://app.easy.tools/cookies/scripts/e5b37581141e4710bc0a4aaa0d520070.js';
    const GTMCode = 'GTM-TKLV7LH'
    const replaceString = [
        'readLsAndEj(e){if(window.easyJSON&&window.easyJSON[e]){let t=window.easyJSON[e];return localStorage.setItem(e,t),JSON.parse(t)}return JSON.parse(localStorage.getItem(e))}saveLsAndEj(e,t){const a={};a[e]=JSON.stringify(t),localStorage.setItem(e,a[e]),this.easy_json.patch(a)}',
        `t&&this.appendCookie()`,
        'document.addEventListener("DOMContentLoaded",',
        't.addEventListener("click",this.adjustCookie.bind(this))',
        'forEach(e=>{this.cookieStatus[e]=!0}),this.saveCookie()',
        'KEY_COOKIE="EASY.COOKIE"'
    ]
    const targetString =
        [
            `setCookie(o,e,s){s=s&&s.constructor===Date?"; expires="+s.toUTCString():"",document.cookie=encodeURIComponent(o)+"="+encodeURIComponent(e)+s+"; domain=."+window.location.hostname.split(".").slice(-2).join(".")}declineAllCookie(){this.cookieTypes.forEach(e=>{this.cookieStatus[e]=!1}),this.saveCookie()}allowGtm(){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTMCode}')}getCookie(o){return decodeURIComponent(document.cookie.split("; ").find((row)=>row.startsWith(o+"="))?.split("=")[1]?.split(";")[0]||null)}readLsAndEj(e){if(window.easyJSON&&window.easyJSON[e]){let s=window.easyJSON[e];return localStorage.setItem(e,s),JSON.parse(s)}let t=this.getCookie(e);return t?JSON.parse(t):JSON.parse(localStorage.getItem(e))}saveLsAndEj(e,s){let t={};t[e]=JSON.stringify(s),localStorage.setItem(e,t[e]),this.easy_json.patch(t),this.setCookie(e,t[e])}`,
            `this.cookieStatus['targeting']&&this.allowGtm()`,
            'setTimeout(',
            't.addEventListener("click",this.declineAllCookie.bind(this))',
            'forEach(e=>{this.cookieStatus[e]=!0}),this.saveCookie(),this.allowGtm()',
            'KEY_COOKIE="cookies_acknowledged"'
        ];
    await fetch(easyCookieSrc).then((r) => r.text()).then((t) => {
        replaceString.forEach((v, k) => t = t.replace(v, targetString[k]));
        return t
    }).then((t) => {
        try {
            new Function(t)();
        } catch (e) {
        }
    })
})();
