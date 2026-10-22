SHEMU HUB PRO STARTER — বাংলা নির্দেশিকা
========================================

ফাইলগুলো static HTML/CSS/JavaScript। PHP বা paid hosting প্রয়োজন নেই। GitHub Pages-এ publish করা যায়।

ফাইল:
- index.html: Home / brand landing page
- cpa.html: CPA/partner directory, search, category filter, device filter
- services.html: Digital services categories
- about.html, privacy.html, disclosure.html, contact.html
- styles.css: responsive design
- script.js: mobile navigation, filtering, contact email draft
- robots.txt

গুরুত্বপূর্ণ launch-এর আগে:
1. cpa.html-এ demo listing-গুলোকে বাস্তব, অনুমোদিত offer দিয়ে বদলাও।
2. প্রতিটি offer card-এর data-devices attribute edit করো:
   Desktop only: data-devices="desktop"
   Android only: data-devices="android"
   iPhone only: data-devices="iphone"
   All iOS: data-devices="ios iphone"
   Desktop + Android: data-devices="desktop android"
3. Offer link চালু করতে button-এর href="#" বদলে approved tracking URL বসাও; data-placeholder="true" এবং aria-disabled="true" সরিয়ে দাও, btn-disabled class বদলে btn-primary করো। Button text-ও বাস্তব CTA অনুযায়ী বদলাও।
4. Country eligibility, device, traffic source, incentivized traffic rules, age restrictions, and offer terms যাচাই করো। অনুমতি ছাড়া offer প্রচার করবে না।
5. contact.html-এ REPLACE-WITH-YOUR-REAL-EMAIL@example.com-কে নিজের monitored email দিয়ে বদলাও। Static form নিজে email store/send করে না; এটি visitor-এর email app-এ draft খোলে।
6. privacy.html-এ actual analytics/cookies/third-party processing অনুযায়ী policy update করো। এটি legal advice নয়।
7. নিজের বাস্তব business details, contact details, services, delivery process, pricing/terms থাকলে যোগ করো। মিথ্যা client count, testimonials, earnings claims বা guarantees যোগ করো না।
8. Google Ads-এ প্রচার করার আগে site HTTPS-এ load হচ্ছে, all links work, original content is useful, and contact/privacy/disclosure pages complete—নিশ্চিত করো। শুধু affiliate links-এ পাঠানোর জন্য বানানো thin bridge page হিসেবে site-টি ব্যবহার কোরো না।

GitHub Pages upload:
- Repository root-এ সব extracted files upload করো (ZIP নিজে নয়)
- Settings > Pages > Deploy from a branch > main > /(root)
- Custom domain: surveywithshemu.online
- Namecheap DNS-এ root A records এবং www CNAME সঠিক আছে কিনা যাচাই করো।
- Certificate ready হলে Enforce HTTPS enable করো।

Google Ads note:
- Landing page-এ original useful content এবং clear disclosure/contact details রাখো।
- Promo credit terms account-specific; Billing > Promotions-এ amount, spend requirement, expiry দেখো।
