
		
let Cal = function(divId) {
		this.divId = divId;
		this.DaysOfWeek = [
		'Երկ',
		'Երք',
		'Չրք',
		'Հնգ',
		'ՈՒրբ',
		'Շաբ',
		'Կիր'
		];
		this.Months =['Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 
						'Հունիս', 'Հուլիս', 'Օգոստոս', 'Սեպտեմբեր', 
						'Հոկտեմբեր', 'Նոյեմբեր', 'Դեկտեմբեր'
					];
		var day = new Date();
		this.currMonth = day.getMonth();
		this.currYear = day.getFullYear();
		this.currDay = day.getDate();
};

	Cal.prototype.showCal = function() {
		this.showMonth(this.currYear, this.currMonth);
	};
		Cal.prototype.nextMonth = function() {
			if ( this.currMonth == 11 ) {
			this.currMonth = 0;
			this.currYear = this.currYear + 1;
			}
			else {
			this.currMonth = this.currMonth + 1;
			}
			this.showCal();
		};
 
		Cal.prototype.previousMonth = function() {
			if ( this.currMonth == 0 ) {
			this.currMonth = 11;
			this.currYear = this.currYear - 1;
			}
			else {
			this.currMonth = this.currMonth - 1;
			}
			this.showCal();
		};

		

		Cal.prototype.showMonth = function(y, m) {
			var d = new Date()
			
			firstDayOfMonth = new Date(y, m, 7).getDay()
			lastDateOfMonth =  new Date(y, m+1, 0).getDate()
			lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();

			let  html = '<table>'; //ստեղծում ենք աղյուսակը
				//ստեղծում ենք աղյուսակի մեջ վերնագիր դաշտը որը պարունակում է տվյալ ամսվա անուն ու տարին
				html += `<thead><tr>`;
				html += `<td colspan="7"> ${this.Months[m]} ${y} </td>`; //միավորում ենք նախապես մտածված վանդակների քանակը
				html += `</tr></thead>`; //փակում ենք աղյուսակի առաջի տողը  
				html += '<tr class="days">'; //բացում ենք հաջորդ տողն ու մեջը լցնում ամսվա օրերը ըստ վանդակներ քանակի
					for(var i=0; i < this.DaysOfWeek.length;i++) {
					html += `<td> ${this.DaysOfWeek[i]} </td>`;
					}
				html += '</tr>'; //յուրաքանչյուր վանդակը ստանում ենք ըստ շաբաթվա երկարության, որը հավասար է 7-ի և փակում թեգը
				i=1;
				do {
					let dow = new Date(y, m, i).getDay(); //սկսել նոր տողը երկուշաբթի օրվանից
			
					if ( dow == 1 ) {
						html += '<tr>';
						} else if ( i == 1 ) {  //եթե սկսվող օրը երկուշաբթի չէ, ցույց տալ նախորդ ամսվա վերջի օրերը 
							html += '<tr>';
							let k = lastDayOfLastMonth - firstDayOfMonth+1;
								for(let j=0; j < firstDayOfMonth; j++) {
								html += '<td class="not-current">' + k + '</td>';
								k++;
								}
					};

					let check = new Date();
					let checkY = check.getFullYear();
					let checkM = check.getMonth(); //գտնում ենք այսօրվա օրը և ընդգծում
						if (checkY == this.currYear && checkM == this.currMonth && i == this.currDay) {
							html += `<td class="today">${i}</td>`;
						} else {
							html += `<td class="normal">${i}</td>`;
						}
					
						if ( dow == 0 ) {
							html += '</tr>'; //եթե կիրակի է, անցնում ենք հաջորդ տող փակելով վանդակը 
						} else if ( i == lastDateOfMonth ) {
							var k=1;
							for(dow; dow < 7; dow++) {
							html += '<td class="not-current">' + k + '</td>';
							k++;
							} // եթե ամսվա վերջի օրը կիրակի չէ մնացյալ ազատ վանդակները լցնում ենք հաջորդ ամսվա առաջի օրերով
						}
					i++;
				}while(i <= lastDateOfMonth);

			
			html += '</table>'; // ամբողջը նկարելուց հետո փակում ենք աղյուսակը 
			
			document.getElementById(this.divId).innerHTML = html; // վերը նշված աղյուսակը կցում ենք մեր դիվի մեջ
		};

let calendar = new Cal("divCal");			
	
calendar.showCal();
			
document.getElementById('btnNext').onclick = function() {
	calendar.nextMonth();
}; //նախորդ էջ տեղափոխվելու համար
			
document.getElementById('btnPrev').onclick = function() {
	calendar.previousMonth();
};//հաջորդ էջ տեղափոխելու համարh

 		
			
