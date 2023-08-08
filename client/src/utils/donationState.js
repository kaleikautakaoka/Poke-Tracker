import React, { createContext, useContext } from "react";
import { usePokemonReducer } from './reducers';

const DonateContext = createContext();
const { Provider } = DonateContext;

const DonateProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = usePokemonReducer({

        donations: [],
        donationsOpen: false,
        thankYouOpen: false,
    });

    return <Provider value={[state, dispatch]} {...props} />; 
};

const useDonateContext = () => {
    return useContext(DonateContext);
}

export { DonateProvider, useDonateContext };
