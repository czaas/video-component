import React from 'react';
import ReactDom from 'react-dom';

import './css/main.scss';
import { TestMount } from './test.js';

ReactDom.render(<TestMount />, document.getElementById('app'));