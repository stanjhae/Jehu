/*
 * AboutMun Messages
 *
 * This contains all the text for the AboutMun component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.AboutMun';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AboutMun component!',
  },
});
