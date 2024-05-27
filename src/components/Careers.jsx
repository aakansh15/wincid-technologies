import Heading from "./Heading";
import Section from "./Section";
import { careers } from "../constants";
// import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";

const Careers = () => {
  return (
    <Section className="overflow-hidden" id="careers">
    <div className="container md:pb-10">
      <Heading
        tag="Not a Customer but a fellow expert ?"
        title="We offer a variety of opportunities for you."
        text="As mentioned, We offer quality tech with that mind, we look for quality talent. It could be you"
      />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {careers.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 w-full">
                  
                </div>
                <div className="relative z-1">
                  <div className="mb-1 -my-10 -mx-15"></div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
        <Gradient />
      </div>
    </div>
  </Section>
  )
}

export default Careers