//interface
interface Contact {
    id: number;
    name: string;
    email: string;
    phone: number;
  }
  
//class
class ContactManager {
    private contacts: Contact[] = [];

    constructor(initialContacts: Contact[] = []) {
        this.contacts = initialContacts;
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    updateContact(id: number, updated: Partial<Contact>): void {
        const index = this.contacts.findIndex(c => c.id === id);

        if (index !== -1) {
        this.contacts[index] = { ...this.contacts[index], ...updated };
        } else {
        console.warn(`Contact with ID ${id} not found.`);
        }
    }

    listContacts(): Contact[] {
        return this.contacts;
    }
}
  
  // --- Example usage ---
  const manager = new ContactManager([
    { id: 12, name: "Jeaven", email: "jeavenanda07", phone: 231 },
    { id: 14, name: "Carol", email: "carolling@gmail.com", phone: 321323 },
    { id: 7, name: "Elo", email: "elowengaming@gmail.com", phone: 6398 },
  ]);
  
  manager.updateContact(14, { email: "newcarol@gmail.com", phone: 123456 });
  
  manager.addContact({
    id: 21,
    name: "Lance",
    email: "lance@example.com",
    phone: 987654,
  });
  
  console.log(manager.listContacts());
  