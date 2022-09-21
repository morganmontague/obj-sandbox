console.log('running')
let xbox = {
    xboxPower: true,
    profile: [
        {
            name: 'Hank',
            controller: 'controllerOne',
            status: 'Active',
            
        },
        {
            name: 'Steve',
            controller: 'controllerTwo',
            status: 'Active',
        },
        {
            name: 'Jimmy',
            controller: null,
            status: 'Off',
        }
    ],
    controller: [
        {
            name: 'controllerOne',
            controllerPower: true,
            batteryLife: 18,
            connectedTo: 'Hank'  
        },
        {
            name: 'controllerTwo',
            controllerPower: true,
            batteryLife: 17,
            connectedTo: 'Steve'
        },
        {
            name: 'controllerThree',
            controllerPower: false,
            batteryLife: 0,
            connectedTo: '',
        }
    ],
    wifi: true,
    number: 1,
}


        function batteryAlert() {
        if (xbox.controller.batteryLife < 30){
            console.log('Change Battery')
        } else {
            console.log('we good')
        }
    }


    let updateNumber = document.getElementById('test')
    let testChange = document.getElementById('changeNumber')
    

    updateNumber.addEventListener('click', () => {
        
        xbox.number = xbox.number + 1
        console.log(xbox.number)
        testChange.innerText = xbox.number
        const para = document.createElement("p");
        document.body.appendChild(para);
        para.innerText = xbox.number;
    }
    )
