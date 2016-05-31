function getMinute(date) {

	var min = date.getMinutes();
	if (min < 10) {

		min = '0' + min;
	}
	return min;
}

function getWeek(date) {

	var week;
	switch (date.getDay()) {
		case 1:
			week = "周一";
			break;
		case 2:
			week = "周二";
			break;
		case 3:
			week = "周三";
			break;
		case 4:
			week = "周四";
			break;
		case 5:
			week = "周五";
			break;
		case 6:
			week = "周六";
			break;
		default:
			week = "周日";
			break;
	}
	return week;
}

function getFirstDay(date) {

	var firstDay = date;
	firstDay.setDate(1);
	return firstDay;
}

function getLastDay(date) {

	var currentMonth = date.getMonth();
	var nextMonth = ++currentMonth;
	var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
	var oneDay = 1000 * 60 * 60 * 24;
	var lastDay = new Date(nextMonthFirstDay - oneDay);
	return lastDay;
}



function getDateCalender(date) {

	var calerDic = new Array();
	var dd = date;
	var lastMonth = new Date(date);
	lastMonth.setMonth(lastMonth.getMonth() - 1);
	
	var firstDay = getFirstDay(dd);
	var lastDay = getLastDay(dd);
	var firstWeek = getWeek(firstDay);
	var lastWeek = getWeek(lastDay);


	var dayArray = new Array(42);

	for (var i = 0; i < 42; i++) {

		var day;
		
		var lastDayNum = firstDay.getDay() - 1;
		if (lastDayNum < 0) {
			
			lastDayNum = 6;
		}
		
		if (i < lastDayNum) {
			day = getLastDay(lastMonth).getDate() - (lastDayNum - i - 1);
			dayArray[i] = {
				'day': day,
				'monthState': 'last'
			};
		} else if (i < lastDayNum + lastDay.getDate()) {

			day = i - lastDayNum + 1;
			dayArray[i] = {
				'day': day,
				'monthState': 'this'
			};
		} else {

			day = i - lastDayNum - lastDay.getDate() + 1;
			dayArray[i] = {
				'day': day,
				'monthState': 'next'
			};
		}
		
		
	}
//	console.log('0==',JSON.stringify(dayArray[0]));
	calerDic.push({
		'year':dd.getFullYear(),
		'month': dd.getMonth() + 1,
		'day': dayArray
	});
	return calerDic;
}



function dateToString(date) {
      			
      			var str = '';
      			str += date.getFullYear() + '-';
      			str += date.getMonth() + 1 + '-';
      			str += date.getDate() + ' ';
      			if (date.getHours() > 12) {
      				
      				str += 'pm ';
      				str += date.getHours() - 12 + ':';
      			}else {
      				
      				str += 'am ';
      				str += date.getHours() + ':';
      				
      			}
      			str += date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      			return str;
      	}