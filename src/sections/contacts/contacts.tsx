import { ContactForm } from '@/components/common/contact-form/contact-form';
import { ContactBlock } from '@/components/ui/contact-block/contact-block';
import { TitleSection } from '@/components/ui/title-section/title-section';
import contacts from '@/data/contacts.json';

export const Contacts = () => {
  return (
    <section>
      <div className="container pt-5 pb-10">
        <TitleSection text={contacts.title} />
        <div className="flex justify-between flex-col gap-5">
          <ContactBlock />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
