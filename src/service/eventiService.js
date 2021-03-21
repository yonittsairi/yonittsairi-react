import { StorageService } from './StorageService.js';
const fs = require('fs')
var gEventies = require('../data/eventi.json')


export const eventiService = {
    query,
    getById,
    saveEventi,
    remove
}


function query() {
    var eventies = StorageService.load('eventies')
    if (!eventies) {
        StorageService.save('eventies', gEventies)
        return Promise.resolve(gEventies)
    }
    else return Promise.resolve(eventies)
}
function getById(eventiId) {
    var gEventies = StorageService.load('eventies')
    const eventi = gEventies.find(eventi => eventi._id === eventiId)
    console.log(eventi);
    if (eventi) return Promise.resolve(eventi)
    else return Promise.reject('No eventi')
}

function remove(eventiId) {
    var gEventies = StorageService.load('eventies')
    const idx = gEventies.findIndex(eventi => eventi._id === eventiId)
    if (idx >= 0) {
        gEventies.splice(idx, 1)
        StorageService.save('eventies', gEventies)
        return Promise.resolve()
    }
    else return Promise.reject('No eventi')

}

function saveEventi(eventi) {
    var gEventies = StorageService.load('eventies')
    console.log(gEventies);
    console.log(eventi);
    if (eventi._id) {
        const idx = gEventies.findIndex(currEventi => currEventi._id === eventi._id)
        gEventies[idx] = eventi;
    } else {
        eventi._id = _makeId()
        gEventies.unshift(eventi)
    }
    StorageService.save('eventies', gEventies)
    // _saveEventisToFile(gEventies)
    return Promise.resolve(eventi)
}


function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

// function _saveEventisToFile(gEventies) {
//     fs.writeFileSync('data/eventi.json', JSON.stringify(gEventies, null, 2))
// }