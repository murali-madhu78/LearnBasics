let restuarant = {
    name: 'SouthThindies',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount += partySize
    },
    removeParty: function(partySize){
        this.guestCount -= partySize
    }
}

restuarant.seatParty(72)
console.log(restuarant.checkAvailability(3))
restuarant.removeParty(20)
console.log(restuarant.checkAvailability(4))    

