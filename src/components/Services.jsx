import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesGD } from "../constants";
import {
  PhotoChatMessage,
  VideoChatMessage,
  Gradient
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="services">
      <div className="container">
        <Heading
          title="A complete Package of Digital Era"
          text="Wincid Technologies unlocks your digital growth and raise your business to the next level."
          className={`md:w-[50%]`}
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-screen h-full object-cover md:object-right opacity-30"
                width={1000}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Web Development</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Your website is the first impression of your business.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Social Media & SEO</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  We help you to reach your audience and grow your business.
                  The tricks of SEO with Large Social audience. We are perfect choice...
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="relative z-1 ml-auto">
              <h4 className="h4 mb-4">Graphics Designing</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                We create designs that speak out for your brand.
                <br />
                Something that NO one can ignore.
              </p>
              <ul className="body-2">
                {brainwaveServicesGD.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
                <VideoChatMessage />
              </div>

            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
