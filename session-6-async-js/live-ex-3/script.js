const willThanosKillMe = (userName, successCallback, failureCallback) => {
    const len = userName.length;

    if(len % 2 === 0) {
        successCallback();
    }
    else {
        failureCallback();
    }
};

willThanosKillMe("Bharati", () => {
    console.log("Yay! I'm alive!");
}, () => {
    console.log("Give my boAt speakers to my sister!")
});