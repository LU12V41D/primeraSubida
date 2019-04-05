const MySql = require('mysql');

const conection = MySql.createConnection({
    host: 'codefactory.csjlxu0l1egp.us-east-2.rds.amazonaws.com',
    user: 'desarrollo',
    password: 'C0d3F4ct0r1',
    database: 'db_codefactory',
    multipleStatements: true
})

conection.connect((err) =>{
    if(err){
        console.log('Conection error');

    }else{
        console.log('Successful conection');
    }
})