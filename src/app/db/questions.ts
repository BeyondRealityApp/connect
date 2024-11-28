export interface Question {
  id: string;
  text: {
    [languageCode: string]: string;
  };
  category: string;
  seen: boolean;
}

export const questions: Question[] = [
  // Reflective Questions (1-10)
  {
    id: "q1",
    text: {
      en: "What moment this past year made you feel most proud of me?",
      es: "¿Qué momento del año pasado te hizo sentir más orgulloso de mí?",
      nl: "Welk moment van het afgelopen jaar maakte je het meest trots op mij?",
    },
    category: "reflective",
    seen: false,
  },
  {
    id: "q2",
    text: {
      en: "Which of my habits that used to annoy you have you grown to love?",
      es: "¿Cuál de mis hábitos que solían molestarte has llegado a amar?",
      nl: "Welke van mijn gewoontes die je eerst irritant vond, ben je gaan waarderen?",
    },
    category: "reflective",
    seen: false,
  },
  {
    id: "q3",
    text: {
      en: "What's your favorite memory of us from the past year?",
      es: "¿Cuál es tu recuerdo favorito de nosotros del año pasado?",
      nl: "Wat is je favoriete herinnering aan ons van het afgelopen jaar?",
    },
    category: "reflective",
    seen: false,
  },
  {
    id: "q4",
    text: {
      en: "How have I changed since we first met?",
      es: "¿Cómo he cambiado desde que nos conocimos?",
      nl: "Hoe ben ik veranderd sinds we elkaar voor het eerst ontmoetten?",
    },
    category: "reflective",
    seen: false,
  },
  {
    id: "q5",
    text: {
      en: "What's something you've learned from me?",
      es: "¿Qué has aprendido de mí?",
      nl: "Wat heb je van mij geleerd?",
    },
    category: "reflective",
    seen: false,
  },
  {
    id: "q6",
    text: {
      en: "What makes you feel most loved by me?",
      es: "¿Qué te hace sentir más amado/a por mí?",
      nl: "Waardoor voel je je het meest geliefd door mij?",
    },
    category: "reflective",
    seen: false,
  },
  {
    id: "q7",
    text: {
      en: "What's the most challenging thing we've overcome together?",
      es: "¿Cuál es la cosa más desafiante que hemos superado juntos?",
      nl: "Wat is het moeilijkste dat we samen hebben overwonnen?",
    },
    category: "reflective",
    seen: false,
  },
  {
    id: "q8",
    text: {
      en: "What's your favorite thing about our relationship that others don't see?",
      es: "¿Qué es lo que más te gusta de nuestra relación que otros no ven?",
      nl: "Wat is je favoriete aspect van onze relatie dat anderen niet zien?",
    },
    category: "reflective",
    seen: false,
  },
  {
    id: "q9",
    text: {
      en: "When did you last feel truly appreciated by me?",
      es: "¿Cuándo fue la última vez que te sentiste verdaderamente apreciado/a por mí?",
      nl: "Wanneer voelde je je voor het laatst echt gewaardeerd door mij?",
    },
    category: "reflective",
    seen: false,
  },
  {
    id: "q10",
    text: {
      en: "What adventure would you like us to experience together?",
      es: "¿Qué aventura te gustaría que experimentáramos juntos?",
      nl: "Welk avontuur zou je graag samen met mij willen beleven?",
    },
    category: "reflective",
    seen: false,
  },

  // Fun & Playful Questions (11-20)
  {
    id: "q11",
    text: {
      en: "If we switched bodies for a day, what would you do first?",
      es: "Si intercambiáramos cuerpos por un día, ¿qué harías primero?",
      nl: "Als we voor een dag van lichaam zouden wisselen, wat zou je dan als eerste doen?",
    },
    category: "fun",
    seen: false,
  },
  {
    id: "q12",
    text: {
      en: "What's the most embarrassing thing you've done in front of me?",
      es: "¿Cuál es la cosa más vergonzosa que has hecho frente a mí?",
      nl: "Wat is het meest gênante dat je ooit voor mij hebt gedaan?",
    },
    category: "fun",
    seen: false,
  },
  {
    id: "q13",
    text: {
      en: "If we were superheroes, what would our powers be?",
      es: "Si fuéramos superhéroes, ¿cuáles serían nuestros poderes?",
      nl: "Als we superhelden waren, wat zouden dan onze krachten zijn?",
    },
    category: "fun",
    seen: false,
  },
  {
    id: "q14",
    text: {
      en: "What's the weirdest dream you've had about me?",
      es: "¿Cuál es el sueño más extraño que has tenido sobre mí?",
      nl: "Wat is de vreemdste droom die je ooit over mij hebt gehad?",
    },
    category: "fun",
    seen: false,
  },
  {
    id: "q15",
    text: {
      en: "If we had our own reality show, what would it be called?",
      es: "Si tuviéramos nuestro propio reality show, ¿cómo se llamaría?",
      nl: "Als we onze eigen realityshow hadden, hoe zou die dan heten?",
    },
    category: "fun",
    seen: false,
  },
  {
    id: "q16",
    text: {
      en: "Which of our inside jokes is your favorite?",
      es: "¿Cuál de nuestras bromas privadas es tu favorita?",
      nl: "Welke van onze inside jokes is je favoriet?",
    },
    category: "fun",
    seen: false,
  },
  {
    id: "q17",
    text: {
      en: "What's the silliest argument we've ever had?",
      es: "¿Cuál ha sido la discusión más tonta que hemos tenido?",
      nl: "Wat is de meest belachelijke ruzie die we ooit hebben gehad?",
    },
    category: "fun",
    seen: false,
  },
  {
    id: "q18",
    text: {
      en: "If we could instantly master one skill together, what would you choose?",
      es: "Si pudiéramos dominar instantáneamente una habilidad juntos, ¿cuál elegirías?",
      nl: "Als we samen direct een vaardigheid perfect zouden kunnen beheersen, welke zou je dan kiezen?",
    },
    category: "fun",
    seen: false,
  },
  {
    id: "q19",
    text: {
      en: "What's your favorite way to be silly with me?",
      es: "¿Cuál es tu forma favorita de hacer tonterías conmigo?",
      nl: "Wat is je favoriete manier om samen met mij gek te doen?",
    },
    category: "fun",
    seen: false,
  },
  {
    id: "q20",
    text: {
      en: "If we were characters in a movie, what genre would it be?",
      es: "Si fuéramos personajes de una película, ¿de qué género sería?",
      nl: "Als we personages in een film waren, welk genre zou het dan zijn?",
    },
    category: "fun",
    seen: false,
  },

  // Future-Oriented Questions (21-30)
  {
    id: "q21",
    text: {
      en: "What's one thing you'd like us to try together this year?",
      es: "¿Qué es algo que te gustaría que intentáramos juntos este año?",
      nl: "Wat zou je dit jaar graag samen met mij willen proberen?",
    },
    category: "future",
    seen: false,
  },
  {
    id: "q22",
    text: {
      en: "How do you envision our retirement years?",
      es: "¿Cómo imaginas nuestros años de jubilación?",
      nl: "Hoe zie je onze pensioenjaren voor je?",
    },
    category: "future",
    seen: false,
  },
  {
    id: "q23",
    text: {
      en: "What tradition would you like to start together?",
      es: "¿Qué tradición te gustaría comenzar juntos?",
      nl: "Welke traditie zou je samen willen beginnen?",
    },
    category: "future",
    seen: false,
  },
  {
    id: "q24",
    text: {
      en: "What's one goal you'd like us to work toward as a couple?",
      es: "¿Cuál es una meta hacia la que te gustaría que trabajáramos como pareja?",
      nl: "Wat is een doel waar je graag samen naartoe zou willen werken?",
    },
    category: "future",
    seen: false,
  },
  {
    id: "q25",
    text: {
      en: "Where should we travel next?",
      es: "¿A dónde deberíamos viajar después?",
      nl: "Waar zouden we hierna naartoe moeten reizen?",
    },
    category: "future",
    seen: false,
  },
  {
    id: "q26",
    text: {
      en: "What skill would you like us to learn together?",
      es: "¿Qué habilidad te gustaría que aprendiéramos juntos?",
      nl: "Welke vaardigheid zou je graag samen willen leren?",
    },
    category: "future",
    seen: false,
  },
  {
    id: "q27",
    text: {
      en: "How can we make our date nights even better?",
      es: "¿Cómo podemos hacer que nuestras citas sean aún mejores?",
      nl: "Hoe kunnen we onze date nights nog beter maken?",
    },
    category: "future",
    seen: false,
  },
  {
    id: "q28",
    text: {
      en: "What's one way we could improve our communication?",
      es: "¿De qué manera podríamos mejorar nuestra comunicación?",
      nl: "Op welke manier kunnen we onze communicatie verbeteren?",
    },
    category: "future",
    seen: false,
  },
  {
    id: "q29",
    text: {
      en: "What's something you'd like to accomplish together in five years?",
      es: "¿Qué te gustaría que logremos juntos en cinco años?",
      nl: "Wat zou je over vijf jaar samen bereikt willen hebben?",
    },
    category: "future",
    seen: false,
  },
  {
    id: "q30",
    text: {
      en: "How can I better support your dreams?",
      es: "¿Cómo puedo apoyar mejor tus sueños?",
      nl: "Hoe kan ik je dromen beter ondersteunen?",
    },
    category: "future",
    seen: false,
  },
  {
    id: "q31",
    text: {
      en: "What fear would you like to overcome with my help?",
      es: "¿Qué miedo te gustaría superar con mi ayuda?",
      nl: "Welke angst zou je met mijn hulp willen overwinnen?",
    },
    category: "deep",
    seen: false,
  },
  {
    id: "q32",
    text: {
      en: "When do you feel most connected to me?",
      es: "¿Cuándo te sientes más conectado/a conmigo?",
      nl: "Wanneer voel je je het meest verbonden met mij?",
    },
    category: "deep",
    seen: false,
  },
  {
    id: "q33",
    text: {
      en: "What's something you've never told me but want to share?",
      es: "¿Qué es algo que nunca me has dicho pero quieres compartir?",
      nl: "Wat is iets dat je me nog nooit hebt verteld maar wel zou willen delen?",
    },
    category: "deep",
    seen: false,
  },
  {
    id: "q34",
    text: {
      en: "How has your definition of love changed since we've been together?",
      es: "¿Cómo ha cambiado tu definición del amor desde que estamos juntos?",
      nl: "Hoe is je definitie van liefde veranderd sinds we samen zijn?",
    },
    category: "deep",
    seen: false,
  },
  {
    id: "q35",
    text: {
      en: "What's the most valuable lesson our relationship has taught you?",
      es: "¿Cuál es la lección más valiosa que te ha enseñado nuestra relación?",
      nl: "Wat is de meest waardevolle les die onze relatie je heeft geleerd?",
    },
    category: "deep",
    seen: false,
  },
  {
    id: "q36",
    text: {
      en: "What part of yourself do you feel I understand the best?",
      es: "¿Qué parte de ti sientes que entiendo mejor?",
      nl: "Welk deel van jezelf voel je dat ik het beste begrijp?",
    },
    category: "deep",
    seen: false,
  },
  {
    id: "q37",
    text: {
      en: "What makes our relationship unique?",
      es: "¿Qué hace única a nuestra relación?",
      nl: "Wat maakt onze relatie uniek?",
    },
    category: "deep",
    seen: false,
  },
  {
    id: "q38",
    text: {
      en: "How have your life goals changed since we've been together?",
      es: "¿Cómo han cambiado tus metas de vida desde que estamos juntos?",
      nl: "Hoe zijn je levensdoelen veranderd sinds we samen zijn?",
    },
    category: "deep",
    seen: false,
  },
  {
    id: "q39",
    text: {
      en: "What's something you're still curious about regarding me?",
      es: "¿Qué es algo sobre mí que todavía te da curiosidad?",
      nl: "Waar ben je nog steeds nieuwsgierig naar wat mij betreft?",
    },
    category: "deep",
    seen: false,
  },
  {
    id: "q40",
    text: {
      en: "What's the most meaningful gift I've ever given you?",
      es: "¿Cuál es el regalo más significativo que te he dado?",
      nl: "Wat is het meest betekenisvolle geschenk dat ik je ooit heb gegeven?",
    },
    category: "deep",
    seen: false,
  },

  // Flirty & Romantic Questions (41-50)
  {
    id: "q41",
    text: {
      en: "What's your favorite physical feature of mine?",
      es: "¿Cuál es tu característica física favorita de mí?",
      nl: "Wat is je favoriete fysieke kenmerk van mij?",
    },
    category: "flirty",
    seen: false,
  },
  {
    id: "q42",
    text: {
      en: "What outfit of mine drives you wild?",
      es: "¿Qué atuendo mío te vuelve loco/a?",
      nl: "Welke outfit van mij maakt je het meest wild?",
    },
    category: "flirty",
    seen: false,
  },
  {
    id: "q43",
    text: {
      en: "What's your favorite romantic memory of us?",
      es: "¿Cuál es tu recuerdo romántico favorito de nosotros?",
      nl: "Wat is je favoriete romantische herinnering aan ons?",
    },
    category: "flirty",
    seen: false,
  },
  {
    id: "q44",
    text: {
      en: "What's something romantic you'd like me to do more often?",
      es: "¿Qué cosa romántica te gustaría que hiciera más a menudo?",
      nl: "Wat is iets romantisch dat je zou willen dat ik vaker doe?",
    },
    category: "flirty",
    seen: false,
  },
  {
    id: "q45",
    text: {
      en: "What's the sexiest non-physical trait I possess?",
      es: "¿Cuál es el rasgo no físico más sexy que poseo?",
      nl: "Wat is mijn meest sexy niet-fysieke eigenschap?",
    },
    category: "flirty",
    seen: false,
  },
  {
    id: "q46",
    text: {
      en: "What's a fantasy you'd like to share with me?",
      es: "¿Qué fantasía te gustaría compartir conmigo?",
      nl: "Welke fantasie zou je met mij willen delen?",
    },
    category: "flirty",
    seen: false,
  },
  {
    id: "q47",
    text: {
      en: "When did you feel most attracted to me recently?",
      es: "¿Cuándo te sentiste más atraído/a hacia mí recientemente?",
      nl: "Wanneer voelde je je recent het meest aangetrokken tot mij?",
    },
    category: "flirty",
    seen: false,
  },
  {
    id: "q48",
    text: {
      en: "What's your favorite way to be seduced?",
      es: "¿Cuál es tu forma favorita de ser seducido/a?",
      nl: "Wat is je favoriete manier om verleid te worden?",
    },
    category: "flirty",
    seen: false,
  },
  {
    id: "q49",
    text: {
      en: "What's the most memorable intimate moment we've shared?",
      es: "¿Cuál es el momento íntimo más memorable que hemos compartido?",
      nl: "Wat is het meest memorabele intieme moment dat we hebben gedeeld?",
    },
    category: "flirty",
    seen: false,
  },
  {
    id: "q50",
    text: {
      en: "What's something new you'd like to try in the bedroom?",
      es: "¿Qué cosa nueva te gustaría probar en la habitación?",
      nl: "Wat zou je graag nieuw willen proberen in de slaapkamer?",
    },
    category: "flirty",
    seen: false,
  },

  // Growth & Understanding Questions (51-60)
  {
    id: "q51",
    text: {
      en: "How can I make you feel more appreciated?",
      es: "¿Cómo puedo hacerte sentir más apreciado/a?",
      nl: "Hoe kan ik je meer gewaardeerd laten voelen?",
    },
    category: "growth",
    seen: false,
  },
  {
    id: "q52",
    text: {
      en: "What's one thing you wish I knew about you?",
      es: "¿Qué es algo que desearías que supiera sobre ti?",
      nl: "Wat is iets dat je zou willen dat ik over je wist?",
    },
    category: "growth",
    seen: false,
  },
  {
    id: "q53",
    text: {
      en: "How do you prefer to receive affection?",
      es: "¿Cómo prefieres recibir afecto?",
      nl: "Hoe ontvang je het liefst affectie?",
    },
    category: "growth",
    seen: false,
  },
  {
    id: "q54",
    text: {
      en: "What makes you feel most secure in our relationship?",
      es: "¿Qué te hace sentir más seguro/a en nuestra relación?",
      nl: "Wat geeft je het meeste gevoel van zekerheid in onze relatie?",
    },
    category: "growth",
    seen: false,
  },
  {
    id: "q55",
    text: {
      en: "What's one way I could be a better partner?",
      es: "¿De qué manera podría ser mejor pareja?",
      nl: "Op welke manier zou ik een betere partner kunnen zijn?",
    },
    category: "growth",
    seen: false,
  },
  {
    id: "q56",
    text: {
      en: "How do you like to be comforted when you're down?",
      es: "¿Cómo te gusta ser consolado/a cuando estás mal?",
      nl: "Hoe wil je getroost worden als je je down voelt?",
    },
    category: "growth",
    seen: false,
  },
  {
    id: "q57",
    text: {
      en: "What's your love language evolved to be?",
      es: "¿En qué se ha convertido tu lenguaje del amor?",
      nl: "Hoe is jouw liefdestaal geëvolueerd?",
    },
    category: "growth",
    seen: false,
  },
  {
    id: "q58",
    text: {
      en: "What's something I do that makes you feel special?",
      es: "¿Qué hago que te hace sentir especial?",
      nl: "Wat doe ik waardoor jij je speciaal voelt?",
    },
    category: "growth",
    seen: false,
  },
  {
    id: "q59",
    text: {
      en: "How can I better support you during stressful times?",
      es: "¿Cómo puedo apoyarte mejor durante momentos estresantes?",
      nl: "Hoe kan ik je beter steunen tijdens stressvolle momenten?",
    },
    category: "growth",
    seen: false,
  },
  {
    id: "q60",
    text: {
      en: "What's one thing you'd like me to work on?",
      es: "¿En qué te gustaría que trabajara?",
      nl: "Wat zou je willen dat ik aan mezelf werk?",
    },
    category: "growth",
    seen: false,
  },
  {
    id: "q61",
    text: {
      en: "What was your first impression of me?",
      es: "¿Cuál fue tu primera impresión de mí?",
      nl: "Wat was je eerste indruk van mij?",
    },
    category: "memory",
    seen: false,
  },
  {
    id: "q62",
    text: {
      en: "What moment made you realize you loved me?",
      es: "¿Qué momento te hizo darte cuenta de que me amabas?",
      nl: "Op welk moment realiseerde je je dat je van me hield?",
    },
    category: "memory",
    seen: false,
  },
  {
    id: "q63",
    text: {
      en: "What's the best date we've ever had?",
      es: "¿Cuál ha sido la mejor cita que hemos tenido?",
      nl: "Wat was onze beste date ooit?",
    },
    category: "memory",
    seen: false,
  },
  {
    id: "q64",
    text: {
      en: "What's your favorite photo of us?",
      es: "¿Cuál es tu foto favorita de nosotros?",
      nl: "Wat is je favoriete foto van ons?",
    },
    category: "memory",
    seen: false,
  },
  {
    id: "q65",
    text: {
      en: "What's the most thoughtful thing I've done for you?",
      es: "¿Cuál es la cosa más considerada que he hecho por ti?",
      nl: "Wat is het meest attente dat ik ooit voor je heb gedaan?",
    },
    category: "memory",
    seen: false,
  },
  {
    id: "q66",
    text: {
      en: "What's your favorite story to tell about us?",
      es: "¿Cuál es tu historia favorita para contar sobre nosotros?",
      nl: "Wat is je favoriete verhaal om over ons te vertellen?",
    },
    category: "memory",
    seen: false,
  },
  {
    id: "q67",
    text: {
      en: "What was the moment you knew I was 'the one'?",
      es: "¿Cuál fue el momento en que supiste que yo era 'el/la indicado/a'?",
      nl: "Op welk moment wist je dat ik 'de ware' was?",
    },
    category: "memory",
    seen: false,
  },
  {
    id: "q68",
    text: {
      en: "What's your favorite memory of our wedding day?",
      es: "¿Cuál es tu recuerdo favorito de nuestra boda?",
      nl: "Wat is je favoriete herinnering aan onze trouwdag?",
    },
    category: "memory",
    seen: false,
  },
  {
    id: "q69",
    text: {
      en: "What's the most adventurous thing we've done together?",
      es: "¿Qué es lo más aventurero que hemos hecho juntos?",
      nl: "Wat is het meest avontuurlijke dat we samen hebben gedaan?",
    },
    category: "memory",
    seen: false,
  },
  {
    id: "q70",
    text: {
      en: "What's your favorite vacation memory with me?",
      es: "¿Cuál es tu recuerdo favorito de vacaciones conmigo?",
      nl: "Wat is je favoriete vakantiehherinnering met mij?",
    },
    category: "memory",
    seen: false,
  },

  // Hypothetical Questions (71-80)
  {
    id: "q71",
    text: {
      en: "If we could switch careers for a day, would you want to?",
      es: "Si pudiéramos intercambiar carreras por un día, ¿querrías hacerlo?",
      nl: "Als we voor een dag van carrière konden wisselen, zou je dat willen?",
    },
    category: "hypothetical",
    seen: false,
  },
  {
    id: "q72",
    text: {
      en: "What famous couple would you compare us to?",
      es: "¿Con qué pareja famosa nos compararías?",
      nl: "Met welk beroemd koppel zou je ons vergelijken?",
    },
    category: "hypothetical",
    seen: false,
  },
  {
    id: "q73",
    text: {
      en: "If we had a time machine, which moment of our relationship would you revisit?",
      es: "Si tuviéramos una máquina del tiempo, ¿qué momento de nuestra relación volverías a visitar?",
      nl: "Als we een tijdmachine hadden, welk moment van onze relatie zou je dan opnieuw willen beleven?",
    },
    category: "hypothetical",
    seen: false,
  },
  {
    id: "q74",
    text: {
      en: "If we could live anywhere in the world together, where would you choose?",
      es: "Si pudiéramos vivir juntos en cualquier lugar del mundo, ¿dónde elegirías?",
      nl: "Als we samen overal ter wereld konden wonen, waar zou je dan kiezen?",
    },
    category: "hypothetical",
    seen: false,
  },
  {
    id: "q75",
    text: {
      en: "What would be the title of our love story?",
      es: "¿Cuál sería el título de nuestra historia de amor?",
      nl: "Wat zou de titel van ons liefdesverhaal zijn?",
    },
    category: "hypothetical",
    seen: false,
  },
  {
    id: "q76",
    text: {
      en: "If we started a business together, what would it be?",
      es: "Si empezáramos un negocio juntos, ¿qué sería?",
      nl: "Als we samen een bedrijf zouden beginnen, wat zou het dan zijn?",
    },
    category: "hypothetical",
    seen: false,
  },
  {
    id: "q77",
    text: {
      en: "What animal couple would best represent us?",
      es: "¿Qué pareja de animales nos representaría mejor?",
      nl: "Welk dierenkoppel zou ons het beste vertegenwoordigen?",
    },
    category: "hypothetical",
    seen: false,
  },
  {
    id: "q78",
    text: {
      en: "If we had unlimited funds for one date, what would you plan?",
      es: "Si tuviéramos fondos ilimitados para una cita, ¿qué planearías?",
      nl: "Als we onbeperkt budget hadden voor één date, wat zou je dan plannen?",
    },
    category: "hypothetical",
    seen: false,
  },
  {
    id: "q79",
    text: {
      en: "If we could master any dance style together, which would you choose?",
      es: "Si pudiéramos dominar cualquier estilo de baile juntos, ¿cuál elegirías?",
      nl: "Als we samen een dansstijl perfect zouden kunnen beheersen, welke zou je dan kiezen?",
    },
    category: "hypothetical",
    seen: false,
  },
  {
    id: "q80",
    text: {
      en: "What would our perfect day together look like?",
      es: "¿Cómo sería nuestro día perfecto juntos?",
      nl: "Hoe zou onze perfecte dag samen eruitzien?",
    },
    category: "hypothetical",
    seen: false,
  },

  // Personal Growth Questions (81-90)
  {
    id: "q81",
    text: {
      en: "What have you learned about yourself through our relationship?",
      es: "¿Qué has aprendido sobre ti mismo/a a través de nuestra relación?",
      nl: "Wat heb je over jezelf geleerd door onze relatie?",
    },
    category: "personal_growth",
    seen: false,
  },
  {
    id: "q82",
    text: {
      en: "How has being with me changed your perspective on life?",
      es: "¿Cómo ha cambiado tu perspectiva de la vida el estar conmigo?",
      nl: "Hoe heeft het samen zijn met mij je kijk op het leven veranderd?",
    },
    category: "personal_growth",
    seen: false,
  },
  {
    id: "q83",
    text: {
      en: "What's something you're proud of achieving with my support?",
      es: "¿De qué logro estás orgulloso/a de haber alcanzado con mi apoyo?",
      nl: "Op welke prestatie ben je trots die je met mijn steun hebt bereikt?",
    },
    category: "personal_growth",
    seen: false,
  },
  {
    id: "q84",
    text: {
      en: "What's a fear you've overcome because of our relationship?",
      es: "¿Qué miedo has superado gracias a nuestra relación?",
      nl: "Welke angst heb je overwonnen dankzij onze relatie?",
    },
    category: "personal_growth",
    seen: false,
  },
  {
    id: "q85",
    text: {
      en: "How has our relationship made you a better person?",
      es: "¿Cómo te ha hecho nuestra relación una mejor persona?",
      nl: "Hoe heeft onze relatie je een beter mens gemaakt?",
    },
    category: "personal_growth",
    seen: false,
  },
  {
    id: "q86",
    text: {
      en: "What's something you'd like us to work on together?",
      es: "¿En qué te gustaría que trabajáramos juntos?",
      nl: "Waar zou je graag samen aan willen werken?",
    },
    category: "personal_growth",
    seen: false,
  },
  {
    id: "q87",
    text: {
      en: "What's a habit you've developed because of me?",
      es: "¿Qué hábito has desarrollado gracias a mí?",
      nl: "Welke gewoonte heb je ontwikkeld dankzij mij?",
    },
    category: "personal_growth",
    seen: false,
  },
  {
    id: "q88",
    text: {
      en: "How has our relationship influenced your goals?",
      es: "¿Cómo ha influido nuestra relación en tus metas?",
      nl: "Hoe heeft onze relatie je doelen beïnvloed?",
    },
    category: "personal_growth",
    seen: false,
  },
  {
    id: "q89",
    text: {
      en: "What's something you've taught me?",
      es: "¿Qué es algo que me has enseñado?",
      nl: "Wat heb je mij geleerd?",
    },
    category: "personal_growth",
    seen: false,
  },
  {
    id: "q90",
    text: {
      en: "What's something we've helped each other overcome?",
      es: "¿Qué es algo que nos hemos ayudado mutuamente a superar?",
      nl: "Wat hebben we elkaar geholpen te overwinnen?",
    },
    category: "personal_growth",
    seen: false,
  },
  {
    id: "q91",
    text: {
      en: "When do you feel most emotionally connected to me?",
      es: "¿Cuándo te sientes más conectado/a emocionalmente conmigo?",
      nl: "Wanneer voel je je emotioneel het meest verbonden met mij?",
    },
    category: "intimate",
    seen: false,
  },
  {
    id: "q92",
    text: {
      en: "What's something that always turns you on?",
      es: "¿Qué es algo que siempre te excita?",
      nl: "Wat is iets dat je altijd opwindt?",
    },
    category: "intimate",
    seen: false,
  },
  {
    id: "q93",
    text: {
      en: "What's your favorite way to show me affection?",
      es: "¿Cuál es tu forma favorita de mostrarme afecto?",
      nl: "Wat is je favoriete manier om mij affectie te tonen?",
    },
    category: "intimate",
    seen: false,
  },
  {
    id: "q94",
    text: {
      en: "What's something intimate you'd like to explore together?",
      es: "¿Qué es algo íntimo que te gustaría explorar juntos?",
      nl: "Wat is iets intiems dat je samen zou willen verkennen?",
    },
    category: "intimate",
    seen: false,
  },
  {
    id: "q95",
    text: {
      en: "What makes you feel most desired?",
      es: "¿Qué te hace sentir más deseado/a?",
      nl: "Waardoor voel je je het meest begeerd?",
    },
    category: "intimate",
    seen: false,
  },
  {
    id: "q96",
    text: {
      en: "What's your favorite form of foreplay?",
      es: "¿Cuál es tu forma favorita de preliminares?",
      nl: "Wat is je favoriete vorm van voorspel?",
    },
    category: "intimate",
    seen: false,
  },
  {
    id: "q97",
    text: {
      en: "What's something that makes you feel instantly closer to me?",
      es: "¿Qué es algo que te hace sentir instantáneamente más cercano/a a mí?",
      nl: "Wat is iets waardoor je je direct dichter bij mij voelt?",
    },
    category: "intimate",
    seen: false,
  },
  {
    id: "q98",
    text: {
      en: "What's a romantic fantasy you'd like to fulfill together?",
      es: "¿Qué fantasía romántica te gustaría cumplir juntos?",
      nl: "Welke romantische fantasie zou je samen willen vervullen?",
    },
    category: "intimate",
    seen: false,
  },
  {
    id: "q99",
    text: {
      en: "What's something that always makes you want to kiss me?",
      es: "¿Qué es algo que siempre te hace querer besarme?",
      nl: "Wat is iets waardoor je me altijd wilt kussen?",
    },
    category: "intimate",
    seen: false,
  },
  {
    id: "q100",
    text: {
      en: "What's your favorite way to end our date nights?",
      es: "¿Cuál es tu forma favorita de terminar nuestras citas nocturnas?",
      nl: "Wat is je favoriete manier om onze date nights te eindigen?",
    },
    category: "intimate",
    seen: false,
  },
];
