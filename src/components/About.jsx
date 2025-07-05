import Counter from "./Counter";
import Counter2 from "./Counter2";
const About = () => {
  return (
<>
<section className="py-4" id="about">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 mt-5">
				<div className="lc-block">
					<div editable="rich">

						<h2 className="fw-bold display-2 tagAbout ">ABOUT US</h2>

					</div>
				</div>
			</div>
			<div className="col-lg-6 mt-5">
				<div className="lc-block">
					<div editable="rich">
						<p className="rfs-9 text-muted ">Netparam, a premier software design and development agency, offers end-to-end services for web and mobile solutions. Since 2012, we've satisfied a global clientele with diverse IT needs, spanning government entities, businesses, and academia. Our expertise ranges from open-source to custom solutions, delivering scalable and high-quality products. We pride ourselves on our engineering prowess and refined design sensibility, aiming for lasting partnerships through exceeding expectations and transparent collaboration.<br/></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section>
	<div className="d-flex about container-fluid" lc-helper="background">
	</div>
	<div className="container bg-light shadow py-4" style={{marginTop:"-100px", marginBottom:"100px"}}>
		<div className="row text-center justify-content-center ">
			<div className="col-12">
				<div className="lc-block">
					<div editable="rich">
						<p className="fw-bold display-5">Our <span className="text-warning">Mission </span>&<span className="text-success"> Vision</span> </p>
					</div>
				</div>
			</div>
			<div className="lc-block col-5">
				<hr/>
			</div>
		</div>
		<div className="row text-center justify-content-center">
			<div className="col-lg-10 col-xxl-8">
				<div className="lc-block mb-5">
					<div editable="rich">
						<p className="rfs-9"> "At Netparam Technologies Private Limited, our mission is to empower businesses with innovative technology solutions, ensuring growth and success. We strive to be a trusted partner, delivering excellence while upholding values of integrity, innovation, and customer satisfaction. Our vision is to be a global leader, renowned for our commitment to excellence and positively impacting businesses worldwide." </p>
					</div>
				</div>
				<div className="lc-block text-center">
					<a className="btn btn-secondary keepTouch btn-lg" href="#" role="button">Keep in touch</a>
				</div>
			</div>
		</div>
	</div>
</section>
<Counter/>
<section>
	<div className="container mb-5" id="programs">

		<div className="row align-items-md-center ">
			<div className="col-md-6 pr-5">
				<div className="lc-block py-2">
					<span className="badge bg-primary" editable="inline">COMPANY PROGRAMS</span>
				</div>
				<div className="lc-block mb-4">
					<h2 editable="inline" className="fw-bold display-5">Working Together, to build great projects.</h2>
				</div>

				<div className="lc-block">
					<div className="row">
						<div className="col-6">
							<div className="lc-block mb-4">
								<p editable="inline" className="m-0" style={{fontSize:"60px"}}> <Counter2 number={105} title="+" /></p>
								
       
     
       
      
								<p editable="inline" className="small text-uppercase">Branches</p>
							</div>
						</div>
						<div className="col-6">
							<div className="lc-block mb-4">
								<p editable="inline" className="m-0" style={{fontSize:"60px"}}>  <Counter2 number={51} title="+" /></p>
								<p editable="inline" className="small text-uppercase">Offices</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<div className="lc-block mb-4">
								<p editable="inline" className=" m-0" style={{fontSize:"60px"}}> <Counter2 number={468} title="+" /></p>
								<p editable="inline" className="small text-uppercase">Events over the world</p>
							</div>
						</div>
						<div className="col-6">
							<div className="lc-block mb-4">
								<p editable="inline" className=" m-0" style={{fontSize:"60px"}}> <Counter2 number={5188} title="+" /></p>
								<p editable="inline" className="small mx-2 text-uppercase">Members</p>
							</div>
						</div>
					</div>
				</div>
				<div className="lc-block text-muted">
					<div editable="rich">
						<p> NETPARAM TECHNOLOGIES PVT LTD which prepares trainees for jobs that are based on manual or practical activities, related to a specific trade or technical education domain as the trainee directly develops expertise in a particular group of techniques or technology,  you are given the choice to build your own IT career.&nbsp;</p>
						<p>We help you to nurture your programming knowledge, skills and build a successful path for your long and progressive career. Working on a Live Project is another feather in cap for our organization, due to working in IT industry, you are given a chance to work on real Live Projects of web design, development, Research and development and integration.</p>
					</div>
				</div>
			</div>
			<div className="col-md-3 col-sm-6">
				<div className="lc-block">
					<div className="card shadow-lg border-secondary">
						<img src="https://th.bing.com/th/id/OIP.JbEx2EVQ9gK_XFUU8uvUdAHaE8?pid=ImgDet&w=208&h=138&c=7&dpr=1.5" alt="Photo by Leohoho" className="card-img-top img-fluid" loading="lazy" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080"/>
						<div className="card-body">
							<h3 className="card-title fw-bold" editable="inline">INTERNSHIP PROGRAM</h3>
							{/* <!-- <h4 className="card-subtitle" editable="inline">Card subtitle</h4> --> */}
							<p className="card-text" editable="inline">An internship is the professional learning experience in student life or career growth. </p>
						</div>
					</div>
				</div>
				<div className="lc-block">
					<div className="card shadow-lg border-secondary mt-4">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqxK5TdrCVWRxaQubNKgMkpyx3sfIF-B504A&s" alt="Photo by Jessica S. Irvin" className="card-img-top img-fluid" loading="lazy" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="1080"/>
						<div className="card-body">
							<h3 className="card-title fw-bold" editable="inline">PG-DAC</h3>
							{/* <!-- <h4 className="card-subtitle" editable="inline">Card subtitle</h4> --> */}
							<p className="card-text" editable="inline">PG-DAC is the most popular PG Diploma course of C-DAC. The course is targeted towards engineering graduates and MCA/MSc who wish to venture into the domain of advanced computing. </p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-3 col-sm-6 pl-sm-3 mt-3 mt-sm-0">
				<div className="lc-block">
					<div className="card shadow-lg border-secondary">
						<img src="https://i.ytimg.com/vi/gBs1e_6j2iU/hqdefault.jpg" alt="Photo by Luke Southern" className="card-img-top img-fluid" loading="lazy" width="1080" height=""/>
						<div className="card-body">
							<h3 className="card-title fw-bold" editable="inline">CDAC C-CAT</h3>
							{/* <!-- <h4 className="card-subtitle" editable="inline">Card subtitle</h4> --> */}
							<p className="card-text" editable="inline">Admissions to all PG Diploma courses are done through C-DAC's Common Admission Test (C-CAT) that will be conducted in computerised mode physically at C-DAC’s test centres.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>                          
</section>

	</>
    
  );
};

export default About;
