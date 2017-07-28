 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Thet Studio">
    <?php 
      $title = 'CREER PARA VER';
      $metaDescription = '<meta name="description" content="Description">';
    ?>
    <title><?php echo "$title"; ?></title>
    <?php echo $metaDescription; ?>
    <meta property="fb:app_id" content="000"/>
    <meta property="og:title" content="CREER PARA VER"/>
    <meta property="og:description" content="Description" />
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://www.url.com">
    <meta property="og:image" content="http://www.url.com/images/facebook-og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="CREER PARA VER" />
    <meta name="twitter:description" content="Description" />
    <meta name="twitter:image" content="http://www.url.com/images/twitter-card.png" />
    <meta name="twitter:site" content="@account" />
    <meta name="twitter:creator" content="@account" />
    <link rel="icon" href="images/favicon.ico">
    <!-- CSS -->
    <link rel="stylesheet" href="styles/bootstrap.min.css">
    <link rel="stylesheet" href="css/nprstrap.css">
    <!-- Javascript -->
    <script src="scripts/jquery-3.2.1.min.js"></script>
	  <script src="scripts/fullpage.min.js"></script>

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-111111-1', 'auto');
      ga('send', 'pageview');
  </script>
  </head>
  <body>
    <!-- .wrapper -->
    <div id="wrapper" class="">
      <!-- loader css3 -->
      <div class="loader">
        <!-- <div class="sk-folding-cube">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div> -->
        <div class="trackbar">
          <div class="loadbar"></div>
        </div>
        <div class="percentage" id="precent"></div>
        <!-- <div class="glow"></div> -->
      </div>
      <script>
        // Loader
        var winHeight = $(window).height();
        $('.sk-folding-cube').css('top' , ((winHeight / 2) - 40));
      </script>
      <!-- .sidebar-wrapper -->
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li><a href="./">Inicio</a></li>
          <li><a href="#">+ SUMATE AL PROYECTO</a></li>
          <li><a href="#">+ INFO</a></li>
          <li><a href="#">ENG<i class="fa fa-angle-right"></i></a></li>
          <li class="dropper">
            <a href="#">
              Secciones
              <i class="fa fa-angle-up"></i>
            </a>
          </li>
          <li class="drop" data-menuanchor='section-00'><a href="#section-00">Seccion 00</a></li>
          <li class="drop" data-menuanchor='section-000'><a href="#section-000">Seccion 01</a></li>
          <li class="drop" data-menuanchor='section-01'><a href="#section-01">Seccion 02</a></li>
          <li class="drop" data-menuanchor='section-02'><a href="#section-02">Seccion 03</a></li>
          <li class="drop" data-menuanchor='section-03'><a href="#section-03">Seccion 04</a></li>
          <li class="drop" data-menuanchor='section-04'><a href="#section-04">Seccion 05</a></li>
          <li class="drop" data-menuanchor='section-05'><a href="#section-05">Seccion 06</a></li>
          <li class="drop" data-menuanchor='section-06'><a href="#section-06">Seccion 07</a></li>
          <li class="drop" data-menuanchor='section-07'><a href="#section-07">Seccion 08</a></li>
          <li class="drop" data-menuanchor='section-08'><a href="#section-08">Seccion 09</a></li>
        </ul>
        <div class="social-block">
          <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a>
          <a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a>
          <a href="https://www.youtube.com/channel/" target="_blank"><i class="fa fa-youtube"></i></a>
          <a href="https://www.linkedin.com/company/" target="_blank"><i class="fa fa-linkedin"></i></a>
        </div>
      </div>
      <!-- /.sidebar-wrapper -->
      <a href="#sidebar-closebox" class="sidebar-closebox" id="sidebar-closebox"></a>
      <!-- .page-content-wrapper -->
      <div id="page-content-wrapper">
        <nav id='navbar' class="navbar navbar-fixed-top">
          <div class="container-fluid">
            <div class="col-12 col-sm-12">
                <div class="navbar-header">
                  <!-- Brand and toggle get grouped for better mobile display -->
                  <div class="navbar-toggle collapsed" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </div>
                  <a href="./" class="navbar-brand brand-img">
                    <img src="images/brand-logo.png" alt="Brand">
                    <!-- <div>CREER PARA VER</div> -->
                  </a>
                  <div class="navbar-right hidden-md-down">
                    <a href="#" class="project-logo">
                      + SUMATE AL PROYECTO
                    </a>
                    <div class="separator"></div>
                    <div class="social-block">
                      <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a>
                      <a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a>
                      <a href="https://www.youtube.com/channel/" target="_blank"><i class="fa fa-youtube"></i></a>
                      <a href="https://www.linkedin.com/company/" target="_blank"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <div class="separator"></div>
                    <a href="#" class="project-logo">
                      +INFO
                      <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                    </a>
                    <div class="separator"></div>
                    <div class="btn-group project-dropdown">
                      <a href="#" class="project-logo">
                        ESP
                        <i class="fa fa-angle-up" aria-hidden="true"></i>
                      </a>
                      <div class="dropdown-overflow">
                        <div class="dropdown-container">
                          <div class="dropdown-content">
                            <ul>
                              <li>ENG</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <!-- /.navbar-collapse -->
      </nav>
