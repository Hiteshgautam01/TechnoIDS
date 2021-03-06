$(document).on("click", "#contact-popup-close-btn", function () {
console.log("welcome")
 $('#contact-popup').hide(200)

})

function openContactPopup()
{
    $('#contact-popup').show(500);
}


var navBar=`
<header class="header navbar-fixed-top">
<nav class="navbar" role="navigation">
  <div class="container">
    <div class="menu-container js_nav-item">
      <button type="button" class="navbar-toggle"  onclick="mouseinout('#product-list')" data-toggle="collapse" data-target=".nav-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="toggle-icon"></span>
      </button>

      <div class="logo">
        <a class="logo-wrap" href="https://technoids.in/">
          <img class="logo-img logo-img-main" src="https://technoids.in/mainlogogogo.svg" alt="FlameOnePage Logo" />
          <img class="logo-img logo-img-active" src="https://technoids.in/mainlogogogo.svg" alt="FlameOnePage Dark Logo" />
        </a>
      </div>
    </div>

    <div class="collapse navbar-collapse nav-collapse">
      <!--div class="language-switcher">
                  <ul class="nav-lang">
                    <li><a class="active" href="#">EN</a></li>
                    <li><a href="#">DE</a></li>
                    <li><a href="#">FR</a></li>
                  </ul>
                </div--->

      <div class="menu-container" >
        <ul class="nav navbar-nav navbar-dark navbar-nav-right">
          <li class="js_nav-item nav-item " onmouseover="mouseinout('#product-list')">
            <a class="nav-item-child nav-item-hover" href="#body">
              Products
            </a>
          </li>

          <li class="js_nav-item nav-item">
            <a class="nav-item-child" href="/#about-us">About us</a>
          </li>
          <!-- <li class="js_nav-item nav-item">
            <a class="nav-item-child nav-item-hover" href="#about">Team</a>
          </li> -->
          <li class="js_nav-item nav-item">
            <a class="nav-item-child" href="/#services">Services</a>
          </li>
          <li class="js_nav-item nav-item">
            <a class="nav-item-child" href="https://wot.hrmthread.com/hrmthread/view/loginmain.aspx?key=wot&mod=ess&code=wot" target="_blank">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </div>     
</nav>  

<!--  nav bar dropdown -->

<div class="nav-dropdown" id="product-list">
<div class="nav-dropdown-first-col">
  <div class="nav-dropdown-first-col-items">
      <a  onmouseover="showSubCategory('#product-sub-category-1')">Attendance & Access Control
          Management</a>
      <a  onmouseover="showSubCategory('#product-sub-category-2')">Security Inspection System</a>
      <a  onmouseover="showSubCategory('#product-sub-category-3')">Parking Control System</a>

  </div>
</div>

<!-- second col -->

<div class="nav-dropdown-second-col">
  <div class="nav-dropdown-first-col-items hide-dropdown-product-items" id="product-sub-category-1">
      <a onmouseover="showSubCategoryItems('#product-items-1')" onclick="">Face Recognition
          Series</a>
      <a onmouseover="showSubCategoryItems('#product-items-2')" onclick="">Fingerprint Series</a>
      <a onmouseover="showSubCategoryItems('#product-items-3')" onclick="">Fingerprint and Card
          Series</a>
      <a onmouseover="showSubCategoryItems('#product-items-4')" onclick="">Smart Door Locks</a>
  </div>
  <div class="nav-dropdown-first-col-items hide-dropdown-product-items" id="product-sub-category-2">
      <a onmouseover="showSubCategoryItems('#product-items-5')" onclick="">Metal Detectors</a>
      <a onmouseover="showSubCategoryItems('#product-items-7')" onclick="">Tripod Barrier</a>
      <a onmouseover="showSubCategoryItems('#product-items-8')" onclick="">Flap Barrier</a>
      <a onmouseover="showSubCategoryItems('#product-items-9')" onclick="">Swing Barrier</a>
      <a onmouseover="showSubCategoryItems('#product-items-10')" onclick="">Baggage Scanner</a>

  </div>
  <div class="nav-dropdown-first-col-items hide-dropdown-product-items" id="product-sub-category-3">
      <a onmouseover="showSubCategoryItems('#product-items-11')" onclick="">Boom Barrier</a>
      <a onmouseover="showSubCategoryItems('#product-items-12')" onclick="">Toll Barrier</a>
      <a onmouseover="showSubCategoryItems('#product-items-13')" onclick="">UHF Card Reader</a>

  </div>

</div>

<!-- third col -->
<div class="nav-dropdown-third-col">

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-1">
      <a href="https://technoids.in/query/atf-305-atf-305-atf-305-1k" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/ATF-305%20&%20ATF-305+%20&%20ATF-305%201k.png"
              alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>ATF-305 & ATF-305+ & ATF-305 1k</p>
              <p>Face Recognition Terminal with Access Control
                Supports upto 1k face templates
                2 more Variants</p>
          </div>
      </a> <a href="https://technoids.in/query/atf-686-atf-686-" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/ATF-686%20&%20ATF-686+.png" alt=""
              class="ndtc-img">
          <div class="ndtc-content">
              <p>ATF-686 & ATF-686+</p>
              <p>Face Recognition Terminal with built-in Access Control
                Supports upto 1500 face templates
                1 more Variants</p>
          </div>
      </a> <a href="https://technoids.in/query/atf-395" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/ATF-395.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>ATF-395</p>
              <p>Face Recognition Terminal with built-in Access Control
                Supports upto 3k face templates</p>
          </div>
      </a> <a href="https://technoids.in/query/vf01" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/VF01.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>VF01</p>
              <p>Face Recognition Terminal with upto 3k face capacity
                4.3 inch Touch Screen
              </p>
          </div>
      </a> <a href="https://technoids.in/query/vf02" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/VF02.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>VF02</p>
              <p>Face Recognition Terminal with upto 3k face capacity
                4.3 inch Touch Screen
              </p>
          </div>
      </a> <a href="https://technoids.in/query/TechnoUF40" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TechnoUF40.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TechnoUF40</p>
              <p>Face Recognition Terminal with built-in Access Control
                3.97-inch touch screen
                300 face capacity
                1 more Variant</p>
          </div>
      </a> <a href="https://technoids.in/query/ultraface341" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/ULTRAFACE341.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>ULTRAFACE341</p>
              <p>Face Recognition Terminal with built-in Access Control
                4.3-inch touch screen with Mask Detection
                1500 Face Capacity
                2 more Variants</p>
          </div>
      </a> <a href="https://technoids.in/query/ultraface671" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/ULTRAFACE671.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>ULTRAFACE671</p>
              <p>Face Recognition based Access Control System
                Massive 7-inch LCD touch screen
                Upto 50k Face Capacity
                2 more Variants
          </div>
      </a> <a href="https://technoids.in/query/ultraface-607-671-mask-temperature-50k-" onmouseover=""
          onclick="">
          <img src="https://technoids.in/img/productimages/ULTRAFACE%20607%20&%20671(MASK+TEMPERATURE+50k).png"
              alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>ULTRAFACE 607 & 671(MASK+TEMPERATURE+50k)</p>
              <p>Face Recognition based Access Control System
                Massive 7-inch LCD touch screen
                Temperature Recognition and Mask Detection
                Upto 50k Face Capacity</p>
          </div>
      </a>
  </div>

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-2">
      <a href="https://technoids.in/query/ultrafp8503-ultrafpt20ac" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/ULTRAFP8503%20&%20ULTRAFPT20AC.png" alt=""
              class="ndtc-img">
          <div class="ndtc-content">
              <p>ULTRAFP8503 & ULTRAFPT20AC</p>
              <p>Fingerprint time attendance & access control terminal
                Upto 1k User Capacity
                2.4-inch LCD display</p>
          </div>
      </a> <a href="https://technoids.in/query/ultrafp802" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/ULTRAFP802.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>ULTRAFP802</p>
              <p>Fingerprint time attendance & access control terminal
                Upto 3k User Capacity
                2.8-inch LCD display</p>
          </div>
      </a>
  </div>

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-3">
      <a href="https://technoids.in/query/bioa10" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/BIOA10.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>BIOA10</p>
              <p>Fingerprint and card based terminal
                Upto 1k User Capacity
              </p>
          </div>
      </a> <a href="https://technoids.in/query/bio-28" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/BIO-28.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>BIO-28</p>
              <p>Fingerprint and card based terminal
                Upto 500 User Capacity
                </p>
          </div>
      </a> <a href="https://technoids.in/query/bio-12" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/BIO-12.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>BIO-12</p>
              <p>ID Card module for Bio 4 with dimension H120mm W57mm 
                D30mm.</p>
          </div>
      </a> <a href="https://technoids.in/query/bio-3" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/BIO-3.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>BIO-3</p>
              <p>User Capacity:5,000 (Fingerprint/Password/Card) Log Capacity:1,60,000
              </p>
          </div>
      </a>
  </div>

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-4">
      <a href="https://technoids.in/query/TIDS-SDLG1" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TIDS-SDLG1.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TIDS-SDLG1</p>
              <p>Password for opening door : 1,000 Units 
                Fingerprint for opening door : 500 Units 
                Cards for Opening door : 1,000 Units</p>
          </div>
      </a> <a href="https://technoids.in/query/TIDS-SDL1000" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TIDS-SDL1000.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TIDS-SDL1000</p>
              <p>Aluminuim Alloy holding material with size of 280*72mm
                
              </p>
          </div>
      </a> <a href="https://technoids.in/query/TIDS-SDL2000" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TIDS-SDL2000.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TIDS-SDL2000</p>
              <p>Aluminuim Alloy holding material with size of 280*72mm
                with 6V four alkaline batteries
              </p>
          </div>
      </a>
  </div>

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-5">
      <a href="https://technoids.in/query/tw-hh100" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-HH100.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-HH100</p>
              <p>Hand Held Metal Detector</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-hh100-battery" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-HH100%20+%20Battery.png" alt=""
              class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-HH100 + Battery</p>
              <p>Hand Held Metal Detector with battery</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-d2101" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20D2101.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- D2101</p>
              <p>Detection Zone-1</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-d2601" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20D2601.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- D2601</p>
              <p>Detection Zone-6</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-d2121" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20D2121.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- D2121</p>
              <p>Detection Zone-12</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-d2181" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20D2181.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- D2181</p>
              <p>Detection Zone-18</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-at-iiid" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20AT%20IIID.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- AT IIID</p>
              <p>Detection Zone-18, outdoor model </p>
          </div>
      </a> <a href="https://technoids.in/query/tw-d2331" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20D2331.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- D2331</p>
              <p>Detection Zone-33, outdoor model </p>
          </div>
      </a> <a href="https://technoids.in/query/tw-d2331b" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20D2331B.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- D2331B</p>
              <p>Detection Zone-33, outdoor model with battery </p>
          </div>
      </a>
  </div>


  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-7">
      <a href="https://technoids.in/query/tw-t1000" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-T1000.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-T1000</p>
              <p>Dimension: 480*280*980mm with unlocking time of 0.2 
                Second</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-t1200" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-T1200.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-T1200</p>
              <p>Dimension: 600 x 330 x 980 mm with lane Extender with a 
                pass rate of 35 person/minute</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-t2000" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-T2000.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-T2000</p>
              <p>Tripod Barrier with a Dimension of 1200x280x980mm</p>
          </div>
      </a>
  </div>

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-8">
      <a href="https://technoids.in/query/tw-fb2000" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20FB2000.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- FB2000</p>
              <p>Flap Barrier with a Dimension of 1200x280x980mm</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-fb2200" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20FB2200.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- FB2200</p>
              <p>Flap Barrier with a Dimension of 1200x280x980mm with 
                lane Extender</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-fb3000" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20FB3000.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- FB3000</p>
              <p>Flap Barrier with a Dimension of 1400x300x990mm</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-fb3300" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-%20FB3300.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW- FB3300</p>
              <p>Flap Barrier with a Dimension of 1400x300x990mm with 
                lane Extender</p>
          </div>
      </a>
  </div>

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-9">
      <a href="https://technoids.in/query/tw-sbt1000" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-SBT1000.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-SBT1000</p>
              <p>Swing Barrier with a Dimensions(mm) of L=985,W=200,
                H=1100</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-sbt2000" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-SBT2000.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-SBT2000</p>
              <p>Swing Barrier with a Dimensions(mm) of 1200x280x980mm</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-sbt2200" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-SBT2200.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-SBT2200</p>
              <p>Swing Barrier with a Dimensions(mm) of 1200x280x980mm 
                with Lane Extender</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-sbt3000" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-SBT3000.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-SBT3000</p>
              <p>Swing Barrier with a Dimensions(mm) of 
                1400x185x1020mm</p>
          </div>
      </a> <a href="https://technoids.in/query/tw-sbt3300" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-SBT3300.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-SBT3300</p>
              <p>Swing Barrier with a Dimensions(mm) of 1400x185x1020mm 
                with Lane Extender</p>
          </div>
      </a>
  </div>

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-13">
      <a href="https://technoids.in/query/tipl-101" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TIPL%20101.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TIPL 101</p>
              <p>UHF Card reader with a proximity range of 0-5 M</p>
          </div>
      </a> <a href="https://technoids.in/query/tipl-102" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TIPL%20102.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TIPL 102</p>
              <p>UHF Card reader with a proximity range of 5-15 M</p>
          </div>
      </a> <a href="https://technoids.in/query/ultrauhf06" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/UltraUHF06.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>UltraUHF06</p>
              <p>UHF High Performance Middle Range Reader Proximity Range 5-6 M</p>
          </div>
      </a> <a href="https://technoids.in/query/ultrauhf12" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/UltraUHF12.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>UltraUHF12</p>
              <p>UHF Hight Performance Long Range Reader Proximity Range 12-15 M</p>
          </div>
      </a>
  </div>

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-12">
      <a href="https://technoids.in/query/tw-pb3010" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-PB3010.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-PB3010</p>
              <p>3M straight aluminium alloy arm 0.9 Seconds opening/closing time  </p>
          </div>
      </a>
  </div>

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-11">
      <a href="https://technoids.in/query/tw-pb3030" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-PB3030.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-PB3030</p>
              <p>Die-casting aluminium alloy motor with a 3 Seconds 
                opening/closing time </p>
          </div>
      </a> <a href="https://technoids.in/query/tw-pb6060" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-PB6060.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-PB6060</p>
              <p>6 Seconds opening/closing time with auto closing </p>
          </div>
      </a> <a href="https://technoids.in/query/tw-pb4060fl" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-PB4060FL.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-PB4060FL</p>
              <p> Folding type Boom Barrier with opening time of 6 Second </p>
          </div>
      </a> <a href="https://technoids.in/query/tw-pb4060fs" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/TW-PB4060FS.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>TW-PB4060FS</p>
              <p>Fencing type Boom Barrier with opening time of 6 Second  </p>
          </div>
      </a>
  </div>

  <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-10">
      <a href="https://technoids.in/query/Techno-XBS53" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/Techno-XBS53.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>Techno-XBS53</p>
              <p>Tunnel size(mm) 500(L)*300(W)
                 Conveyor height(mm) 668.5
                 Conveyor Max Load(kgs) 100</p>
          </div>
      </a> <a href="https://technoids.in/query/Techno-XBS3612" onmouseover="" onclick="">
          <img src="https://technoids.in/img/productimages/Techno-XBS3612.png" alt="" class="ndtc-img">
          <div class="ndtc-content">
              <p>Techno-XBS3612</p>
              <p>Tunnel size(mm) 3629(L)*1295(W) 1916(H)
                 Conveyor Speed(m/s) 0.22
                 Conveyor height(mm) 341</p>
          </div>
      </a>
  </div>


</div>
</div>

</header>`

document.getElementById("nav-bar-generated").innerHTML=navBar

// $("#contact-us-popup").hide()

var contactPopup=`
<div class="contact-us-form" style="display: none;" id="contact-us-popup">
<div class="contact-form-inner">
  <div class="contact-form-popup-header"><span>Raise a query</span><span onclick="$('#contact-us-popup').hide(300)">x</span></div>
  <div class="contact-form-popup">
    <input type="text" placeholder="Enter your name" >
    <input type="text" placeholder="Enter your company name" >
    <input type="text" placeholder="Enter your location" >
    <input type="number" placeholder="Enter no. of unit required" >
    <input type="email" placeholder="Enter your mail-id" >
    <input type="number" placeholder="Enter your number" >

    <button type="submit">Submit</button>
  </div>
</div>
</div>`

document.getElementById("generated-contact-popup").innerHTML=contactPopup
