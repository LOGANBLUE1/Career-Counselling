import logo from "../assets/images/Image 18.png"
import HighlightText from "../components/HighlightText";
import CodeBlocks from "../components/CodeBlocks";

const Home = () => {
  return (
    <div>
      <section className="w-11/10 h-11/10">
        <img src={logo} alt="Logo"loading="lazy" />
      </section>

      <div className="w-11/12 flex flex-col justify-center items-center">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-6">Features Overview</h1>
          <p>Discover the powerful tools and resources available on Career Mentor Hub</p>
          <p>designed to accelerate your professional growth.</p>
        </section>
                {/* Code Section 2 */}
        <div className="w-11/12">
            <CodeBlocks
              position={"lg:flex-row"}
              heading={
                <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                  Start
                  <HighlightText text={"Advanced Assessments"} />
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              ctabtn1={{
                btnText: "Try now",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              backgroundGradient={<div className="codeblock2 absolute"></div>}
            />

            <CodeBlocks
              position={"lg:flex-row-reverse"}
              heading={
                <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                  Start
                  <HighlightText text={"Advanced Assessments"} />
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              ctabtn1={{
                btnText: "Try now",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              backgroundGradient={<div className="codeblock2 absolute"></div>}
            />
          </div>
          {/*  Testimonial section */}
          <section>

          </section>

          {/*  Our services section */}
          <section>

          </section>

          {/*  Footer */}
          <section>

          </section>
        </div>
    </div>
  );
};

export default Home;