import Heading from "./Heading";
import Section from "./Section";
import Button from "./Button";
import { contacts } from "../constants";

const Contacts = () => (
  <Section className="overflow-hidden" id="contact-us">
    <div className="container md:pb-10">
      <Heading
        tag="Are you wondering where to get in touch ?"
        title="Following ways are available to contact us"
      />
      <div className="flex max-w-[10rem] md:max-w-[30rem] xl:max-w-[30rem] mx-auto flex-wrap gap-10 justify-center">
        {contacts.map((contact) => {
          let {id, href, alt, text} = contact
          return (
          <Button key={id} href={href} alt={alt} target={"_blank"}>{text}</Button>
        )})}
      </div>
    </div>
  </Section>
);

export default Contacts;
