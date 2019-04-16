/**
 *
 * Asynchronously loads the component for Transport
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
