import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div class="main-container">
      {/* <!--  ===== Aside Start> ===== --> */}
      <div class="aside">
        <div class="logo">
          <a href="#"><span>A</span>tlas</a>
        </div>
        <div class="nav-toggler">
          <span></span>
        </div>
        <ul class="nav">
          <li>
            <a href="#home" class="item-nav"><i class="fa fa-home"></i>Home</a>
          </li>
          <li>
            <a href="#about" class="item-nav section-control" name="about" ><i class="fa fa-user"></i>About</a>
          </li>
          <li>
            <a href="#services" class="item-nav section-control" name="services"><i class="fa fa-list"></i>Services</a>
          </li>
          <li>
            <a href="#portfolio" class="item-nav section-control" name="portfolio"><i class="fa fa-briefcase"></i>Portfolio</a>
          </li>
          <li>
            <a href="#contacts" class="item-nav section-control" name="contact"><i class="fa fa-comments"></i>Contact</a>
          </li>
        </ul>
      </div>
      {/* <!--  ===== Aside End> ===== --> */}
      {/* <!--  ===== Main Content Start> ===== --> */}
      <div class="main-content">
        {/* <!--  ===== Home Selection Start> ===== --> */}
        <section class="home section" id = "home">
          <div class="container">
            <div class="row">
              <div class="home-info padd-15">
                <h3 class="hello">
                  Hello, my name is <span class="name">Anil Kumawat</span>
                </h3>
                <h3 class="my-profession">
                  I'm a <span class="typing">Full Stack Developer</span>
                </h3>
                <p>
                I Completed my Training from Technorizen Software solution, Indore and now working as MERN Stack Developer
                </p>
                <a href="#contacts" class="btn hire-me">Hire Me</a>
              </div>
              <div class="home-img">
                <img src="./images/avatar.JPG" alt=""/>
              </div>
            </div>
          </div>
        </section>


        {/* <!--  ===== Home Selection End> ===== --> */}
        {/* <!--  ===== About Selection Start> ===== --> */}
        <section class="about section section-content" id="about">
          <div class="container">

            <div class="row">
              <div class="section-title padd-15">
                <h2>About Me</h2>
              </div>
            </div>

            <div class="row"> 
              <div class="about-content padd-15">
                <div class="row">
                  <div class="about-text padd-15">
                    <h3>I'm Anil Kumawat and <span>Full Stack Developer</span></h3>
                    <p>
                        I Completed my Training from Technorizen Software solution, Indore and now working as MERN Stack Developer
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="personal-info padd-15">
                    
                    <div class="row">
                      <div class="info-item padd-15">
                        <p>Birthday: <span>08 July 2000</span></p>
                      </div>
                      <div class="info-item padd-15">
                        <p>Age: <span>23</span></p>
                      </div>
                      <div class="info-item padd-15">
                        <p>Github: <span>https://github.com/Ak7581</span></p>
                      </div>
                      <div class="info-item padd-15">
                        <p>Email: <span>anilkumawat7581@gmail.com</span></p>
                      </div>
                      <div class="info-item padd-15">
                        <p>Degree: <span>B.tech  </span></p>
                      </div>
                      <div class="info-item padd-15">
                        <p>Phone: <span>7581823261</span></p>
                      </div>
                      <div class="info-item padd-15">
                        <p>City: <span>Indore</span></p>
                      </div>
                      <div class="info-item padd-15">
                        <p>Linkedin: <span><a href="https://www.linkedin.com/in/anil--kumawat/">Anil kumawat</a></span></p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="buttons padd-15">
                        {/* <!-- <button type="button" class="" ></button> --> */}
                        <a href="https://drive.google.com/file/d/1wQlzfrXy9FLT17fqn-WbUbhYMUZSj1Hn/view?usp=sharing" target='_blank' class="btn" download="proposed_file_name">Dowload CV</a>
                        <a href="https://www.linkedin.com/in/anil--kumawat/" target='_blank' class="btn hire-me">Hire me</a>
                      </div>
                    </div>
                  </div>
                  <div class="skills padd-15">
                    <div class="row">
                    <div class="skill-item padd-15">
                        <h5>REACT</h5>
                        <div class="progress">
                          <div class="progress-in" Style="width: 90%"></div>
                          <div class="skill-percent">90%</div>
                        </div>
                      </div>
                      <div class="skill-item padd-15">
                        <h5>HTML</h5>
                        <div class="progress">
                          <div class="progress-in" Style="width: 86%"></div>
                          <div class="skill-percent">86%</div>
                        </div>
                      </div>
                      <div class="skill-item padd-15">
                        <h5>CSS</h5>
                        <div class="progress">
                          <div class="progress-in" Style="width: 80%"></div>
                          <div class="skill-percent">80%</div>
                        </div>
                      </div>
                      <div class="skill-item padd-15">
                        <h5>Javascript</h5>
                        <div class="progress">
                          <div class="progress-in" Style="width: 70%"></div>
                          <div class="skill-percent">70%</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="education padd-15">
                    <h3 class="title">Education</h3>
                    <div class="row">
                      <div class="timeline-box padd-15">
                        <div class="timeline shadow-dark">
                          {/* <!-- ===== timeline item ===== --> */}
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 2013 - 2015
                            </h3>
                            <h4 class="timeline-title">
                              Cao An elementary school
                            </h4>
                            <p class="timeline-text">
                              <p> Học cấp 2 tại Trường tiểu học Cao An trong 4 năm</p>
                              <p>Cả 4 năm đều là học sinh tiên tiến.</p>
                              <p>Tốt nghiệp bằng khá và hạnh kiểm tốt</p>
                            </p>
                          </div>
                          {/* <!-- ===== timeline item ===== --> */}
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 2012 - 2015
                            </h3>
                            <h4 class="timeline-title">
                              Tue Tinh High School
                            </h4>
                            <p class="timeline-text">
                              <p> Học cấp 3 tại Trường THPT Tuệ Tĩnh trong 3 năm</p>
                              <p>Cả 3 năm đều là học sinh tiên tiến.</p>
                              <p>Tốt nghiệp bằng khá và hạnh kiểm tốt</p>
                            </p>
                          </div>
                          {/* <!-- ===== timeline item ===== --> */}
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 2016 - 2022
                            </h3>
                            <h4 class="timeline-title">
                              Hanoi University of Science and Technology
                            </h4>
                            <p class="timeline-text">
                              <p>Học đại học 5.5 tại Đại học Bách Khoa Hà Nội</p>
                              <p>Tốt nghiệp bằng Khá</p>
                              <p>CPA: 2.73</p>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="experience padd-15">
                    <h3 class="title">Experience</h3>
                    <div class="row">
                      <div class="timeline-box padd-15">
                        <div class="timeline shadow-dark">
                          {/* <!-- ===== timeline item ===== --> */}
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 20017 - 2018
                            </h3>
                            <h4 class="timeline-title">
                              Hanoicab-SCTV
                            </h4>
                            <p class="timeline-text">
                              <p>Tư vấn khách hàng về chính sách và dịch vụ.</p>
                              <p>Hỗ trợ khách hàng khi có lỗi kĩ thuật xảy ra.</p>
                              <p>Nâng cao khả năng giao tiếp.
                              </p>
                            </p>
                          </div>
                          {/* <!-- ===== timeline item ===== --> */}
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 2019
                            </h3>
                            <h4 class="timeline-title">
                              ACE Antenna Company
                            </h4>
                            <p class="timeline-text">
                              <p>Tìm hiểu tổ chức doanh nghiệp và quy trình sản xuất sản phẩm.
                              </p>
                              <p>Tham gia trực tiếp vào dây chuyền sản xuất</p>
                              <p> Nâng cao khả năng làm việc nhóm và sự kiên trì
                              </p>
                            </p>
                          </div>
                          {/* <!-- ===== timeline item ===== --> */}
                          <div class="timeline-item">
                            <div class="circle-dot"></div>
                            <h3 class="timeline-date">
                              <i class="fa fa-calendar"></i> 2022
                            </h3>
                            <h4 class="timeline-title">
                              VKX Company
                            </h4>
                            <p class="timeline-text">
                              <p>Tìm hiểu về Reactjs, Redux, React Hooks, Material UI, Typescript.
                              </p>
                              <p>Tham gia làm các project nhỏ trong quá trình thực tập</p>
                              <p>Tham gia làm những task nhỏ trong dự án của công ty.</p>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>


        {/* <!--  ===== About Selection End> ===== --> */}
        {/* <!--  ===== Services Selection Start> ===== --> */}
        <section class="service section section-content" id = "services">
          <div class="container">
            <div class="row">
              <div class="section-title padd-15">
                <h2>Services</h2>
              </div>
            </div>
            <div class="row">
              {/* <!-- ===== Service item Start ===== --> */}
              <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class="fa fa-mobile-alt"></i>
                  </div>
                  <h4>Mobile App</h4>
                  <p>Your smartphone can work wonders for you and we can make that possible with our Mobility Solution.</p>
                </div>
              </div>
              {/* <!-- ===== Service item End ===== --> */}
               {/* <!-- ===== Service item Start ===== --> */}
               <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class="fa fa-laptop-code"></i>
                  </div>
                  <h4>Web Design</h4>
                  <p>A web service is an accumulation of open conventions and guidelines utilized for trading information.</p>
                </div>
              </div>
              {/* <!-- ===== Service item End ===== --> */}
               {/* <!-- ===== Service item Start ===== --> */}
               <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class="fa fa-palette"></i>
                  </div>
                  <h4>Graphic</h4>
                  <p>Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire,</p>
                </div>
              </div>
              {/* <!-- ===== Service item End ===== --> */}
               {/* <!-- ===== Service item Start ===== --> */}
               <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class="fa fa-code"></i>
                  </div>
                  <h4>Responsive site</h4>
                  <p>Programming User Interface and User Experience Design and Development is a critical part of Responsive Solution.</p>
                </div>
              </div>
              {/* <!-- ===== Service item End ===== --> */}
               {/* <!-- ===== Service item Start ===== --> */}
               <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class="fa fa-search"></i>
                  </div>
                  <h4>Games</h4>
                  <p>As a games developer you can work in design, programming, art or animation and are likely to progress quickly</p>
                </div>
              </div>
              {/* <!-- ===== Service item End ===== --> */}
               {/* <!-- ===== Service item Start ===== --> */}
               <div class="service-item padd-15">
                <div class="service-item-inner">
                  <div class="icon">
                    <i class="fa fa-bullhorn"></i>
                  </div>
                  <h4>Software Development</h4>
                  <p>From start ups to well established businesses, all kind of industries have trusted us for their software.</p>
                </div>
              </div>
              {/* <!-- ===== Service item End ===== --> */}
            </div>
          </div>
        </section>


        {/* <!--  ===== Services Selection End> ===== --> */}
        {/* <!--  ===== Portfolio Selection Start> ===== --> */}
        <section class="portfolio section section-content" id = "portfolio">
          <div class="container">
            <div class="row">
              <div class="section-title padd-15">
                <h2>Portfolio</h2>
              </div>
            </div>
            <div class="row">
              <div class="portfolio-heading padd-15">
                <h2>My Last Project :</h2>
              </div>
            </div>
            <div class="row">
              {/* <!--  ===== Portfolio item start ===== --> */}
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="./images/Projects/1.png" alt=""/>
                  <div class="portfolio-demo">
                    <a href="#" class="" target="_blank">Live demo</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  ===== Portfolio item end ===== --> */}
             {/* <!--  ===== Portfolio item start ===== --> */}
             <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="./images/Projects/2.png" alt=""/>
                  <div class="portfolio-demo">
                    <a href="#" class="" target="_blank">Live demo</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  ===== Portfolio item end ===== --> */}
             {/* <!--  ===== Portfolio item start ===== --> */}
             <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="./images/Projects/3.png" alt=""/>
                  <div class="portfolio-demo">
                    <a href="#" class="" target="_blank">Live demo</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  ===== Portfolio item end ===== --> */}
             {/* <!--  ===== Portfolio item start ===== --> */}
             <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="./images/Projects/4.png" alt=""/>
                  <div class="portfolio-demo">
                    <a href="#" class="" target="_blank">Live demo</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  ===== Portfolio item end ===== --> */}
             {/* <!--  ===== Portfolio item start ===== --> */}
             <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                  <img src="./images/Projects/2.png" alt=""/>
                  <div class="portfolio-demo">
                    <a href="#" class="" target="_blank">Live demo</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  ===== Portfolio item end ===== --> */}
            </div>
          </div>
        </section>


        {/* <!--  ===== Portfolio Selection End> ===== --> */}
        {/* <!--  ===== Contact Selection Start> ===== --> */}
        <section class="contact section section-content" id = "contacts">
          <div class="container">
            <div class="row">
              <div class="section-title padd-15">
                <h2>Contact Me</h2>
              </div>
            </div>
            <h3 class="contact-title padd-15">Have You Any Question?</h3>
            <h4 class="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
            <div class="row">
            {/* <!--  ===== Contact info item start> ===== -->   */}
              <div class="contact-info-item padd-15">
                <div class="icon">
                  <i class="fa fa-phone"></i>
                </div>
                <h4>Call Us On</h4>
                <p>7581823261</p>
              </div>
            {/* <!--  ===== Contact info item end> ===== -->   */}
            {/* <!--  ===== Contact info item start> ===== -->   */}
              <div class="contact-info-item padd-15">
                <div class="icon">
                  <i class="fa fa-map-marker-alt"></i>
                </div>
                <h4>Address</h4>
                <p>Indore</p> 
              </div>
            {/* <!--  ===== Contact info item end> ===== -->  */}
            {/* <!--  ===== Contact info item start> ===== -->   */}
              <div class="contact-info-item padd-15">
              <div class="icon">
                <i class="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>anilkumawat7581@gmail.com</p>
              </div>
            {/* <!--  ===== Contact info item end> ===== -->  */}
            {/* <!--  ===== Contact info item start> ===== -->   */}
              <div class="contact-info-item padd-15">
                <div class="icon">
                  <i class="fa fa-globe-europe"></i>
                </div>
                <h4>Github</h4>
                <p>Ak7581</p>
              </div>
            {/* <!--  ===== Contact info item end> ===== -->  */}
            </div>
            <h3 class="contact-title padd-15">SEND ME AN EMAIL</h3>
            <h4 class="contact-sub-title padd-15">I'M VERY RESPOSIVE TO MESSAGES</h4>
            {/* <!--  ===== Contact Form Start===== -->  */}
            <div class="row">
              <div class="contact-form padd-15">
                <div class="row">
                  {/* <!--  ===== Contact Form item Start===== -->  */}
                  <div class="form-item col-6 padd-15">
                    <div class="form-group">
                      <input type="text" text="" class="form-control" placeholder ="Name"/>
                    </div>
                  </div>
                  {/* <!--  ===== Contact Form item End===== -->  */}
                  {/* <!--  ===== Contact Form item Start===== -->  */}
                  <div class="form-item col-6 padd-15">
                    <div class="form-group">
                      <input type="email" text="" class="form-control" placeholder ="Email"/>
                    </div>
                  </div>
                  {/* <!--  ===== Contact Form item End===== -->  */}
                </div>
                {/* <!--  ===== Contact Form item Start===== -->  */}
                <div class="row">
                  <div class="form-item col-12 padd-15">
                    <div class="form-group">
                      <input type="email" text="" class="form-control" placeholder ="Subject"/>
                    </div>
                  </div>
                </div>
                {/* <!--  ===== Contact Form item End===== --> */}
                {/* <!--  ===== Contact Form item Start===== -->  */}
                <div class="row">
                  <div class="form-item col-12 padd-15">
                    <div class="form-group">
                      <textarea name="" id=""  class="form-control" placeholder="Message" ></textarea>
                    </div>
                  </div>
                </div>
                {/* <!--  ===== Contact Form item End===== --> */}
                {/* <!--  ===== Contact Form item Start===== -->  */}
                <div class="row">
                  <div class="form-item col-12 padd-15">
                    <buttom submit="" class="btn">Send Message</buttom>
                  </div>
                </div>
                {/* <!--  ===== Contact Form item End===== -->       */}
              </div>
            </div>
            {/* <!--  ===== Contact Form End===== -->  */}
          </div>
        </section>


        {/* <!--  ===== Contact Selection End> ===== --> */}
      </div>
      {/* <!--  ===== Main Content End> ===== --> */}
    </div>
    {/* <!--  ===== Main Container End> ===== --> */}
    {/* <!--  ===== Style Switcher Start ===== --> */}
    {/* <div class="Style-switcher">
      <div class="Style-switcher-toggler s-icon">
        <i class="fas fa-cog fa-spin"></i>
      </div>
      <div class="day-night s-icon">
        <i class="fas"></i>
      </div>
      <h4>Theme Colors</h4>
      <div class="colors">
        <span class="color-1" onclick = "setActiveStyle('color-1')"></span>
        <span class="color-2" onclick = "setActiveStyle('color-2')"></span>
        <span class="color-3" onclick = "setActiveStyle('color-3')"></span>
        <span class="color-4" onclick = "setActiveStyle('color-4')"></span>
        <span class="color-5" onclick = "setActiveStyle('color-5')"></span>
      </div>
    </div> */}
    </>
  );
}

export default App;
