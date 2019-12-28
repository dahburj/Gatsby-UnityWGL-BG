import { Router as MyRouter } from "@reach/router";
import React from "react";

import { RandomPerson } from "../modules/RandomPerson";

const RandomPersonApp = () => {
    return(
        <MyRouter>
            <RandomPerson path="/app/random-person/" />
        </MyRouter>
        
    )
}

export default RandomPersonApp;