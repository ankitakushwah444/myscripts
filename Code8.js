
    let Car1 = {
        brand: 'maruti suzuki',
        getBrand: function(){
                return this.brand
        }
    }

    let Car2 = { 
        brand : 'hyundai '
        
    }

    let r1 = Car1.getBrand()
    console.log(r1)

    let r2 = Car1.getBrand.bind(Car2)
    console.log(r2)

    let c2 = function(){
        return Car2.brand
    }
    console.log(c2)


    