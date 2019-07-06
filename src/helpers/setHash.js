import { goToAnchor, removeHash } from 'react-scrollable-anchor';

const setHash = (hash) => {

    goToAnchor(hash, true);
    
    setTimeout(() => {
        removeHash();
    }, 300);
};

export default setHash;