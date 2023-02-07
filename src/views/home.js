import React from "react";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import OurApps from "../components/our-apps";
import ClientFeedbackOld from "../components/client-feedback-old";
import CompanyCard from "../components/company-card";
import Footer from "../components/footer";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>WEBMOBRIL GAMING STUDIOZ</title>
        <meta
          name="description"
          content="WebMobril Gaming Studios provides game development services to help businesses create engaging mobile gaming apps, &amp; VR/AR gaming experiences."
        />
        <meta property="og:title" content="WEBMOBRIL GAMING STUDIOZ" />
        <meta
          property="og:description"
          content="WebMobril Gaming Studios provides game development services to help businesses create engaging mobile gaming apps, &amp; VR/AR gaming experiences."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f6e006ad-03b8-4ce0-bd95-8108199f4c23/3e7a551d-1956-4a02-8b27-7c897afd177d?org_if_sml=1"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <section className="home-slider FadeInUp">
        <div className="home-container01"></div>
      </section>
      <section className="home-section">
        <div className="home-container02">
          <h2 className="home-text colortexter">GAMES LIKE NEVER BEFORE</h2>
          <div className="home-features">
            <header className="feature feature-active home-feature">
              <h3 className="home-text01">
                <span>DREAM</span>
                <br></br>
              </h3>
            </header>
            <header className="feature home-feature1">
              <h3 className="home-text04">BUILD</h3>
            </header>
            <header className="feature home-feature2">
              <h3 className="home-text05">REPEAT</h3>
            </header>
          </div>
          <div className="home-note">
            <div className="home-content">
              <main className="home-main">
                <h2 className="home-heading">
                  Next-Gen Gaming Starts with WebMobril Gaming Studioz
                </h2>
                <p className="home-paragraph">
                  WebMobril Gaming Studioz is an award-winning and globally
                  recognized game development company that brings vast expertise
                  to build &amp; scale your vision through the most
                  comprehensive solutions that guarantee the best user
                  experience for gamers. We offer state-of-the-art gaming
                  solutions developed using leading-edge technologies like
                  AR/VR, NFT, 2D/3D, etc.
                </p>
              </main>
            </div>
            <div className="home-container03">
              <div className="home-container04"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section01">
        <div className="home-container05">
          <header className="home-header">
            <h2 className="home-text06 colortexter Heading">
              Our Core Game Development Services.
            </h2>
            <span className="home-text07">
              Game development for us means creating an immersive and alluring
              life beyond simply designing and coding. We are an overarching
              service provider for game development, where we ensure a perfect
              blend of creativity and technical skills to formulate highly
              engaging games.
            </span>
          </header>
          <section className="home-note1">
            <div className="home-container06"></div>
            <div className="home-content1">
              <div className="home-main1">
                <div className="home-caption">
                  <span className="home-section02 section-head">
                    dedicated team
                  </span>
                </div>
                <div className="home-heading01">
                  <h2 className="section-heading H2">Game Development</h2>
                  <p className="home-paragraph1 section-description">
                    We offer a comprehensive range of game development services
                    using bleeding-edge technologies, toolsets and expertise to
                    offer lifelike experiences across multiple platforms like
                    Mobile, PC, Web and Console.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="home-note2">
            <div className="home-container07"></div>
            <div className="home-content2">
              <main className="home-main2">
                <header className="home-caption1">
                  <span className="home-section03 section-head">New style</span>
                </header>
                <main className="home-heading03">
                  <header className="home-header1">
                    <h2 className="section-heading H2">Virtual Gaming</h2>
                    <p className="home-paragraph2 section-description">
                      We bring a highly immersive experience for gamers through
                      interactive and exhilarating games encompassing striking
                      visuals and realistic features. We combine innovation and
                      creativity to offer effective AR/VR/MR games.
                    </p>
                  </header>
                </main>
              </main>
            </div>
          </section>
          <section className="home-note3">
            <div className="home-container08"></div>
            <div className="home-content3">
              <div className="home-main3">
                <div className="home-caption2">
                  <span className="home-section04 section-head">
                    everything included
                  </span>
                </div>
                <div className="home-heading05">
                  <h2 className="section-heading H2">
                    Art, Design &amp; Animation
                  </h2>
                  <p className="home-paragraph3 section-description">
                    We have professional acumen in 2D and 3D designing that
                    makes us the most preferred name in the industry for
                    aesthetic and artistic characters and features designing.
                    {/* <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    /> */}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="home-note4">
            <div className="home-container09"></div>
            <div className="home-content4">
              <main className="home-main4">
                <header className="home-caption3">
                  <span className="home-section05 section-head">more</span>
                </header>
                <main className="home-heading07">
                  <header className="home-header2">
                    <h2 className="H2 section-heading">Outstaffing</h2>
                    <p className="home-paragraph4 section-description">
                      Need outsourcing services for game art creation or
                      development? We can help you hire highly skilled game
                      developers, designers or animators fully dedicated to your
                      project.
                    </p>
                  </header>
                </main>
              </main>
            </div>
          </section>
        </div>
      </section>
      <section className="home-section06">
        <div className="home-container10">
          <div className="home-card cursor_pointer">
            <div className="home-container11">
              <span className="home-text08 colortexter">
                <span>150+</span>
                <br></br>
              </span>
            </div>
            <div className="home-container12">
              <span className="home-text11 colortexter">Game deployed</span>
            </div>
          </div>
          <div className="home-card1 cursor_pointer">
            <div className="home-container13">
              <span className="home-text12 colortexter">
                <span>200+</span>
                <br></br>
              </span>
            </div>
            <div className="home-container14">
              <span className="home-text15 colortexter">Game Delivered</span>
            </div>
          </div>
          <div className="home-card2 cursor_pointer">
            <div className="home-container15">
              <span className="home-text16 colortexter">
                <span>100M+</span>
                <br></br>
              </span>
            </div>
            <div className="home-container16">
              <span className="home-text19 colortexter">revenue added</span>
            </div>
          </div>
          <div className="home-card3 cursor_pointer">
            <div className="home-container17">
              <span className="home-text20 colortexter">
                <span>96%</span>
                <br></br>
              </span>
            </div>
            <div className="home-container18">
              <span className="home-text23 colortexter">
                customer satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>
      <OurApps rootClassName="our-apps-root-class-name"></OurApps>
      <div className="home-container19">
        <div className="home-container20">
          <section className="home-section07">
            <div className="home-cube">
              <div className="home-top side"></div>
              <div className="home-front side"></div>
              <div className="home-left side"></div>
            </div>
            <main id="color-border" className="home-banner">
              <div className="home-container21">
                <div className="home-header3">
                  <h2 className="home-heading09 Heading section-heading1">
                    Let&apos;s Have a Deal
                  </h2>
                  <p className="home-description section-description">
                    Let’s work together to win the race in creating fascinating
                    games
                  </p>
                </div>
              </div>
            </main>
          </section>
          <section className="home-award-section">
            <div className="home-container22">
              <div className="home-container23">
                <span className="home-text24 Heading colortext">
                  <span>Prominent Business</span>
                  <br></br>
                  <span>Awards &amp; Recognitions</span>
                </span>
              </div>
              <div className="home-award-grid">
                <div className="home-container24">
                  <div className="home-container25">
                    <span className="home-text28">Business Connect</span>
                    <span className="home-text29">
                      Fastest Growing Game App Development Company
                    </span>
                  </div>
                </div>
                <div className="home-container26">
                  <div className="home-container27">
                    <span className="home-text30">Edu Excellence Awards</span>
                    <span className="home-text31">
                      Best App Development Company
                    </span>
                  </div>
                </div>
                <div className="home-container28">
                  <div className="home-container29">
                    <span className="home-text32">Small Business Award</span>
                    <span className="home-text33">
                      Rising Young Entrepreneur of the Year
                    </span>
                  </div>
                </div>
                <div className="home-container30">
                  <div className="home-container31">
                    <span className="home-text34">BGIAA</span>
                    <span className="home-text35">
                      Business Global Icon Achiever Award
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home-section08">
            <div className="home-cube1">
              <div className="home-top1 side"></div>
              <div className="home-front1 side"></div>
              <div className="home-left1 side"></div>
            </div>
            <main className="home-pricing">
              <header className="home-header4">
                <header className="home-left2">
                  <h2 className="home-heading10 Heading colortexter colortext section-heading1">
                    Start small, think big
                  </h2>
                </header>
                <div className="home-right">
                  <p className="home-paragraph5 section-description">
                    <span>
                      Every project is prority for us weather it&apos;s small or
                      big,
                    </span>
                    <br></br>
                    <span>
                      tell us your idea and we&apos;ll make it reality.
                    </span>
                    <br></br>
                  </p>
                </div>
              </header>
            </main>
          </section>
        </div>
        <ClientFeedbackOld></ClientFeedbackOld>
        <section className="home-section09">
          <div className="home-container32">
            <header className="home-header5">
              <h2 className="home-heading11 Heading section-heading1">
                OUR TECH PARTNERS
              </h2>
            </header>
            <main className="home-cards">
              <CompanyCard rootClassName="company-card-root-class-name"></CompanyCard>
              <CompanyCard
                image_src="https://iili.io/H7XirRs.png"
                rootClassName="company-card-root-class-name1"
              ></CompanyCard>
              <CompanyCard
                image_src="https://iili.io/H7Xi4OG.png"
                rootClassName="company-card-root-class-name2"
              ></CompanyCard>
              <CompanyCard
                image_src="https://www.smartads.in/resources/assets/uploads/product_group/Magazine/Business_Connect_India.JPG"
                rootClassName="company-card-root-class-name3"
              ></CompanyCard>
              <CompanyCard
                image_src="https://iili.io/H7Xiix4.png"
                rootClassName="company-card-root-class-name4"
              ></CompanyCard>
              <CompanyCard
                image_src="https://iili.io/H7XisWl.png"
                rootClassName="company-card-root-class-name5"
              ></CompanyCard>
              <CompanyCard
                image_src="https://iili.io/H7XiLs2.png"
                rootClassName="company-card-root-class-name6"
              ></CompanyCard>
              <CompanyCard
                image_src="https://iili.io/H7XiZfS.jpg"
                rootClassName="company-card-root-class-name7"
              ></CompanyCard>
              <div className="home-container33">
                <span className="home-text40 colortexter">And More...</span>
              </div>
            </main>
          </div>
        </section>
        <section className="home-section10">
          <div className="home-container34">
            <main className="home-content5">
              <header className="home-header6">
                <h2 className="home-heading12 Heading section-heading1">
                  Think Game, Think WebMobril Gaming Studioz.
                </h2>
                <span className="home-text41">
                  We have delivered 200+ exceptional and exemplary games and
                  counting.
                </span>
              </header>
            </main>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
