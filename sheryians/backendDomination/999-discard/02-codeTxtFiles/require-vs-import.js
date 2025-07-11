// IMPORT------------------------------------------------------------------------------------------------------------------------------------------------
//  Types of imports in js

// BASIC
import fs from 'fs';

// Multiple imports-------------------
import {
    foo, bar,
  } from './myModule.js';

  // Renaming imports-----------------
import {
    reallyLongFunctionName as shortName,
    anotherOne as ao
  } from './utils.js';
  

// REQUIRE------------------------------------------------------------------------------------------------------------------------------------------------
const fs = require('fs'); 