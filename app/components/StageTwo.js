<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kata-kata dari Mamas ❤️</title>
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
    h2 {
      color: #a855f7;
      font-size: 24px;
      margin-bottom: 20px;
      font-weight: 600;
    }
    p {
      color: #4b5563;
      font-size: 17px;
      line-height: 1.8;
      margin-bottom: 15px;
      text-align: left;
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
    }
    .btn-primary {
      background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(236, 72, 153, 0.6);
    }
    .btn-secondary {
      background: white;
      color: #a855f7;
      border: 2px solid #e5e7eb;
    }
    .btn-secondary:hover {
      background: #f9fafb;
      border-color: #a855f7;
    }
    .btn-group {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
    }
  </style>
</head>
<body>
  <div class="heart-bg" style="top: 10%; left: 15%;">💕</div>
  <div class="heart-bg" style="top: 60%; left: 8%; animation-delay: 2s;">❤️</div>
  <div class="heart-bg" style="top: 30%; right: 12%; animation-delay: 1s;">💖</div>
  <div class="heart-bg" style="top: 70%; right: 20%; animation-delay: 3s;">💗</div>
  <div class="heart-bg" style="top: 85%; left: 40%; animation-delay: 1.5s;">💝</div>

  <div class="container">
    <div class="heart-icon">💌</div>
    <h2>kata-kata dari mamas</h2>
    <div>
      <p>Andai kita diberikan kuasa untuk memutar waktu agar bisa menjalani apa yang kita inginkan, kita usahakan, kamu pasti akan tau betapa besar dan luas nya rasa yang kuberi padamu.</p>
      
      <p>Tentu tak akan kubiarkan kesedihan bersembunyi di relung hatimu yang rapuh, akan terus aku upayakan rasa tenang, senang, dan nyaman itu kokoh menguasai seluruh isi hatimu, jiwa dan raga 💗</p>
    </div>
    <div class="btn-group">
      <a href="StageOne.js">
        <button class="btn-secondary">Back</button>
      </a>
      <a href="StageThree.js">
        <button class="btn-primary">Next</button>
      </a>
    </div>
  </div>
</body>
</html>
