import '../css/styles.scss';
import Logger from './logger';

import contentTemplate from './content.hbs';

Logger.info("Testing Webpack & Babel");

var content = document.getElementById("content");
content.innerHTML = contentTemplate();
