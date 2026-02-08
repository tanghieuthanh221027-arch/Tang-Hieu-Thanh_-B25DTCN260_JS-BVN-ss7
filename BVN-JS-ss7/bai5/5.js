let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];

function getAllPositions() {
    let result = [];
    for (let p of players) {
        let parts = p.split("-");
        let pos = parts[2];
        if (!result.includes(pos)) {
            result.push(pos);
        }
    }
    return result;
}

function findPlayersWithLongestName() {
    let longest = "";
    for (let p of players) {
        let name = p.split("-")[1];
        if (name.length > longest.length) {
            longest = name;
        }
    }
    return longest;
}

function countPlayersStartingWithLetter(letter) {
    let count = 0;
    letter = letter.toLowerCase();

    for (let p of players) {
        let name = p.split("-")[1].toLowerCase();
        if (name.startsWith(letter)) {
            count++;
        }
    }
    return count;
}

console.log("Vị trí trong đội:", getAllPositions());
console.log("Tên dài nhất:", findPlayersWithLongestName());
console.log("Số cầu thủ bắt đầu bằng 'N':", countPlayersStartingWithLetter("N"));