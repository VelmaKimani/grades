function getGrade(num) {
    if (num < 40) {
        return "Your grade is E";
    } else if (num <= 49) {
        return "Your grade is D";
    } else if (num <= 59) {
        return "Your grade is C";
    } else if (num <= 69) {
        return "Your grade is B";
    } else return "Your grade is A";
}

console.log(getGrade(67));