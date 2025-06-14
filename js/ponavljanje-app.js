        // --- Podaci za kviz ---
        const quizData = [
            { question: "Kako se naziva postupanje građana koje je u skladu sa zakonom?", options: ["legalno"], answer: ["legalno", "zakonito", "legalnost"] },
            { question: "Politički komentator jednih tjednih novina odustao je objaviti tekst o problemu korupcije vladajućih zbog straha od gubitka posla. Kako se naziva opisani postupak odustajanja novinara od objave teksta?", options: ["autocenzura"], answer: ["autocenzura", "samo-cenzura"] },
            { question: "Koja se vrsta politike bavi provedbom kurikularne reforme?", options: ["vanjska", "socijalna", "obrazovna"], answer: "obrazovna" },
            { question: "Na koji se način stječe puni politički autoritet?", options: ["legitimnošću i legalnošću", "kandidaturom na izborima", "osnivanjem političke stranke"], answer: "legitimnošću i legalnošću" },
            { question: "Kojoj vrsti političkoga govora pripada govor političara koji se intenzivno koristi stručnom terminologijom?", options: ["ekskluzivni"], answer: ["ekskluzivni", "ekskluzivni govor"] },
            { question: "Indijski narod vjerovao je u iznimne moći i heroizam Mahatme Gandhija te mu se bezrezervno pokoravao. Koji tip vlasti prema Maxu Weberu predstavlja opisana vladavina?", options: ["karizmatska vlast"], answer: ["karizmatska vlast", "karizmatska", "karizmatična"] },
            { question: "Kako se nazivaju aktivnosti koje se provode prije izbora, a kojima političke stranke i kandidati prenose političke poruke biračima kako bi pridobili njihove glasove?", options: ["izborna kampanja"], answer: ["izborna kampanja", "predizborna kampanja", "izborna promidžba"] },
            { question: "Koje je doslovno značenje grčke riječi politeia?", options: ["grad", "država", "zajednica"], answer: "država" },
            { question: "Španjolski predsjednik Francisco Franco preuzeo je vlast državnim udarom 1936. godine te zatim donio zakone na temelju kojih je vladao. Što karakterizira njegovu vlast?", options: ["legalnost uz nedostatak legitimnosti", "legitimnost uz nedostatak legalnosti", "nedostatak i legitimnosti i legalnosti"], answer: "legalnost uz nedostatak legitimnosti" },
            { question: "Koje je ime politologa novoga vijeka čije je glavno djelo Vladar, a koji politiku tumači kao vještinu upravljanja državom?", options: ["Niccolò Machiavelli"], answer: ["Niccolò Machiavelli", "Nicollo Machiavelli", "Makjaveli", "Nikolo Makjaveli", "N. Machiavelli"] },
            { question: "Većina je građana u Narodnoj Republici Kini politički pasivna i ne osjeća se povezano s političkim sustavom te smatra da jedino država odlučuje o svemu. Koji tip političke kulture opisuje navedeni primjer?", options: ["podanička politička kultura"], answer: ["podanička politička kultura", "podanička", "podanička kultura"] },
            { question: "Kako se prema Maxu Weberu naziva tip vlasti britanske kraljice Elizabete II.?", options: ["tradicionalna vlast"], answer: ["tradicionalna vlast", "tradicionalna"] },
            { question: "Kako se naziva zabrana prikazivanja televizijskoga sadržaja za koji je vladajuća politička stranka procijenila da narušava njezin ugled?", options: ["cenzura"], answer: ["cenzura"] },
            { question: "Koja je od navedenih aktivnosti primjer političkoga djelovanja?", options: ["Turistička zajednica lobira za uređenje naselja.", "Svećenik skuplja milodar za uređenje crkve.", "Vatrogasci čiste odvodne kanale naselja."], answer: "Turistička zajednica lobira za uređenje naselja." },
            { question: "Ekološka udruga potpisima građana nastoji spriječiti općinsku odluku o izgradnji odlagališta velikoga otpada. Kako se naziva dokument koji građani potpisuju?", options: ["peticija", "konvencija", "interpelacija"], answer: "peticija" },
            { question: "Kako se naziva znanost koja proučava procese nadmetanja i borbe za vlast u državi te djelovanje i učinkovitost državnih institucija i nevladinih organizacija?", options: ["politologija"], answer: ["politologija", "politološka znanost"] },
            { question: "Koji tip vlasti prema Maxu Weberu temelji svoj legitimitet na vjerovanju u iznimne i nadnaravne osobine vođe?", options: ["karizmatska vlast"], answer: ["karizmatska vlast", "karizmatska", "karizmatična"] },
            { question: "Kako se nazivaju interesne organizacije radnika koje kolektivnim pregovaranjem s vladom i poslodavcima osiguravaju zaštitu prava radnika u državi?", options: ["sindikati"], answer: ["sindikati", "sindikat"] },
            { question: "Kako se naziva društveni pokret koji se zalaže za unapređenje položaja žena, uklanjanje spolne diskriminacije te promicanje rodne jednakosti?", options: ["feminizam"], answer: ["feminizam", "feministički pokret"] },
            { question: "Koja od navedenih organizacija usmjerava svoje djelovanje prvenstveno na osvajanje vlasti?", options: ["sindikat radnika", "politička stranka radnika", "udruga nezaposlenih radnika"], answer: "politička stranka radnika" },
            { question: "Kako se naziva tip vlasti koja zasniva svoju legitimnost prije svega na poštivanju običaja koji se prenose generacijama te na nasljednome pravu?", options: ["karizmatska vlast", "tradicionalna vlast", "racionalno-legalna vlast"], answer: "tradicionalna vlast" },
            { question: "Kojim se političkim govorom koriste politički akteri u profesionalnome žargonu, a koji nije u redovitoj upotrebi u široj javnosti?", options: ["totalitarnim", "ekskluzivnim", "demokratskim"], answer: "ekskluzivnim" },
            { question: "Kako se naziva oblik nasilnoga političkog djelovanja kojemu je cilj uništenje svih pripadnika jedne etničke skupine?", options: ["genocid", "preseljenje", "protjerivanje"], answer: "genocid" },
            { question: "Kako se u politici nazivaju pojedinci koji raspolažu važnim informacijama te ih dostavljaju medijima iz uvjerenja da javnost treba biti upoznata sa zloupotrebama koje poduzimaju političke elite?", options: ["zviždači"], answer: ["zviždači", "zviždač"] },
            { question: "Kako se naziva stručnjak koji je kao plačeni aktivist uključen u politički proces te svojim aktivnostima želi utjecati na političke odluke u korist skupine koju zastupa?", options: ["lobist"], answer: ["lobist", "lobisti"] },
            { question: "Prosvjedovanje građana ispred središnje banke oblik je političkoga djelovanja.", options: ["Točno", "Netočno"], answer: "Točno" },
            { question: "Za političko djelovanje lokalne udruge potrebna je suglasnost gradonačelnika.", options: ["Točno", "Netočno"], answer: "Netočno" },
            { question: "Kako se naziva mogućnost pojedinca da nametne svoju volju drugima usprkos njihovu otporu?", options: ["moć", "karizma", "autoritet"], answer: "moć" },
            { question: "Kako se naziva politički govor u kojemu govornik naglašava važnost izrečene poruke ponavljanjem važnih riječi i rečenica?", options: ["emotivan", "iterativan", "koherentan"], answer: "iterativan" },
            { question: "Javna politika kojom se uređuju vrste, trajanje i način organiziranja srednjih škola u Republici Hrvatskoj naziva se politika.", options: ["obrazovna"], answer: ["obrazovna", "obrazovna politika", "prosvjetna", "prosvjetna politika"] },
            { question: "Legitimna vlast osobe kojoj podanici bezrezervno vjeruju i spremni su je slijediti zbog uvjerenja u njezine iznimne osobine i sposobnosti Max Weber naziva vlast.", options: ["karizmatska vlast"], answer: ["karizmatska vlast", "karizmatska"] },
            { question: "Prema Ustavu Republike Hrvatske svi zaposleni imaju pravo osnivati sindikate te slobodno u njih stupati i iz njih istupati radi zaštite svojih socijalnih i ______________ interesa.", options: ["gospodarskih"], answer: ["gospodarskih", "ekonomskih"] },
            { question: "Demokratski izabrano gradsko vijeće donijelo je odluku o izgradnji odlagališta opasnoga otpada. S tom se odlukom slaže većina građana toga grada te se zato ta odluka može smatrati legitimnom.", options: ["Točno", "Netočno"], answer: "Točno" },
            { question: "Kada organizacija civilnoga društva provodi strategiju koju je usvojila Vlada Republike Hrvatske, ona djeluje kao vladina organizacija.", options: ["Točno", "Netočno"], answer: "Netočno" },
            { question: "Politički dužnosnik u svojemu govoru ističe pojedine nacionalne manjine kao nepoželjne u hrvatskome društvu. Ustav Republike Hrvatske dopušta takvo djelovanje kao izraz slobode političkoga izražavanja.", options: ["Točno", "Netočno"], answer: "Netočno" },
            { question: "Kojoj je vrsti političke kulture svojstven visoki stupanj opće političke kompetencije građana?", options: ["podaničkoj", "parohijalnoj", "participativnoj"], answer: "participativnoj" },
            { question: "Kako se naziva sposobnost pojedinca ili skupine da nametne svoju volju drugima usprkos njihovu otporu?", options: ["moć", "karizma", "autoritet"], answer: "moć" },
            { question: "Djelatnost upravljanja državom i poslovima od općega interesa za veliki broj ljudi naziva se", options: ["politika"], answer: ["politika"] },
            { question: "Max Weber vlast koja crpi svoju legitimnost iz vjere podanika u iznimne sposobnosti njihova vođe naziva", options: ["karizmatska vlast"], answer: ["karizmatska vlast", "karizmatska", "karizmatična"] },
            { question: "Kako se naziva vrsta političkoga govora u kojemu govornik upotrebljava duge rečenice i usmjerava slušatelja na teme kojima želi umanjiti učinak ranije izrečenoga?", options: ["ekstenzivni politički govor"], answer: ["ekstenzivni politički govor", "ekstenzivni govor", "ekstenzivni"] },
            { question: "Interesne skupine djeluju putem masovnih kampanja kako bi osvojile političku vlast.", options: ["Točno", "Netočno"], answer: "Netočno" },
            { question: "Koju vlast građani prihvaćaju zato što se ta vlast drži uvriježenih procedura, starih običaja i ustaljenih vrijednosti?", options: ["karizmatsku", "tradicionalnu", "racionalno-legalnu"], answer: "tradicionalnu" },
            { question: "Koju vrstu političkoga govora odlikuje upotreba dugih rečenica i pozivanje na sporedne teme kako bi se sugovornika udaljilo od osnovne teme?", options: ["emotivni govor", "koherentni govor", "ekstenzivni govor"], answer: "ekstenzivni govor" }
        ];

        // --- Elementi DOM-a ---
        const startScreen = document.getElementById('start-screen');
        const questionScreen = document.getElementById('question-screen');
        const endScreen = document.getElementById('end-screen');
        
        const startBtn = document.getElementById('start-btn');
        const nextBtn = document.getElementById('next-btn');
        const restartBtn = document.getElementById('restart-btn');
        
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const feedbackText = document.getElementById('feedback-text');
        
        const scoreDisplay = document.getElementById('score');
        const questionCounter = document.getElementById('question-counter');
        const finalScore = document.getElementById('final-score');
        const progressBar = document.getElementById('progress-bar');

        // --- Stanje kviza ---
        let shuffledQuestions = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let answered = false;

        // --- Funkcije ---

        // Miješanje pitanja (Fisher-Yates algoritam)
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Započinjanje kviza
        function startQuiz() {
            startScreen.classList.add('hidden');
            endScreen.classList.add('hidden');
            questionScreen.classList.remove('hidden');

            shuffledQuestions = [...quizData];
            shuffleArray(shuffledQuestions);
            currentQuestionIndex = 0;
            score = 0;
            answered = false;
            
            updateScoreDisplay();
            showQuestion();
        }

        // Prikazivanje pitanja
        function showQuestion() {
            resetState();
            const currentQuestion = shuffledQuestions[currentQuestionIndex];
            
            questionText.textContent = currentQuestion.question;
            questionCounter.textContent = `Pitanje ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
            
            if (currentQuestion.options.length === 1) {
                // Short-answer question
                const input = document.createElement('input');
                input.type = 'text';
                input.classList.add('w-full', 'p-4', 'bg-slate-100', 'rounded-lg', 'border', 'border-slate-200', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-600');
                input.placeholder = 'Unesite odgovor';
                const button = document.createElement('button');
                button.textContent = 'Provjeri';
                button.classList.add('btn-option', 'w-full', 'mt-4', 'p-4', 'bg-blue-600', 'text-white', 'rounded-lg', 'hover:bg-blue-700');
                button.addEventListener('click', () => selectAnswer(button, input.value));
                optionsContainer.appendChild(input);
                optionsContainer.appendChild(button);
            } else {
                // Multiple-choice or true/false question
                const shuffledOptions = [...currentQuestion.options];
                if (shuffledOptions.length > 1) {
                    shuffleArray(shuffledOptions);
                }

                shuffledOptions.forEach(option => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.classList.add('btn-option', 'w-full', 'text-left', 'p-4', 'bg-slate-100', 'rounded-lg', 'border', 'border-slate-200', 'hover:bg-slate-200');
                    button.addEventListener('click', () => selectAnswer(button, option));
                    optionsContainer.appendChild(button);
                });
            }

            updateProgressBar();
        }

        // Resetiranje stanja prije novog pitanja
        function resetState() {
            optionsContainer.innerHTML = '';
            feedbackText.textContent = '';
            feedbackText.classList.remove('text-green-600', 'text-red-600');
            nextBtn.classList.add('hidden');
            answered = false;
        }

        // Odabir odgovora
        function selectAnswer(selectedButton, selectedOption) {
            if (answered) return;
            answered = true;

            const currentQuestion = shuffledQuestions[currentQuestionIndex];
            let isCorrect;

            if (currentQuestion.options.length === 1) {
                // Short-answer question
                isCorrect = Array.isArray(currentQuestion.answer) && currentQuestion.answer.some(ans => 
                    selectedOption.trim().toLowerCase() === ans.trim().toLowerCase()
                );
                selectedButton.disabled = true;
            } else {
                // Multiple-choice or true/false question
                isCorrect = selectedOption === currentQuestion.answer;
                Array.from(optionsContainer.children).forEach(button => {
                    button.disabled = true;
                    if (button.textContent === currentQuestion.answer) {
                        button.classList.add('correct');
                    }
                });
            }

            if (isCorrect) {
                score++;
                if (currentQuestion.options.length === 1) {
                    selectedButton.classList.add('correct');
                } else {
                    selectedButton.classList.add('correct');
                }
                feedbackText.textContent = "Točno!";
                feedbackText.classList.add('text-green-600');
            } else {
                if (currentQuestion.options.length === 1) {
                    selectedButton.classList.add('incorrect');
                } else {
                    selectedButton.classList.add('incorrect');
                }
                const displayAnswer = Array.isArray(currentQuestion.answer) ? currentQuestion.answer[0] : currentQuestion.answer;
                feedbackText.textContent = `Netočno. Točan odgovor je: ${displayAnswer}`;
                feedbackText.classList.add('text-red-600');
            }

            updateScoreDisplay();
            nextBtn.classList.remove('hidden');
        }
        
        // Prikaz sljedećeg pitanja
        function showNextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < shuffledQuestions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        }
        
        // Završetak kviza
        function endQuiz() {
            questionScreen.classList.add('hidden');
            endScreen.classList.remove('hidden');
            const percentage = Math.round((score / shuffledQuestions.length) * 100);
            finalScore.textContent = `Vaš rezultat: ${score} od ${shuffledQuestions.length} točnih odgovora (${percentage}%).`;
        }

        // Ažuriranje prikaza bodova
        function updateScoreDisplay() {
            scoreDisplay.textContent = `Bodovi: ${score}`;
        }
        
        // Ažuriranje trake napretka
        function updateProgressBar() {
            const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
            progressBar.style.width = `${progress}%`;
        }

        // --- Event Listeneri ---
        startBtn.addEventListener('click', startQuiz);
        nextBtn.addEventListener('click', showNextQuestion);
        restartBtn.addEventListener('click', startQuiz);