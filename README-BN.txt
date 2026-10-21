SHEMU HUB — FREE STATIC WEBSITE STARTER (Bangla guide)
=====================================================

এই প্যাকেজে আছে:
- index.html       = Home page
- cpa.html         = CPA / offer directory page
- styles.css       = Desktop + mobile responsive design
- script.js        = Mobile menu, search, category filters
- about.html       = About starter page
- privacy.html     = Privacy-policy starter template
- disclosure.html  = Affiliate disclosure starter
- contact.html     = Contact starter
- CNAME            = আপনার custom domain

গুরুত্বপূর্ণ:
1) GitHub Pages HTML/CSS/JavaScript host করে; PHP run করে না। CPA tracking links সাধারণত normal outbound URLs, তাই সেগুলো static page-এ কাজ করতে পারে।
2) CPA/affiliate link যোগ করার আগে সংশ্লিষ্ট network-এর অনুমতি, country targeting, traffic-source rules এবং disclosure requirements পড়ুন।
3) এই template-এ কোনো real offer URL নেই। Example cards-এ placeholder link আছে; এগুলো click করলে reminder দেখাবে। Publish করার আগে নিজের valid offer URL বসান।
4) Privacy/contact/About text নিজের বাস্তব তথ্য অনুযায়ী edit করুন। Placeholder legal text legal advice নয়।
5) Ad network code এখনো যোগ করা হয়নি। Network approval ও policy check-এর পরই তাদের দেওয়া exact code বসান। বেশি বিজ্ঞাপন মানেই বেশি profit নয়; intrusive popups, forced redirects বা invalid traffic account বন্ধ করাতে পারে।
6) এই starter-এর মধ্যে PHP, database, login system, server-side redirects, visitor tracking বা auto-click নেই।

A. GitHub-এ ফাইল আপলোড:
1. github.com খুলে account sign in/create করুন।
2. উপরে + > New repository.
3. Repository name দিন: surveywithshemu-site
4. Public নির্বাচন করে Create repository চাপুন।
5. Add file > Upload files.
6. এই ZIP extract করে ভেতরের সব file (ZIP file নিজে নয়) drag-and-drop করুন।
7. নিচে Commit changes চাপুন।

B. GitHub Pages চালু:
1. Repository > Settings > Pages.
2. Build and deployment > Source: Deploy from a branch.
3. Branch: main; folder: /(root); Save.
4. কিছুক্ষণ পর Pages-এর উপরে যে published URL দেখাবে, সেটি খুলে check করুন।

C. Custom domain:
1. Repository > Settings > Pages > Custom domain.
2. surveywithshemu.online লিখে Save.
3. Namecheap account > Domain List > surveywithshemu.online > Manage > Advanced DNS.
4. GitHub Pages custom-domain docs-এ দেখানো বর্তমান DNS record অনুযায়ী root domain-এর জন্য A records যোগ করুন। GitHub-এর বর্তমান official IP list দেখে নেবেন; পুরনো tutorial থেকে IP কপি করবেন না।
5. www host চাইলে CNAME record host = www, value = GitHub Pages-এর username.github.io (repository name নয়) সেট করুন, GitHub docs অনুসারে।
6. DNS propagate হতে কিছু সময় লাগতে পারে। GitHub Pages settings-এ Enforce HTTPS option available হলে enable করুন।
7. DNS বদলানোর আগে existing records screenshot/নোট করে রাখুন; email ব্যবহার করলে MX/TXT records মুছবেন না।

Official docs:
https://docs.github.com/en/pages
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain

D. নিজের offer URL বসানো:
1. GitHub repo-তে cpa.html খুলুন, pencil/Edit icon চাপুন।
2. Ctrl+F করে যে offer-এর card খুঁজবেন, তার নিচে এই ধরনের link দেখবেন:
   <a class="button button-primary offer-button" href="#" data-placeholder="true">Add your link ↗</a>
3. href="#" এর জায়গায় আপনার network-এর সম্পূর্ণ tracking URL বসান।
4. data-placeholder="true" মুছে ফেলুন।
5. উদাহরণ (শুধু format):
   <a class="button button-primary offer-button" href="https://YOUR-APPROVED-TRACKING-URL" target="_blank" rel="sponsored nofollow noopener">View offer ↗</a>
6. YOUR-APPROVED-TRACKING-URL-কে আপনার real URL দিয়ে বদলাবেন। Example URL-টি সরাসরি ব্যবহার করবেন না।
7. Card-এর title, description, category ও search keywords-ও সংশোধন করুন।
8. Commit changes চাপুন। Live site update হতে কিছুক্ষণ লাগতে পারে।
9. Link নিজে test করুন। নিজের link-এ fake conversions বা repeated ad clicks করবেন না।

E. নতুন category:
cpa.html-এ একটি directory-card copy করে data-category এবং data-search update করুন। Filter dropdown-এ নতুন category option যোগ করতে হবে। Existing category spelling lower-case-এ মিলিয়ে রাখুন।

F. Ad placement:
cpa.html-এ "ADVERTISEMENT" placeholder আছে। Approved ad network-এর dashboard থেকে পাওয়া official code ওই জায়গায় বসাতে পারেন, যদি network-এর policy সেই placement অনুমোদন করে। একইভাবে home page-এ ad বসানোর আগে network rules পড়ুন। বিজ্ঞাপনকে offer CTA-র মতো দেখাবেন না; accidental clicks উৎসাহিত করবেন না।

Domain status:
এই ZIP-এর CNAME-এ surveywithshemu.online দেওয়া আছে। আপনার screenshot অনুযায়ী domain active দেখাচ্ছিল, কিন্তু এই প্যাকেজ upload বা DNS configure করা হয়নি। আপনার account-এ কোনো পরিবর্তন করা হয়নি।
