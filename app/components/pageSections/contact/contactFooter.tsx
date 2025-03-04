import { contactData } from "../../../utils/ContactData";
import ContactInfo from "./contactInfo";

/*
    This component is the main component of the contact footer. It renders a list of contact data
    using the ConctactInfo component. The content of the list is located in utils/ContactData.tsx.
    I'm using index as a key for each piece of data as the order of the pieces is fixed and it's not going
    to change, as a result, I don't have to worry about creating a ID property for each section.
    This component behaves similarely to the AboutMe component
*/

export default function ContactFooter() {
    return (
        <footer className="section !justify-center !gap-10 mt-36 mb-16">
            <h2 id="contact_footer" 
            className="text-center text-5xl">
                ¿Want to get in contact?
            </h2>
            <nav className="w-3/4 mx-auto">
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