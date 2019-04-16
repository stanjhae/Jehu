/*
 * whoAreWe Messages
 *
 * This contains all the text for the whoAreWe component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.whoAreWe';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the whoAreWe component!',
  },
});
