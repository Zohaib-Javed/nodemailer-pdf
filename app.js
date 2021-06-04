var Connection = require('tedious').Connection;  
var Request = require('tedious').Request  
var TYPES = require('tedious').TYPES; 

	var config = {  
		server: 'localhost',  //update me
		// trustServerCertificate:false,
		authentication: {
			type: 'default',
			options: {
				userName: 'sa', //update me
				password: 'password-@1A'  //update me
			}
		},
		options: {
				// If you are on Microsoft Azure, you need encryption:
			encrypt: true,
			database: 'TestDB',  //update me
			trustServerCertificate: true
		}
	};  
	var connection = new Connection(config);  
	connection.on('connect', function(err) {  
			// If no error, then good to proceed.
		// console.log("error : ",err)
		console.log("Connected");  
		executeStatement();
	});
	
	connection.connect();

	function executeStatement() {  
		request = new Request("SELECT * FROM test;", function(err) {  
		if (err) {  
			console.log(err);}  
		});  
		var result = "";  
		request.on('row', function(columns) {  
			columns.forEach(function(column) {  
				if (column.value === null) {  
					console.log('NULL');  
				} else {  
					result+= column.value + " ";  
				}  
			});  
			console.log(result);  
			result ="";  
		});  

		request.on('done', function(rowCount, more) {  
		console.log(rowCount + ' rows returned');  
		});  
		connection.execSql(request);  
}  