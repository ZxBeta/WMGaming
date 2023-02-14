import React, { useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import emailjs from '@emailjs/browser'



import Header from '../components/header'
import Footer from '../components/footer'
import './game-development.css'
import '../components/header.css'

const GameDevelopment = (props) => {

  const form = useRef();
  const [show_contact_menu, setShow_contact_menu] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8dxk3gi", "template_q58xc0s", form.current, "mYc8drucW9KkaNWgY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
    e.target.reset()
  }

  const contactToggler = () => {
    setShow_contact_menu(true)
  }

  return (
    <>
      <div className="game-development-container">
        <Helmet>
          <title>Game-Development - WEBMOBRIL GAMING STUDIOZ</title>
          <meta
            name="description"
            content="WebMobril Gaming Studios provides game development services to help businesses create engaging mobile gaming apps, &amp; VR/AR gaming experiences."
          />
          <meta
            property="og:title"
            content="Game-Development - WEBMOBRIL GAMING STUDIOZ"
          />
          <meta
            property="og:description"
            content="WebMobril Gaming Studios provides game development services to help businesses create engaging mobile gaming apps, &amp; VR/AR gaming experiences."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f6e006ad-03b8-4ce0-bd95-8108199f4c23/3e7a551d-1956-4a02-8b27-7c897afd177d?org_if_sml=1"
          />
        </Helmet>
        <Header rootClassName="header-root-class-name4"></Header>
        <div className="game-development-container01">
          <div className="game-development-container02">
            <section className="game-development-hero">
              <div className="game-development-container03">
                <span className="game-development-text">
                  <span>Full Cycle Game</span>
                  <br></br>
                  <span>Development Services</span>
                </span>
                <span className="game-development-text004">
                  <span>
                    We deliver space-age games crafted by our highly-skilled team
                  </span>
                  <br></br>
                  <span>of strategists, developers and designers.</span>
                </span>
              </div>
            </section>
            <section className="game-development-container04">
              <div className="game-development-container05">
                <span className="game-development-text008 outliner">
                  <span>Game Development</span>
                  <br></br>
                  <span>Services for All</span>
                  <br></br>
                  <span>Genres</span>
                </span>
              </div>
              <div className="game-development-container06">
                <span className="game-development-text014">
                  <span>
                    WebMobril Gaming Studioz brings you unparalleled game
                    development services that are engagement and revenue-driven.
                    We deliver space-age games crafted by our highly-skilled team
                    of strategists, developers and designers. What makes us stand
                    out in this competitive industry is the evolving solutions we
                    use in our game development process.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="game-development-text016"></br>
                  <br></br>
                  <span>
                    We work with out-of-the-box thinking and approach and start
                    from scratch to develop and launch the games while adhering to
                    exceptional quality. We are a one-stop shop for gaming
                    solutions, providing life-like AR/VR, Android, iOS games,
                    Unity and Unreal games and related services.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </section>
            <section className="game-development-container07">
              <div className="game-development-container08">
                <span className="game-development-text019">
                  <span>Customized Full-Cycle</span>
                  <br className="game-development-text021"></br>
                  <span>Game Development</span>
                </span>
                <span className="game-development-text023">
                  We provide full-cycle game development services that include all
                  phases from designing a game and animations to 2D/3D modeling,
                  coding, and post-release support and maintenance, everything
                  aligned to your specific requirements.
                </span>
              </div>
              <div className="game-development-container09">
                <span className="game-development-text024">
                  <span>Certified</span>
                  <br></br>
                  <span>Developers &amp; Experts</span>
                </span>
                <span className="game-development-text028">
                  We have an ardent team of Unity-certified developers and AR/VR
                  experts who apply premium tools and proven strategies to create
                  lively AR/VR games with splendid gameplay. Our professionals are
                  highly experienced that resonate through the games we develop.
                </span>
              </div>
              <div className="game-development-container10">
                <span className="game-development-text029">
                  <span>Assured Quality</span>
                  <br></br>
                  <span>&amp; Performance</span>
                </span>
                <span className="game-development-text033">
                  We believe in building long-term relationships with our clients.
                  Our dedicated team thoroughly tests every aspect of the game for
                  compatibility, functionality, performance, errors and bugs. We
                  release the final games only after multiple tests on a specific
                  platform.
                </span>
              </div>
            </section>
            <section className="game-development-container11">
              <div className="game-development-container12">
                <span className="game-development-text034">
                  <span>
                    WebMobril Gaming Studioz brings you unparalleled game
                    development services that are engagement and revenue-driven.
                    We deliver space-age games crafted by our highly-skilled team
                    of strategists, developers and designers. What makes us stand
                    out in this competitive industry is the evolving solutions we
                    use in our game development process.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="game-development-text036"></br>
                  <br></br>
                  <span>
                    We work with out-of-the-box thinking and approach and start
                    from scratch to develop and launch the games while adhering to
                    exceptional quality. We are a one-stop shop for gaming
                    solutions, providing life-like AR/VR, Android, iOS games,
                    Unity and Unreal games and related services.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="game-development-container13">
                <span className="game-development-text039 outliner">
                  <span>What</span>
                  <br></br>
                  <span>Makes us</span>
                  <br></br>
                  <span>Your Preferred</span>
                  <br></br>
                  <span>Choice</span>
                </span>
              </div>
            </section>
            <section className="game-development-container14">
              <div className="game-development-container15">
                <span className="game-development-text047 outliner">
                  <span>What</span>
                  <br></br>
                  <span>Makes us</span>
                  <br></br>
                  <span>Your Preferred</span>
                  <br></br>
                  <span>Choice</span>
                </span>
              </div>
              <div className="game-development-container16">
                <span className="game-development-text055">
                  <span>
                    WebMobril Gaming Studioz brings you unparalleled game
                    development services that are engagement and revenue-driven.
                    We deliver space-age games crafted by our highly-skilled team
                    of strategists, developers and designers. What makes us stand
                    out in this competitive industry is the evolving solutions we
                    use in our game development process.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="game-development-text057"></br>
                  <br></br>
                  <span>
                    We work with out-of-the-box thinking and approach and start
                    from scratch to develop and launch the games while adhering to
                    exceptional quality. We are a one-stop shop for gaming
                    solutions, providing life-like AR/VR, Android, iOS games,
                    Unity and Unreal games and related services.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </section>
            <section className="game-development-container17">
              <div className="game-development-container18">
                <div className="game-development-container19">
                  <span className="game-development-text060">
                    <span>The Journey to a Successful</span>
                    <br></br>
                    <span>Game Development is a Click Away.</span>
                  </span>
                  <div className="game-development-container20 cursor_pointer">
                    <span onClick={contactToggler} className="game-development-text064 cursor_pointer">
                      Contact Us
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="game-development-container21">
              <div className="game-development-container22 outliner">
                <span className="game-development-text065">
                  We Develop Games for Key Platforms
                </span>
                <span className="game-development-text066">AND</span>
                <span className="game-development-text067">
                  <span>We</span>
                  <br></br>
                  <span className="game-development-text070">LOVE</span>
                  <br></br>
                  <span>IT</span>
                  <br></br>
                </span>
              </div>
              <div className="game-development-container23">
                <span className="game-development-text074">
                  <span>
                    We think games, we love to build games! At WebMobril Gaming
                    Studioz, our
                  </span>
                  <br></br>
                  <span>
                    gaming maniacs combine their expertise with cutting-edge
                    technologies to
                  </span>
                  <br></br>
                  <span>entrust truly immersive and engaging games.</span>
                </span>
              </div>
            </section>
            <section className="game-development-container24">
              <div className="game-development-container25">
                <span className="game-development-text080">Console</span>
                <span className="game-development-text081">
                  From conceptualization, story development, UI/UX design and
                  backend development, we have got you covered to build exciting
                  games for all major console platforms such as Xbox, Nintendo,
                  and PlayStation.
                </span>
              </div>
              <div className="game-development-container26">
                <span className="game-development-text082">Mobile</span>
                <span className="game-development-text083">
                  We create immersive mobile gaming experiences by designing games
                  people can’t get over playing. Bring your idea to us for iOS and
                  Android platforms and cross-platform game apps.
                </span>
              </div>
              <div className="game-development-container27">
                <span className="game-development-text084">
                  Personal Computer (PC)
                </span>
                <span className="game-development-text085">
                  Our passion for gaming and extensive knowledge drives us to
                  offer end-to-end game development services for personal
                  computers with porting to Windows or MacOS.
                </span>
              </div>
            </section>
            <section className="game-development-container28">
              <div className="game-development-container29">
                <span className="game-development-text086 outliner">
                  <span>Our Game</span>
                  <br></br>
                  <span>Development Services</span>
                </span>
                <span className="game-development-text090">
                  We understand the dynamic nature of games. We assist you in
                  reaching most players, no matter where they are, by creating
                  your game across all major mobile, PC, AR/ VR, and web
                  platforms.
                </span>
              </div>
              <div className="game-development-container30">
                <div className="game-development-container31">
                  <div className="game-development-container32">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon"
                    >
                      <path d="M726 810v-596h-428v596h428zM726 44q34 0 59 25t25 59v768q0 34-25 60t-59 26h-428q-34 0-59-26t-25-60v-768q0-34 25-60t59-26z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text091">
                    Mobile Game development
                  </span>
                </div>
                <div className="game-development-container33">
                  <div className="game-development-container34">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon02"
                    >
                      <path d="M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text092">
                    Pc Game Development
                  </span>
                </div>
                <div className="game-development-container35">
                  <div className="game-development-container36">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon04"
                    >
                      <path d="M60.538 0l82.144 921.63 368.756 102.37 369.724-102.524 82.3-921.476h-902.924zM784.63 301.428h-432.54l10.302 115.75h411.968l-31.042 347.010-231.844 64.254-231.572-64.254-15.83-177.512h113.494l8.048 90.232 125.862 33.916 0.278-0.078 125.934-33.992 13.070-146.55h-391.74l-30.494-341.8h566.214l-10.108 113.024z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text093">
                    HTML Game development
                  </span>
                </div>
                <div className="game-development-container37">
                  <div className="game-development-container38">
                    <svg
                      viewBox="0 0 804.5714285714286 1024"
                      className="game-development-icon06"
                    >
                      <path d="M281.714 276c12.571 0 22.286-10.286 22.286-22.286s-9.714-22.286-22.286-22.286c-12 0-21.714 10.286-21.714 22.286s9.714 22.286 21.714 22.286zM522.857 276c12 0 21.714-10.286 21.714-22.286s-9.714-22.286-21.714-22.286c-12.571 0-22.286 10.286-22.286 22.286s9.714 22.286 22.286 22.286zM58.857 381.143c32 0 58.286 26.286 58.286 58.286v245.714c0 32.571-25.714 58.857-58.286 58.857s-58.857-26.286-58.857-58.857v-245.714c0-32 26.286-58.286 58.857-58.286zM664.571 392v380.571c0 34.857-28 62.857-62.286 62.857h-42.857v129.714c0 32.571-26.286 58.857-58.857 58.857s-58.857-26.286-58.857-58.857v-129.714h-78.857v129.714c0 32.571-26.286 58.857-58.857 58.857-32 0-58.286-26.286-58.286-58.857l-0.571-129.714h-42.286c-34.857 0-62.857-28-62.857-62.857v-380.571h524.571zM532 160.571c80 41.143 134.286 120 134.286 210.857h-528.571c0-90.857 54.286-169.714 134.857-210.857l-40.571-74.857c-2.286-4-1.143-9.143 2.857-11.429 4-1.714 9.143-0.571 11.429 3.429l41.143 75.429c34.857-15.429 73.714-24 114.857-24s80 8.571 114.857 24l41.143-75.429c2.286-4 7.429-5.143 11.429-3.429 4 2.286 5.143 7.429 2.857 11.429zM804.571 439.429v245.714c0 32.571-26.286 58.857-58.857 58.857-32 0-58.286-26.286-58.286-58.857v-245.714c0-32.571 26.286-58.286 58.286-58.286 32.571 0 58.857 25.714 58.857 58.286z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text094">
                    Android Game Development
                  </span>
                </div>
                <div className="game-development-container39">
                  <div className="game-development-container40">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon08"
                    >
                      <path d="M791.498 544.092c-1.294-129.682 105.758-191.876 110.542-194.966-60.152-88.020-153.85-100.078-187.242-101.472-79.742-8.074-155.596 46.948-196.066 46.948-40.368 0-102.818-45.754-168.952-44.552-86.916 1.292-167.058 50.538-211.812 128.38-90.304 156.698-23.126 388.84 64.89 515.926 43.008 62.204 94.292 132.076 161.626 129.58 64.842-2.588 89.362-41.958 167.756-41.958s100.428 41.958 169.050 40.67c69.774-1.296 113.982-63.398 156.692-125.796 49.39-72.168 69.726-142.038 70.924-145.626-1.548-0.706-136.060-52.236-137.408-207.134zM662.562 163.522c35.738-43.358 59.86-103.512 53.28-163.522-51.478 2.096-113.878 34.29-150.81 77.55-33.142 38.376-62.148 99.626-54.374 158.436 57.466 4.484 116.128-29.204 151.904-72.464z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text095">
                    iOS Game Development
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="game-development-container41">
                  <div className="game-development-container42">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon10"
                    >
                      <path d="M832 512q28 0 46-18t18-46-18-46-46-18-46 18-18 46 18 46 46 18zM662 640q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM470 554v-84h-128v-128h-86v128h-128v84h128v128h86v-128h128zM896 256q34 0 60 26t26 60v340q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-340q0-34 26-60t60-26h768z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text096">
                    MMORPG Game Development
                  </span>
                </div>
                <div className="game-development-container43">
                  <div className="game-development-container44">
                    <svg
                      viewBox="0 0 1243.4285714285713 1024"
                      className="game-development-icon12"
                    >
                      <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text097">
                    3D Game Development
                  </span>
                </div>
                <div className="game-development-container45">
                  <div className="game-development-container46">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon14"
                    >
                      <path d="M704 384h234v256h-234l-128-128zM384 704l128-128 128 128v234h-256v-234zM320 384l128 128-128 128h-234v-256h234zM640 320l-128 128-128-128v-234h256v234z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text098">Game Testing</span>
                </div>
                <div className="game-development-container47">
                  <div className="game-development-container48">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon16"
                    >
                      <path d="M1024 282.5l-90.506-90.5-178.746 178.752-101.5-101.502 178.75-178.75-90.5-90.5-178.75 178.75-114.748-114.75-86.626 86.624 512.002 512 86.624-86.622-114.752-114.752 178.752-178.75z"></path>
                      <path d="M794.040 673.79l-443.824-443.824c-95.818 114.904-204.52 292.454-129.396 445.216l-132.248 132.248c-31.112 31.114-31.112 82.024 0 113.136l14.858 14.858c31.114 31.114 82.026 31.114 113.138 0l132.246-132.244c152.764 75.132 330.318-33.566 445.226-129.39z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text099">Game Porting</span>
                </div>
                <div className="game-development-container49">
                  <div className="game-development-container50">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="game-development-icon19"
                    >
                      <path d="M512 930.857l365.714-199.429v-363.429l-365.714 133.143v429.714zM475.429 436.571l398.857-145.143-398.857-145.143-398.857 145.143zM950.857 292.571v438.857c0 26.857-14.857 51.429-38.286 64l-402.286 219.429c-10.857 6.286-22.857 9.143-34.857 9.143s-24-2.857-34.857-9.143l-402.286-219.429c-23.429-12.571-38.286-37.143-38.286-64v-438.857c0-30.857 19.429-58.286 48-68.571l402.286-146.286c8-2.857 16.571-4.571 25.143-4.571s17.143 1.714 25.143 4.571l402.286 146.286c28.571 10.286 48 37.714 48 68.571z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text100">
                    Unity Development
                  </span>
                </div>
                <div className="game-development-container51">
                  <div className="game-development-container52">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon21"
                    >
                      <path d="M470 896h-44l44-298h-150q-32 0-16-28 6-10 2-6 102-178 248-436h44l-44 298h150q28 0 18 28z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text101">
                    Unreal Development
                  </span>
                </div>
                <div className="game-development-container53">
                  <div className="game-development-container54">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon23"
                    >
                      <path d="M682 746q44 0 76-31t32-75-32-75-76-31-75 31-31 75 31 75 75 31zM406 342q0 44 31 75t75 31 75-31 31-75-31-76-75-32-75 32-31 76zM342 746q44 0 75-31t31-75-31-75-75-31-76 31-32 75 32 75 76 31zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text102">
                    Hyper Casual Game Development
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="game-development-container55">
                  <div className="game-development-container56">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon25"
                    >
                      <path d="M864 192h-512c-88 0-160 72-160 160v512c0 88 72 160 160 160h512c88 0 160-72 160-160v-512c0-88-72-160-160-160zM416 896c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96zM416 512c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96zM608 704c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96zM800 896c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96zM800 512c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96zM828.76 128c-14.93-72.804-79.71-128-156.76-128h-512c-88 0-160 72-160 160v512c0 77.046 55.196 141.83 128 156.76v-636.76c0-35.2 28.8-64 64-64h636.76z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text103">
                    Gamification Services
                  </span>
                </div>
                <div className="game-development-container57">
                  <div className="game-development-container58">
                    <svg
                      viewBox="0 0 1097.142857142857 1024"
                      className="game-development-icon27"
                    >
                      <path d="M365.714 329.143c0 60.571-49.143 109.714-109.714 109.714s-109.714-49.143-109.714-109.714 49.143-109.714 109.714-109.714 109.714 49.143 109.714 109.714zM950.857 548.571v256h-804.571v-109.714l182.857-182.857 91.429 91.429 292.571-292.571zM1005.714 146.286h-914.286c-9.714 0-18.286 8.571-18.286 18.286v694.857c0 9.714 8.571 18.286 18.286 18.286h914.286c9.714 0 18.286-8.571 18.286-18.286v-694.857c0-9.714-8.571-18.286-18.286-18.286zM1097.143 164.571v694.857c0 50.286-41.143 91.429-91.429 91.429h-914.286c-50.286 0-91.429-41.143-91.429-91.429v-694.857c0-50.286 41.143-91.429 91.429-91.429h914.286c50.286 0 91.429 41.143 91.429 91.429z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text104">
                    NFT Game Development
                  </span>
                </div>
                <div className="game-development-container59">
                  <div className="game-development-container60">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="game-development-icon29"
                    >
                      <path d="M832 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-640q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h640zM832 814v-600h-640v600h640zM726 726h-86v-172h86v172zM554 726h-84v-428h84v428zM384 726h-86v-300h86v300z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text105">
                    NFT Marketplace Development
                  </span>
                </div>
                <div className="game-development-container61">
                  <div className="game-development-container62">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="game-development-icon31"
                    >
                      <path d="M829.143 73.143c26.857 0 48.571 21.714 48.571 48.571v780.571c0 26.857-21.714 48.571-48.571 48.571h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-420c-26.857 0-48.571-21.714-48.571-48.571v-780.571c0-26.857 21.714-48.571 48.571-48.571h780.571z"></path>
                    </svg>
                  </div>
                  <span className="game-development-text106">
                    Metaverse Development
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      {show_contact_menu && (
          <div className="header-container2 FadeInUp">
            <svg
              fill='white'
              viewBox="0 0 1024 1024"
              onClick={() => setShow_contact_menu(false)}
              className="header-close-icon cursor_pointer"
            >
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
            <div className='form-div'>
              <form ref={form} onSubmit={sendEmail} className='form-control'>
                <input className='former' id='name-form' type="text" placeholder='Your Name' name='user_name' required />
                <input className='former' id='email-form' type="text" placeholder='Your email' name='user_email' required />
                <input className='former' id='subject-form' type="text" placeholder='subject' name='subject' required />
                <textarea className='former' id='textarea-form' placeholder='message' cols="30" rows="5" name='message'></textarea>
                <button className='form-btn' type='submit'>Send</button>
              </form>
            </div>
          </div>
        )}
    </>
  )
}



export default GameDevelopment
