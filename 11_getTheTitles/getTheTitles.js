const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

const getTheTitles = function(arr) {
    let res = [];

    for (const obj in arr) {
        console.log(arr[obj]);
        console.log(arr[obj]["title"]);
        res.push(arr[obj]["title"]);   
    }

    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
