import { Plugin } from "@vue/runtime-core";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faEdit, faPlus, faUsers, faRemove, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faClock);
library.add(faUsers);
library.add(faPlus);
library.add(faEdit);
library.add(faRemove);
library.add(faUpload);

export const FontAwesomePlugin: Plugin = (app) => {
    app.component('font-awesome-icon', FontAwesomeIcon)
}