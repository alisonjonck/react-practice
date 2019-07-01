const setHash = (hash, inputFocus) => {
    const me = this;
    
    location.hash = hash;

    setTimeout(() => {
        document.getElementById(inputFocus).focus();
    }, 300);
};

export default setHash;