<!doctype html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Simple Transactional Email</title>
  <style media="all" type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap');

    * {
      font-family: "Tilt Neon", cursive;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
    }
    .container {
      width: 100%;
      text-align: center;
    }
    .contain {
      margin: 10px auto;
      width: 600px;
      padding: 30px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      background-color: #b9bfc41b;
    }
    .brand {
      width: 100px;
      margin: 0 auto;
    }
    .brand img {
      width: 100%;
    }
    .contain button {
      background-color: #566573;
      padding: 12px;
      margin: 10px 0;
      color: white;
      border: 0;
      outline: 0;
    }
    .contain a {
        color: white
    }
  </style>

</head>

<body>
  <div class="container">
    <div class="contain">
      <div class="brand">
        <img src="{{ $message->embed(public_path('images/logo4.png')) }}" alt="">
      </div>

      <h2>Hello {{$nomFormateur}}</h2>
      <a href={{$link}}><button>Votre Emploi De Temps</button></a>
      <p>doubleAc est une plateforme web conçue pour simplifier la gestion des emplois du temps et le suivi pédagogique
        au
        sein de l'établissement NTIC Tanger.</p>
    </div>
  </div>
</body>

</html>
