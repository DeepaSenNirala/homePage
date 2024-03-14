import React from 'react'

const HomePage = () => {
  return (
    <div className='body'>
<nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid bg-dark header">
    <a class="navbar-brand text-light " href="#">1090</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-2">
        <li class="nav-item navLinkItem">
          <a class="nav-link active text-light fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item navLinkItem">
          <a class="nav-link active text-light fs-5 course" href="#">Course</a>
        </li>
      
        <li class="nav-item navLinkItem">
          <a class="nav-link active text-light fs-5" aria-disabled="">Signup</a>
        </li>
      </ul>
      <form class="d-flex text-light mb-lg-0 fs-4" role="search">
      <i class="fa fa-user" aria-hidden="true"></i>
      </form>
    </div>
  </div>
</nav>
 
<div className="banner" >
<div  className="col-6 bannerPage">
<img  src="https://st2.depositphotos.com/6809168/12124/v/950/depositphotos_121243256-stock-illustration-e-learning-logo-vector.jpg" class="img-thumbnail"alt="" />
  </div>
  <div className="col-6 m-auto">
<p className='paraheadingstyle'>Improve your Learning Experience <br /> by Quick study <br /> "Be Quick By studyQuick"</p>
<div class="form-outline" >
    <input type="search" id="form1" class="" placeholder='Search Courses'/>
    {/* <label class="form-label" for="form1">Search</label> */}
  <button style={{height:"30px",marginTop:"-5px"}} type="button" class="btn btn-primary ">
    <i class="fas fa-search"></i>
  </button>
  </div>
  </div>
</div>
<div className="headingItem">
<h2 className='col-3 m-auto courseItem'>Our Top Listed Courses</h2>
</div>
<div style={{marginTop:"30px",marginLeft:"50px"}} class="row row-cols-1 row-cols-sm-4 g-2 imageCard">
  <div class="col-3 cardCol">
    <div style={{width:"300px"}} class="card ">
      <img src="https://www.shutterstock.com/image-vector/elearning-innovative-online-education-internet-600nw-1805960092.jpg" class="card-img-top" alt="..."/>
      <div class="card-body m-auto">
        <h5 class="card-title ">Javascript</h5>
        <p class="card-text">*****</p>
        <div class="card-footer">
      <small class="text-body-secondary">2000 Rs. </small>
      <button className='btn btn-primary position-relative start-50'>Buy</button>
    </div>
      </div>
    </div>
  </div>
  <div class="col-3 cardCol">
    <div style={{width:"300px"}} class="card">
      <img src="https://medrectech.com/image/elearning.png" class="card-img-top" alt="..."/>
      <div class="card-body m-auto">
        <h5 class="card-title">Javascript</h5>
        <p class="card-text">*****</p>
        <div class="card-footer">
      <small class="text-body-secondary">2000 Rs. <button className='btn btn-primary position-relative start-50'>Buy</button></small>
    </div>
      </div>
    </div>
  </div>
  <div class="col-3 cardCol">
    <div style={{width:"300px"}} class="card">
      <img src="https://www.arlo.co/wp-content/uploads/2020/11/Blended-learning-experience-update-500B.png" class="card-img-top" alt="..."/>
      <div class="card-body m-auto">
        <h5 class="card-title">Javascript</h5>
        <p class="card-text">*****</p>
        <div class="card-footer">
      <small class="text-body-secondary">2000 Rs.<button className='btn btn-primary position-relative start-50'>Buy</button></small>
    </div>
      </div>
    </div>
  </div>
  <div class="col-3 cardCol">
    <div style={{width:"300px"}} class="card">
      <img src="https://img.freepik.com/free-vector/banner-template-with-online-learning-concept-design-advertise-marketing-watercolor-illustration_83728-6162.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=ais" class="card-img-top" alt="..."/>
      <div class="card-body m-auto">
        <h5 class="card-title">Javascript</h5>
        <p class="card-text">*****</p>
        <div class="card-footer">
      <small class="text-body-secondary">2000 Rs.<button className='btn btn-primary position-relative start-50'>Buy</button></small>
    </div>
      </div>
    </div>
  </div>
</div>
 <br />
<h2 className='col-3 m-auto text-light userContact'>User Happy With us</h2>

<div style={{marginTop:"30px"}} class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div style={{height:"90px",width:"300px",marginLeft:"300px"}} class="card testimonialCard">
      
        <h5 class="card-title m-auto ">Testimonial</h5>
    
    </div>
  </div>
  <div class="col">
    <div style={{width:"450px"}} class="card testimonialBody">
    
   <p style={{fontSize:"20px",marginLeft:"30px"}}> <i class="fa fa-user-circle fa-1x" aria-hidden="true"></i>  userName</p> 
   <p style={{fontSize:"15px",marginLeft:"290px",marginTop:"-40px"}}><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
      <div class="card-body ">
        <p style={{fontSize:"20px"}} class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam temporibus repellendus, quidem at ab omnis dolores incidunt provident dignissimos.</p>
      </div>
    </div>
  </div>
  <div class="col">
    {/* <div class="card"> */}
  
    <div style={{height:"90px",width:"300px",marginLeft:"300px"}} class="card testimonialCard">
      
      <h5 class="card-title m-auto ">Testimonial</h5>
    </div>
  </div>
  <div class="col">
  <div style={{width:"450px"}} class="card testimonialBody">
    
    <p style={{fontSize:"20px",marginLeft:"30px"}}> <i class="fa fa-user-circle fa-1x" aria-hidden="true"></i>  userName</p> 
    <p style={{fontSize:"15px",marginLeft:"290px",marginTop:"-40px"}}><span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star"></span>
 <span class="fa fa-star"></span></p>
       <div class="card-body">
         <p style={{fontSize:"20px"}} class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam temporibus repellendus, quidem at ab omnis dolores incidunt provident dignissimos.</p>
      </div>
    </div>
  </div>
</div>
  <br />
<p className='col-3 m-auto text-light'>Frequently asked Question</p>
<br />
<div class="col-6 accordion accordion-flush m-auto " id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header ">
      <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
     Question
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Question
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-dark text-light " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Question
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse  " data-bs-parent="#accordionFlushExample">
      <div class="accordion-body "></div>
    </div>
  </div>
</div>
<br />


<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col-4">
   
  <div  class="card-body">
        <h5 style={{textAlign:"center"}} class="card-title text-light">About</h5>
      </div>
   
  </div>
  <div class="col-4">
  
     <div class="card-body m-auto">
        <h5 style={{textAlign:"center"}} class="card-title text-light">Links</h5>
    </div>
     
  </div>
  <div class="col-4">
   
  <div class="card-body">
        <h5 style={{textAlign:"center"}} class="card-title m-auto text-light">Contact Info</h5>
      </div>
    </div>
 </div>
<br />
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col-4">
  <div  class="card-body">
        <h5 style={{textAlign:"center"}} class="card-title text-light">Privacy Policy</h5>
      </div>
   </div>
  <div class="col-4">
  <div class="card-body m-auto">
        <h5 style={{textAlign:"center"}} class="card-title text-light">Courses</h5>
    </div>
     </div>
  <div class="col-4">
   <div class="card-body">
        <h5 style={{textAlign:"center"}} class="card-title m-auto text-light">call Us: 9555872048</h5>
      </div>
    </div>
 </div>
<br />

<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col-4">
  <div  class="card-body">
        <h5 style={{textAlign:"center"}} class="card-title text-light">FAQ</h5>
      </div>
   </div>
  <div class="col-4">
  <div class="card-body m-auto">
        <h5 style={{textAlign:"center"}} class="card-title text-light">My Account</h5>
    </div>
     </div>
  <div class="col-4">
   <div class="card-body">
        <h5 style={{textAlign:"center"}} class="card-title m-auto text-light">MailUs: QuickStudies@gmail.com</h5>
      </div>
    </div>
 </div>
<br />
<div >
  <p className='col-3 m-auto' style={{fontSize:"20px",color:"#515A5A"}}><i  class="fa fa-copyright text-light" aria-hidden="true"></i>  2024 copyright QuickStudy.com</p>
</div>

    </div>
  )
}

export default HomePage