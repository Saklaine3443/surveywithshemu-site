```html
<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>হোল লারো - তোমাদের ছুটি 😂</title>

<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  .funny-banner {
    font-family: 'Hind Siliguri', sans-serif;
    background: linear-gradient(135deg, #171717, #30204d, #111827);
    color: #fff;
    text-align: center;
    padding: 28px 15px;
    margin: 15px auto;
    border: 2px solid #ffcc00;
    border-radius: 18px;
    box-shadow: 0 0 20px rgba(255, 204, 0, 0.25);
    max-width: 850px;
    overflow: hidden;
    animation: popIn 0.8s ease;
  }

  .funny-banner h1 {
    margin: 0;
    font-size: clamp(26px, 5vw, 44px);
    font-weight: 700;
    color: #ffdf33;
    text-shadow: 0 0 12px rgba(255, 190, 0, 0.45);
    animation: bounceText 2s infinite;
  }

  .funny-banner p {
    margin: 12px 0 0;
    font-size: clamp(16px, 3vw, 21px);
    color: #f3f4f6;
  }

  .funny-emoji {
    display: inline-block;
    animation: wiggle 1.5s infinite;
  }

  .funny-tag {
    display: inline-block;
    margin-top: 16px;
    padding: 7px 18px;
    border-radius: 30px;
    background: #ffcc00;
    color: #171717;
    font-weight: 700;
    font-size: 15px;
  }

  @keyframes bounceText {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-12deg); }
    75% { transform: rotate(12deg); }
  }

  @keyframes popIn {
    from { opacity: 0; transform: scale(0.94); }
    to { opacity: 1; transform: scale(1); }
  }

  @media (prefers-reduced-motion: reduce) {
    .funny-banner, .funny-banner h1, .funny-emoji {
      animation: none;
    }
  }
</style>
</head>

<body>

<div class="funny-banner">
  <h1>
    🤣 হোল লারো — তোমাদের ছুটি! 🎉
  </h1>

  <p>
    😎 আরাম করো, মজা করো — টেনশন নেওয়ার দরকার নাই! 🤪
  </p>

  <div class="funny-tag">
    🔥 আজকে মুড ফুল অন! 🥳
  </div>
</div>

</body>
</html>
```
