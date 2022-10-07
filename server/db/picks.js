const conn = require('./connection')

function getDavePicks (db = conn) {
    return db('Dave')
}
function getMargePicks (db = conn) {
    return db('Marge')
}
function getColePicks (db = conn) {
    return db('Cole')
}
function getFreyaPicks (db = conn) {
    return db('Freya')
}
function getMattPicks (db = conn) {
    return db('Matt')
}
function addDavePicks (newPick, db = conn) {
    return db('Dave').insert(newPick)
}
function addMargePicks (newPick, db = conn) {
    return db('Dave').insert(newPick)
}
function addColePicks (newPick, db = conn) {
    return db('Dave').insert(newPick)
}
function addFreyaPicks (newPick, db = conn) {
    return db('Dave').insert(newPick)
}
function addMattPicks (newPick, db = conn) {
    return db('Dave').insert(newPick)
}


module.exports = {  
    getColePicks,
    getDavePicks,
    getFreyaPicks,
    getMargePicks,
    getMattPicks,
    addMattPicks,
    addColePicks,
    addDavePicks,
    addFreyaPicks,
    addMargePicks
}