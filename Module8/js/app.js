$(function(){

	var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';

		
	$("#search-button").click(function() {


		var txtboxEl = $("#textbox").val();

		if (txtboxEl == "")
		{

			alert('Blank Input Invalid');
		}

		else
		{
			$( "#main" ).animate({width: "460px", opacity: 1, marginTop: "0.3in" }, 900 );
			$.ajax({
			url: server,
			dataType: 'jsonp',
			data: {
				q: txtboxEl,
				apikey: 'pan3ccsp8p4ss2wr538tgvs9'
				},
			success: showMovies
			});
		}

	});

	function showMovies(response) {
		console.log('response', response)
		$('#resultpage').replaceWith('<div id ="resultpage"></div>');
		$('#page').replaceWith('<div id ="page"></div>');


		var movies = response.movies;
		for(var i = 0; i<movies.length; i++) {
			var movie = movies[i];
		
			$('#page').append('<p id = "title">' + movie.title + '</p>');
			$('#page').append('<img src=" ' + movie.posters.thumbnail + '" height = "100px width = "40px"/>');
			
	        if (movie.runtime  == "")
			{
				$('#page').append('<p>' + "<b>Runtime : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#page').append('<p>' + "<b>Runtime : </b> " + movie.runtime + " min" + '</p>');
			}
			if (movie.release_dates.theater == "")
			{
				$('#page').append('<p>' + "<b>Released date : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#page').append('<p>' + "<b>Released date : </b> " + movie.release_dates.theater + '</p>');
			}
			if (movie.mpaa_rating == "")
			{
				$('#page').append('<p>' + "<b>Rated : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#page').append('<p>' + "<b>Rated : </b> " + movie.mpaa_rating + '</p>');
			}
			if (movie.synopsis == "")
			{
				$('#page').append('<p>' + "<b>Movie Info : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#page').append('<p>' + "<b>Movie Info : </b> " + movie.synopsis + '</p>');
			}

			if (movie.critics_consensus == "")
			{
				$('#page').append('<p id = "bottom" >' + "<b>Comments : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#page').append('<p id = "bottom" >' + "<b>Comments : </b> " + movie.critics_consensus + '</p>');
			}

            if (movie.abridged_cast== "")
			{
				$('#page').append('<p>' + "<b>Cast : </b>" + '<em> Not Available </em> </p>');
			}
			else
			{
				$('#page').append('<p>' + "<b>Cast : </b> " + movie.abridged_cast+ '</p>');
			}
            
			$("#txtbox").val("");
		}
	}
});

