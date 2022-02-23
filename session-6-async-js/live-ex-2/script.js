const strLen = (userName, callback) => {
    const len = userName.length;
    callback(len);
};

strLen("Bharati", (nameLength) => {
    console.log(`OMG! My name is ${nameLength} characters long!`)
});