/* iERROR — offers list. To add an offer, copy one block, change the id, texts and link. */
window.OFFERS = [
  {
    id: "ID-M-01",
    title: "Featured Partner Offer",
    category: "cpa",
    icon: "↗",
    color: "cyan",
    desc: "Browse on any device of USA, Fill all the requirement site is asking.",
    headline: "Check Out Today’s Featured Offer",
    sub: "Complete with care - You're not invited to waste times.",
    cta: "Dive inside it",
    devices: ["desktop", "android", "iphone", "ios"], // which devices it works on
    note: "Check provider terms",                       // short line shown on the card
    link: "https://www.profitableratecpmnetwork.com/yhq7n3901?key=f5e5287a69148acb8288241186c6be92"
  }
];
(function () {
  var L = document.getElementById("offer-list");
  if (!L) return;
  var e = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); };
  var N = {desktop: "Desktop", android: "Android", iphone: "iPhone", ios: "iOS"};
  L.innerHTML = window.OFFERS.map(function (o) {
    var d = o.devices && o.devices.length ? o.devices : ["desktop", "android", "iphone", "ios"];
    return '<article class="offer-card" data-category="' + e(o.category) + '" data-devices="' + e(d.join(" ")) + '" data-search="' + e(o.title + " " + o.desc) + '">' +
      '<div class="offer-top"><span class="offer-icon ' + e(o.color) + '">' + e(o.icon) + '</span><span class="pill">CPA</span></div>' +
      '<h2>' + e(o.title) + '</h2><p>' + e(o.desc) + '</p>' +
      '<div class="offer-meta"><span>▣ Works on: ' + e(d.map(function (x) { return N[x] || x; }).join(", ")) + '</span><span>◷ ' + e(o.note || "Check provider terms") + '</span></div>' +
      '<div class="device-tags">' + d.map(function (x) { return "<span>" + e(N[x] || x) + "</span>"; }).join("") + '</div>' +
      '<div class="offer-action"><span class="offer-note">Sponsored · Read details first</span>' +
      '<a class="btn btn-small btn-primary" href="offer.html?o=' + encodeURIComponent(o.id) + '">View offer <span>↗</span></a></div></article>';
  }).join("");
})();
