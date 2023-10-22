function parts(input) {
    switch (input.toLowerCase()) {
        case "trees":
            openNewTab("t1.html");
            break;
        case "swings":
            openNewTab("s3.html");
            break;
        case "monkeybars":
            openNewTab("m0b4.html");
            break;
        case "seesaws":
            openNewTab("3saws.html");
            break;
        case "carousel":
            openNewTab("c4r.html");
            break;
        case "chaos":
            openNewTab("playit.html")
        default:
            return "That is not a part.";
    }
}

function openNewTab(fileName) {
    window.open(fileName, "_blank");
}
console.log("Cruises are red, Pilots are blue. The destination in question has no sort of clue.");