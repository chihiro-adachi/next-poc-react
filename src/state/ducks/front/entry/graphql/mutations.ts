import {gql} from '@apollo/client';

const CREATE_ENTRY = gql`
    mutation entryCustomer($input: entryInput) {
      entryCustomer(
        input: $input
      ) {
        id
        name01
        name02
        kana01
        kana02
        Pref {
          id,
          name
        }
        postal_code
        addr01
        addr02
        phone_number
        email
      }
    }`;

const VALIDATION_ENTRY = gql`
    mutation validationEntryCustomer($input : validationEntryCustomerInput!) {
        validationEntryCustomer(input: $input) {
            customer {
                id
            }
        }
    }`;

const entryMutations = {
    CREATE_ENTRY,
    VALIDATION_ENTRY
}

export default entryMutations;

