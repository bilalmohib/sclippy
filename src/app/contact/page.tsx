import Image from "next/image";
import ContactForm from "@/app/contact/ContactForm";

const ContactPage = () => {
    return (
        <div>
            <Image
                src="/learn/round-cube.png"
                alt="learn cube"
                width={132}
                height={121}
                className="absolute left-0"
            />

            <ContactForm className="mt-28 mb-60 flex flex-col justify-center items-center w-full" />
        </div>
    )
}
export default ContactPage;