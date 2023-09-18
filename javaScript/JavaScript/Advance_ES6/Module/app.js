// Dont use like this 

// import { accCheck as check ,accWidh } from "./innerModule/accont.js";
// import {getUser , cook as coo} from "./innerModule/user.js"




// check();
// accWidh();
// getUser();
// coo();


//Try to use this one --->

import * as usr from "./innerModule/user.js"
import * as acc from "./innerModule/accont.js"


usr.cook();
usr.getUser();

acc.accCheck();
acc.accWidh();