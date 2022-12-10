import connection from './../configs/connectDB'

let getHomePage = async (req, res, next) => {
  //logic
  // connection.query(
  //     'SELECT * FROM listusers',
  //     function(err, results, fields) {
  //       //console.log(results); // results contains rows returned by server
  //       //console.log(fields); // fields contains extra meta data about results, if available
  //       return res.render('index.ejs', {dataUsers : results});
  //     }
  //   );

  const [rows, fields] = await connection.execute('SELECT * FROM listusers')
  return res.render('index.ejs', { dataUsers: rows });
}

const getDetailPage = async (req, res) => {
  let userId = req.params.userId;
  const [rows] = await connection.execute('SELECT * FROM listusers where id = ?',[userId]);
  console.log("rows", rows)
  res.send(JSON.stringify(rows))
  // const [rows, fields] = await connection.execute('SELECT * FROM listusers')
  // return res.render('index.ejs', { dataUsers: rows });
}

module.exports = {
  getHomePage, getDetailPage
}