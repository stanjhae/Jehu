/*
 * Gallery Messages
 *
 * This contains all the text for the Gallery component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Gallery';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Gallery component!',
  },
});
