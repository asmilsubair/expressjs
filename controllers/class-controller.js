const connection = require('../db/db-connecton');


const showClassForm = (req,res) => {
  
  res.sendFile(__dirname + "/forms/class.html");

}

const saveClass = (req, res)  => {

  res.send('<h1>Save Class</h1>')

// connection.query('INSERT INTO Class values(?,?,?)',[], (err, rows) => {
//     if (err) throw err;
  
//     res.send (rows);
  // })


}

const getClass = (req, res)  => {
  // connection.query('INSERT INTO Student values(?,?,?,?,?)',[-2,"Test","Testfrom",35,1], (err, rows) => {
  //   if (err) throw err;
  
  //   res.send (rows);
  // })

  // connection.query("Select * from Class")
  // res.send('<h1>Show Class Details Page</h1>')

  connection.query('SELECT * FROM Class', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching classes');
    } else {
      res.send(rows);
    }
  });

  
}

const updateClass = (req, res)  => {
    
}

const deleteClass = (req, res)  => {

}

const searchClass = (req, res)  => {

  res.send('<h3>Search Class</h3>')

}

module.exports = {saveClass, getClass, updateClass, deleteClass,searchClass,showClassForm}