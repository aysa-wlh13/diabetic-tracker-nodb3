let tracker = [
    {
        id: 0,
        bloodSugar: 70,
        food: 'juice',
        grams: 12,
        units:'',
        time: '12:00',
        timeDay: 'am',
        date: '11/18/19'
    },
    {
        id: 1,
        bloodSugar: 200,
        food: '',
        grams: '',
        units: 4,
        time: '4:00',
        timeDay: 'pm',
        date: '11/18/19'
    },   
    {
        id: 2,
        bloodSugar: 150,
        food: 'mashed potato',
        grams: 59,
        units: 8,
        time: '6:00',
        timeDay: 'pm',
        date: '11/18/19'
    }
];


module.exports = {
    //get
    allTracker(req, res){
        res.status(200).send(tracker);
    },

    //post
    addTracker(req, res){
        tracker.push(req.body)

        res.status(200).send(tracker);
    },

    //delete
    deleteTracker(req, res){
        const {index} = req.params;

        tracker.splice(index, 1);

        res.status(200).send(tracker);
    },

    //put
    editTracker(req, res){
        console.log('hit update', req.body)

        let {id} = req.params

        let index = tracker.findIndex(element => +id === element.id)

        console.log(index)

        if (index === -1) res.status(404).send('Could not find a matching tracker')

        tracker[index] = req.body

        res.status(200).send(tracker);

    }
};

// updateCompletion: (req, res) => {
//     console.log('hit update', req.params)
//     let { id } = req.params
//     //could instead refer to req.params.id everywhere
//     let index = data.findIndex(element => +id === element.id)

//     if (index === -1) res.status(404).send('Could not find a matching todo')

//     data[index].completed = !data[index].completed
//     res.status(200).send(data)
// }