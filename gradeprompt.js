const prompt = require("prompt");

prompt.start();

function getGrade() {
    prompt.get("num", (err, res) => {
        try {
            err;
        } catch (err) {
            console.error(err);
        }
        let num = res.num;

        if (num < 40) {
            console.log("Your grade is E");
        } else if (num <= 49) {
            console.log("Your grade is D");
        } else if (num <= 59) {
            console.log("Your grade is C");
        } else if (num <= 69) {
            console.log("Your grade is B");
        } else console.log("Your grade is A");
    });
}
getGrade();