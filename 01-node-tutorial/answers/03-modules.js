const names = require('./04-names')
const testFunction = require('./05-utils')
const dataSet = require('./06-alternative-flavor')

testFunction(names.Ben)
testFunction(names.Liv)
testFunction(names.Sam)

require('./07-mind-grenade')

testFunction(dataSet.part1)
testFunction(dataSet.part2)
testFunction(`ID# is ${dataSet.part3.id}, name is ${dataSet.part3.name}. SuperUser? - ${dataSet.part3.superUser}`)


