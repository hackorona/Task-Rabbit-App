const deeds = [
    {
        id: 404,
        userId: 22,
        createdAt: new Date(),
        neededDay: 'tomorrow',
        neededHour: 18,
        title: 'Walk my dog',
        description: 'She needs attention and love <3',
        adress: 'Ben Gurion 4, Tel Aviv',
        currentStatus: 'new',
        isRequest: true
    },
    {
        id: 4022,
        userId: 242,
        createdAt: new Date(),
        neededDay: 'next week',
        neededHour: 12,
        title: 'I can buy pills',
        description: 'I go to the mall at 12 next week',
        adress: 'Ben Gurion 41, Tel Aviv',
        currentStatus: 'new',
        isRequest: false
    },
    {
        id: 40422,
        userId: 222,
        createdAt: new Date(),
        neededDay: 'tomorrow',
        neededHour: 11,
        title: 'Get me some pills',
        description: 'It costs 12$',
        adress: 'Ben Gurion 44, Tel Aviv',
        currentStatus: 'new',
        isRequest: true
    }
]

export default deeds;