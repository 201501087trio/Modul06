function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var q1 = new Question('Pada tahun berapakah Perancis menjadi juara Piala Dunia?',
                          ['1998', '2002', '2006', '2010'],
                          '0');

    var q2 = new Question('Apa sebutan pertandingan antara Barcelona vs Real Madrid?',
                          ['Der Klassiker', 'Derby London', 'Derby Della Madonnina', 'El Clasico'],
                          '3');

    var q3 = new Question('Berapa kali kah Indonesia menajdi runner up piala AFF?',
                          ['2', '6', '4', '5'],
                          '2');

    var q4 = new Question('Apa stadion utama dari negara Indonesia?',
                          ['Gelora Bung Tomo', 'Jakabaring', 'Gelora Bung Karno', 'Pakansari'],
                          '2');

    var q5 = new Question('Club apakah yang selalu dibela Fransesco Totti selama berkarir?',
                          ['Lazio', 'AC Milan', 'As Roma', 'Juventus'],
                          '2');
    var q6 = new Question('Siapa pelatih Arsenal musim 2017/2018?',
                          ['Antonio Conte', 'Jose Mourinho', 'Arsene Wenger', 'Jurgen Klopp'],
                          '2');
    var q7 = new Question('Negara manakah yang menjadi tuan rumah piala dunia 2018?',
                          ['Jerman', 'Inggris', 'Russia', 'Spanyol'],
                          '2');
    var q8 = new Question('Berasal dari negara manakah Thiery Henry dan Zinedine Zidane?',
                          ['Albania', 'Aljazair', 'Mesir', 'Perancis'],
                          '3');
    var q9 = new Question('Apa nama stadion dari club Arsenal?',
                          ['Stamford Bridge', 'Old Trafford', 'Emirates', 'Etihad'],
                          '2');
    var q10 = new Question('Negara manakah yang mendapatkan julukan Gli Azzuri?',
                          ['Bosnia', 'Italy', 'Yunani', 'Skotlandia'],
                          '1');

	var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Game---');
				console.log('');
				console.log('Total pertanyaan di jawab : ' + Jumlah_Pertanyaan);
				console.log('Total jawaban yang salah : ' + Salah_Jawab);
				console.log('Skor akhir Anda : ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};