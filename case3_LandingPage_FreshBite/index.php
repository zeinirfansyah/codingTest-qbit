<?php
  include 'config.php';
  
  if(isset($_POST['pesan'])) {
    $nama_pemesan = $_POST['nama_pemesan'];
    $no_hp_pemesan = $_POST['no_hp_pemesan'];
    $alamat_pemesan = $_POST['alamat_pemesan'];
    $kota_asal_pemesan = $_POST['kota_asal_pemesan'];
    $produk_dipesan = $_POST['produk_dipesan'];
    $kode_pos_pemesan = $_POST['kode_pos_pemesan'];

    $sql = mysqli_query($conn, "INSERT INTO orders VALUES (null, '$nama_pemesan', '$no_hp_pemesan', '$alamat_pemesan', '$kota_asal_pemesan', '$produk_dipesan', '$kode_pos_pemesan')");
    if($sql) {
      echo "<script>alert('Pesanan berhasil dikirim. Terima kasih atas pesanan anda.');window.location='index.php';</script>";
    } else {
      echo "<script>alert('Pesanan gagal dikirim. Silahkan coba lagi.');</script>";
    }
  
  }


?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="css/style.css">

    <title>Fresh Bites</title>
  </head>
  <body>

  <!-- hero section -->
  <section id="home" class="hero mb-5 mb-md-0 text-center text-md-start">
    
    <!-- navbar start -->
    <nav class="navbar navbar-expand-lg navbar-dark shadow">
      <div class="container">
        <!-- Brand logo -->
        <a class="navbar-brand" href="#"><span>Fresh</span>Bites</a>

        <!-- Hamburger button mobile screens -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#produk">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
              <li class="nav-item">
                  <a class="nav-link" target="_blank" href="https://instagram.com">Social Media</a>
              </li>
          </ul>
          <div>
            <button class="btn btn-orderNow" type="button">Order Now!</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- navbar end -->
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h1 class="display-4 fw-bolder">Welcome to<span> Fresh</span>Bites</h1>
            <p class="lead fw-normal">Freshen up your day with FreshBites.</p>
            <hr class="my-4 heroHR" />
            <p class="desc">
              “At Fresh Bites, we are passionate about providing you with the highest quality produce and making healthy snacking convenient and accessible for everyone.
              Our selection of fruits is carefully curated to offer you the freshest and most nutritious options available. Whether you're looking for a midday snack or ingredients for your favorite recipe, Fresh Bites has got you covered.”
            </p>
            <div class="row">
              <div class="col">
                <button class="btn btn-orderNow" type="button">Order Now!</button>
              </div>
            </div>
          </div>
          <div class="col-md-5 ps-5 d-none d-lg-block" >
            <div class="hero-imgs">
              <img class="hero-img1" src="assets/anna-bratiychuk-VkOCQt9YiyI-unsplash.jpg" alt="" />
              <img class="hero-img2" src="assets/monika-grabkowska-B3ZHo7aoJEc-unsplash.jpg" alt="">
            </div>
          </div>
        </div>
      </div> 
    </div>
  </section>
  <!-- hero section end -->

  <!-- product section -->
  <section id="produk" class="produk mb-5">
    <div class="container product-container">
      <div class="row header-product-container">
        <div class="col-md-12 text-center">
          <h1 class="fw-bolder">Our Products</h1>
          <p class="fw-normal">Freshen up your day with FreshBites.</p>
          <hr class="my-4 heroHR" />
        </div>
      </div>
      <div id="products" class="row products">
       
      </div>
      <div class="pagination mb-3"></div>
    </div>
  </section>
  <!-- --- -->
  
  <section id="about" class="about mt-5 mb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 justify-content-center d-none d-lg-flex">
          <img class="about-img1" src="assets/anna-bratiychuk-VkOCQt9YiyI-unsplash.jpg" alt="">
          <img class="about-img2" src="assets/monika-grabkowska-B3ZHo7aoJEc-unsplash.jpg" alt="">
        </div>
        <div class="col-md-6" >
          <h1 class="fw-bolder">About Us</h1>
          <p class="fw-normal">
            <span>Fresh</span>Bite - Freshen up your day with FreshBites.</p>
          <hr class="my-4 heroHR" />
          <p class="desc">
            Welcome to FreshBite, your ultimate destination for fresh and healthy fruits! We are passionate about bringing you the best quality fruits from our farms, so you can experience the ultimate taste and freshness in every bite.

            <br>
            <br>

            At FreshBite, we understand the importance of healthy eating habits in maintaining an active and healthy lifestyle. That's why we're committed to providing you with the best and freshest fruits all year round.
            
            <br>
            <br>

            Our fruits are carefully picked and packed to ensure that they arrive at your doorstep in the best condition possible. We work directly with farmers to ensure that our fruits are grown using the best farming practices and are free from harmful chemicals.
            
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="order">
    <!-- order form -->
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="fw-bolder">Order Now!</h1>
          <p class="fw-normal">Freshen up your day with FreshBites.</p>
          <hr class="my-4 heroHR" />
          <p>
            We know fruits is the best and healthy choice to make your body fit and full with energy. With a lot of benefits, fruits now easier to get with Freshbite. Start your healthy lifestyle right now with Freshbite. Let's order now!
          </p>
        </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card w-100 mb-5">
          <div class="card-body">
            <form class="row g-3" action="" method="post">
              <div class="col-md-6">
                <label for="nama_pemesan" class="form-label">Name</label>
                <input type="text" class="form-control" id="nama_pemesan" name="nama_pemesan">
              </div>
              <div class="col-md-6">
                <label for="no_hp_pemesan" class="form-label">Phone</label>
                <input type="text" class="form-control" id="no_hp_pemesan" name="no_hp_pemesan">
              </div>
              <div class="col-12">
                <label for="alamat_pemesan" class="form-label">Address</label>
                <input type="text" class="form-control" id="alamat_pemesan"  name="alamat_pemesan">
              </div>
              <div class="col-md-6">
                <label for="kota_asal_pemesan" class="form-label">City</label>
                <input type="text" class="form-control" id="kota_asal_pemesan" name="kota_asal_pemesan">
              </div>
              <div class="col-md-4">
                <label for="produk_dipesan" class="form-label">Product</label>
                <select id="produk_dipesan" class="form-select" name="produk_dipesan">
                  <option selected value="Manggis 1kg">Manggis - 1Kg</option>
                  <option value="Aple 1kg">Aple - 1Kg</option>
                  <option value="Jeruk 1kg">Jeruk - 1Kg</option>
                  <option value="Strawberry 1kg">Strawberry - 1Kg</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="kode_pos_pemesan" class="form-label">Zip</label>
                <input type="text" class="form-control" id="kode_pos_pemesan" name="kode_pos_pemesan">
              </div>
              <!-- Button Submit -->
              <div class="col-12">
                <button type="submit" name="pesan" class="btn btn-orderNow">Submit</button>
                <a href="https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20product" target="_blank" class="float-end" style="text-decoration: none; color: #d53535;">If you need something, click here to send us a message!</a>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <section class="footer py-4">
    <div class="container">
      <div class="row d-none d-lg-flex">
        <div class="col-lg-4">
          <h5><span>About Us</span></h5>
          <p>
            FreshBite is a fruit delivery service that provides you with the best and freshest fruits all year round. We work directly with farmers to ensure that our fruits are grown using the best farming practices and are free from harmful chemicals.
          </p>
        </div>
        <div class="col-lg-4">
          <h5><span>Contact Us</span></h5>
          <p>Sleman<br> Yogyakarta, Indonesia 47813<br> Email: freshbite@example.com<br> Phone: +62895613xxxxxxx</p>
        </div>
        <div class="col-lg-4">
          <h5><span>Connect With Us</span></h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white"><i class="fab fa-facebook fa-lg me-2"></i>Facebook</a></li>
            <li><a href="#" class="text-white"><i class="fab fa-twitter fa-lg me-2"></i>Twitter</a></li>
            <li><a href="#" class="text-white"><i class="fab fa-instagram fa-lg me-2"></i>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-12 text-center">
          <p class="mb-0">&copy; 2023 FreshBite Zein Irfansyah. All rights reserved.</p>
        </div>
      </div>
    </div>
</section>
  
  <script src="js/functions.js"></script>
    <!--Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>

