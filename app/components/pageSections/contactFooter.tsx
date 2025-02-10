import { contactData } from "../../utils/ContactData";
import ContactInfo from "../contactInfo";


export default function ContactFooter() {
    return (
        <footer id="contact_footer" className="mb-96 mt-10">
            <h2 className="text-center text-5xl">
                ¿Want to get in contact?
            </h2>
            <nav className="flex-col w-3/4 justify-start mx-auto">
                {contactData.map((contactData, index) => (
                    <ContactInfo
                        key={index}
                        contactData={contactData}
                    />
                ))}
            </nav>
        </footer>
    )
}