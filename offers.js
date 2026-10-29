/* iERROR — offers list. To add an offer, copy one block, change the id, texts and link. */
window.OFFERS = [
  {
    id: "Private Partner Offer",
    title: "D-1; Max Offers",
    category: "cpa",
    icon: "↗",
    color: "cyan",
    desc: "Browse carefully on any device of USA, Fill all the requirement site is asking.",
    headline: "Hey! Best of luck; to the earn house.",
    sub: "Complete with care - You're not invited to waste times.",
    cta: "Dive inside it",
    devices: ["desktop", "android", "iphone", "ios"], // which devices it works on
    note: "Browse at least for 20 mins",                       // short line shown on the card
    link: "https://uplcm.com/4/12103849"
  },
  {
    id: "The Best One For You",
    title: "S-2; Variety of Offers",
    category: "cpa",
    icon: "↗",
    color: "cyan",
    desc: "Browse carefully on any device of USA, Fill all the requirement site is asking.",
    headline: "Hey! Best of luck; to the earn house.",
    sub: "Complete with care - You're not invited to waste times.",
    cta: "Dive inside it",
    devices: ["desktop", "android", "iphone", "ios"], // which devices it works on
    note: "Browse at least for 20 mins",                       // short line shown on the card
    link: "https://www.profitableratecpmnetwork.com/mbdctsv1?key=86521dff1f5dab96cd1c47765c56d85b"
  },
  {
    id: "The Best One For You",
    title: "S-2; Variety of Offers",
    category: "cpa",
    icon: "↗",
    color: "cyan",
    desc: "Browse carefully on any device of USA, Fill all the requirement site is asking.",
    headline: "Hey! Best of luck; to the earn house.",
    sub: "Complete with care - You're not invited to waste times.",
    cta: "Dive inside it",
    devices: ["desktop", "android", "iphone", "ios"], // which devices it works on
    note: "Sing-Up and stay for 1-2 minutes then distroy",                       // short line shown on the card
    link: "https://www.cdndn.com/unlock/yBNic48"
  },
  {
    id: "!!!.... SEXY SIGN-UPS ....!!!",
    title: "18+ Only",
    category: "cpa",
    icon: "↗",
    color: "cyan",
    desc: "Browse on any device of USA, Fill all the requirement site is asking.",
    headline: "Slower your Dick ;)",
    sub: "Sign-up; Verify and browse for at least 15 mins",
    cta: "Let's see sweet BooBs!!!!",
    devices: ["desktop", "android", "iphone", "ios"], // which devices it works on
    note: "Check provider terms",                       // short line shown on the card
    link: "https://cpajunkie.trcpa.link/click?camp=2361&pubid=9347&sid=surveywithshemu.online&sid2=surveywithshemu.online%2Foffers.js&sid3=surveywithshemu.online%2Fcpa.offers"
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

