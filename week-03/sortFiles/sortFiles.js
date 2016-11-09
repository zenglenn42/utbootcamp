var files = ["pavans_first_birthday.mov",
"owens_asleep_at_the_computer.jpg",
"michael_fights_a_polar_bear.mp4",
"nate_road_rage.avi",
"ruby_skydiving.jpeg",
"ken_getting_his_black_belt.png",
"dan_winning_underground_street_race.mov",
"its_hard_to_come_up_with_file_names.gif",
"seriously_this_is_taking_too_long.mpg",
"i_wonder_how_many_of_these_i_should_have.png",
"probably_a_few_more.avi",
"nutmeg_is_clawing_my_sneakers_again.mp4",
"cat_i_will_destroy_you.gif",
"i_wish_we_had_a_dog.jpeg",
"stop_looking_at_me_like_that_nutmeg.mpeg",
"aww_i_cant_hate_you.png",
"omg_my_sneakers.avi",
"cat_you_are_the_worst.mp4"
];

var imageExt = [".jpg", ".gif", ".jpeg", ".png" ];
var videoExt = [".mov", ".avi", ".mpeg", ".mp4", ".mpg" ];

var images = [];
var videos = [];

for (var j = 0; j < files.length; j++) {
	var sorted = false;
	var str = files[j];
	for (let i = 0; i < imageExt.length; i++) {
		if (str.endsWith(imageExt[i])) {
			images.push(str)
			sorted = true;
			break;
		}
	}
	if (!sorted) {
		for (let i = 0; i < videoExt.length; i++) {
			if (str.endsWith(videoExt[i])) {
				videos.push(str)
				sorted = true;
				break;
			}
		}
	}
	sorted = false;
}
console.log("images", images);
console.log("videos", videos);

/*
Typical output:

images [ 'owens_asleep_at_the_computer.jpg',
  'ruby_skydiving.jpeg',
  'ken_getting_his_black_belt.png',
  'its_hard_to_come_up_with_file_names.gif',
  'i_wonder_how_many_of_these_i_should_have.png',
  'cat_i_will_destroy_you.gif',
  'i_wish_we_had_a_dog.jpeg',
  'aww_i_cant_hate_you.png' ]
  
videos [ 'pavans_first_birthday.mov',
  'michael_fights_a_polar_bear.mp4',
  'nate_road_rage.avi',
  'dan_winning_underground_street_race.mov',
  'seriously_this_is_taking_too_long.mpg',
  'probably_a_few_more.avi',
  'nutmeg_is_clawing_my_sneakers_again.mp4',
  'stop_looking_at_me_like_that_nutmeg.mpeg',
  'omg_my_sneakers.avi',
  'cat_you_are_the_worst.mp4' ]
*/