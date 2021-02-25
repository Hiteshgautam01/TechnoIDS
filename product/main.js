$(document).on("click", "#contact-popup-close-btn", function () {

 $('#contact-popup').slideUp(800)

})

function openContactPopup()
{
    $('#contact-popup').slideDown(800);
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
            <a class="logo-wrap" href="#body">
              <img class="logo-img logo-img-main" src="./mainlogogogo.svg" alt="FlameOnePage Logo" />
              <img class="logo-img logo-img-active" src="./mainlogogogo.svg" alt="FlameOnePage Dark Logo" />
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
                <a class="nav-item-child nav-item-hover" href="#about-us">About us</a>
              </li>
              <!-- <li class="js_nav-item nav-item">
                <a class="nav-item-child nav-item-hover" href="#about">Team</a>
              </li> -->
              <li class="js_nav-item nav-item">
                <a class="nav-item-child nav-item-hover" href="#services">Services</a>
              </li>

              <!-- <li class="js_nav-item nav-item">
                <a class="nav-item-child nav-item-hover" href="#work">Credentials</a>
              </li> -->
              <!-- <li class="js_nav-item nav-item">
                <a class="nav-item-child nav-item-hover" href="#pricing">Pricing</a>
              </li> -->
              <li class="js_nav-item nav-item">
                <a class="nav-item-child nav-item-hover" href="#contact">Contact</a>
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
          <a href="" onmouseover="showSubCategory('#product-sub-category-1')">Attendance & Access Control
              Management</a>
          <a href="" onmouseover="showSubCategory('#product-sub-category-2')">Security Inspection System</a>
          <a href="" onmouseover="showSubCategory('#product-sub-category-3')">Parking Control System</a>

      </div>
  </div>

  <!-- second col -->

  <div class="nav-dropdown-second-col">
      <div class="nav-dropdown-first-col-items hide-dropdown-product-items" id="product-sub-category-1">
          <a href="" onmouseover="showSubCategoryItems('#product-items-1')" onclick="">Face Recognition
              Series</a>
          <a href="" onmouseover="showSubCategoryItems('#product-items-2')" onclick="">Fingerprint Series</a>
          <a href="" onmouseover="showSubCategoryItems('#product-items-3')" onclick="">Fingerprint and Card
              Series</a>
          <a href="" onmouseover="showSubCategoryItems('#product-items-4')" onclick="">Smart Door Locks</a>
      </div>
      <div class="nav-dropdown-first-col-items hide-dropdown-product-items" id="product-sub-category-2">
          <a href="" onmouseover="showSubCategoryItems('#product-items-5')" onclick="">Hand Held Metal
              detectors</a>
          <a href="" onmouseover="showSubCategoryItems('#product-items-6')" onclick="">Door Frame Metal
              Detectors</a>
          <a href="" onmouseover="showSubCategoryItems('#product-items-7')" onclick="">Tripod Barrier</a>
          <a href="" onmouseover="showSubCategoryItems('#product-items-8')" onclick="">Flap Barrier</a>
          <a href="" onmouseover="showSubCategoryItems('#product-items-9')" onclick="">Swing Barrier</a>

      </div>
      <div class="nav-dropdown-first-col-items hide-dropdown-product-items" id="product-sub-category-3">
          <a href="" onmouseover="showSubCategoryItems('#product-items-10')" onclick="">Boom Barrier</a>
          <a href="" onmouseover="showSubCategoryItems('#product-items-11')" onclick="">Toll Barrier</a>
          <a href="" onmouseover="showSubCategoryItems('#product-items-12')" onclick="">UHF Card Reader</a>

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
                  <p>ATF-305 & ATF-305+ & ATF-305 1k face recognition time & attendance terminal comes with
                      latest hardware
                      platform and algorithm, it offers brand new and user-friendly operation interface to
                      provide smooth user
                      experience. With advanced face algorithm and muilt-biometric verification technology ,
                      the terminal’s
                      security level of verification is significantly enhanced. Variant 1- 300 face capacity |
                      3000 fingerprint
                      capacity | 300 card/password capacity Variant 2- 500 face capacity | 5000 fingerprint
                      capacity | 500
                      card/password capacity Variant 3- 1000 face capacity | 10000 fingerprint capacity | 1000
                      card/password
                      capacity</p>
              </div>
          </a> <a href="https://technoids.in/query/atf-686-atf-686-" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/ATF-686%20&%20ATF-686+.png" alt=""
                  class="ndtc-img">
              <div class="ndtc-content">
                  <p>ATF-686 & ATF-686+</p>
                  <p>ATF-686 & ATF-686+ face recognition time & attendance terminal comes with latest hardware
                      platform and
                      algorithm. It offers brand new UI and user-friendly operation interface to provide
                      smooth user experience.
                      With advanced face algorithm and muilt-biometric verification technology , the
                      terminal’s security level of
                      verification is significantly enhanced. Variant 1 - 1000 face capacity | 3000
                      fingerprint capacity | 1000
                      card/password capacity Variant 2 - 1500 face capacity | 5000 fingerprint capacity | 3000
                      card/password
                      capacity</p>
              </div>
          </a> <a href="https://technoids.in/query/atf-395" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/ATF-395.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>ATF-395</p>
                  <p>ATF-395 face recognition time & attendance terminal support up to 3,000 face
                      templates,10,000
                      fingerprint/card/password(For 3,000 Users Only) with latest hardware platform and
                      algorithm. It offers brand
                      new UI and user-friendly operation interface to provide smooth user experience. With
                      advanced face algorithm
                      and muilt-biometric verification technology , the terminal’s security level of
                      verification is significantly
                      enhanced</p>
              </div>
          </a> <a href="https://technoids.in/query/vf01" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/VF01.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>VF01</p>
                  <p>Speed face recognition product with high performance and high reliability, which depends
                      on the deep learning
                      algorithm, also having the characteristics of quick recognition speed and high accuracy.
                      This product
                      supports 1:1 and 1:N mode. Based on the person’s facial texture, shape, and movement.
                  </p>
              </div>
          </a> <a href="https://technoids.in/query/vf02" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/VF02.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>VF02</p>
                  <p>Speed face recognition product with high performance and high reliability, which depends
                      on the deep learning
                      algorithm, also having the characteristics of quick recognition speed and high accuracy.
                      This product
                      supports 1:1 and 1:N mode. Based on the person’s facial texture, shape, and movement.
                  </p>
              </div>
          </a> <a href="https://technoids.in/query/ultraface331" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/ULTRAFACE331.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>ULTRAFACE331</p>
                  <p>ULtraFAce331 series face recognition terminal adopts deep learning algorithm, which helps
                      to recognize the
                      face faster with higher accuracy. It also supports multiple authentication modes: face
                      authentication, etc.
                      When installed on the turnstile, it can be applied in multiple scenarios, such as
                      buildings,
                      enterprises,financial industries, and other important areas. Variant 1 - with WiFi
                      connectivity Variant 2 -
                      without WiFi connectivity</p>
              </div>
          </a> <a href="https://technoids.in/query/ultraface341" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/ULTRAFACE341.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>ULTRAFACE341</p>
                  <p>ULtraFAce341 series face recognition terminal adopts deep learning algorithm, which helps
                      to recognize the
                      face faster with higher accuracy. It also supports multiple authentication modes:
                      face/card/fingerprint
                      authentication, etc. It can be applied in multiple scenarios, such as buildings,
                      enterprises, financial
                      industries, and other important areas. Variant 1: 1500 Face Capacity | 1500 Card
                      Capacity | 150k Event
                      Capacity Variant 2: 1500 Face Capacity | 1500 Card Capacity | 1500 Fingerprint Capacity
                      | 150k Event
                      Capacity Variant 3: 1500 Face Capacity | 1500 Card Capacity | 1500 Fingerprint Capacity
                      | 150k Event
                      Capacity | with Battery Backup</p>
              </div>
          </a> <a href="https://technoids.in/query/ultraface671" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/ULTRAFACE671.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>ULTRAFACE671</p>
                  <p>ULtraFAce671 series face recognition terminal is a kind of access control device with
                      large screen ratio,
                      which supports 1:N face authentication. It can be mainly applied in multiple scenarios,
                      such as dwellings,
                      government buldings, Banks enterprises and so on. Variant 1: 6k Card and Face Capacity
                      Variant 2: 6k Card
                      and Face Capacity with GPRS Variant 3: 50k Card and Face Capacity</p>
              </div>
          </a> <a href="https://technoids.in/query/ultraface-607-671-mask-temperature-50k-" onmouseover=""
              onclick="">
              <img src="https://technoids.in/img/productimages/ULTRAFACE%20607%20&%20671(MASK+TEMPERATURE+50k).png"
                  alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>ULTRAFACE 607 & 671(MASK+TEMPERATURE+50k)</p>
                  <p>ULtraFAce671TM series face recognition terminal is a kind of access control device
                      integrated with
                      temperature screening function . It can fast taking skin-surface temperature and upload
                      abnormal temperature
                      event to the center , which can be widely applied in multiple scenarios, such as
                      enterprises, stations,
                      dwellings, factories , schools, campus and so on Variant 1 - 6k Face and Card Capacity
                      Variant 2 - 50k Face
                      and Card Capacity</p>
              </div>
          </a>
      </div>

      <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-2">
          <a href="https://technoids.in/query/ultrafp8503-ultrafpt20ac" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/ULTRAFP8503%20&%20ULTRAFPT20AC.png" alt=""
                  class="ndtc-img">
              <div class="ndtc-content">
                  <p>ULTRAFP8503 & ULTRAFPT20AC</p>
                  <p>Fingerprint time attendance & access control terminals feature multiple advanced
                      technologies, including
                      fingerprint recognition, smart card recognition Access Control(Optional)</p>
              </div>
          </a> <a href="https://technoids.in/query/ultrafp802" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/ULTRAFP802.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>ULTRAFP802</p>
                  <p>2.8-inch LCD screen to display time, date, week, and attendance information. It supports
                      registering
                      fingerprints from the terminal to software remotely. Max. 3000 users, Max. 3000
                      fingerprints and Max.
                      100,000 events records</p>
              </div>
          </a>
      </div>

      <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-3">
          <a href="https://technoids.in/query/bioa10" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/BIOA10.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>BIOA10</p>
                  <p>Bio-A10 Fingerprint Card & Password Based Access Control Terminal supports up to 1000
                      Finger Cards & Password
                      Its standalone access control device which works for access Control Bio-A10 Equipped
                      with powerful functions
                  </p>
              </div>
          </a> <a href="https://technoids.in/query/bio-28" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/BIO-28.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>BIO-28</p>
                  <p>Bio-28/12 Fingerprint Time & Attendance Terminal supports up to 500 Finger templates, and
                      500 cards Its
                      standalone access control device which works for access and attendance. Bio-28/12
                      Equipped with optical
                      sensor & powerful functions</p>
              </div>
          </a> <a href="https://technoids.in/query/bio-12" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/BIO-12.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>BIO-12</p>
                  <p>Bio 12 is an ID Card Module for Bio 4 with prompt buzzer and voice function, with
                      dimensions of H120mm W57mm
                      D30mm.</p>
              </div>
          </a> <a href="https://technoids.in/query/bio-3" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/BIO-3.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>BIO-3</p>
                  <p>Bio-3 is 2.8” color screen fingerprint time & attendance terminal support up to 5,000
                      fingerprint /card /
                      password its adopts Bio-ID (fingerprint) collector for excellent recognition and
                      optional Wi-Fi for
                      convenient communication .User can mange data via TCP/IP and USB Host port for data
                      download / upload to
                      avoid the risk of accidental deletion optional cloud based solution for remote location.
                  </p>
              </div>
          </a>
      </div>

      <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-4">
          <a href="https://technoids.in/query/fgl14" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/FGL14.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>FGL14</p>
                  <p>Fingerprint · RFID · Password Hybrid Verification Glass Door Lock</p>
              </div>
          </a> <a href="https://technoids.in/query/thtl1000" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/THTL1000.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>THTL1000</p>
                  <p>Mechanical: Standard locking core, all stainless steel part, with anti-pry, anti-dial and
                      anti-lock function.
                      Press handle more in line with human mechanical requirements Electronics: European
                      efficiency energy saving
                      (4 no. 5 batteries are guaranteed for 12 month, 30000 door open), maintenance free
                      (single chip operation
                      very low failure rate). Management software: room state management, complete time and
                      authority management,
                      with function interface connected with the hotel management system. Operation and use:
                      no need to push the
                      switch detection, direct excitation circuit. All components of the door lock are
                      industrial-grede devices,
                      with super adaptability to the environment, easy and fast operation, card reading time
                  </p>
              </div>
          </a> <a href="https://technoids.in/query/thtl2000" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/THTL2000.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>THTL2000</p>
                  <p>Mechanical: Standard locking core, all stainless steel part, with anti-pry, anti-dial and
                      anti-lock function.
                      Press handle more in line with human mechanical requirements Electronics: European
                      efficiency energy saving
                      (4 no. 5 batteries are guaranteed for 12 month, 30000 door open), maintenance free
                      (single chip operation
                      very low failure rate). Management software: room state management, complete time and
                      authority management,
                      with function interface connected with the hotel management system. Operation and use:
                      no need to push the
                      switch detection, direct excitation circuit. All components of the door lock are
                      industrial-grede devices,
                      with super adaptability to the environment, easy and fast operation, card reading time:
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
                  <p>Hand Held Metal Detector</p>
              </div>
          </a>
      </div>

      <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-6">
          <a href="https://technoids.in/query/tw-d2101" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20D2101.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- D2101</p>
                  <p>1. Intelligent partition: Can change detection zones according customers’ demands For
                      example convert 6 zones
                      to 12 zones or 18 zones(optional) 2. Can connect PC terminal that change specification
                      of WTMD
                      anytime,anywhere(optional) 3. We integrate 72 application occasions in the program,so
                      can change all zones
                      Sensitivity when you choose different occasion. 4. Have 4 kinds infrared mode: IR ON/IR
                      OFF/Front group IR
                      ON/Back group IR ON.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-d2601" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20D2601.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- D2601</p>
                  <p>1. Intelligent partition: Can change detection zones according customers’ demands For
                      example convert 6 zones
                      to 12 zones or 18 zones(optional) 2. Can connect PC terminal that change specification
                      of WTMD
                      anytime,anywhere(optional) 3. We integrate 72 application occasions in the program,so
                      can change all zones
                      Sensitivity when you choose different occasion. 4. Have 4 kinds infrared mode: IR ON/IR
                      OFF/Front group IR
                      ON/Back group IR ON</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-d2121" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20D2121.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- D2121</p>
                  <p>1. Intelligent partition: Can change detection zones according customers’ demands For
                      example convert 6 zones
                      to 12 zones or 18 zones(optional) 2. Can connect PC terminal that change specification
                      of WTMD
                      anytime,anywhere(optional) 3. We integrate 72 application occasions in the program,so
                      can change all zones
                      Sensitivity when you choose different occasion. 4. Have 4 kinds infrared mode: IR ON/IR
                      OFF/Front group IR
                      ON/Back group IR ON.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-d2181" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20D2181.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- D2181</p>
                  <p>1. Intelligent partition: Can change detection zones according customers’ demands For
                      example convert 6 zones
                      to 12 zones or 18 zones(optional) 2. Can connect PC terminal that change specification
                      of WTMD
                      anytime,anywhere(optional) 3. We integrate 72 application occasions in the program,so
                      can change all zones
                      Sensitivity when you choose different occasion. 4. Have 4 kinds infrared mode: IR ON/IR
                      OFF/Front group IR
                      ON/Back group IR ON.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-at-iiid" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20AT%20IIID.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- AT IIID</p>
                  <p>AT-IIID, walk through metal detector for Outdoor use, with small LCD display</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-d2331" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20D2331.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- D2331</p>
                  <p>AT-IIID, walk through metal detector for Outdoor use, with small LCD display</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-d2331b" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20D2331B.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- D2331B</p>
                  <p>AT-IIID, walk through metal detector for Outdoor use, with small LCD display</p>
              </div>
          </a>
      </div>


      <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-7">
          <a href="https://technoids.in/query/tw-t1000" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-T1000.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-T1000</p>
                  <p>All turnstile models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorized
                      entries,The unique
                      dropping arm feature provides a fail safety solution in case of an emergency or power
                      failure,Tproviding
                      egress in case of crisis evacuations. Durability with minimal maintenance means years
                      and millions of
                      trouble free passages. The turnstile creates a secure environment in. for example, a
                      reception area. Our
                      turnstile are used in different applications including stadiums and arenas, perimeter
                      and interior security,
                      recreation and amusement parks, retail crowd control, transit fare collection and lobby
                      access control.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-t1200" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-T1200.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-T1200</p>
                  <p>All turnstile models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorized
                      entries,The unique
                      dropping arm feature provides a fail safety solution in case of an emergency or power
                      failure,Tproviding
                      egress in case of crisis evacuations. Durability with minimal maintenance means years
                      and millions of
                      trouble free passages. The turnstile creates a secure environment in. for example, a
                      reception area. Our
                      turnstile are used in different applications including stadiums and arenas, perimeter
                      and interior security,
                      recreation and amusement parks, retail crowd control, transit fare collection and lobby
                      access control.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-t2000" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-T2000.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-T2000</p>
                  <p>All turnstile models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorized
                      entries,The unique
                      dropping arm feature provides a fail safety solution in case of an emergency or power
                      failure,Tproviding
                      egress in case of crisis evacuations. Durability with minimal maintenance means years
                      and millions of
                      trouble free passages. The turnstile creates a secure environment in. for example, a
                      reception area. Our
                      turnstile are used in different applications including stadiums and arenas, perimeter
                      and interior security,
                      recreation and amusement parks, retail crowd control, transit fare collection and lobby
                      access control.</p>
              </div>
          </a>
      </div>

      <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-8">
          <a href="https://technoids.in/query/tw-fb2000" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20FB2000.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- FB2000</p>
                  <p>All the gates models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorised
                      entries,interfaced with a
                      PC through a RS232(RS485,TCP-IP)line.The unique swing arm feature provides a fail-safe
                      safety solution in
                      case of an emergency or power failure,providing egress in case of crisis evacuations.
                      Durability with
                      minimal maintenance means years and millions of trouble free passages. The gate creates
                      a secure environment
                      in. for example, a reception area. Our gates are used in applications including stadiums
                      and arenas,
                      perimeter and interior security, recreation and amusement parks, retail crowd control,
                      transit fare
                      collection and lobby access control.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-fb2200" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20FB2200.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- FB2200</p>
                  <p>All the gates models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorised
                      entries,interfaced with a
                      PC through a RS232(RS485,TCP-IP)line.The unique swing arm feature provides a fail-safe
                      safety solution in
                      case of an emergency or power failure,providing egress in case of crisis evacuations.
                      Durability with
                      minimal maintenance means years and millions of trouble free passages. The gate creates
                      a secure environment
                      in. for example, a reception area. Our gates are used in applications including stadiums
                      and arenas,
                      perimeter and interior security, recreation and amusement parks, retail crowd control,
                      transit fare
                      collection and lobby access control.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-fb3000" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20FB3000.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- FB3000</p>
                  <p>All the gates models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorised
                      entries,interfaced with a
                      PC through a RS232(RS485,TCP-IP)line.The unique swing arm feature provides a fail-safe
                      safety solution in
                      case of an emergency or power failure,providing egress in case of crisis evacuations.
                      Durability with
                      minimal maintenance means years and millions of trouble free passages. The gate creates
                      a secure environment
                      in. for example, a reception area. Our gates are used in applications including stadiums
                      and arenas,
                      perimeter and interior security, recreation and amusement parks, retail crowd control,
                      transit fare
                      collection and lobby access control.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-fb3300" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-%20FB3300.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW- FB3300</p>
                  <p>All the gates models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorised
                      entries,interfaced with a
                      PC through a RS232(RS485,TCP-IP)line.The unique swing arm feature provides a fail-safe
                      safety solution in
                      case of an emergency or power failure,providing egress in case of crisis evacuations.
                      Durability with
                      minimal maintenance means years and millions of trouble free passages. The gate creates
                      a secure environment
                      in. for example, a reception area. Our gates are used in applications including stadiums
                      and arenas,
                      perimeter and interior security, recreation and amusement parks, retail crowd control,
                      transit fare
                      collection and lobby access control.</p>
              </div>
          </a>
      </div>

      <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-9">
          <a href="https://technoids.in/query/tw-sbt1000" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-SBT1000.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-SBT1000</p>
                  <p>All the gates models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorised
                      entries,interfaced with a
                      PC through a RS232(RS485,TCP-IP)line.The unique swing arm feature provides a fail-safe
                      safety solution in
                      case of an emergency or power failure,providing egress in case of crisis evacuations.
                      Durability with
                      minimal maintenance means years and millions of trouble free passages. The gate creates
                      a secure environment
                      in. for example, a reception area. Our gates are used in applications including stadiums
                      and arenas,
                      perimeter and interior security, recreation and amusement parks, retail crowd control,
                      transit fare
                      collection and lobby access control.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-sbt2000" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-SBT2000.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-SBT2000</p>
                  <p>All the gates models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorised
                      entries,interfaced with a
                      PC through a RS232(RS485,TCP-IP)line.The unique swing arm feature provides a fail-safe
                      safety solution in
                      case of an emergency or power failure,providing egress in case of crisis evacuations.
                      Durability with
                      minimal maintenance means years and millions of trouble free passages. The gate creates
                      a secure environment
                      in. for example, a reception area. Our gates are used in applications including stadiums
                      and arenas,
                      perimeter and interior security, recreation and amusement parks, retail crowd control,
                      transit fare
                      collection and lobby access control.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-sbt2200" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-SBT2200.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-SBT2200</p>
                  <p>All the gates models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorised
                      entries,interfaced with a
                      PC through a RS232(RS485,TCP-IP)line.The unique swing arm feature provides a fail-safe
                      safety solution in
                      case of an emergency or power failure,providing egress in case of crisis evacuations.
                      Durability with
                      minimal maintenance means years and millions of trouble free passages. The gate creates
                      a secure environment
                      in. for example, a reception area. Our gates are used in applications including stadiums
                      and arenas,
                      perimeter and interior security, recreation and amusement parks, retail crowd control,
                      transit fare
                      collection and lobby access control.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-sbt3000" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-SBT3000.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-SBT3000</p>
                  <p>All the gates models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorised
                      entries,interfaced with a
                      PC through a RS232(RS485,TCP-IP, IP44)line.The unique swing arm feature provides a
                      fail-safe safety solution
                      in case of an emergency or power failure,providing egress in case of crisis evacuations.
                      Durability with
                      minimal maintenance means years and millions of trouble free passages. The gate creates
                      a secure environment
                      in. for example, a reception area. Our gates are used in applications including stadiums
                      and arenas,
                      perimeter and interior security, recreation and amusement parks, retail crowd control,
                      transit fare
                      collection and lobby access control.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-sbt3300" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-SBT3300.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-SBT3300</p>
                  <p>All the gates models are space efficient security barriers, with a compact design,yet
                      offer sufficient space
                      to integrate any access control system. They can be mounted with display, passage
                      counter, card reader,
                      token operation traffic lights, command console,alarm system against unauthorised
                      entries,interfaced with a
                      PC through a RS232(RS485,TCP-IP, IP44)line.The unique swing arm feature provides a
                      fail-safe safety solution
                      in case of an emergency or power failure,providing egress in case of crisis evacuations.
                      Durability with
                      minimal maintenance means years and millions of trouble free passages. The gate creates
                      a secure environment
                      in. for example, a reception area. Our gates are used in applications including stadiums
                      and arenas,
                      perimeter and interior security, recreation and amusement parks, retail crowd control,
                      transit fare
                      collection and lobby access control.</p>
              </div>
          </a>
      </div>

      <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-12">
          <a href="https://technoids.in/query/tipl-101" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TIPL%20101.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TIPL 101</p>
                  <p>Long Range UHF Reader Upto 5m Mainly used in Schools for maintaining students record. We
                      all know the fact
                      maintaining detail of students punctuality through traditional system is quite
                      difficult. That's why we are
                      coming up with the best solution to ensure the better result of student Attendance. This
                      Software solution
                      is very efficient and user-friendly to use. It is a system that help us to maintain
                      attendance of the
                      students and also help us to find the record. Everyone now wants to apply this
                      technology with its best
                      quality and features. World is going to unlock many potential in the field of biometric
                      technology. There is
                      an increase in the frequency of usages of biometric device for data management of
                      student with great
                      accuracy and security.</p>
              </div>
          </a> <a href="https://technoids.in/query/tipl-102" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TIPL%20102.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TIPL 102</p>
                  <p>UHF Long Range Readers can easily detect from 5 meter range to 15 meter. It is the very
                      cost-effective UHF
                      Reader, specially design to meet the customer requirements of the School solution,
                      Parking lot, Toll, etc.
                      It can read multiple cards at a time, good consistency, low working current and
                      temperature. Punctuality is
                      always a first lesson for every child and teacher in their premises. TimeWatch is always
                      trying to make the
                      education system more bright and successful. We all know the fact maintaining detail of
                      students punctuality
                      through traditional system is quite difficult. That's why we are coming up with the best
                      solution to ensure
                      the better result of student Attendance. This Software solution is very efficient and
                      user-friendly to use.
                      It is a system that help us to maintain attendance of the students and also help us to
                      find the record.
                      Everyone now wants to apply this technology with its best quality and features. World is
                      going to unlock
                      many potential in the field of biometric technology. There is an increase in the
                      frequency of usages of
                      biometric device for data management of student with great accuracy and security.</p>
              </div>
          </a> <a href="https://technoids.in/query/ultrauhf06" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/UltraUHF06.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>UltraUHF06</p>
                  <p>UHF High Performance Middle Range Reader</p>
              </div>
          </a> <a href="https://technoids.in/query/ultrauhf12" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/UltraUHF12.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>UltraUHF12</p>
                  <p>UHF High Performance Middle Range Reader</p>
              </div>
          </a>
      </div>

      <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-11">
          <a href="https://technoids.in/query/tw-pb3010" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-PB3010.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-PB3010</p>
                  <p> </p>
              </div>
          </a>
      </div>

      <div class="nav-dropdown-third-col-items hide-dropdown-product-items" id="product-items-10">
          <a href="https://technoids.in/query/tw-pb3030" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-PB3030.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-PB3030</p>
                  <p>The intelligent barrier gate is one types of our company’s products with the latest
                      technological design to
                      realize the automatic and intelligent operation. Further more, the unique clutch device
                      and the balance
                      device has made the barrier gate become more reliable.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-pb6060" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-PB6060.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-PB6060</p>
                  <p>The intelligent barrier gate is one types of our company’s products with the latest
                      technological design to
                      realize the automatic and intelligent operation. Further more, the unique clutch device
                      and the balance
                      device has made the barrier gate become more reliable.</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-pb4060fl" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-PB4060FL.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-PB4060FL</p>
                  <p>The barrier gate, which manufactured by our company, adopt the latest automatic
                      technology and intelligent
                      design ahead in this field. Meanwhile our barrier gates have the advanced design, such
                      as humanization
                      clutch device, balance device(e.g), which makes our barrier gate work more safely and
                      conveniently. This
                      barrier gate is suitable for indoor as well as outdoor parking area, Parking lots, toll
                      gate, goods yard,
                      railway crossing, commercial premises, apartment block access shopping malls, hospitals,
                      stadiums, business
                      centers,etc</p>
              </div>
          </a> <a href="https://technoids.in/query/tw-pb4060fs" onmouseover="" onclick="">
              <img src="https://technoids.in/img/productimages/TW-PB4060FS.png" alt="" class="ndtc-img">
              <div class="ndtc-content">
                  <p>TW-PB4060FS</p>
                  <p> </p>
              </div>
          </a>
      </div>


  </div>
</div>
   
  </header>
`

document.getElementById("nav-bar-generated").innerHTML=navBar