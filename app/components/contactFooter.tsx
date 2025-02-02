import { contactData } from "../data/ContactData";
import ContactInfo from "./contactInfo";


export default function ContactFooter() {
const linkedIn = "https://www.linkedin.com/in/galo-berlini/";
    return (
        <footer className="mb-96">
            <p className="text-center text-5xl">
                ¿Want to get in contact?
            </p>
            <div className="flex flex-col w-3/4 mx-auto mt-10">
                {contactData.map((contactData, index) => (
                    <ContactInfo
                        key={index}
                        contactData={contactData}
                    />
                ))}
            </div>
        </footer>
    )
}