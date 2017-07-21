<?php 
	$title = '404';
?>
<?php include 'header.php'; ?>

<style>
	body{background: #000; color:#fff; max-height:700px; overflow: hidden; }
	.error-main--container{position: relative; margin-top: 190px;}
	.error-container {position: absolute; left: 0; right: 0; bottom: 0; top: 0; color: #fff; text-align: center; margin-right: auto; margin-left: auto;}
	#clouds{position: fixed; top: 0; left: 0; right: 0; bottom: 0; height: 100%; width: 100%; overflow: hidden; background-color: #121212;}
	.subtitle{text-align:center; display:block; position: relative; font-size: 26px; color: #fff;}
	.text{font-size: 70px; text-align: center; position: relative; display: inline-block; margin: 19px 0px 0px 0px; /* top: 256.301px; */ z-index: 3; width: 100%; line-height: 1.2em; display: inline-block; }

	.btn{background-color: rgb( 255, 255, 255 ); position: relative; display: inline-block; width: 358px; padding: 5px; z-index: 5; font-size: 25px; margin:0 auto; color:#000; text-decoration: none; margin-right: 10px; margin: 0 auto;}
	.right{float:right; width:60%; }

	hr{padding: 0; border: none; border-top: 5px solid #fff; color: #fff; text-align: center; margin: 0px auto; width: 420px; height:10px; z-index: -10; }
	hr:after {content: "\2022"; display: inline-block; position: relative; top: -0.75em; font-size: 2em; padding: 0 0.2em; background: #000; }

	.cloud {width: 350px; height: 120px; background: #FFF; background: linear-gradient(top, #FFF 100%); background: -webkit-linear-gradient(top, #FFF 100%); background: -moz-linear-gradient(top, #FFF 100%); background: -ms-linear-gradient(top, #FFF 100%); background: -o-linear-gradient(top, #FFF 100%); border-radius: 100px; -webkit-border-radius: 100px; -moz-border-radius: 100px; position: absolute; margin: 120px auto 20px; z-index:-1; transition: ease 1s; }
	.cloud:after, .cloud:before {content: ''; position: absolute; background: #FFF; z-index: -1 }
	.cloud:after {width: 100px; height: 100px; top: -50px; left: 50px; border-radius: 100px; -webkit-border-radius: 100px; -moz-border-radius: 100px; }
	.cloud:before {width: 180px; height: 180px; top: -90px; right: 50px; border-radius: 200px; -webkit-border-radius: 200px; -moz-border-radius: 200px; }

	.x1 {top:-50px; left:100px; -webkit-transform: scale(0.3); -moz-transform: scale(0.3); transform: scale(0.3); opacity: 0.9; -webkit-animation: moveclouds 15s linear infinite; -moz-animation: moveclouds 15s linear infinite; -o-animation: moveclouds 15s linear infinite; }
	.x1_5{top:-80px; left:250px; -webkit-transform: scale(0.3); -moz-transform: scale(0.3); transform: scale(0.3); -webkit-animation: moveclouds 17s linear infinite; -moz-animation: moveclouds 17s linear infinite; -o-animation: moveclouds 17s linear infinite; }
	.x2 {left: 250px; top:30px; -webkit-transform: scale(0.6); -moz-transform: scale(0.6); transform: scale(0.6); opacity: 0.6; -webkit-animation: moveclouds 25s linear infinite; -moz-animation: moveclouds 25s linear infinite; -o-animation: moveclouds 25s linear infinite; }
	.x3 {left: 250px; bottom: -70px; -webkit-transform: scale(0.6); -moz-transform: scale(0.6); transform: scale(0.6); opacity: 0.8; -webkit-animation: moveclouds 25s linear infinite; -moz-animation: moveclouds 25s linear infinite; -o-animation: moveclouds 25s linear infinite; }
	.x4 {
	  left: 470px; botttom: 20px; -webkit-transform: scale(0.75); -moz-transform: scale(0.75); transform: scale(0.75); opacity: 0.75; -webkit-animation: moveclouds 18s linear infinite; -moz-animation: moveclouds 18s linear infinite; -o-animation: moveclouds 18s linear infinite; }
	.x5 {left: 200px; top: 300px; -webkit-transform: scale(0.5); -moz-transform: scale(0.5); transform: scale(0.5); opacity: 0.8; -webkit-animation: moveclouds 20s linear infinite; -moz-animation: moveclouds 20s linear infinite; -o-animation: moveclouds 20s linear infinite; }

	@-webkit-keyframes moveclouds {0% {margin-left: 1000px;} 100% {margin-left: -1000px;} } @-moz-keyframes moveclouds {0% {margin-left: 1000px;} 100% {margin-left: -1000px;} } @-o-keyframes moveclouds {0% {margin-left: 1000px;} 100% {margin-left: -1000px;} }

	footer{display: none;}
	.loader{display: none;}
	#page-content-wrapper {display: block; }

	.title {color: #fff; display: inline-block; margin: 0 0 10px; padding: 0 0 10px; position: relative; z-index: 2; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 300; font-size: 36px;}
	.title:before {display: block; position: absolute; bottom: 0; left: 0; width: 12px; height: 3px; background: #fff; content: ''; }

</style>


<div class="error-main--container">
	<div class='error-container'>
		<div class="error-row">
		 <div id="clouds">
				<div class="cloud x1"></div>
				<div class="cloud x1_5"></div>
				<div class="cloud x2"></div>
				<div class="cloud x3"></div>
				<div class="cloud x4"></div>
				<div class="cloud x5"></div>
			</div>
			<div class='subtitle margintop0 marginbottom40 font78'>BOOMER</div>
			<h1 class="title">Error 404</h1>
			<div class='subtitle'>OOPS! THE PAGE WAS NOT FOUND</div>
			<div class="margintop30"></div>
			<a class='btn' href='./'>GO BACK</a>
		</div>
	</div>
</div>


<?php include 'footer.php'; ?>


