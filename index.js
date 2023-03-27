(async () => {
const easyCookieSrc = 'https://app.easy.tools/cookies/scripts/5cd4e0c0968349a8a63b0a50f6e6bc2e.js';
const replaceString = [
'readLsAndEj(e){if(window.easyJSON&&window.easyJSON[e]){let t=window.easyJSON[e];return localStorage.setItem(e,t),JSON.parse(t)}return JSON.parse(localStorage.getItem(e))}saveLsAndEj(e,t){const a={};a[e]=JSON.stringify(t),localStorage.setItem(e,a[e]),this.easy_json.patch(a)}',
 'document.addEventListener("DOMContentLoaded",'
 ]
const targetString = 
['setCookie(o,e,s){s=s&&s.constructor===Date?"; expires="+s.toUTCString():"",document.cookie=encodeURIComponent(o)+"="+encodeURIComponent(e)+s+"; domain=."+window.location.hostname.split(".").slice(-2).join(".")}getCookie(o){return decodeURIComponent(document.cookie.split("; ").find((row)=>row.startsWith(o+"="))?.split("=")[1]?.split(";")[0]||null)}readLsAndEj(e){if(window.easyJSON&&window.easyJSON[e]){let s=window.easyJSON[e];return localStorage.setItem(e,s),JSON.parse(s)}let t=this.getCookie(e);return t?JSON.parse(t):JSON.parse(localStorage.getItem(e))}saveLsAndEj(e,s){let t={};t[e]=JSON.stringify(s),localStorage.setItem(e,t[e]),this.easy_json.patch(t),this.setCookie(e,t[e])}',
 'setTimeout('
 ];
const script = await fetch(easyCookieSrc).then((r) => r.text()).then((t) => t.replace(replaceString[0], targetString[0]).replace(replaceString[1], targetString[1])).then((t) => {try {new Function(t)(); } catch(e) {}})
})();
