// Material Design Imports
import {
    MDCRipple,
    MDCRippleFoundation
} from '@material/ripple';

// Material Web Component Imports
// https://github.com/material-components/material-components-web-components
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import '@material/mwc-circular-progress-four-color';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-linear-progress';
import '@material/mwc-radio';
import '@material/mwc-select';
import '@material/mwc-slider';
import '@material/mwc-snackbar';
import '@material/mwc-switch';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import '@material/mwc-textarea';
import '@material/mwc-textfield';

// Apply Ripple effect to common elements
document.addEventListener('DOMContentLoaded', event => {
    document.querySelectorAll('.btn').forEach(element => MDCRipple.attachTo(element));
    document.querySelectorAll('.card-collapsible .card-header').forEach(element => MDCRipple.attachTo(element));
    document.querySelectorAll('.chip').forEach(element => MDCRipple.attachTo(element));
    document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(element => MDCRipple.attachTo(element));
    document
        .querySelectorAll('.drawer-menu .nav-link')
        .forEach(element => MDCRipple.attachTo(element));
    document.querySelectorAll('.list-group .list-group-item-action').forEach(element => MDCRipple.attachTo(element));
    document
        .querySelectorAll('.nav .nav-link')
        .forEach(element => MDCRipple.attachTo(element));
    document.querySelectorAll("[class*='ripple-']").forEach(element => MDCRipple.attachTo(element));
});
