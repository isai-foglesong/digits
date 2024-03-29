import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';
import { Tracker } from 'meteor/tracker';
/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class ContactsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ContactsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      address: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      owner: PropTypes.string,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {ContactsCollection}
 */
export const Contacts = new ContactsCollection();
