import Vue from 'vue';

/**
 * Font Awesome Setup
 * We import just the icons we need so the end bundle size is smaller.
 */
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn, faGithub, faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/**
 * Set up the Font Awesome icons we want to use
 */
library.add(
  faUser, faLinkedinIn, faGithub, faStackOverflow,
);
Vue.component('fa', FontAwesomeIcon);

dom.watch();
