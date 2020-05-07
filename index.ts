import { icon, library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { far, faAddressBook } from "@fortawesome/free-regular-svg-icons";

export const faDummy: IconDefinition = {
  prefix: "fac",
  iconName: "dummy",
  icon: [
    512,
    512,
    [],
    "f030",
    ["M50 50 H412 V250 H50 Z", "M50 262 H412 V462 H50 Z"],
  ],
};

library.add(far, faAddressBook, faDummy);

// Has completion:
icon('');
// Does not have completion with this change.
icon({prefix: '', iconName: ''});
