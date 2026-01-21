<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Untuk Aristy ❤️</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      overflow: hidden;
    }
    .heart-bg {
      position: fixed;
      font-size: 20px;
      opacity: 0.15;
      animation: float 15s infinite;
      pointer-events: none;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
    .container {
      width: 100%;
      max-width: 500px;
      margin: 0 20px;
      padding: 40px;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 30px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      text-align: center;
      animation: slideIn 0.5s ease-out;
    }
    @keyframes slideIn {
      from { opacity: 0; transform: scale(0.92) translateY(20px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .heart-icon {
      font-size: 50px;
      margin-bottom: 15px;
      animation: heartBeat 1.5s infinite;
      display: inline-block;
    }
    @keyframes heartBeat {
      0%, 100% { transform: scale(1); }
      10%, 30% { transform: scale(1.1); }
      20%, 40% { transform: scale(1); }
    }
    h1 {
      color: #d946ef;
      font-size: 32px;
      margin-bottom: 12px;
      font-weight: 600;
    }
    p {
      color: #4b5563;
      font-size: 17px;
      line-height: 1.8;
      margin-bottom: 15px;
    }
    .highlight {
      color: #d946ef;
      font-weight: 600;
    }
    a { text-decoration: none; }
    button {
      padding: 12px 30px;
      font-size: 16px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      margin: 5px;
      background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
    }
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(236, 72, 153, 0.6);
    }
    button:active { transform: scale(0.95); }
  </style>
</head>
<body>
  <div class="heart-bg" style="top: 10%; left: 15%;">💕</div>
  <div class="heart-bg" style="top: 60%; left: 8%; animation-delay: 2s;">❤️</div>
  <div class="heart-bg" style="top: 30%; right: 12%; animation-delay: 1s;">💖</div>
  <div class="heart-bg" style="top: 70%; right: 20%; animation-delay: 3s;">💗</div>
  <div class="heart-bg" style="top: 85%; left: 40%; animation-delay: 1.5s;">💝</div>

  <div class="container">
    <div class="heart-icon">💝</div>
    <h1>Halo!</h1>
    <p style="text-align: center;">
      Hai <span class="highlight">Aristy Novianingsih (ANBS)</span><br>
      orang paling terkasih, tersayang... 💕
    </p>
    <a href="StageTwo.js">
      <button>Next</button>
    </a>
  </div>
</body>
</html>
