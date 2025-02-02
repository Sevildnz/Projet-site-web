document.getElementById("myForm").addEventListener('submit', verification);

	var mess_alerte = "Veuillez remplir tous les champs du formulaire.";
	var mess_succès = "Formulaire soumis avec succès ! Tu recevras un mail de notre part, BON COURAGE !!";

	function verification(event) {
		event.preventDefault();

    var envoyeur, message, reception;

    if (document.getElementById('réponses')) {
        envoyeur = document.getElementById('réponses').value;
        message = document.getElementById('QCM').value;
        reception = document.getElementById('email').value;
    } else {
        envoyeur = document.getElementById('fname').value;
        message = document.getElementById('message').value;
        reception = document.getElementById('email').value;
    }

  
    if (envoyeur == '' || message == '' || reception == '') {
        alert(mess_alerte);
    } else {
        alert(mess_succès);
    }
}

const flashcards = document.querySelectorAll('.flashcard');


flashcards.forEach(card => {
    card.addEventListener('click', () => {
        
        const answer = card.querySelector('.answer');
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});


const bonnesReponses = {
    q1: [2, 3],
    q2: [3, 4],
    q3: [1, 3, 4],
    q4: [2],
    q5: [1, 3],
    q6: [1, 2],
    q7: [5],
    q8: [4],
    q9: [3],
    q10: [3, 4],
};

// vérifie si la réponse est correcte ou incorrecte
function verifierReponse(event) {
    const checkbox = event.target;
    const feedback = checkbox.nextElementSibling; 
    const questionName = checkbox.name; 
    const correctAnswers = bonnesReponses[questionName];  


    if (checkbox.checked) {
        
        if (correctAnswers.includes(parseInt(checkbox.value))) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect!";
            feedback.style.color = "red";
        }
    } else {
        // Si la case décochée, retire le feedback
        feedback.textContent = "";
    }
}


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', verifierReponse);
});


let timer = 900; // 900 secondes = 15 minutes
let timerInterval;

function startTimer() {
    timerInterval = setInterval(function() {
        let minutes = Math.floor(timer / 60); // Calculer les minutes restantes
        let seconds = timer % 60; 
        document.getElementById('timer').textContent = `Temps restant: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        timer--; // compter le temps restant
        if (timer < 0) {
            clearInterval(timerInterval); 
            alert("Temps écoulé !"); // Afficher un message quand le temps est écoulé
        }
    }, 1000); 
}

startTimer(); 


let currentQuestion = 1;
        const totalQuestions = 10;

        function nextQuestion(current) {
            // Cacher la question actuelle
            document.getElementById('question' + current).style.display = 'none';
            
            currentQuestion++;
            
            if (currentQuestion <= totalQuestions) {
                // Afficher la question suivante
                document.getElementById('question' + currentQuestion).style.display = 'block';
            } else {
                alert("Vous avez terminé le quiz !");
            }
        }

        window.onload = function() {
            document.getElementById('question1').style.display = 'block';
        }
