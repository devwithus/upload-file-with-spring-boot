$(document).ready(function () {
	
	$("#uploadfile").submit(function(event) {
	    $.ajax({
	        type: 'POST',
	        enctype: 'multipart/form-data',
	        url: '/api/uploadfile',
	        data: new FormData(this),
	        contentType: false,
	        cache: false,
	        processData:false,
	        success: function(response){
	        	$("#uploadresult").html("<li><p>"+response.fileName+"<i><a href='"+response.fileUrl+"'>"+response.fileUrl+"</a></i></p><span></span></li>");
	        },
			error: function (error) {
				console.log(error);
			}
	    });
	    event.preventDefault();
	});
	
	$("#uploadmultiple").submit(function(event) {
	    $.ajax({
	        type: 'POST',
	        enctype: 'multipart/form-data',
	        url: '/api/uploadfiles',
	        data: new FormData(this),
	        contentType: false,
	        cache: false,
	        processData:false,
	        success: function(response){
	        	let content  = '';
	        	$.each(response, function( i, v ) {
	        		content += "<li><p>"+v.fileName+"<i><a href='"+v.fileUrl+"'>"+v.fileUrl+"</a></i></p><span></span></li>";
	        	});
	        	$("#uploadresult").html(content);
	        },
			error: function (error) {
				console.log(error);
			}
	    });
	    event.preventDefault();
	});
});