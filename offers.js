/* iERROR — offers list. To add an offer, copy one block, change the id, texts and link. */
window.OFFERS = [
  {
    id: "featured-offer",
    title: "Featured Partner Offer",
    category: "cpa",
    icon: "↗",
    color: "cyan",
    desc: "A selected partner offer. Review the requirements, eligibility and country availability before you continue.",
    headline: "Check Out Today’s Featured Offer",
    sub: "A quick look at what’s on offer, what to expect and how to continue. Takes about a minute.",
    cta: "Continue to the Offer",
    link: "https://www.profitableratecpmnetwork.com/yhq7n3901?key=f5e5287a69148acb8288241186c6be92"
  }
];
(function () {
  var L = document.getElementById("offer-list");
  if (!L) return;
  var e = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); };
  L.innerHTML = window.OFFERS.map(function (o) {
    return '<article class="offer-card" data-category="' + e(o.category) + '" data-devices="desktop android iphone ios" data-search="' + e(o.title + " " + o.desc) + '">' +
      '<div class="offer-top"><span class="offer-icon ' + e(o.color) + '">' + e(o.icon) + '</span><span class="pill">CPA</span></div>' +
      '<h2>' + e(o.title) + '</h2><p>' + e(o.desc) + '</p>' +
      '<div class="offer-meta"><span>▣ Desktop, Android &amp; iOS browsing</span><span>◷ Check provider terms</span></div>' +
      '<div class="device-tags"><span>Desktop</span><span>Android</span><span>iPhone</span><span>iOS</span></div>' +
      '<div class="offer-action"><span class="offer-note">Sponsored · Read details first</span>' +
      '<a class="btn btn-small btn-primary" href="offer.html?o=' + encodeURIComponent(o.id) + '">View offer <span>↗</span></a></div></article>';
  }).join("");
})();
