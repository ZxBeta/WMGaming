import React, { useState, useRef } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './virtural-game.css'
import '../components/header.css'

const VirturalGame = (props) => {

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
      <div className="virtural-game-container">
        <Helmet>
          <title>Virtural-Game - WEBMOBRIL GAMING STUDIOZ</title>
          <meta
            name="description"
            content="WebMobril Gaming Studios provides game development services to help businesses create engaging mobile gaming apps, &amp; VR/AR gaming experiences."
          />
          <meta
            property="og:title"
            content="Virtural-Game - WEBMOBRIL GAMING STUDIOZ"
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
        <Header rootClassName="header-root-class-name6"></Header>
        <section className="virtural-game-container01">
          <section className="virtural-game-container02">
            <section className="virtural-game-container03">
              <div className="virtural-game-container04">
                <div className="virtural-game-container05">
                  <div className="virtural-game-container06">
                    <div className="virtural-game-container07">
                      <span className="virtural-game-text green-outliner">
                        STATE
                      </span>
                      <div className="virtural-game-container08">
                        <span className="virtural-game-text01 green-outliner">
                          OF ART
                        </span>
                        <div className="virtural-game-container09">
                          <span className="virtural-game-text02 green-outliner">
                            Visual
                          </span>
                          <span className="virtural-game-text03 outlineColorChanger green-outliner">
                            Gaming
                          </span>
                        </div>
                        <span className="virtural-game-text04 green-outliner">
                          Solution
                        </span>
                      </div>
                    </div>
                    <span className="virtural-game-text05 colortexter">
                      We add thrill to games by transporting users to a completely
                      new world of virtual reality.
                    </span>
                  </div>
                  <div className="virtural-game-container10">
                    <div className="virtural-game-container11">
                      <div className="virtural-game-container12">
                        <span className="virtural-game-text06 orange-outliner white-shadow">
                          <span>We Build </span>
                          <span>Imaginations</span>
                        </span>
                        <span className="virtural-game-text09 orange-outliner">
                          <span>with Essence </span>
                          <span>of Reality</span>
                        </span>
                      </div>
                      <div className="virtural-game-container13">
                        <div className="virtural-game-container14">
                          <span className="virtural-game-text12">
                            Virtual reality is the hottest topic in the gaming
                            industry, especially, due to its immense potential in
                            improving the user experience and driving profits with
                            immersive games. All it takes is the apt use of
                            technology and prototyping. Having a team of
                            passionate game developers, we build Virtual Games
                            that bridge the gap between imagination and reality
                            through technology.
                          </span>
                        </div>
                        <div className="virtural-game-container15">
                          <span className="virtural-game-text13">
                            Our games are designed to be highly interactive by
                            combining the components such as an appealing and
                            aesthetically pleasing interface, exceptional quality
                            graphics, profound background stories, amazing
                            sounds-effects, powerful gaming environments, and a
                            flat load mechanism.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="virtural-game-container16">
                      <div className="virtural-game-container17">
                        <div className="virtural-game-container18">
                          <div className="virtural-game-container19">
                            <span className="virtural-game-text14">
                              Highly-Experienced Team
                            </span>
                            <span className="virtural-game-text15">
                              We have creative minds and technological expertise
                              to serve you with superior AR/VR/MR game
                              development. We take pride in our vast experience
                              designing the most immersive games.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </div>
                          <div className="virtural-game-container20">
                            <span className="virtural-game-text16">
                              Creative Solutions for Every Genre
                            </span>
                            <span className="virtural-game-text17">
                              Our creative team helps us deliver end-to-end
                              services for virtual game design and development
                              that include concept art, UI design, level design,
                              coding, scripting, and rigging.
                            </span>
                          </div>
                        </div>
                        <div className="virtural-game-container21">
                          <span className="virtural-game-text18">
                            Fortified With Cutting-Edge Technologies
                          </span>
                          <span className="virtural-game-text19">
                            Our gaming studio is equipped with leading-age gears
                            and tools to keep up with the trending technologies of
                            virtual reality. The passion to create exciting games
                            encourages us to discover and adapt to the latest
                            technologies.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="virtural-game-container22">
              <div className="virtural-game-container23">
                <div className="virtural-game-container24">
                  <div className="virtural-game-container25">
                    <div className="virtural-game-container26">
                      <span className="virtural-game-text20 pink-outliner">
                        Why Choose
                      </span>
                      <span className="virtural-game-text21 white-shadow">
                        <span>Webmobril Gaming</span>
                        <br></br>
                        <span>Studioz</span>
                      </span>
                    </div>
                    <div className="virtural-game-container27">
                      <span className="virtural-game-text25">
                        <span>
                          We bring you unrivaled passion and dedication for what
                          we do. We work with a client-centric approach in
                          addition to artistic independence, professional
                          experimentation, and enthusiasm that push us beyond the
                          limits to create games that rule the stores.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br className="virtural-game-text27"></br>
                        <br></br>
                        <span>
                          Our virtual gaming experts are armed with all the
                          necessary tools and technologies to construct games in a
                          variety of genres. With years of experience in virtual
                          game development, we boost your game by selecting the
                          right engine and framework for your gaming idea.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="virtural-game-container28">
                    <span className="virtural-game-text30">
                      Need Us, Contact Us
                    </span>
                    <div className="virtural-game-container29">
                      <span onClick={contactToggler} className="virtural-game-text31 cursor_pointer">Contact Us</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="virtural-game-container30">
              <div className="virtural-game-container31">
                <div className="virtural-game-container32">
                  <div className="virtural-game-container33">
                    <div className="virtural-game-container34">
                      <div className="virtural-game-container35">
                        <div className="virtural-game-container36">
                          <div className="virtural-game-container37">
                            <span className="virtural-game-text32">Ideate</span>
                            <span className="virtural-game-text33">
                              Tell us about your imagination, and we can take it
                              forward to transform it into life. We are always
                              open to discussing your gameplay mechanics and
                              stories and suggesting the best strategies to make
                              it work. You say we do.
                            </span>
                          </div>
                          <div className="virtural-game-container38">
                            <span className="virtural-game-text34">Create</span>
                            <span className="virtural-game-text35">
                              We get into the nitty-gritty of constructing your
                              virtual game. We pick the best gaming engine and
                              technologies to create various gameplay components
                              like 2D/3D characters, concepts or sketches,
                              animation, and VFX.
                            </span>
                          </div>
                        </div>
                        <div className="virtural-game-container39">
                          <span className="virtural-game-text36">Innovate</span>
                          <span className="virtural-game-text37">
                            Combining the built assets and mechanics, we bring
                            your imagination into life to deliver an unsurpassed
                            experience while immersing you in a new reality. In
                            fact, we blur the line between virtual and realistic
                            experiences.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="virtural-game-container40">
                      <div className="virtural-game-container41">
                        <span className="virtural-game-text38 white-shadow">
                          How It
                        </span>
                        <span className="virtural-game-text39 cyan-outliner">
                          Works
                        </span>
                      </div>
                      <div className="virtural-game-container42">
                        <div className="virtural-game-container43">
                          <span className="virtural-game-text40">
                            At Webmobril Gaming Studioz, we focus on creating
                            games that are exclusive on all grounds. We employ our
                            expertise in the smooth and hassle-free process of
                            virtual game development.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="virtural-game-container44">
              <div className="virtural-game-container45">
                <span className="virtural-game-text41 outliner">
                  What We Can Build For You
                </span>
                <span className="virtural-game-text42">
                  We add thrill to games by transporting users to a completely new
                  world of imagination. We use bleeding-edge technology to
                  transform your imagination into an incredible adventure
                  delivering real feel and not just visualization of the
                  environment.
                </span>
              </div>
              <div className="virtural-game-container46">
                <div className="virtural-game-container47">
                  <div className="virtural-game-container48">
                    <svg viewBox="0 0 1024 1024" className="virtural-game-icon">
                      <path d="M726 682h170v214h-214v-130l-170-180-170 180v130h-214v-214h170l172-170v-136q-38-14-62-46t-24-74q0-52 38-90t90-38 90 38 38 90q0 42-24 74t-62 46v136z"></path>
                    </svg>
                  </div>
                  <span className="virtural-game-text43">
                    Augmented Reality (AR) Games
                  </span>
                </div>
                <div className="virtural-game-container49">
                  <div className="virtural-game-container50">
                    <svg viewBox="0 0 1024 1024" className="virtural-game-icon2">
                      <path d="M810 810v-596h-298v256zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596zM512 470l-298 340h298v-340z"></path>
                    </svg>
                  </div>
                  <span className="virtural-game-text44">
                    Virtual Reality (VR) Games
                  </span>
                </div>
                <div className="virtural-game-container51">
                  <div className="virtural-game-container52">
                    <svg viewBox="0 0 1024 1024" className="virtural-game-icon4">
                      <path d="M896 726v-598h-598v598h598zM896 42q34 0 60 26t26 60v598q0 34-26 59t-60 25h-598q-34 0-59-25t-25-59v-598q0-34 25-60t59-26h598zM128 214v682h682v86h-682q-34 0-60-26t-26-60v-682h86z"></path>
                    </svg>
                  </div>
                  <span className="virtural-game-text45">
                    Mixed Reality (MR) Games
                  </span>
                </div>
              </div>
            </section>
          </section>
        </section>
        <Footer rootClassName="footer-root-class-name5"></Footer>
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

export default VirturalGame
