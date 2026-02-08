let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];

function getShortestPlayerName() {
    let shortest = players[0].split("-")[1];

    for (let p of players) {
        let name = p.split("-")[1];
        if (name.length < shortest.length) {
            shortest = name;
        }
    }

    return shortest;
}

function countPlayersWithPositionLengthGreaterThan(length) {
    let count = 0;

    for (let p of players) {
        let position = p.split("-")[2];
        if (position.length > length) {
            count++;
        }
    }

    return count;
}

console.log("Tên ngắn nhất:", getShortestPlayerName());
console.log("Số cầu thủ có vị trí dài hơn 7 ký tự:", countPlayersWithPositionLengthGreaterThan(7));