// Grip & GriGri – Lerninhalte für Toprope- und Vorstiegschein (DAV)
// Quellen: offizielles DAV-Prüfungsprotokoll, DAV Handbuch Sportklettern / Stundenbilder,
// eigene Grip & GriGri Wissensbasis.

const CONTENT = {
  toprope: {
    key: "toprope",
    title: "Toprope-Schein",
    subtitle: "Sicherungstechnik, Knoten & Kletterregeln",
    emoji: "🧗‍♀️",

    kletterregeln: [
      "Partnercheck vor jedem Start",
      "Volle Aufmerksamkeit beim Sichern",
      "Sicherungsgerät richtig bedienen",
      "Klare Kommunikation",
      "Kein Toprope an einem einzelnen Karabiner",
      "Sturzraum freihalten",
      "Vorsicht beim Ablassen und Abseilen",
      "Kopf und Körper schützen"
    ],

    checklist: [
      {
        category: "Partnercheck vor jedem Start",
        items: [
          "Gurtverschlüsse korrekt verschlossen",
          "Anseilknoten und Anseilpunkt richtig gewählt",
          "Karabiner und Sicherungsgerät richtig eingehängt",
          "Seilende abgeknotet"
        ]
      },
      {
        category: "Toprope sichern",
        items: [
          "Sicherungsgerät richtig bedient",
          "Gewichtsunterschied Toprope beachtet",
          "In Bodennähe ohne Schlappseil gesichert"
        ]
      },
      {
        category: "Toprope klettern",
        items: [
          "Mindestens zwei Karabiner an der Umlenkung geclippt",
          "Nie zwei Seile in einem Umlenkkarabiner",
          "Pendelgefahr beachtet",
          "Umlenkung nicht überklettert"
        ]
      },
      {
        category: "Kommandos und Ablassen",
        items: [
          "Kommandos „ZU“ und „AB“ verwendet",
          "Erst abgelassen, wenn das Kommando erfolgt ist",
          "Langsam und gleichmäßig abgelassen",
          "Sicherungsgerät korrekt gehandhabt",
          "Auf andere Personen geachtet",
          "Partner sanft am Boden aufgesetzt"
        ]
      },
      {
        category: "Falltest",
        items: [
          "Korrekte Ausführung des Falltests als Sichernder und Fallender"
        ]
      }
    ],

    flashcards: [
      { front: "Was sind die 4 Punkte des Partnerchecks?", back: "1. Gurtverschluss geschlossen 2. Anseilknoten & Anseilpunkt korrekt 3. Sicherungsgerät & Karabiner richtig eingehängt und verriegelt 4. Seilende abgeknotet." },
      { front: "Wie wird der Anseilknoten korrekt gesteckt?", back: "Als doppelter (gesteckter) Achterknoten, parallel geführt, mit mindestens 10 cm Restseil, durch beide vom Hersteller vorgegebenen Anseilschlaufen." },
      { front: "Was macht das Bremshandprinzip aus?", back: "Die Bremshand darf niemals, zu keinem Zeitpunkt, das Bremsseil loslassen – gilt uneingeschränkt, auch bei Halbautomaten wie GriGri, Smart oder Click Up." },
      { front: "Wozu dient der Knoten im Seilende?", back: "Er verhindert, dass das Seil bei zu kurzer Seillänge durch das Sicherungsgerät rutscht (z. B. ein dicker Achtknoten)." },
      { front: "Wie viele Karabiner müssen mindestens an der Umlenkung eingehängt sein?", back: "Mindestens zwei Karabiner." },
      { front: "Was ist beim Einhängen von zwei Seilen in die Umlenkung zu beachten?", back: "Niemals zwei Seile in denselben Umlenkkarabiner einhängen." },
      { front: "Bis zu welchem Punkt wird ohne Schlappseil gesichert?", back: "In Bodennähe, bis etwa zum 3. Haken – extrem aufmerksam und ohne Schlappseil, um einen Bodensturz bei Seildehnung zu verhindern." },
      { front: "Was tun bei großem Gewichtsunterschied zwischen Sicherer und Kletterer?", back: "Zusätzliche Maßnahmen nutzen, z. B. Ohm, Sandsack oder Boden-Fixpunkt." },
      { front: "Welches Kommando gibt der Kletterer, wenn das Seil gestrafft werden soll?", back: "„ZU!“ – der Sicherer zieht straff, blockiert und antwortet mit „IST ZU!“ oder „OK!“." },
      { front: "Welches Kommando gibt der Kletterer vorm Ablassen?", back: "„AB!“ – erst danach darf der Sicherer mit dem Ablassen beginnen." },
      { front: "Wie wird korrekt abgelassen?", back: "Langsam, gleichmäßig, kontrolliert, mit permanentem Blickkontakt – Partner wird sanft am Boden aufgesetzt." },
      { front: "Was bedeutet Pendelgefahr beim Toprope-Klettern?", back: "Wird schräg zur Umlenkung geklettert oder gequert, kann der Kletterer bei einem Sturz seitlich anpendeln und gegen die Wand oder Struktur schlagen." },
      { front: "Darf die Umlenkung überklettert werden?", back: "Nein – das Überklettern der Umlenkung ist nicht erlaubt, es besteht erhöhte Sturz- und Ausrissgefahr." },
      { front: "Welche Sicherungsgeräte werden im Text als Halbautomaten genannt?", back: "GriGri, Smart und Click Up." }
    ],

    quiz: [
      {
        q: "Welche vier Dinge prüfst du beim Partnercheck?",
        options: [
          "Schuhe, Chalkbag, Kletterhalle, Wetter",
          "Gurtverschluss, Anseilknoten/-punkt, Sicherungsgerät & Karabiner, Seilende",
          "Nur den Anseilknoten",
          "Nur das Sicherungsgerät"
        ],
        correct: 1,
        explanation: "Der Partnercheck umfasst immer alle vier Punkte: Gurtverschluss, Anseilknoten & Anseilpunkt, Sicherungsgerät & Karabiner (verriegelt!), und den Knoten im Seilende."
      },
      {
        q: "Wie viel Restseil sollte nach dem Anseilknoten mindestens überstehen?",
        options: ["2 cm", "5 cm", "10 cm", "Egal, Hauptsache ein Knoten ist da"],
        correct: 2,
        explanation: "Mindestens 10 cm Restseil nach dem doppelten Achterknoten, damit der Knoten sich nicht öffnen kann."
      },
      {
        q: "Darf die Bremshand beim Sichern kurz das Bremsseil loslassen, um sich zu kratzen?",
        options: ["Ja, kurz ist ok", "Nein, niemals", "Nur bei Halbautomaten erlaubt", "Nur wenn der Kletterer steht"],
        correct: 1,
        explanation: "Das Bremshandprinzip gilt absolut – die Bremshand darf zu keinem Zeitpunkt das Bremsseil loslassen, auch nicht bei GriGri, Smart oder Click Up."
      },
      {
        q: "Wie viele Karabiner müssen an der Umlenkung eingehängt sein?",
        options: ["Einer reicht", "Mindestens zwei", "Drei, immer", "Keiner nötig, das Seil reicht"],
        correct: 1,
        explanation: "Mindestens zwei Karabiner an der Umlenkung – zur Redundanz, falls einer versagt."
      },
      {
        q: "Was ist beim Einhängen von zwei Seilen in eine Umlenkung zu beachten?",
        options: [
          "Beide dürfen in denselben Karabiner",
          "Niemals zwei Seile in denselben Umlenkkarabiner",
          "Nur bei dickeren Seilen problematisch",
          "Spielt keine Rolle"
        ],
        correct: 1,
        explanation: "Zwei Seile im selben Umlenkkarabiner können sich gegenseitig durchscheuern – deshalb niemals zusammen einhängen."
      },
      {
        q: "Bis zu welchem Punkt wird in Bodennähe ohne Schlappseil gesichert?",
        options: ["Bis zum 1. Haken", "Bis zum 3. Haken", "Bis zum letzten Haken", "Schlappseil spielt in Bodennähe keine Rolle"],
        correct: 1,
        explanation: "Bis etwa zum 3. Haken wird extrem aufmerksam und ohne Schlappseil gesichert, um einen Bodensturz zu vermeiden."
      },
      {
        q: "Dein Partner ruft „ZU!“ – was machst du als Sichernde?",
        options: [
          "Sofort ablassen",
          "Seil straff ziehen, blockieren und mit „IST ZU!“ bestätigen",
          "Nichts, das Kommando ist nur für den Kletterer",
          "Karabiner öffnen"
        ],
        correct: 1,
        explanation: "„ZU!“ heißt: Seil straffen und blockieren, dann Rückmeldung geben – erst danach setzt sich der Kletterer ins Seil."
      },
      {
        q: "Wann darfst du mit dem Ablassen beginnen?",
        options: [
          "Sobald der Kletterer oben ist",
          "Erst wenn das Kommando „AB!“ erfolgt ist",
          "Wann immer du willst",
          "Erst wenn er wieder klettert"
        ],
        correct: 1,
        explanation: "Erst nach dem klaren Kommando „AB!“ darf abgelassen werden – langsam, gleichmäßig, mit Blickkontakt."
      },
      {
        q: "Was bewirkt der Knoten im Seilende?",
        options: [
          "Er sieht gut aus",
          "Er verhindert, dass das Seil bei zu kurzer Länge durchrutscht",
          "Er ersetzt den Partnercheck",
          "Er ist nur bei Vorstieg nötig"
        ],
        correct: 1,
        explanation: "Ohne Knoten im Seilende kann das Seil bei zu geringer Länge komplett durch das Sicherungsgerät rutschen – lebensgefährlich."
      },
      {
        q: "Was solltest du bei deutlichem Gewichtsunterschied zwischen dir und deinem Partner tun?",
        options: [
          "Nichts, ist nicht relevant",
          "Zusätzliche Maßnahmen wie Ohm, Sandsack oder Boden-Fixpunkt nutzen",
          "Einfach lockerer sichern",
          "Nur mit dickerem Seil klettern"
        ],
        correct: 1,
        explanation: "Bei großen Gewichtsunterschieden (Sicherer deutlich leichter) braucht es zusätzliche Sicherheitsmaßnahmen, sonst wird der Sichernde hochgezogen."
      },
      {
        q: "Darf die Umlenkung überklettert werden?",
        options: ["Ja, kein Problem", "Nein, das ist nicht erlaubt", "Nur im Vorstieg", "Nur mit Erlaubnis des Trainers"],
        correct: 1,
        explanation: "Die Umlenkung darf nicht überklettert werden – erhöhte Sturzgefahr und Materialbelastung."
      },
      {
        q: "Was gehört laut den Alpenverein-Kletterregeln unbedingt dazu?",
        options: [
          "Sturzraum freihalten und klare Kommunikation",
          "Möglichst schnell klettern",
          "Immer allein klettern",
          "Kein Partnercheck bei erfahrenen Kletterern nötig"
        ],
        correct: 0,
        explanation: "Zu den 8 Kletterregeln zählen u. a. Partnercheck, volle Aufmerksamkeit, klare Kommunikation, freier Sturzraum und Kopf-/Körperschutz."
      }
    ],

    scenarios: [
      {
        situation: "Dein Partner ist fertig mit Gurt anlegen und will direkt losklettern. Was machst du zuerst?",
        options: ["Ich vertraue ihm, er macht das schon", "Ich mache den vollständigen Partnercheck – visuell UND durch Anfassen", "Ich schaue nur kurz auf den Knoten"],
        correct: 1,
        explanation: "Der Partnercheck muss vor jedem Start visuell UND haptisch (anfassen!) durchgeführt werden – ausnahmslos, auch bei erfahrenen Kletterern."
      },
      {
        situation: "Du sicherst mit einem Halbautomaten (z. B. GriGri) und merkst, dein Partner klettert sehr sicher. Darfst du die Bremshand kurz vom Seil nehmen?",
        options: ["Ja, das Gerät blockiert ja automatisch", "Nein, das Bremshandprinzip gilt uneingeschränkt", "Nur wenn er unter dem 3. Haken ist"],
        correct: 1,
        explanation: "Auch Halbautomaten ersetzen nicht die Bremshand – sie muss immer am Bremsseil bleiben, ohne Ausnahme."
      },
      {
        situation: "Dein Partner steigt zum ersten Mal auf die Wand, ist bei Haken 2. Wie sicherst du?",
        options: ["Mit etwas Schlappseil für Bewegungsfreiheit", "Ohne Schlappseil, sehr aufmerksam", "Kann ich locker sehen, bin ja am Boden"],
        correct: 1,
        explanation: "Bis etwa zum 3. Haken wird ohne Schlappseil gesichert – sonst droht bei einem Sturz ein Bodensturz."
      },
      {
        situation: "Du merkst am Umlenker, dass nur ein Karabiner eingehängt ist. Was tust du?",
        options: ["Ist ok, einer hält schon", "Sofort ansprechen und zweiten Karabiner ergänzen lassen", "Einfach weiterklettern, Trainer wird's schon sehen"],
        correct: 1,
        explanation: "Mindestens zwei Karabiner sind an der Umlenkung Pflicht – bei nur einem sofort korrigieren, bevor geklettert wird."
      },
      {
        situation: "Dein Partner hängt oben in der Wand und ruft „AB!“. Was machst du?",
        options: ["Sofort schnell ablassen, damit er nicht warten muss", "Langsam, gleichmäßig ablassen, mit Blickkontakt", "Erst mal nachfragen was AB bedeutet"],
        correct: 1,
        explanation: "Nach dem Kommando „AB!“ wird langsam, gleichmäßig und mit permanentem Blickkontakt abgelassen, bis der Partner sanft aufsetzt."
      }
    ]
  },

  vorstieg: {
    key: "vorstieg",
    title: "Vorstiegschein",
    subtitle: "Klinken, Seilmanagement & Sturztraining",
    emoji: "🔗",

    checklist: [
      {
        category: "Partnercheck vor jedem Start",
        items: [
          "Gurtverschlüsse korrekt verschlossen",
          "Anseilknoten und Anseilpunkt (im Vorstieg zwingend direkt eingebunden)",
          "Karabiner und Sicherungsgerät richtig eingehängt",
          "Seilende abgeknotet"
        ]
      },
      {
        category: "Vorstieg sichern",
        items: [
          "Sicherungsgerät richtig bedient",
          "Gewichtsunterschied Vorstieg beachtet",
          "Gespottet bis zum ersten Haken",
          "Position nach Clippen des ersten Hakens beachtet",
          "Den Partner beobachtet",
          "In Bodennähe kein Schlappseil gegeben",
          "Jenseits der Bodensturzgefahr 20–50 cm Schlappseil gegeben",
          "Das zum Clippen benötigte Seil schnell ausgegeben"
        ]
      },
      {
        category: "Vorstieg klettern",
        items: [
          "Zwischensicherungen aus stabiler Position eingehängt",
          "Zwischensicherungen „unverdreht“ eingehängt",
          "Alle Zwischensicherungen eingehängt",
          "Nicht „hinter“ dem Seil gestanden"
        ]
      }
    ],

    flashcards: [
      { front: "Was ist im Vorstieg beim Anseilknoten zwingend anders als beim Toprope?", back: "Es muss zwingend direkt eingebunden werden – kein Einhängen per Karabiner in die Anseilschlaufe." },
      { front: "Wie lange wird der Kletterer im Vorstieg gespottet?", back: "Bis er den ersten Haken geclippt hat – der Sicherer steht mit fangbereiten Händen bereit." },
      { front: "Wie weit steht der Sicherer von der Wand entfernt?", back: "Ca. 1 bis max. 2 Meter Abstand zum ersten Haken, um bei einem Sturz nicht ruckartig an die Wand gezogen zu werden." },
      { front: "Bis zu welchem Haken wird ohne Schlappseil gesichert?", back: "Bis zum 4. Haken – Bodensturzgefahr!" },
      { front: "Wie viel Schlappseil wird jenseits der Bodensturzgefahr gegeben?", back: "Ein funktionales Schlappseil von ca. 20–50 cm." },
      { front: "Wie müssen die Karabiner der Expressschlingen ausgerichtet sein?", back: "Unverdreht. Wandseitiger Karabiner in die Hakenöse, seilseitiger Karabiner mit Schnapper entgegen der Kletterrichtung." },
      { front: "Was ist ein Z-Clip und warum ist er gefährlich?", back: "Wenn Seil von unterhalb der letzten Expressschlinge hochgezogen und eingeclippt wird. Dadurch entsteht zu viel Seilzug/Schlappseil, was bei Sturz gefährlich ist. Seil muss immer direkt vom Anseilknoten nach oben kommen." },
      { front: "Warum darf das Seil nicht hinter Bein oder Wade verlaufen?", back: "Bei einem Sturz würde die Kletterin kopfüber gedreht und ungebremst mit Rücken/Kopf gegen die Wand schlagen. Das Seil muss immer vor dem Körper verlaufen." },
      { front: "Wie wird bei einem Sturz jenseits der Bodensturzgefahr gesichert?", back: "Dynamisch – der Sicherer springt kontrolliert leicht mit nach oben oder geht einen Schritt mit, um den Sturz weich abzufangen." },
      { front: "Wie geht man beim Sturztraining psychologisch vor?", back: "Schrittweise: erst im Toprope mit Ansage reinsetzen, dann kleine Stürze direkt über dem Haken im Vorstieg." },
      { front: "Wie verhält man sich beim aktiven Stürzen?", back: "Leicht von der Wand abstoßen, Beine leicht gebeugt und breit halten, mit den Füßen abfedern. Hände NICHT ins Seil oder in Expressschlingen greifen." },
      { front: "Was bedeutet 'Klettern am langen Arm'?", back: "Arme gestreckt lassen, Kraft aus den Beinen holen – spart Kraft in den Unterarmen bei langen Routen." }
    ],

    quiz: [
      {
        q: "Wie wird im Vorstieg der Anseilknoten gemacht – anders als beim Toprope?",
        options: ["Genau gleich wie Toprope", "Zwingend direkt eingebunden, kein Karabiner in die Anseilschlaufe", "Egal, Hauptsache Achterknoten", "Gar nicht nötig"],
        correct: 1,
        explanation: "Im Vorstieg wird immer direkt eingebunden – ein Karabiner in der Anseilschlaufe ist hier nicht zulässig."
      },
      {
        q: "Bis wann wird der Kletterer im Vorstieg gespottet?",
        options: ["Bis zum 3. Haken", "Bis er den ersten Haken geclippt hat", "Die ganze Route lang", "Spotten ist im Vorstieg nicht nötig"],
        correct: 1,
        explanation: "Gespottet wird, bis der erste Haken geclippt ist – danach übernimmt die Seilsicherung."
      },
      {
        q: "Wie weit sollte der Sicherer von der Wand entfernt stehen?",
        options: ["Direkt an der Wand", "Ca. 1–2 Meter", "Mindestens 5 Meter", "Egal"],
        correct: 1,
        explanation: "Ca. 1 bis max. 2 Meter Abstand – sonst wird man bei einem Sturz ruckartig an die Wand gezogen."
      },
      {
        q: "Bis zu welchem Haken darf im Vorstieg kein Schlappseil gegeben werden?",
        options: ["1. Haken", "2. Haken", "4. Haken", "Gar nicht relevant"],
        correct: 2,
        explanation: "Bis zum 4. Haken herrscht Bodensturzgefahr – deshalb kein Schlappseil."
      },
      {
        q: "Wie viel Schlappseil ist jenseits der Bodensturzgefahr sinnvoll?",
        options: ["0 cm, nie Schlappseil geben", "20–50 cm", "1–2 Meter", "So viel wie möglich"],
        correct: 1,
        explanation: "Ca. 20–50 cm funktionales Schlappseil ermöglicht flüssiges Klettern, ohne zu viel Sturzstrecke zu erzeugen."
      },
      {
        q: "Wie muss der seilseitige Karabiner am Expressset ausgerichtet sein?",
        options: [
          "Egal wie er hängt",
          "Schnapper entgegen der Kletterrichtung, unverdreht",
          "Schnapper in Kletterrichtung",
          "Verdreht, damit er stabiler hält"
        ],
        correct: 1,
        explanation: "Der Schnapper muss entgegen der Kletterrichtung zeigen und unverdreht hängen, sonst kann sich das Seil selbst aushängen."
      },
      {
        q: "Was ist ein Z-Clip?",
        options: [
          "Eine spezielle Sicherungstechnik",
          "Seil wird von unterhalb der letzten Expressschlinge hochgezogen und eingeclippt",
          "Ein Knoten für den Notfall",
          "Ein Karabinertyp"
        ],
        correct: 1,
        explanation: "Ein Z-Clip entsteht, wenn Seil von unten nachgezogen wird statt direkt vom Anseilknoten – unbedingt vermeiden."
      },
      {
        q: "Warum ist es gefährlich, wenn das Seil hinter dem Bein verläuft?",
        options: [
          "Es sieht unordentlich aus",
          "Bei einem Sturz dreht es die Kletterin kopfüber, ungebremster Aufprall mit Kopf/Rücken",
          "Es bremst beim Klettern",
          "Kein echtes Risiko, nur unbequem"
        ],
        correct: 1,
        explanation: "Läuft das Seil hinter der Wade, dreht ein Sturz die Kletterin kopfüber – hohe Verletzungsgefahr für Kopf und Rücken."
      },
      {
        q: "Wie sichert man dynamisch bei einem Sturz jenseits der Bodensturzgefahr?",
        options: [
          "Steif stehen bleiben und blockieren",
          "Kontrolliert leicht mitspringen oder einen Schritt mitgehen",
          "Sich hinsetzen",
          "Das Seil kurz loslassen"
        ],
        correct: 1,
        explanation: "Dynamisches Sichern federt den Sturz ab und reduziert den Anprall an die Wand."
      },
      {
        q: "Wie trainiert man Sturzangst am sinnvollsten?",
        options: [
          "Direkt mit hohen Stürzen im Vorstieg beginnen",
          "Schrittweise: erst Toprope mit Ansage, dann kleine Stürze im Vorstieg",
          "Gar nicht thematisieren",
          "Nur zusehen, wie andere stürzen"
        ],
        correct: 1,
        explanation: "Sturzangst wird schrittweise abgebaut – erst im Toprope, dann behutsam im Vorstieg."
      },
      {
        q: "Was macht man beim aktiven Stürzen mit den Händen?",
        options: [
          "Ins Seil greifen, um zu bremsen",
          "In die Expressschlingen greifen",
          "Nichts davon – Hände bleiben frei, Füße federn den Aufprall ab",
          "Über den Kopf halten"
        ],
        correct: 2,
        explanation: "Die Hände dürfen niemals ins Seil oder in Expressschlingen greifen – das Abfedern übernehmen die Beine/Füße."
      }
    ],

    scenarios: [
      {
        situation: "Du bist im Vorstieg unterwegs, stehst stabil unter dem 4. Haken, ziehst Seil zum Clippen und merkst, dass das Seil hinter deinem rechten Knie verläuft. Was machst du?",
        options: [
          "Einfach weiterklettern, ist nur kurz so",
          "Stoppen, Seil vor das Bein korrigieren, dann erst weiterklettern",
          "Schnell clippen, bevor es unbequem wird"
        ],
        correct: 1,
        explanation: "Seil hinter dem Bein ist eine der gefährlichsten Situationen im Vorstieg – immer sofort korrigieren, bevor man weiterklettert oder stürzt."
      },
      {
        situation: "Dein Partner hat gerade den ersten Haken geclippt. Was ändert sich für dich als Sichernde?",
        options: [
          "Nichts, ich spotte weiter wie vorher",
          "Ich gehe von der Spot-Position in die reguläre Sicherungsposition über, 1–2m Abstand zur Wand",
          "Ich kann mich jetzt entspannen und muss nicht mehr aufpassen"
        ],
        correct: 1,
        explanation: "Nach dem ersten Clip übernimmt die Seilsicherung die Aufgabe des Spottens – Position anpassen, weiterhin voll konzentriert."
      },
      {
        situation: "Deine Partnerin will beim Clippen Seil von unterhalb der letzten Expressschlinge hochziehen, weil das näher liegt. Ist das ok?",
        options: ["Ja, spart Aufwand", "Nein, das ist ein Z-Clip und gefährlich", "Nur bei kurzen Routen ok"],
        correct: 1,
        explanation: "Das wäre ein Z-Clip. Seil muss immer direkt vom Anseilknoten nach oben zur aktuellen Schlinge gezogen werden."
      },
      {
        situation: "Dein Partner stürzt kurz über dem letzten Haken, jenseits der Bodensturzgefahr. Wie reagierst du als Sichernde?",
        options: [
          "Komplett steif stehen bleiben",
          "Kontrolliert leicht mitspringen, um den Sturz weich abzufedern",
          "Das Seil kurz durchrutschen lassen"
        ],
        correct: 1,
        explanation: "Dynamisches Mitgehen/Mitspringen reduziert den Anprall an die Wand für die kletternde Person."
      },
      {
        situation: "Du merkst, dass ein Expresskarabiner am nächsten Haken verdreht hängt (Schnapper zeigt zur Wand). Was tust du?",
        options: [
          "Einfach einclippen, das Seil hält trotzdem",
          "Vor dem Clippen den Karabiner geraderücken",
          "Den Haken auslassen und den nächsten nehmen"
        ],
        correct: 1,
        explanation: "Ein verdrehter oder falsch ausgerichteter Karabiner kann sich bei einem Sturz selbst aushängen – vorher immer korrigieren."
      }
    ]
  },

  knots: [
    {
      id: "achter",
      name: "Doppelter Achterknoten (Anseilknoten)",
      short: "Der Standard-Anseilknoten – direkt gebunden.",
      steps: [
        "Ca. 1 Meter Seilende abmessen.",
        "Einfachen Achterknoten ca. 40 cm vor dem Ende vorlegen.",
        "Mit dem kurzen Ende durch beide Anseilschlaufen des Gurts fädeln (direkt einbinden).",
        "Den vorgelegten Achter mit dem kurzen Ende exakt nachfahren – parallel, keine Überkreuzungen.",
        "Kontrolle: mind. 10 cm Restseil, Knoten sitzt eng und symmetrisch."
      ]
    },
    {
      id: "achtknoten-seilende",
      name: "Achtknoten im Seilende",
      short: "Verhindert das Durchrutschen durch das Sicherungsgerät.",
      steps: [
        "Ca. 30–50 cm vor dem losen Seilende einen einfachen Achterknoten binden.",
        "Fest zuziehen, sodass ein dicker Knoten entsteht.",
        "Kontrolle: der Knoten ist dick genug, um nicht durch das Sicherungsgerät zu rutschen."
      ]
    },
    {
      id: "hms",
      name: "HMS-Knoten (Halbmastwurf)",
      short: "Backup-Sicherungsmethode ohne Sicherungsgerät.",
      steps: [
        "HMS-Karabiner (birnenförmig) am Anseilring des Gurts einhängen und verriegeln.",
        "Eine Schlaufe ins Bremsseil legen und um den Karabiner legen.",
        "Beide Seilstränge liegen parallel im Karabiner, Verriegelung geschlossen.",
        "Bremshandprinzip gilt hier genauso uneingeschränkt wie mit jedem anderen Sicherungsgerät."
      ]
    }
  ]
};
