
import Image from 'next/image'
import Link from 'next/link'
export default function Section2() {
	return (
		<>

			<section className="s-about-company tf-spacing-2">
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<div className="content-section">
									<p className="s-sub-title">
										<i className="icon-angles-right moveLeftToRight" />
										about company
									</p>
									<p className="s-title mb-60 " style={{fontSize:"45px"}}>
										Bisways Consulting Group a Firm which stared in 2022, register office located Korattur and work station located at Nerkundram.

									</p>
									<p className="mb-60 " style={{fontSize:"20px"}}>
										Bisways Consulting Group has an impeccable record of delivering remote services relating to Accounting, Taxation and allied services that are required from the 'business set up' phase to the 'operational' phase to growing and changing businesses in all industries. Bisways Consulting Group services are focused at helping clients with the business requirements and significantly reducing the operating costs.
									</p>
									
									<ul className="list mb-20">
										<li>
											<p className="font-main-2">
												OUR MISSION
											</p>
											<p className="text">
												At Bisways, we streamline operations, implement internal controls, and handle compliance, so you can focus on your business. We bring quality, integrity, and efficiency to every step.
											</p>
										</li>
										<li>
											<p className="font-main-2">
												OUR VISSION
											</p>
											<p className="text">
												We envision a world where businesses soar by focusing on what they do best, while we transform their operations into seamless, compliant, and efficient systems that fuel growth and innovation.
											</p>
										</li>
									</ul>
									{/* <Link href="/about-us" className="tf-btn">
										Learn More Us
										<i className="icon-chevron-right" />
									</Link> */}
								</div>
							</div>
							<div className="col-lg-5 offset-lg-1">
								<div className="image-wrap">
									<div className="image">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/s-about.jpg" data-src="/images/section/s-about.jpg" alt="" className="lazyload tf-animate-2" />
									</div>
									<span className="half-circle item-1 wow rollInRight" />
									<span className="half-circle item-2 wow rollInRight" data-wow-delay="0.5s" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tf-marquee slider-saylo style-2">
					<div className="wrap-marquee">
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
