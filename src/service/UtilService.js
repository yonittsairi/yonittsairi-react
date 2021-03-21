export const UtilService = {
    makeId,
    getRandomInt,
    dateFormatter
};

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // Min is inclusive, Max is Exclusive
}
function dateFormatter(timeStampStart, timeStampEnd) {
    const dateFormat = new Date(timeStampStart).toString()
    const dateEndFormat = new Date(timeStampEnd).toString()
    const dayName = dateFormat.substring(0, 3)
    const month = dateFormat.substring(4, 8)
    const dayNum = dateFormat.substring(8, 10)
    const time = dateFormat.substring(15, 21)
    const timeEnd = dateEndFormat.substring(15, 21)
    return (
        <section>
            <h3> {dayName + ', ' + month + dayNum}</h3>
            <p>{time + ' - ' + timeEnd}</p>
        </section>
    )
}