import { DOC, BODY, LOADED } from '../constants';

DOC.ready(() => BODY.addClass(LOADED));
