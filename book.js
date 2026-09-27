/* Beyond the Blueprint — book data */
window.BOOK = window.BOOK || { parts: [] };

window.BOOK.meta = {
  title: "Beyond the Blueprint",
  subtitle: "Factory Wit & Wisdom",
  tagline: "Where elegant theory collides with stubborn equipment, and the people always have the last word.",
  author: "Girish Narain Mishra",
  forewordBy: "Sri V. S. Sastree",
  storyCount: 105,
  partCount: 12,
  foreword: [
    "Factories are often measured by metrics such as capacity and profit, but those who have worked in them know a more profound truth: they are driven by people, not just processes. <em>Beyond the Blueprint — Factory Wit and Wisdom</em> is a distinctive collection of stories that arise during the quiet moments in between — when the machines hum on their own and the people finally have something to say.",
    "These stories come from diverse environments — control rooms, workshops, offices and villages — and underscore the complexities of human behaviour under pressure. They feature engineers with limited field experience, insightful technicians, managers without empathy, and workers who navigate complex systems with resilience and quiet intelligence.",
    "No character here is perfect; instead, each embodies a very human blend of ego, fear, humour and survival. Although the industrial setting is often the backdrop, the lessons are universal — observations on hierarchy, authority, family and common sense that resonate well beyond any one factory gate.",
    "This book does not tell you how factories, offices or villages should run. It simply shows how they actually do. Take your time reading it, smile where you recognise yourself, and reflect on what these small, sharp moments of wit reveal about the larger human condition."
  ],
  authorNote: [
    "Welcome to the world of chemical plants and factory floors — not the neat flow diagrams of textbooks, but the gritty, unpredictable reality where elegant theory collides with stubborn equipment and Murphy's Law reigns supreme. I am Girish Narain Mishra, and I have spent decades in this industry, journeying from operator control rooms to management offices.",
    "Over the years, I have collected more than just experience; I have gathered stories — of mishaps narrowly averted, of egos that reacted like unstable compounds, and of inspired solutions born not from comfort, but from sheer necessity.",
    "This book is a distillation of those moments — drawn from the everyday drama of factory life, village life, and everything in between. Some stories will make you smile; others may strike a nerve of recognition. All of them, I hope, will remind you that behind every blueprint, there is always a person trying their best — and often failing in the most human, most memorable ways."
  ],
  howToRead: [
    "The stories have been grouped into twelve themes. Every story stands entirely on its own — you may read the book cover to cover, or simply open a page at random and enjoy whatever you find there.",
    "Each story closes with a short <em>Moral of the Story</em>, drawn out from the events themselves. Many stories are accompanied by an illustration in the spirit of the great Indian cartoonist R. K. Laxman, capturing the whole tale in a single frame — so that even before reading a word, you already know why someone, somewhere, is about to be in a great deal of trouble."
  ],
  lastWord: "Every factory, every office, every village has its own quiet chronicler — someone who watches, remembers, and eventually tells the story with a smile. This book is one such collection: equal parts memoir, management lesson and mischief, gathered over a lifetime spent among machines and the people who run them. May you find in these pages a little of your own workplace, your own village, and perhaps, your own reflection."
};

/* ---------------- About the author ---------------- */
window.BOOK.author = {
  name: "Girish Narain Mishra",
  role: "Author · Oil & Gas Veteran · Storyteller",
  photo: "assets/img/author.jpg",
  photoCaption: "Girish Narain Mishra with his wife.",
  place: "Jamnagar, Gujarat, India",
  email: "girishnm@gmail.com",
  phone: "+91-9979891597",
  bio: [
    "Girish Narain Mishra spent the better part of his working life inside the oil and gas industry, where the stories in this book were quietly collected — one shift, one shutdown and one unforgettable colleague at a time. His career took him through two of India's largest refining and petrochemical names, <strong>Reliance</strong> and <strong>Nayara</strong>, across control rooms, workshops and management offices.",
    "He completed his graduation in <strong>Gyanpur, Uttar Pradesh</strong>, and today lives in <strong>Jamnagar</strong>, Gujarat, enjoying a retirement spent doing exactly what he loves best. His days are filled with books, long conversations and quiet study — he has a particular love for the <strong>Sanskrit language</strong> and the wisdom held in its texts.",
    "He is deeply devoted to the Hanuman temple near his home, where he spends a part of each day in prayer and service. Faith, for him, is less about ritual and more about conduct: he believes a life is best measured by the kindness shown to others and the good done without expectation.",
    "Above all he is a devoted father and grandfather, happiest when his children and grandchildren are around him — talking, teasing, listening, and adding a few more stories to the collection. Those who meet him usually leave with a joke, a cup of tea, and the feeling that they have known him for years."
  ],
  facts: [
    { k: "Lives in", v: "Jamnagar, Gujarat" },
    { k: "Graduated from", v: "Gyanpur, Uttar Pradesh" },
    { k: "Industry", v: "Oil, Gas & Petrochemicals" },
    { k: "Worked with", v: "Reliance · Nayara" },
    { k: "Loves", v: "Books, Sanskrit, family, seva" }
  ]
};

window.BOOK.parts.push(
{
  n: 1, num: "01", slug: "lost-in-translation",
  title: "Lost in Translation",
  theme: "Communication & Miscommunication",
  blurb: "When a single word, a missed instruction, or an unclear order turns an ordinary day into chaos.",
  image: "assets/img/part-01.jpg",
  stories: [
    {
      title: "The Acidic Echo",
      body: [
        "In a large chemical factory, an operator checked the cooling tower and found the water dangerously alkaline, with a pH of 9.",
        "“Sir, the cooling tower pH is 9 — it's too alkaline,” he reported to his shift in-charge.",
        "Busy with paperwork, the in-charge waved a hand. “Just dose four to five litres of sulfuric acid. Standard practice.”",
        "“Four to five, sir? Could you confirm the exact quantity?” the operator asked, trying to be precise.",
        "“Yes, four to five litres! Go on, now,” the in-charge snapped, slightly irritated.",
        "The operator nodded — but in his mind, “four to five” somehow became “four hundred and twenty-five.” He began preparing a massive dose of 425 litres of acid. Luckily, the plant manager walked by just in time, spotting the alarming setup and averting what would have been a catastrophic accident."
      ],
      moral: "It is the supervisor's responsibility to ensure instructions are clearly understood. Written instructions, wherever possible, are safer than verbal ones — a single misunderstanding can destroy equipment, and in a post-incident enquiry, no one may even be found guilty."
    },
    {
      title: "The Mock Drill That Became Real",
      body: [
        "To test readiness, the plant scheduled a routine mock fire drill. Fire, Security and Health teams were all notified in advance so the simulation wouldn't cause panic.",
        "The operations team lit a small container of oil to start the drill — but in their haste, missed a High Tension cable passing directly overhead.",
        "“The fire is bigger than we calculated! Grab the DCP extinguishers!” an operator shouted, as the flame engulfed the cable. The control room called for real help.",
        "“Emergency! This is not a drill anymore! The HT cable is on fire!”",
        "“Nice try, Control. We know it's a mock drill. We'll ‘arrive’ on paper in ten minutes as planned,” replied the Fire Officer.",
        "“Don't overact, friend, we're busy logging the simulated entry,” added the Security Head.",
        "By the time anyone realised the smoke was real, the HT cable was completely destroyed. One entire unit stayed shut for days."
      ],
      moral: "When safety becomes a mere routine, the line between simulation and catastrophe disappears."
    },
    {
      title: "Saala or Tala? A Quick-Tongued Escape",
      body: [
        "A supervisor on his rounds found the floor flooded with hazardous chemicals and lost his temper at the workman responsible.",
        "“Why is this floor still flooded? Do you want an accident?”",
        "“Sir, I need safety goggles to protect my eyes from the splash.”",
        "“I issued you goggles yesterday!”",
        "“They were stolen, sir — there's no lock on my locker.”",
        "Furious, the supervisor snapped in the local language: “Saala, lata kyun nahi?” (You rascal, why don't you bring it?)",
        "Offended, the workman rushed to his union leader, and within minutes forty people surrounded the supervisor demanding an apology.",
        "“Why did you abuse this worker? We heard you call him ‘Saala’!”",
        "The supervisor, now calm, didn't blink. “I never said that. You misheard me. I said — ‘Tala kyun nahi lata?’ (Why don't you bring a lock?) I was simply concerned about the security of his locker.”",
        "The crowd looked at each other, convinced by the clever wordplay, and quietly dispersed."
      ],
      moral: "In a crisis, a quick tongue can turn an insult into an innocent inquiry."
    },
    {
      title: "Reporting to the Wrong Person",
      body: [
        "A stressed Plant Manager rushed into the HOD's office. “Sir, all four feed pumps are down. We may have to shut the entire plant!”",
        "“Calm down. Tell me the specific failure for each pump.”",
        "“Pump 1 has an earth fault. Pump 2 has a seal leak. As for Pumps 3 and 4… they just aren't taking the load.”",
        "“Why aren't they taking the load? What's the technical cause?”",
        "“Sir, I have no idea. Only God knows why.”",
        "“In that case,” the HOD said flatly, “you are reporting to the wrong person. If only God knows the solution, go find a temple. Don't come back here until you have a root cause.”"
      ],
      moral: "‘God knows’ is not a technical report — it's an admission of laziness."
    },
    {
      title: "Speaking From My Mouth Only",
      body: [
        "The plant's Public Announcement system echoed through every floor. One afternoon, the Plant Manager's voice boomed over the speakers: “Mr. X, please contact me immediately!”",
        "Mr. X, near a handset, replied so the whole plant could hear. “Sir, X speaking. I hear you.”",
        "“Report to me at once. Urgent requirement!”",
        "“Understood, sir. But tell me, from what place are you speaking?” — he wanted to know if the manager was in the control room or his office.",
        "Exhausted and distracted, the manager snapped back over the speakers for the whole plant to hear: “I am speaking from my mouth only! Just get here!”"
      ],
      moral: "Stress has a way of turning a technical question into a biological fact."
    }
  ]
},
{
  n: 2, num: "02", slug: "the-throne-and-the-toolbox",
  title: "The Throne and the Toolbox",
  theme: "Power, Ego & Hierarchy",
  blurb: "Stories of bosses, badges and the delicate, often comic, dance between authority and humility.",
  image: "assets/img/part-02.jpg",
  stories: [
    {
      title: "Greatness or Just Duty?",
      body: [
        "The Managing Director was on a site visit, walking through the workshop. He noticed a senior technician busy repairing a critical vacuum pump — and, just a metre away, a crumpled piece of trash on the floor.",
        "Without a word, the MD bent down, picked up the garbage himself, and dropped it into a nearby dustbin. Then he turned sharply to the technician.",
        "“I can pick this up — why couldn't you, standing right next to it?”",
        "The technician calmly wiped his hands and looked the MD in the eye. “Sir, when you pick it up, it is seen as your greatness — humility from the top boss. When I pick it up, it is simply my assigned duty.”",
        "“I am a senior technician. I don't want to waste my skilled time on jobs any unskilled hand can do. If you instruct me to do it, I will obey — but I won't take that initiative myself.”",
        "The Managing Director was left speechless."
      ],
      moral: "The same action can be read in completely different ways depending on who performs it — greatness at the top, mere duty at the bottom."
    },
    {
      title: "Nobody Is Indispensable",
      body: [
        "A Station Engineer was furious with one of his best technicians — an excellent fitter who, protected by a strong union, was frequently disobedient. The Engineer took the matter straight to his Department Head.",
        "“Sir, this man is refusing his assigned work. We need disciplinary action for insubordination.”",
        "The HOD looked calmly at the technician. “Why are you refusing the job?”",
        "“Sir, he gives all the toughest jobs to me alone. The others are idling.”",
        "“Engineer, why do you give him the maximum work?”",
        "“Because, sir, he is the best workman we have for such jobs.”",
        "The HOD turned back to the technician, smiling faintly. “Please do this one job. Then take a fully paid month's leave — I'll arrange it myself.”",
        "The technician was startled. “A month's leave? Why, sir?”",
        "“Just enjoy it. But before you book your return ticket, call and ask: is the company still running, or did it shut down without you?”"
      ],
      moral: "The most effective persuasion is one that aligns duty with perceived value — and reminds a person, gently, just how replaceable they are not."
    },
    {
      title: "The Fool on Top",
      body: [
        "The General Manager called his best young manager in for a career counselling session.",
        "“Young man, you must work smartly and learn every part of our procedures. This is essential for your survival and growth in this industry.”",
        "The young manager listened intently as the GM paused for effect, then delivered the twist: “A fool can work at my position — but not at yours.”",
        "“Sir? A fool, at your position?”",
        "“Yes. My role is decision-making based on the summaries you provide. If you, the field person, make one error, the whole operation stops. I can approve a wrong report — only you can stop the mistake before it ever reaches me.”"
      ],
      moral: "The critical work that keeps an organization running happens at the front line, not the top floor."
    },
    {
      title: "Confine Yourself to Your Assigned Work",
      body: [
        "A sales officer noticed a massive, suspicious discount being given to one particular customer and reported it up the chain.",
        "“Just focus on your own assigned work,” his supervisor advised. The Area Manager said the same. So did the HOD, the President, and finally the Managing Director — every one of them told him to stay out of it. Undeterred, he wrote to the Owner himself.",
        "A few days later, the HOD called him in for an urgent inter-city meeting and told him to book his own train tickets. On his return, the officer submitted his travel bill for Second AC, exactly as entitled.",
        "“Change this bill immediately — it's fraudulent,” the HOD said.",
        "“Sir? My bill is correct. I travelled Second AC as entitled.”",
        "“Change it, or face the consequences.”",
        "“I refuse. I've done nothing wrong.”",
        "“Then you're terminated for financial fraud — there was no Second AC coach on that train that day.”",
        "Too late, the officer realised the discounted customer was a subsidiary of the Owner himself. The whole trip had been an elaborate, inescapable trap to remove a troublemaker."
      ],
      moral: "In a rigid hierarchy, your own integrity can be turned into a weapon against you the moment you challenge the interests of those at the top."
    },
    {
      title: "The Wise Reply",
      body: [
        "The General Manager, on his round, spotted a well-known union member near the cooling towers.",
        "“I caught you. You went home earlier using an official gate pass, didn't you?”",
        "“No, sir. I've been here.”",
        "“Don't lie. I have a very sharp memory. At 11 AM, I saw you at the gate in a yellow shirt and sports shoes. Now, at 3 PM, you're in a blue shirt and formal shoes. You clearly went home to change.”",
        "The workman paused, impressed. “Sir, I accept your observation. Give me five minutes — I need to inform the union members about this.”",
        "“Why? Are you going to complain that I caught you?”",
        "“No, sir. There is a wrong perception among the members that our new GM is a bit slow. I must go and tell them how incredibly sharp you actually are.”",
        "The GM, realising this was a subtle threat to turn his “micromanagement” into a union issue, quietly let the matter drop."
      ],
      moral: "When you use your intelligence to trap others, be prepared for them to use it to trap you right back."
    },
    {
      title: "Power and Duty",
      body: [
        "Mr. X, known for his zero-tolerance policy, was on a midnight surprise round when he found the shift in-charge in the Chlorine section slumped in his chair, eyes closed, unresponsive. He immediately filed a formal complaint for sleeping on duty.",
        "At the inquiry, the committee asked, “The officer says you were sleeping. Do you deny this?”",
        "“The observation is correct, but the conclusion is false. I was not sleeping. There was a minor chlorine leak. I ingested some gas while fixing it, took the antidote as protocol requires — and its side effect made me faint.”",
        "“Mr. X found me fainted. Instead of calling an ambulance, he spent his time writing a complaint. Is that the company's idea of ‘duty’?”",
        "The committee cleared the officer immediately and issued a stern warning to Mr. X for his lack of humanity."
      ],
      moral: "When you look for a fault with a closed heart, you miss the chance to save a life."
    },
    {
      title: "Authority Only Works If Believed",
      body: [
        "Three strangers sat on a bus: a man in a simple shirt, a well-dressed man in a suit, and a man in a plain kurta and sandals.",
        "Suddenly the man in the suit barked, “STAND UP!” The other two, startled, obeyed instantly. “SIT DOWN!” They sat, confused.",
        "After a moment, the kurta-clad man leaned forward. “Sir, excuse me — which school do you work at?”",
        "“What? I don't work at a school.”",
        "“Are you a PT teacher, then?”",
        "“No, I'm a businessman. Why?”",
        "“Then why are you shouting ‘stand up’ and ‘sit down’? I obeyed because I thought you were a teacher who couldn't leave his habits at school. If you're just a rude man in a suit, I'll ignore you next time.”"
      ],
      moral: "Authority only works when people believe you have a reason to exercise it."
    },
    {
      title: "The Dignity of the Security Guard",
      body: [
        "Fountain pens were strictly prohibited inside a plant handling costly product, due to theft concerns. On the day of the company owner's grand visit — with the MD, President and other dignitaries in tow — a security guard, unaware he was facing the owner himself, stood firmly in his path.",
        "He saluted crisply. “Sir, fountain pens are not permitted inside the plant. Kindly deposit yours with me; I must note it in the register. You may collect it upon exit.”",
        "The dignitaries were stunned, and security officers tried to intervene — but the owner waved them off, calmly deposited his pen, and proceeded with his visit. At the end, collecting his pen, he appreciated the guard's honesty and personally rewarded him with a cash prize of Rs. 1000."
      ],
      moral: "True authority recognises and rewards integrity — even when it is enforced upon itself."
    }
  ]
},
{
  n: 3, num: "03", slug: "degrees-vs-diesel-hands",
  title: "Degrees vs. Diesel Hands",
  theme: "Book Knowledge vs. Ground Reality",
  blurb: "Where textbook theory meets the stubborn, oily truth of the shop floor — and loses.",
  image: "assets/img/part-03.jpg",
  stories: [
    {
      title: "Flame Without Oxygen",
      body: [
        "A fresh chemical engineer, eager to show off his degree, was assigned to the furnace area where Hydrochloric Acid was produced. He approached a veteran operator.",
        "“Tell me, what is your qualification?”",
        "“Sir, I am only 12th pass.”",
        "“I'm a Chemical Engineer. If there's anything you don't understand, feel free to ask — my job is to educate you.”",
        "“Thank you, sir. I do have one small doubt. I learned that any burning process needs oxygen — is that correct?”",
        "“Yes, that's basic chemistry. Combustion requires oxygen.”",
        "“Then look at this HCl furnace, sir. We burn Hydrogen and Chlorine here. I've checked every valve — there's no entry for air or oxygen. Yet the flame is steady. How is that possible?”",
        "The engineer stood speechless — his textbook knowledge of “fire” hadn't prepared him for the properties of chlorine."
      ],
      moral: "A degree gives you the title, but the plant floor gives you the truth."
    },
    {
      title: "The Commonsense Solution",
      body: [
        "During a hydrotest, a leak was found in a furnace coil. When engineers cut the pipe to replace the section, internal stress sprang the coils three metres apart — deep inside the furnace, where no crane could reach. The experts were baffled.",
        "During lunch, while the experts debated, two technicians walked in.",
        "“It's impossible to pull those coils back together without heavy lifting gear!” the Technical Lead insisted.",
        "“Actually, sir, while you were at lunch, we used a simple tie-rod to bridge the gap and pull them into position. The job is done.”"
      ],
      moral: "High-level engineering often overlooks the simplest mechanical leverage."
    },
    {
      title: "The Chlorine Bucket",
      body: [
        "A high-ranking Technical Head with zero field experience wanted to “see” the products the plant handled. He sent a young engineer to fetch a Chlorine sample in a small glass bottle.",
        "“A sample? In this tiny bottle? Impossible,” said the Chlorine In-Charge.",
        "“Why? My boss really wants to see the product.”",
        "“Go back and tell your boss Chlorine is a gas. If he wants a ‘sample’ he can actually see, tell him to send a big bucket — we'll pour some in for him.”"
      ],
      moral: "When the boss doesn't know the difference between a liquid and a gas, the staff will provide a bucket of sarcasm instead."
    },
    {
      title: "Engineering vs. Common Sense",
      body: [
        "A chemical company was bleeding money as market prices crashed. Running at full capacity meant huge losses; stopping entirely was impractical. Running at minimum sent per-unit costs skyrocketing.",
        "A technical team proposed installing Variable Frequency Drives on all equipment to cut electricity costs, promising payback within a year. They presented the plan to the Director, an 86-year-old veteran with no patience for jargon.",
        "“What is the return on this project if the plant runs at full capacity, even 110%?” he asked.",
        "“Sir, at full capacity there's no saving from the drives. But the market is down now…”",
        "“Project rejected. We run the plant at full capacity from tomorrow. The market is cyclic — I've seen this many times. When rates rise, I want to be the one holding the most stock.”",
        "Within six months, market rates tripled. While competitors scrambled to ramp up, this company had a massive inventory ready — and made two months' profit that covered an entire year's losses."
      ],
      moral: "A spreadsheet can calculate efficiency, but only experience can calculate a cycle."
    },
    {
      title: "The Colour-Coding Crisis",
      body: [
        "A fresh engineer, assigned to a plant with no pipe colour coding, was told to trace the pipes physically and sketch the process flow. After two days, he returned looking confused.",
        "“Sir, I've traced almost everything, but I'm stuck on one pipe. It comes out of the Chlorine compressor motor and goes straight into the Electrical DB Room. I can't find where the chemical goes from there.”",
        "The supervisor followed him to the site, looked at the “pipe,” and sighed. “Son, that isn't a pipe. That's the motor's power cable.”"
      ],
      moral: "To a man with a hammer, everything is a nail; to a trainee in a pipe-filled plant, everything is a pipeline."
    },
    {
      title: "The Final Safeguard",
      body: [
        "During a high-stakes safety audit, an inspector grilled the Plant Manager about emergency protocols for the Chlorine storage tanks.",
        "“What's your plan if one tank leaks?” — “We keep one tank empty and transfer the product there.”",
        "“What if two leak?” — “We transfer one, and neutralize the other with our towers while lowering pressure to patch it.”",
        "“And three at once?” — “We do all that, and activate the water curtains to knock down the gas cloud.”",
        "“And if all four tanks leak simultaneously?”",
        "“In that case, sir,” the Manager said, “I would start my car and see how far I can drive in the opposite direction before the cloud catches me.”"
      ],
      moral: "Every safety system has a limit where engineering ends and self-preservation begins."
    },
    {
      title: "The Polythene Trap",
      body: [
        "With the monsoon approaching, the Operation Manager received a circular to protect equipment from rain. He ordered every open-air motor wrapped tightly in thick polythene sheets. The order was carried out perfectly.",
        "The next day, three critical motors burned out from single-phasing. The polythene, wrapped so tightly, had blocked the air-cooling vents — the motors had simply suffocated and overheated in their “waterproof” suits."
      ],
      moral: "Protection without understanding the process is just a different way to cause a breakdown."
    },
    {
      title: "The Pump Running on Ghost Power",
      body: [
        "Control room instructed an operator to switch over the cooling water pumps. He started the standby pump and sent the command to stop the running one — but it kept spinning at full speed.",
        "“Sir, the pump won't stop! I've cut the power, but it's still running at 3000 RPM!”",
        "The Electrical team confirmed zero voltage to the motor. The General Manager arrived, glanced at the pressure gauges, and started laughing.",
        "“The pump isn't running on electricity. The discharge check valve has failed. Water from the other pump is flowing back through this one, turning it into a water turbine spinning in reverse.”"
      ],
      moral: "When things don't make sense, look at the flow, not the switch."
    },
    {
      title: "Ego in the Lab",
      body: [
        "A plant noticed its caustic flakes changing colour, suggesting a leak in the nitrite-based heating system. Samples sent to the lab repeatedly came back “Negative.” The plant kept losing heating salt, but without a positive report, the manager wouldn't authorize a shutdown — until Operations forced a joint analysis.",
        "The lab technician dissolved the caustic in sulfuric acid, cooled it, and added potassium permanganate. The solution turned pink instantly — a negative indicator.",
        "“See? Negative! You're wasting our time,” the Lab In-Charge said.",
        "“Wait,” an operator interrupted. “Did you check the pH after adding the acid? If it isn't acidic before adding the permanganate, the test won't work.”",
        "They checked — the solution was still alkaline. They added more acid and re-ran the test. The pink vanished instantly: a massive positive for nitrite."
      ],
      moral: "A lab report is only as good as the technician's adherence to chemistry; an ego-driven mistake can shut down an entire industry."
    },
    {
      title: "Counterproductive Savings",
      body: [
        "To cut costs, management eliminated the Lab Technician post responsible for sampling salt from incoming trucks, handing the job to gate security guards instead. For three months, the lab reports were “perfect” — until the plant's brine filters began choking every hour and production plummeted.",
        "An operator secretly sampled a truck himself and ran the test. Magnesium levels were off the charts — pure poison for the plant.",
        "“Why did the guard's samples always pass?” the inquiry asked.",
        "“The truck drivers are very helpful,” the guard explained. “When they arrive, they hand me a small, clean bag of high-quality salt and say, ‘Here is the sample for the lab.’ I just pass it on.”"
      ],
      moral: "Saving a technician's salary ended up costing the company millions in ‘driver-provided’ samples."
    },
    {
      title: "The Vacuum Trap",
      body: [
        "At a concentration plant, a leak in the vapor duct caused low vacuum, dropping efficiency to 70%. Management refused to halt production, pressuring engineers for a quick fix.",
        "A young engineer proposed running the standby vacuum pump alongside the main one for a temporary boost. His supervisor considered it carefully.",
        "“What's our designed vacuum requirement?” — “0.92 kg/cm².” — “And current?” — “Only 0.82.”",
        "“If we start the second pump, how will you stop the vacuum exceeding design? What if it hits 1.6 and collapses the duct?”",
        "The young engineer's eyes widened. “Sir, I hadn't thought of manually opening the air vent to control it.”",
        "“Precisely why senior people are here. We foresee the unsaid.”",
        "The supervisor took the idea to management, highlighting both benefit and risk. Their response was sharp: “Run the second pump immediately. And Supervisor, brush up on your basic controls, or you might find yourself without a job.”"
      ],
      moral: "Experience warns of risks, but ultimately, results dictate decisions."
    },
    {
      title: "Trisection of an Angle",
      body: [
        "A fabricator-fitter at our workshop, famous for his skill, was mocked by a young engineer fresh out of college: “You're a good fitter, but you only use hit-and-trial. You know no calculation, no real engineering.”",
        "The fitter smiled. “Sir, I know how to make five equidistant holes on the periphery of a flange by hit and trial. Can you do the same using only an unmarked ruler and compass, with your geometrical calculations?”",
        "The engineer accepted the challenge — and was startled to find it wasn't easy at all. He brought in the technical head; both tried. The puzzle spread across the technical team, and not one engineer succeeded.",
        "After nearly six months, they finally realised they had been chasing a mathematical impossibility all along."
      ],
      moral: "A hands-on solution earned through experience can outlast a theoretical one built on pride."
    },
    {
      title: "The Quality of a True Officer",
      body: [
        "In a chemical company using medium-pressure steam at twelve kg/cm², a leak began at a main valve's upstream flange. The team tried tightening it, in vain — part of the gasket had blown away.",
        "On his round, the President spotted the leak and summoned the shift in-charge. “Are you aware of the abnormality on the first floor?”",
        "“Yes, sir — steam is leaking from the main valve flange.”",
        "“Shameful that you're aware, yet it's not attended to.”",
        "“Sir, we tried tightening, but the gasket is damaged. We'd need a shutdown.”",
        "“Have you called the maintenance engineer?”",
        "“No, sir — it's not possible to attend to it online, and we can't take a shutdown.”",
        "The President summoned the maintenance engineer directly. “I will try tightening it, and if needed, insert part of the damaged gasket by loosening the flange and re-tightening,” the engineer said confidently.",
        "The President praised the engineer on the spot and reprimanded the shift in-charge for his negative attitude. Furious, the in-charge ordered the engineer's team to actually attend to it — who, after thirty minutes of visible “work,” simply wrapped cotton around the flange and placed a running water hose over it. The steam kept leaking — just invisibly."
      ],
      moral: "Confidence can win the President's praise, even while the actual leak is only cleverly hidden, not fixed."
    },
    {
      title: "Twelve Sensors in the Cupboard",
      body: [
        "An imported stitching machine that automatically started when a bag reached it on a conveyor belt suddenly stopped working. Electrical department checked the motor — fine, but no idea about the starting mechanism, since the machine came from Germany. The vendor's paid service quote turned out to be higher than the machine's own cost.",
        "Days later, an operations staffer read the manual carefully and discovered the machine started via a proximity sensor triggered by a lever the bag touched. Operations asked Electrical to source a replacement; Electrical insisted on ordering from the German vendor. Operations found the specification and tried local purchase instead — but Purchase rejected the request, insisting Electrical alone should procure it.",
        "Finally, when Electrical checked the specification themselves, the engineer smiled — he had twelve of that exact sensor sitting in his own cupboard all along. The sensor was swapped, and the machine ran again."
      ],
      moral: "Sometimes the simplest fix is sitting in a cupboard the whole time — waiting for someone to actually ask the right question."
    }
  ]
}
);

window.BOOK.parts.push(
{
  n: 4, num: "04", slug: "union-jacks-and-iron-nerves",
  title: "Union Jacks and Iron Nerves",
  theme: "Unions, Discipline & Survival",
  blurb: "Tales from the endless tug-of-war between management's rulebook and the worker's rulebook.",
  image: "assets/img/part-04.jpg",
  stories: [
    {
      title: "Nothing to Lose",
      body: [
        "On a weekend, the General Manager of Finance came to the office for urgent work and found the security guard at the gate. “Open my office. I have a lot of work to finish.”",
        "The guard saluted and produced a register. “Sir, kindly sign the key-issue register first — it's the protocol.”",
        "The GM signed, then waited. “Alright, now open the door.”",
        "“Sir, my duty is only to issue the keys. Opening the office is your privilege.”",
        "The GM exploded, threatening the guard's job. A passer-by tried to mediate.",
        "“Sir, with respect, the guard is in the position of strength here. You have a high-paying job to lose. He's ex-Army, has a pension, and there are a thousand guard jobs available tomorrow. He has nothing to lose. And he's right — he is the custodian of the keys, not your office boy.”",
        "The GM went silent, took the keys, and opened his own door."
      ],
      moral: "Never fight a man who has a secure fallback and nothing left to lose."
    },
    {
      title: "The German Engineer's Observation",
      body: [
        "A German engineer visiting for commissioning grew frustrated at the slow progress caused by a powerful, uncooperative union.",
        "“Is the owner of your company a very rich man?” he asked.",
        "“Yes, he is. But why do you ask?”",
        "“Because I've been here a week and never seen anyone actually work. They have assigned times for tea, breakfast, lunch, and changing clothes — but no assigned time for working. Only a very rich man could afford to pay wages for this.”"
      ],
      moral: "Productivity is often the first casualty of an unchecked union."
    },
    {
      title: "The Lockdown Job List",
      body: [
        "An Operation Manager asked his officer to prepare a job list for the coming year.",
        "The list arrived with three categories: a Daily Job List for normal work, a Shutdown Job List for work needing the plant stopped, and a Lockdown Job List — jobs to be done only when the company is locked and workers are barred from entry due to a strike.",
        "The Plant Manager read it and immediately updated his own personal plan: find a new job."
      ],
      moral: "When the maintenance schedule depends on a labour strike, it's time to update your resume."
    },
    {
      title: "The Factory Manager's Tea",
      body: [
        "The tea served to workers was terrible. Union leaders, hoping to humiliate the Factory Manager, invited him to the site to share a cup. He drank it all, wiped his mouth, and smiled.",
        "“So, sir? What do you think of our tea?”",
        "“It's fantastic! Perfectly balanced milk and sugar — honestly, I don't get tea this good at home. Can I come here every day to drink this with you?”",
        "The workers were left speechless. By refusing to acknowledge the “bad” tea, the manager had completely disarmed their complaint."
      ],
      moral: "If you refuse to be offended, your opponent loses their only weapon."
    },
    {
      title: "The Punishment of Silence",
      body: [
        "A union-protected worker refused to do any work; no counselling or disciplinary action could move him. The Plant Manager tried a different tactic.",
        "“Supervisor, from tomorrow, do not allocate any work to this man. Even if he asks, tell him he is not allowed to touch any equipment.”",
        "On Day 1, the worker was thrilled, watching others sweat. By Day 3, he was bored. By Day 5, he felt a deep insecurity — everyone else was learning new skills while he became invisible. He tried to help a colleague, but the supervisor stopped him: “No, no. You stay in your chair. We don't need you.”",
        "By the end of the week, the silence and the feeling of being useless broke him. He submitted a written apology and begged for a task."
      ],
      moral: "For a man who wants to be important, the greatest punishment is not a heavy workload, but total irrelevance."
    },
    {
      title: "The Diabolic Union Leaders",
      body: [
        "At a union meeting, three leaders delivered fiery speeches, hurling every possible insult at the company President and his family. The workers cheered wildly, clapping continuously.",
        "That same evening, all three leaders visited the President's house, touched his feet, and asked, “Sir, did you hear our speeches?”",
        "“Yes, it was fantastic. Keep doing that, so no worker suspects you,” the President said — and handed them their rewards."
      ],
      moral: "Sometimes the loudest opposition on stage is the most carefully managed loyalty behind closed doors."
    }
  ]
},
{
  n: 5, num: "05", slug: "the-corner-office-circus",
  title: "The Corner Office Circus",
  theme: "Office Politics & Human Psychology",
  blurb: "Ego, jealousy, loyalty and quiet cunning — the real machinery that runs every factory.",
  image: "assets/img/part-05.jpg",
  stories: [
    {
      title: "When You Were Liquid, I Was in Uniform",
      body: [
        "A fresh graduate engineer, having just completed his induction training, walked eagerly into his new supervisor's office.",
        "“Good morning, sir. I'm pleased to work under your guidance. If you don't mind, may I ask your age?”",
        "The supervisor, a seasoned veteran, looked up slowly and offered a faint, knowing smile.",
        "“Dear boy, let me put it this way — when you were still in liquid form, I was already in uniform.”",
        "The young engineer stood silent, suddenly aware of the vast ocean of experience that lay between them."
      ],
      moral: "Knowledge is gained in training, but wisdom is forged through years of service."
    },
    {
      title: "The Habit of Abuse",
      body: [
        "A colleague habitually insulted everyone the moment they left the room. Fed up, the staff complained, and the Plant Manager summoned him for a warning.",
        "“I hear you use very foul language behind people's backs. Is this true?”",
        "“Sir, never! I am a gentleman. I speak only with the highest respect for my co-workers.”",
        "Satisfied by his calm demeanour, the Manager let him go. But as the man reached the door, he turned back with a friendly smile.",
        "“By the way, sir — could you tell me the names of the two idiots and lunatics who brought these false complaints against me?”"
      ],
      moral: "A habit is a second nature that reveals itself the moment the first nature stops paying attention."
    },
    {
      title: "The Echo of the Workshop",
      body: [
        "A technician spent twenty years lapping valve plates for reciprocating compressors — a repetitive, circular hand motion.",
        "After two decades, the movement had become permanent. Even at home, eating or sitting idle, his right hand kept moving in the same rhythmic circle."
      ],
      moral: "If you stay in one role long enough, the job doesn't just occupy your time — it occupies your body."
    },
    {
      title: "A Cool Reply",
      body: [
        "The Boss, furious over a performance dip, tore into one team member in front of everyone.",
        "“If you don't improve immediately, I will eat you alive! Any doubt about my capability to do that?”",
        "The subordinate looked back, completely unfazed. “Sir, you can definitely eat me. I have no doubt about your power. But I am actually worried for you.”",
        "“Worried for me? Why?”",
        "“Because, sir, you might be able to eat me — but you will never be able to digest me.”",
        "The room fell silent. The Boss realised he couldn't intimidate someone who met fire with ice."
      ],
      moral: "Power can consume, but it cannot always control the consequences of its own appetite."
    },
    {
      title: "The Oversized Measurement",
      body: [
        "A technician was told to urgently open a storage tank manhole. Instead of using a scale, he measured the bolt size by holding his thumb and finger apart.",
        "On the way to the toolbox, he stopped to chat with a colleague for thirty minutes — and returned with a spanner far too large.",
        "“You've been gone half an hour and brought the wrong size? Are you blind?” the supervisor demanded.",
        "“Sir, it's not my fault. My colleague is to blame.”",
        "“Did he give you the wrong tool?”",
        "“No, sir. But while we were talking about my family, the distance between my thumb and finger unknowingly increased. That's why the spanner is oversized.”"
      ],
      moral: "Accuracy has a very short shelf life when it's held only in your hands."
    },
    {
      title: "The Shark's Diet",
      body: [
        "During a tense pre-commissioning meeting, the General Manager demanded the plant start in three days — an impossible deadline.",
        "“I've already committed to the board. We start in three days. Gear up!”",
        "“Sir,” said the Operation Head, “if the four of us were thrown into a sea full of sharks, do you know what would happen?”",
        "“What an interesting question. Tell me.”",
        "“The sharks would eat me and the other two engineers — but they wouldn't touch you.”",
        "The GM smiled. “Because they respect my position?”",
        "“No, sir. It's because sharks never eat… waste.”"
      ],
      moral: "Unrealistic promises aren't leadership — they are waste."
    },
    {
      title: "Presence of Mind",
      body: [
        "Mr. X, a young and ruthlessly disciplined engineer, found a worker asleep on the floor during a freezing January night shift.",
        "“You bastard! You are a parasite on this company! Get up!” he screamed.",
        "Startled and insulted, the worker lost his temper too, grabbed the engineer by the arms, and slammed him to the floor. A heavy silence followed — the worker realised he had just assaulted an officer, and began to shiver with fear of losing his job.",
        "Mr. X stood, dusted off his uniform, and said quietly, “Come here.” The worker approached, head bowed, expecting the worst.",
        "Instead, Mr. X pulled out his wallet and handed him a hundred-rupee note. “Take this. And don't you dare gossip about what happened here today. Now get back to work.”",
        "Mr. X walked away with his dignity intact — he knew that if the story spread, he'd forever be the engineer who got beaten by a worker."
      ],
      moral: "Sometimes, the cost of saving your image is far cheaper than the cost of exercising your ego."
    },
    {
      title: "The Premature Father-in-Law",
      body: [
        "A senior colleague, a staunch naturalist, mocked anyone who dyed their hair. His own hair had turned snow-white by thirty, yet he wore it proudly — until one day he showed up with jet-black hair.",
        "“What happened to your ethics? Why the dye?”",
        "“I was on a train with my wife. A lady sitting beside her chatted for a while, then turned to my wife and said, ‘Your father-in-law looks very healthy for his age.’”",
        "“And?”",
        "“I am her husband, not her father-in-law! I bought the dye the moment I got off that train.”"
      ],
      moral: "Principles are strong, but vanity — and a mistaken identity — is stronger."
    },
    {
      title: "The Flute's Luck",
      body: [
        "When a colleague asked why my performance ratings never reflected my hard work, I told him I was born with “Flute Luck.”",
        "“Remember King Akbar? Pleased with his musicians, he ordered their instruments filled with silver coins. The drummers, tabla players, and harmonium players all walked away rich. But the flute player got nothing — his instrument had holes, with no space to hold a single coin.”",
        "“Years later, his son became king. He hated the music and ordered a punishment: ‘Put their instruments where the sun doesn't shine!’ Only the flute fit inside.”"
      ],
      moral: "In most organizations, the people missing out on incentives are always first in line for punishment."
    },
    {
      title: "The Power of Jealousy",
      body: [
        "A notoriously lazy worker always had a “solid reason” not to do any work. His supervisor knew he despised a colleague, Mr. Z. One day, an urgent job came up.",
        "“Oh, that Mr. Z is so lucky,” the supervisor said loudly. “I'm going to call him in for this urgent job. He'll make a lot of overtime pay today.”",
        "“Why are you calling that idiot Z? I'm standing right here! Give me the job!” the lazy worker snapped.",
        "The supervisor “reluctantly” agreed, and the job was finished in record time — just to keep the money away from his rival."
      ],
      moral: "If you can't inspire a man with duty, motivate him with spite."
    },
    {
      title: "Managing by Confusion",
      body: [
        "A manager told his PA to report every morning at 9 AM sharp.",
        "On the fourth day, he screamed, “Why are you always barging in here at 9? You're disturbing my focus!”",
        "The PA stopped reporting. Three days later, the manager summoned him again and fired him — for “insubordination and failing to follow standing instructions to report at 9 AM.”"
      ],
      moral: "Incompetent leaders use aggression and contradictory orders to keep their subordinates too confused to notice their own failures."
    },
    {
      title: "Maine Kiya — I Did It",
      body: [
        "A General Manager, notorious for boasting, claimed credit for every project, modification, and improvement — even ones done long before he arrived. The factory was five years old; he had joined only three years back.",
        "At a general meeting, as various modifications were discussed, he repeated “Maine kiya — I did it,” at every turn. A sharp junior employee decided to test him.",
        "“Sir, I've seen a beautiful hundred-year-old Banyan tree near the east periphery of our company.”",
        "Without missing a beat, the General Manager declared, “I planted it.”",
        "Everybody burst out laughing."
      ],
      moral: "A habit of claiming credit eventually claims credit for things that predate the person claiming it."
    },
    {
      title: "The Torn Note and Unnecessary Stress",
      body: [
        "Mr. X, a general manager nearing superannuation, had earned well over his career but had no children. Hoping for a service extension, he had requested it from management several times, without any response.",
        "One day, holding a torn five-rupee note of no further use, he showed it to a subordinate during a casual chat about work and life.",
        "“Sir, I have no solution for your extension,” the subordinate said, “but I do have one for your torn note. Give it to me.”",
        "He exchanged it for a fresh note from his own pocket — then tore the old note into four pieces and threw it in the bin.",
        "“What have you done? That's a loss for you!” Mr. X said, surprised.",
        "“Sir, this small loss has given me great happiness — I've relieved my respected senior of an unnecessary stress.”",
        "Mr. X, stunned, admitted he had been worrying over that useless note for a week, called himself the biggest fool in the world, and decided then to resign for an early, peaceful retirement instead of chasing an extension."
      ],
      moral: "Some worries, once you look closely, are worth no more than a torn five-rupee note."
    }
  ]
},
{
  n: 6, num: "06", slug: "the-art-of-the-deal",
  title: "The Art of the Deal",
  theme: "Money, Markets & Clever Bargains",
  blurb: "Shopkeepers, sellers and street-smart citizens who prove that commerce is a battle of wits.",
  image: "assets/img/part-06.jpg",
  stories: [
    {
      title: "Payment for Every Kind of Work",
      body: [
        "A contractor known for being strictly by-the-book was in the General Manager's office getting his invoices signed.",
        "“Mr. Upadhya, could you pass me that notebook from the side table?” the GM asked while signing.",
        "“Certainly, sir,” the contractor said, handing it over.",
        "In the next billing cycle, the GM found an extra invoice for Rs. 10.",
        "“What is this nonsense? Ten rupees for ‘Logistic Services’?”",
        "“Sir, in my last visit, you assigned me the task of retrieving a notebook. I have fulfilled it. I will do any work you ask — but I never work for free.”"
      ],
      moral: "If you treat a relationship as purely transactional, don't be surprised when you're billed for the small talk too."
    },
    {
      title: "The Millionaire's Secret",
      body: [
        "During a cost-saving workshop, a trainer posed a riddle: “An entrepreneur sells his product at a 5% discount below cost price. His business booms, and in six months he has exactly one million rupees in his account. How is this possible?”",
        "The engineers began calculating economies of scale and tax rebates.",
        "“The answer is simple,” the trainer said. “He had one billion in his account when he started.”"
      ],
      moral: "You can't ‘volume’ your way out of a fundamentally loss-making business."
    },
    {
      title: "Your Problem, My Opportunity",
      body: [
        "In capitalism, your problem is someone else's opportunity.",
        "Imagine arriving at a railway station at 1 AM in pouring rain with your family. Only one taxi is available; the normal fare is 300 rupees. “2000 rupees. Take it or stay in the rain,” the driver says. You have no choice — your problem is his opportunity.",
        "Now imagine arriving at 11 AM on a sunny day, with fifty taxis waiting. “I'll give 200 rupees. Take it or I'll ask the next guy,” you say. “Okay, sir. Get in,” replies the driver."
      ],
      moral: "The price of a service is never based on its value; it's based on who is more desperate in that moment."
    },
    {
      title: "The Height of Crookedness",
      body: [
        "I once won a bet from a friend, who had to treat me to sweets at a famous shop in town. We ordered two pieces of Gojhiya, a famous North Indian sweet, at Rs. 1.5 a piece.",
        "It was rush hour, and the shopkeeper was badly busy. My friend handed him a five-rupee note. Amid the crowd, the shopkeeper forgot both what we'd ordered and which note he'd been given. After waiting five minutes, my friend asked for his change. The shopkeeper, confused, returned a ten-rupee note by mistake.",
        "I expected my friend to correct him — instead, he asked innocently, “What you've returned, is it okay?”",
        "“What did you order?” the shopkeeper asked.",
        "“Gojhiya, two pieces.”",
        "Believing he'd been given a twenty, the shopkeeper apologetically handed over seven more rupees. My friend left, full of joy."
      ],
      moral: "In the chaos of a rush hour, the most convincing innocence is often the cleverest crookedness."
    },
    {
      title: "The Secret Behind His Success",
      body: [
        "I used to buy provisions from a supermarket in my small town. Among some twenty-five similar shops, customers stood in long queues at just this one, while the rest sat empty. Curious, I joined the queue myself.",
        "After fifteen minutes, I reached the counter, gave my order, and waited as it was packed. When it was time to pay, I realised my purse was missing — I had worn the wrong trousers. Embarrassed, I asked the shopkeeper to hold my items until I returned.",
        "Instead, he smiled, pulled out five hundred rupees from his own drawer, and said, “Sir, take this for your other essentials — and take your provisions too. Pay comfortably on your next visit, no hurry.”",
        "I offered to have it noted in his register. He refused. “I have full trust in you,” he said — to a complete stranger. That was the secret behind his shop's success."
      ],
      moral: "Trust, extended without demanding proof, is the rarest and most powerful currency in business."
    },
    {
      title: "Rate Per Kilo, Please",
      body: [
        "A police inspector in uniform walked up to a vegetable shop and asked the price of tomatoes and cabbage.",
        "“Sir, both are four rupees,” the shopkeeper said, not mentioning that this rate was per 250 grams, assuming the inspector already knew.",
        "“Give me half a kilo of each,” the inspector said. After weighing, he handed over three rupees. “I'm short by one rupee — please accept it.”",
        "“Sir, you're short by thirteen rupees,” the shopkeeper said. “The rate I quoted was for 250 grams only.”",
        "“Why didn't you tell me that clearly?”",
        "“Sir, vegetable rates are always quoted per 250 grams here.”",
        "“I am here on election duty, and where I come from, vegetables are sold by the kilo. Please quote rates with units for customers. I only have three rupees — calculate and return whatever vegetable that's worth.”",
        "Moved, the shopkeeper simply said, “Sir, please take it all for three rupees this time,” and the inspector thanked him warmly."
      ],
      moral: "A little clarity in pricing saves everyone from an awkward argument — and sometimes earns a little grace in return."
    },
    {
      title: "The Unprecedented Electricity Bill",
      body: [
        "My electricity bill for May was shockingly abnormal: one lakh, twenty thousand, eight hundred and twenty rupees — of which only 820 was actual consumption; the rest was a mysterious “theft” penalty.",
        "The utility office explained: a theft clause had been invoked, since the load found at my house — water pump, ACs, fridge — totalled 6 KW, against my sanctioned 2 KW.",
        "The facts were correct; but I had read the guidelines carefully, and this scenario was not classified as theft at all — the maximum penalty allowed was just Rs. 600.",
        "I met the site in-charge, showed him the rulebook, and he acknowledged the engineer's error. I paid the correct Rs. 600 penalty, and formally applied to upgrade my sanctioned load to 6 KW."
      ],
      moral: "Knowing the actual rulebook can turn an outrageous bill back into a fair one."
    }
  ]
}
);

window.BOOK.parts.push(
{
  n: 7, num: "07", slug: "the-doctor-will-confuse-you-now",
  title: "The Doctor Will Confuse You Now",
  theme: "Doctors, Diagnoses & Home Remedies",
  blurb: "Prescriptions lost in translation, and patients who out-think their physicians.",
  image: "assets/img/part-07.jpg",
  stories: [
    {
      title: "The Potential of the Eighth Child",
      body: [
        "During a government family-planning drive, management pressured an officer who already had seven children into agreeing to a procedure.",
        "At the clinic, right after his wife was given anaesthesia, he suddenly changed his mind, picked her up, and took her home.",
        "“You agreed to this! The team was ready. Why did you run away?” the HR Manager demanded.",
        "“Sir, I thought about it deeply. In our history, the eighth child always has the most potential. I've decided to wait until after the eighth one to stop.”"
      ],
      moral: "Logic can be used to justify any desire, no matter how much it contradicts the plan."
    },
    {
      title: "Diabetes Management by Reduction in Food",
      body: [
        "A labourer was diagnosed with pre-diabetes and began counselling with the doctor.",
        "“How many chapatis do you eat daily?” — “Sir, 12.” — “Reduce it to 6.” The labourer agreed.",
        "After 15 days, no improvement. “Reduce to 3.” Still no improvement.",
        "“From tomorrow, eat just one chapati,” the doctor said.",
        "“Sir, it will be difficult for me to make a single chapati from one kilogram of wheat flour.”",
        "The doctor realised the labourer hadn't reduced the quantity of wheat at all — he had simply made the chapatis thicker each time. He was advised instead to use only 500 grams of flour, and make as many chapatis as he liked."
      ],
      moral: "A number can be followed to the letter while completely missing the point."
    },
    {
      title: "Fill It Up to the Neck",
      body: [
        "A village doctor always tried to explain treatment in simple language. An old lady came seeking treatment for her grandson's fever. The doctor handed her a bottle of powdered medicine.",
        "“Maa, arrange warm water, fill it up to the neck, and give the medicine twice to the baby. Report back in three days.”",
        "She returned three days later, furious. “It is difficult to take treatment from you!”",
        "Astonished, the doctor asked what had happened.",
        "“You told me to arrange warm water and fill it up to the neck. I searched the entire village for a drum that reached my baby's neck, heated a hundred litres of water to fill it, then poured the dry powder into his mouth — but he spat it out immediately!”",
        "The doctor, smiling, gently explained: the water only needed to fill the medicine bottle — up to its own neck."
      ],
      moral: "The simplest instructions can still be lost entirely in translation."
    },
    {
      title: "The Doctor's Promotional Prescription",
      body: [
        "At a company where a resident doctor treated all our ailments, we had to take a morning appointment and return in the afternoon. I had pain in my left hand and went for my slot.",
        "To my surprise, the doctor was already writing a prescription in my file before I said a word — as if my face alone told him everything. I mentioned my hand pain, but he wasn't interested; the medicine, he said, was already written — go collect it. A huge quantity of medicine was given for fifteen days.",
        "After the first dose, I fainted at the office. I returned to the doctor, who simply smiled, advised plenty of water, and added another fifteen days of the same medicine to my file.",
        "I later asked the pharmacist why the doctor was being so generous. He explained: the doctor had received a free cupboard from a pharma company in exchange for promoting their medicine — and was prescribing the very same medicine to every patient who walked in."
      ],
      moral: "A free cupboard can end up costing every patient in the queue their health."
    },
    {
      title: "The Shameless Shortcut",
      body: [
        "Suffering from stomach ache, I went to see a doctor friend at the hospital, took an appointment at the reception, and waited for my number.",
        "One of my subordinates arrived without any appointment and walked straight into the doctor's chamber. The doctor loudly scolded him for the intrusion — audible to the entire waiting room. Undeterred, the man touched the doctor's feet repeatedly, apologised profusely, made excuses, and somehow walked out with his medicine anyway.",
        "He then asked me, smiling, if I needed any help since the doctor was his friend. I declined.",
        "Fifteen minutes later, my number was finally called, and I went in. “Why did you wait for an appointment?” the doctor asked warmly, offering me tea and examining me thoroughly, instructing his staff never to keep me waiting again."
      ],
      moral: "Shamelessness, applied with enough charm, can outmanoeuvre even a queue."
    },
    {
      title: "The Quack's Rusty Cure",
      body: [
        "Mr. X had typhoid, and ten days of treatment from a genuine MD hadn't cured him. A local quack doctor — with no formal medical training but a good friend — offered an immediate fix. Fed up and desperate, Mr. X agreed.",
        "The quack opened his bag, found the syringe needle rusted, rubbed it clean on a grinding stone, and injected the medicine into Mr. X's forearm.",
        "Within five minutes, Mr. X was sweating and dizzy. His family rushed him to the real doctor's clinic — a severe reaction to the injection. The MD's antidotes somehow saved his life."
      ],
      moral: "A cure applied without proper hygiene can become more dangerous than the illness itself."
    }
  ]
},
{
  n: 8, num: "08", slug: "chalk-duster-and-destiny",
  title: "Chalk, Duster and Destiny",
  theme: "School Days & Learning",
  blurb: "Classrooms, teachers and students — where the real exam is always about something else.",
  image: "assets/img/part-08.jpg",
  stories: [
    {
      title: "The Senior Student",
      body: [
        "In tenth standard, our English teacher was a man of immense dedication and strict discipline. One classmate, a professional loafer who had already failed tenth grade three times, was caught hiding a radio under his desk, listening to cricket commentary.",
        "“I have been teaching for thirteen years,” the teacher said with deadly calm, “and in all that time, I have never encountered a student as careless as you.”",
        "“Sir, with respect,” the classmate replied, “I have sat in this same class for seven years. My experience in the tenth grade nearly matches your teaching career. And in all my seventeen years of schooling, I've never found a teacher as great as you.”"
      ],
      moral: "Experience isn't just about moving up; sometimes it's about how long you can survive at the bottom."
    },
    {
      title: "The Elephant in the Fist",
      body: [
        "A rich man was told by an astrologer that his newborn son was destined to be a fool. Determined to change fate, he hired the finest scholars, and the boy grew into a brilliant student of astrology himself.",
        "Years later, the astrologer returned to test him. He caught a small black insect in his fist. “Tell me, young scholar — what am I holding?”",
        "“It is a living entity,” the son calculated.",
        "“Correct. What colour?” — “Black.” — “How many eyes?” — “Two.” — “How many legs?” — “Four legs. I have the answer, Father! It is an elephant!”"
      ],
      moral: "You can educate a person's mind, but it is very difficult to erase their default foolishness."
    },
    {
      title: "Where Does the Water Go?",
      body: [
        "A Sanskrit professor was teaching Kalidasa's Abhigyan Shakuntalam, describing Shakuntala's beauty as she emerged from the river — her long wet hair draped over her chest, water dribbling down to her navel, and King Dushyanta mesmerised by the sight.",
        "One student raised his hand. “Sir, after reaching the navel, where does the water go afterwards?”",
        "The professor replied calmly, “My dear son, go home and ask your father this question. He may have a better reply about where the water goes after the navel.”"
      ],
      moral: "Some questions in the classroom are better answered at home."
    },
    {
      title: "Time, According to the Peon",
      body: [
        "In the days before wristwatches were common, a school principal, taking our class as a special gesture, wanted to know the time. He asked the peon to check the old pendulum wall clock and report back.",
        "The peon didn't know how to read a clock face. He looked at it, returned, and reported: “Sir, the small needle is at twelve, the big needle is at one.”",
        "Then, holding his right hand from the elbow and swinging it like a pendulum, he added helpfully, “And the biggest needle is moving just like my hand.”"
      ],
      moral: "An honest, literal description can be far more entertaining than the answer that was actually needed."
    },
    {
      title: "The Unskilled Cheelam",
      body: [
        "Our primary school had only one usable chair, its fourth leg propped up with bricks — reserved solely for the Principal, who used it while smoking a local drug through a special pipe, or cheelam. He had trained one favourite student to prepare it for him each day.",
        "One day, that student was absent. Craving his usual smoke, the Principal called over another boy — brilliant at studies, but never shown the proper method — and ordered him to prepare the cheelam, without explaining the procedure.",
        "The boy tried his best, filling it from the top, but the mixture kept falling out the bottom — he didn't know a small stone must first block the neck. Applying his own logic, he packed the neck with cow-dung ash, added the drug, and topped it with a burning piece of cow-dung as fire.",
        "The Principal took his first draw — and inhaled ash, unburnt drug, and live fire straight into his mouth and throat. Coughing violently, he toppled off his brick-propped chair and struck his head on a tree root, requiring hospital treatment.",
        "His long hospital stay ended up curing his drug addiction altogether — and on his return, he was, oddly, grateful to the boy."
      ],
      moral: "Sometimes the clumsiest attempt at a task ends up doing more good than the task itself ever could."
    },
    {
      title: "The Unplanned Independence Day Speech",
      body: [
        "At our higher secondary college's Independence Day assembly, students and teachers would give speeches, recite poems, and perform, ending with sweets for everyone. I had just joined ninth class a month earlier, and attended mostly for the promised treats.",
        "Though proud of my nation, I had little understanding of the day's significance, and being from a village, I had never spoken in front of a crowd. Suddenly, the anchor announced my name — my teacher had nominated me without ever asking.",
        "Trembling, I approached the podium amid warm applause, and after uttering the opening greeting, my mind went blank. Then, almost by instinct, I recited a small humorous poem instead — to great, unexpected laughter and applause.",
        "Afterwards, I asked my teacher why he hadn't warned me. He smiled: “I wanted your natural talent to come out on its own.” That day, my stage fear disappeared for good."
      ],
      moral: "Sometimes we discover our own courage only when someone else pushes us onto the stage."
    },
    {
      title: "The Injured Teacher Solves the Paper",
      body: [
        "Mr. X, an ex-Army soldier who had fought for the country and sustained a bullet injury, later became a teacher — commanding deep respect from colleagues and students alike, though the injury left him a little slow in understanding and decisions, a fact known to everyone.",
        "On guard duty during a Maths board exam, a clever student murmured to him that one ten-mark question was so tough that not even a teacher like him could solve it. Provoked, Mr. X read the question and declared it solvable. Challenged further, he grew angry, momentarily forgetting his guard duty.",
        "“If you solve it,” the student said, “all of us will touch your feet five times.”",
        "He solved the question on the blackboard — which every student promptly copied down — and, true to their word, all the students touched his feet five times as promised."
      ],
      moral: "A little provocation, aimed at pride, can turn strict supervision into an unexpected shortcut for everyone."
    }
  ]
},
{
  n: 9, num: "09", slug: "postcards-from-the-village",
  title: "Postcards from the Village",
  theme: "Village Life, Family & Folk Wisdom",
  blurb: "Ghosts, guests, in-laws and buses — everyday village life served with a wink.",
  image: "assets/img/part-09.jpg",
  stories: [
    {
      title: "Sattu and Aata",
      body: [
        "My house was being repaired, and one of the contractor's labourers seemed unusually upset one day. I asked him why.",
        "“Sir, about fifteen days ago my wife left to visit her parents. Before leaving, she told me: sattu is in one container, wheat flour in another. Make chapatis from the flour, or eat sattu directly with salt or jaggery, without cooking.”",
        "“I love sattu, and I'm lazy at home — so I've been eating only sattu for fifteen days. Today my wife returned, checked the containers, and asked why I hadn't touched the sattu at all.”",
        "He had, without realising it, been eating the wheat flour raw as if it were sattu, for a full fortnight."
      ],
      moral: "Sometimes the mistake is so consistent, it takes someone else's return to reveal it."
    },
    {
      title: "The Fearless Truck Ride",
      body: [
        "Early in our careers, with meagre salaries, my friend and I planned a trip to a nearby hill town. State buses were available, but costly — so my friend insisted we take a truck instead, at half the fare.",
        "After about 10 km, we passed a truck that had toppled into a 200-metre trench. My friend, curious, asked our driver the likely cause.",
        "The driver smiled. “Sir, such accidents happen from delayed gear shifts due to old age, and faulty brakes. I'm running in similar condition — my brakes barely work, and I'm a little sluggish from the drug I take every morning.”",
        "My friend began shivering, despite the June heat, and begged to be dropped immediately — offering full fare without completing the trip. The driver refused, promising free snacks and tea at the end instead.",
        "Somehow, we completed the 100 km journey safely. Only then did the driver reveal: his brakes were fine, and he'd taken no drug at all. My friend swore never to sit in a truck again."
      ],
      moral: "Sometimes the scariest ride is the one where someone is simply testing how far your nerve holds."
    },
    {
      title: "Encounter with the Ghost",
      body: [
        "As a teenager, I attended a wedding in a village about fifteen kilometres from mine. Dinner was poor, and there was nowhere comfortable to sleep, so I decided to walk home around midnight. A distant uncle, facing the same problem, joined me.",
        "Three kilometres before our village stood a temple rumoured to be haunted. As we got within a kilometre, fear crept into my uncle's mind. At 500 metres, we saw a lantern glowing and something white moving. My uncle screamed, certain it was a ghost.",
        "Though young, I was resolved that ghosts were only stories, and pressed on. Close up, we found three farmers carrying fertiliser on a hand cart, stuck in the mud, their white cloths glowing faintly in the lantern light. We helped pull the cart free and continued home in peace."
      ],
      moral: "Fear often paints ordinary shadows into extraordinary monsters."
    },
    {
      title: "The Horn Before the Hour",
      body: [
        "In the days before mobile phones or affordable watches, companies used to blow a horn thirty minutes before the shift began, so workers without timepieces would know to head to the gate.",
        "Workers, unsure of the exact hour, began arriving at the gate as early as 8 PM — for a shift that began at 11 PM."
      ],
      moral: "When nobody can measure time precisely, everyone simply arrives far too early to be safe."
    },
    {
      title: "Two Fathers, Two Philosophies",
      body: [
        "Mr. X was illiterate but a hugely successful entrepreneur, with every comfort money could buy. Mr. Y was a respected professor, published and celebrated as an epitome of knowledge. The two met during a village visit.",
        "“Mr. X, you have plenty of money, but none of your children cleared even matriculation — is that not a regret for you?”",
        "“Dear professor, it is not a regret but a matter of joy that none of my children cleared matriculation. See, your father spent all his earnings on your education, and you have little time left to take care of your parents. My children, having no such degrees, remain fully dependent on me — and they take care of me always.”"
      ],
      moral: "Success can be measured by more than one kind of return on investment."
    },
    {
      title: "The Habit of Corruption",
      body: [
        "With an interview just five days away, and two days of travel ahead of me, I needed proper clothes urgently. I went to a tailor, explained my tight deadline clearly, and he promised delivery the day after tomorrow, without fail.",
        "Just as I was leaving, two vehicles of engineers arrived, threatening the same tailor over delays in stitching for their executive engineer's spouse. The tailor apologised repeatedly, citing illness, and promised delivery within a month.",
        "Shaken, I asked to take my cloth back and find another tailor. He assured me mine would still be ready on time, and explained: he never actually received payment from such powerful officers — and dared not refuse their work, since they threatened to cut his power supply or frame him in a false theft case.",
        "It was hard to believe that people who had achieved such power and success could still behave so shamelessly."
      ],
      moral: "Power, left unchecked, often finds its cheapest victims among those too small to fight back."
    },
    {
      title: "Blessing in Disguise",
      body: [
        "An old lady in a village suffered severe slip-disc pain. Her family decided to take her to the district hospital, a hundred kilometres away, travelling by train in a general compartment with wooden-plank seating.",
        "As the train began shunting, the jolts made her seat jump. She felt a sudden, sharp shock of pain — and then realised, to everyone's amazement, that the pain was completely gone. The shunting motion had corrected her slipped disc on the spot.",
        "The villagers, and the old lady herself, were thoroughly grateful to the Indian Railways."
      ],
      moral: "Sometimes relief arrives from the most unexpected — and uncomfortable — direction."
    },
    {
      title: "Training for Scooter Driving",
      body: [
        "I bought a scooter on instalment and asked my best friend to teach me to ride. After a few practice rounds in an open ground, we ventured into a busy market.",
        "I asked him to fill petrol, and he told me to wait at the pump — he'd be back in five minutes. An hour passed. He never returned.",
        "Sweating with concentration, I somehow rode the scooter home alone through the chaotic traffic. Worried for his safety, I rushed to his house — only to find him relaxed, watching television.",
        "“How did you get home?” I demanded.",
        "“I took the state bus,” he said, laughing. “This was the only way to make you perfect at riding on your own.”"
      ],
      moral: "Sometimes the best way to teach someone to swim is to simply let go of the boat."
    },
    {
      title: "Height of Misery, Part One",
      body: [
        "A professor, well known for his stinginess, found himself alone at home one evening while his wife was away. During his walk, he met the office peon, also alone, and invited him home to cook Baati-Chokha together.",
        "The professor bought all the ingredients himself. The peon cooked; within an hour, twelve baatis and enough chokha were ready.",
        "“Sir, food is ready — please sit and enjoy,” the peon announced.",
        "The professor, having calculated the total cost at twelve rupees, informed the peon he must first pay his fair share — four rupees, discounted for his cooking help.",
        "Furious, the peon refused to pay a single rupee and stormed off without eating. Unable to enjoy the meal alone, the professor packed it all up, went to the railway station, and sold it to a food vendor for twenty rupees — spending two rupees on a quick snack before heading home."
      ],
      moral: "A miser's arithmetic will always find a way to turn hospitality into profit."
    },
    {
      title: "Height of Misery, Part Two",
      body: [
        "Mr. X, a professor famed for his stinginess, sat in his lawn with friends when he spotted his five-year-old son playing football nearby. He called the boy over and counselled him with the greatest tenderness.",
        "“My dear beta, Munna Raja babu — do you know I bought those sandals for you only yesterday? If you play with the ball wearing them, they'll get damaged. Go, keep them safely aside, and play with bare feet instead.”"
      ],
      moral: "Even fatherly affection can be carefully budgeted, rupee by rupee."
    },
    {
      title: "Height of Misery, Part Three",
      body: [
        "Mr. X was returning from the local market with fellow professors when rain suddenly began. His friends started running for shelter. To their surprise, Mr. X, carrying an umbrella, ran just as fast.",
        "“You're carrying an umbrella — why are you running too?” they asked.",
        "“It's a new umbrella,” he replied. “I have to protect it from the rain.”"
      ],
      moral: "For a true miser, even the tool meant to protect you needs protecting from its own purpose."
    },
    {
      title: "The Tribal Boy's Lucky Fall",
      body: [
        "Travelling on a state bus through hilly terrain, a tribal boy boarded and sat on the floor near the door, despite empty seats being available. The conductor's advice to take a seat went unheeded — he was simply more comfortable on the floor.",
        "The driver sped along at nearly eighty km/h, avoiding frequent gear shifts on the sharp turns. At one bend, the door flew open, and the boy was thrown out along with it, into a 200-metre-deep trench.",
        "Passengers screamed for the bus to stop. The conductor argued it was the boy's own fault, and survival was surely impossible. Furious, the passengers forced the bus to a halt and searched the trench — finding the boy sitting safely atop a dense shrub, completely unhurt. He calmly boarded the bus again, and the journey continued."
      ],
      moral: "Sometimes pure luck rescues even the most reckless choices."
    },
    {
      title: "No Vegetable for the Main Guest",
      body: [
        "At a wedding, tradition held that the groom's main guests would eat last, at the very end of the feast. When the girl's family checked the food inventory, they discovered the main course vegetable had completely run out — with no time left to prepare more, and the honoured guests already seated in rows.",
        "One wise man from the bride's side stepped forward to save the situation. He announced to the guests that the main course vegetable had accidentally been touched by a dog, and asked their permission before serving it anyway.",
        "Every guest declined immediately, insisting they would manage happily with the other dishes alone."
      ],
      moral: "A clever excuse can turn an embarrassing shortage into a guest's own gracious decision."
    },
    {
      title: "The Don Nobody Recognised",
      body: [
        "An old man of about sixty-five, cycling near his village, collided with a young man's motorbike and suffered minor injuries. Not recognising the stranger, and emboldened by home turf, the old man began abusing him loudly. The young man simply folded his hands and apologised — which the old man mistook for timidity, and abused him further.",
        "Another villager arrived, greeted the young man with great respect, offered him snacks nearby, and saw him off warmly as he rode away.",
        "“Do you know that person?” the old man asked.",
        "“Yes — and so do you,” came the reply.",
        "Confused, the old man narrated the day's incident, insisting he'd have thrashed the young man had this friend not intervened, and asked his name.",
        "“I won't tell you his name,” the friend said. “It won't be good for your health.”",
        "The young man the old man had abused turned out to be a feared local figure, responsible for numerous killings — someone the entire area lived in fear of."
      ],
      moral: "Sometimes the calmest response you receive is simply someone deciding you aren't worth the trouble."
    },
    {
      title: "The Marriage Counselor's Three Answers",
      body: [
        "A young man, dull in studies despite pursuing a postgraduate degree in philosophy, was being pushed hard into marriage by his family — though prospective brides' families quickly discovered his limitations after just a few simple questions.",
        "A counsellor was hired, who taught the boy to answer only three specific questions, exactly as rehearsed, when asked in English before the bride's family: his name; his subject of study, philosophy; and the key belief of Jain Dharma — that they do not believe in God, but in the soul's journey from bondage to liberation.",
        "After many rounds of rehearsal, the boy delivered his three memorised answers flawlessly at the meeting. Impressed, the bride's family selected him for their daughter."
      ],
      moral: "A convincing performance, well rehearsed, can sometimes pass for genuine understanding."
    }
  ]
}
);

window.BOOK.parts.push(
{
  n: 10, num: "10", slug: "sweet-cold-revenge",
  title: "Sweet, Cold Revenge",
  theme: "Wit, Revenge & Clever Comebacks",
  blurb: "Nobody in this book forgets an insult — they simply wait for the perfect, delicious moment.",
  image: "assets/img/part-10.jpg",
  stories: [
    {
      title: "The Verbal Fight",
      body: [
        "Two workmen were locked in a heated argument over a misunderstanding.",
        "“You think you're tough? You can't even bend one single hair on my head!”",
        "“I don't need to bend your hair. I'm going to bend your whole body instead!”"
      ],
      moral: "Never argue about the details when the other person is looking at the big picture."
    },
    {
      title: "Sweet Revenge",
      body: [
        "Mr. Bhuma had once been abused and manhandled by a man in a nearby locality. Weak in build, he stayed silent — but never forgot.",
        "Two years later, a theft occurred in that very village. Bhuma saw his chance. Before the gathered crowd, he claimed to possess spiritual powers that could identify the thief. He asked for a bucket of water: everyone would show their hand, he would chant a mantra and mark it, then leave. Ten minutes later, people would dip their hands in the bucket — the thief's mark would turn red.",
        "After he left, people began dipping their hands. Sure enough, the hand of the man who had once beaten Bhuma turned red. He was thrashed by the villagers on the spot."
      ],
      moral: "Revenge is a dish that tastes better when it is cold."
    },
    {
      title: "The Window Repair Application",
      body: [
        "A notoriously difficult tenant lived in company-provided housing. When his bedroom window glass broke, he wrote to the service department:",
        "“Dear Sir, the window glass of my bedroom is broken, and it is highly troublesome for our neighbours, particularly the women. Being a peace-loving gentleman, I do not want any unprovoked trouble or inconvenience to our honourable neighbours. In case of delay in repair, management will be responsible for any future incident in the colony.”",
        "His window was repaired immediately."
      ],
      moral: "A veiled threat, wrapped in courteous language, gets faster results than any direct complaint."
    },
    {
      title: "Paid in Full, With Contributions",
      body: [
        "It was result day — we had just passed our SSC exams — and our senior insisted on treating us at a restaurant. Snacks, sweets and tea were ordered; the bill came to Rs. 120 for seven students.",
        "Only after eating did we realise none of us had enough money between us — we'd gathered just Rs. 100. My senior approached the shopkeeper and asked if he had a 20-rupee note to spare, which the shopkeeper provided.",
        "Minutes later, my senior returned and handed over Rs. 120 in total. The shopkeeper counted it. “It is okay, sir, we've paid exactly as per your bill,” my senior said.",
        "“But I gave you a 20-rupee note myself!”",
        "“Exactly — all the boys contributed what was in their pockets. Consider your twenty a contribution too.”",
        "The shopkeeper laughed at the sheer cleverness of it, and let us leave."
      ],
      moral: "When you're short on cash, sometimes the cleverest move is to make the lender part of the solution."
    },
    {
      title: "The Bus Conductor's Strange Oath",
      body: [
        "I boarded a state transport bus for a destination with a fare of 100 rupees. As the bus moved, the conductor began collecting fares from four or five passengers — without issuing tickets.",
        "One passenger demanded his ticket. The conductor stalled, then offered a 20-rupee discount instead. Satisfied, the passenger accepted — and the conductor repeated the trick with every ticket-demanding passenger, discount rising each time.",
        "One adamant passenger refused every discount, insisting on a proper ticket. The conductor raised the discount to 90 rupees — still no deal. Finally, he shouted and let the man travel completely free.",
        "Curious fellow passengers asked why he wouldn't simply issue a ticket. The conductor replied solemnly: “I took an oath today, in the presence of God, that I would not issue a single ticket on this trip. How can I be dishonest to my God?”"
      ],
      moral: "Some men would rather lose money to their oath than lose face to their conscience."
    },
    {
      title: "Revenge Served Cold, Without a Word",
      body: [
        "As a new, enthusiastic officer, I once issued an official gate pass to a worker whose son was sick, on the promise from a second worker that he would cover the first man's duties that evening. Half an hour later, the second worker flatly refused, leaving me stuck — unable to arrange a replacement, and unable to file a complaint without appearing foolish.",
        "I quietly took over the work myself that night, enduring mockery from other workers for my “foolishness.” I said nothing, and waited three months, through the harsh winter.",
        "One freezing night at 1 AM, I assigned that same worker an outdoor task — fully within his role, so the union couldn't object to a refusal. Three hours in the open cold left him shivering, limbs frozen. He came to argue, saying he might die of cold.",
        "I replied gently: “My job is to get the work done. I'm not assigning you anything beyond your duty. Why do you think I'm doing this intentionally?”",
        "He remembered, at last, how he had once betrayed me — touched my feet, apologised, and promised to obey every order from then on."
      ],
      moral: "Revenge is a dish that tastes better when it is cold."
    },
    {
      title: "The Math Genius Outplayed",
      body: [
        "Outside a government college during exams, a crowd gathered to help students cheat: answers written on paper, rolled into balls, and tossed out the window to solvers waiting below, then thrown back in.",
        "A police inspector caught one of the outside “math geniuses” and asked his qualification.",
        "“I am an MSc in Mathematics.”",
        "“Then let me test you. Pass, and I'll let you keep working; fail, and I'll punish you. How many members are in your family?”",
        "“Ten: grandfather, grandmother, father, mother, and five siblings — myself included.”",
        "The inspector counted: it came to nine. “You can't even count your own family correctly. How will you help a twelfth-class boy with his maths paper?” He slapped the genius and sent him away."
      ],
      moral: "A brilliant qualification means little if you can't apply it under pressure — as the inspector proved with simple arithmetic."
    },
    {
      title: "Tit for Tat, Served with Ghee",
      body: [
        "Mr. X was famous for his enormous appetite — people dreaded feeding him. Hoping for a few days of good food, he visited his uncle's in-laws. But they, well aware of his reputation, told him a false story: a death in the village meant only fasting food could be prepared, so hosting him wasn't possible.",
        "Mr. X, unbothered, informed the in-laws that his own uncle had passed away two days earlier, delivered the sad news, and left.",
        "As tradition demanded, the shocked in-laws arrived at his uncle's house bearing 100 kg of wheat flour, 20 kg of oil, and 10 kg of sugar — only to find the uncle alive and well.",
        "The furious uncle summoned Mr. X for an explanation. “I visited your in-laws as a courtesy call. They told me a false story about a death to avoid feeding me. I gave them a similar false message back — hoping they'd send provisions as tradition demands. And I was right.”"
      ],
      moral: "A false excuse, met with an equally false excuse, has a way of settling its own score."
    },
    {
      title: "Give and Take, Street-Hawker Style",
      body: [
        "A street hawker exchanged old plastic footwear for sweets and salt, calling out his offer through the lanes. A notorious troublemaker in the village, holding his own shoes, approached with mischief in mind — planning to beat the hawker with his own shoes, counted out by however many the hawker demanded.",
        "“Tell me, how many shoes shall I give you?” he demanded loudly, gathering a curious crowd.",
        "The hawker, unbothered, replied courteously: “Sir, you may give me only as many as you have received from someone else — because people can only give what they've first received.”",
        "The gathered crowd burst into laughter at the clever reply, and the troublemaker walked off without another word."
      ],
      moral: "A calm, clever answer can disarm a threat far more effectively than any argument."
    },
    {
      title: "Common Sense Between Lunatics",
      body: [
        "After a cricket match, a crowd of idle spectators lingered for gossip. Among them were two well-known local “lunatics” — one a fierce devotee of Goddess Durga, the other of Lord Hanuman — both notorious for fighting without reason.",
        "Mr. X began praising Durga's power and his own devotion; Mr. Y countered with Hanuman's glory and his own spiritual blessings. The gossip soon turned to argument, then to a heated quarrel, and finally both men raised sticks and marched toward each other, to the crowd's great delight, expecting a free show.",
        "“Jay Maa Durga, come help me kill this man without delay!” Mr. X screamed.",
        "“Jay Bajrang Bali, come teach my enemy a lesson!” Mr. Y screamed back.",
        "As they closed in, Mr. Y suddenly bent down and touched Mr. X's feet: “Maa Durga, Hanuman ji touches your feet — give your blessings.” Mr. X raised both hands: “Dear Hanuman, be strong with my blessing.”",
        "They separated to a safe distance, only to resume screaming insults at each other — but never actually fought. The crowd, amazed, realised: two lunatics, it turned out, never truly fight each other."
      ],
      moral: "Even the wildest quarrel can conceal its own quiet, mutual understanding."
    }
  ]
},
{
  n: 11, num: "11", slug: "confessions-of-the-cubicle",
  title: "Confessions of the Cubicle",
  theme: "Corporate Life & Career Truths",
  blurb: "The private sector's unwritten rules, told through the people who learned them the hard way.",
  image: "assets/img/part-11.jpg",
  stories: [
    {
      title: "The Second Mother",
      body: [
        "An employee applied for a salary advance, citing his mother's death. It was approved.",
        "A few years later, he applied again — for the exact same reason. HR called him in, suspecting fraud.",
        "“You claimed your mother died three years ago. Now again? How many mothers do you have?”",
        "“Sir, my father has five wives. They are all my mothers. This is only the death of my second mom.”"
      ],
      moral: "Company policy rarely accounts for the complexities of a large family tree."
    },
    {
      title: "The Security Strategy",
      body: [
        "The President of the company was constantly pressured by politicians wanting to plant incompetent “henchmen” into the organization. To protect the company, he devised a brilliant filter: he told every such candidate to meet the Head of Security for their “appointment.”",
        "“Welcome! Please sit. Have some tea, some coffee. Tell me everything,” the Security Head would say warmly, meticulously filing every application, photo, and contact detail. “We'll call you within the year, as soon as a position opens. Don't call us — we have your file right here.”",
        "The call, of course, never came. The candidates left feeling respected, and the company never had to hire a single liability."
      ],
      moral: "A warm welcome is the most polite way to show someone the door."
    },
    {
      title: "The Price of a Shirt",
      body: [
        "Mr. X had fifteen years of experience and a salary of 15 lakhs. He was outraged when a fresh recruit was hired at the exact same pay, and stormed into HR to protest.",
        "“This is an insult to my fifteen years of service! How can he earn what I earn?”",
        "“Mr. X,” the HR Manager said, “fourteen years ago, I bought a shirt for fifty rupees. Yesterday, an identical shirt cost me five hundred. The shirt hasn't changed — the market price has.”"
      ],
      moral: "Experience is valued by the company, but the entry price is always dictated by the market."
    },
    {
      title: "Loyal to the Work",
      body: [
        "A company owner asked his officers to raise their hands if they were “loyal to the company.” Everyone raised a hand — except one man.",
        "“Why didn't you raise your hand? Are you not loyal?”",
        "“Sir, I am a professional. I am loyal to my work, not the company. As long as I am here, I will give a hundred percent and follow every ethic. But if a better opportunity comes, I will leave. I serve the work — and the work happens to be at your company for now.”"
      ],
      moral: "A professional's loyalty is to his craft; a sycophant's loyalty is only to the logo."
    },
    {
      title: "Reduction in Manpower",
      body: [
        "Under pressure to cut costs, a manager told the housekeeping contractor to reduce his workforce of 40 by twenty percent. The contractor agreed.",
        "The next day, the manager saw the same number of people working and summoned him.",
        "“Despite your consent, why wasn't manpower reduced?”",
        "“Sir, I have reduced by twenty percent. Yesterday, thirty men and ten women were on my team. Today, we reduced six men — only twenty-four men reported.”",
        "“What was your total manpower yesterday?” — “40.” — “What is it today?” — “40.” — “Then where is the reduction?”",
        "“Sir, as per your advice, I reduced the men only — and to keep the work going, I hired the same number of women instead.”"
      ],
      moral: "An instruction taken literally can be obeyed completely — and still accomplish nothing at all."
    },
    {
      title: "Rules Are for the Rulebook",
      body: [
        "Mr. X applied for leave, and it was rejected. He approached his supervisor for a reason.",
        "“It was rejected by the General Manager.”",
        "Mr. X sought an appointment and asked the GM directly.",
        "“Two officers on your team are already on leave — hence yours was declined.”",
        "Mr. X argued that, six months earlier, four officers had been granted leave in a similar situation.",
        "“Mr. X,” the GM replied, “you should know you are working in a private company. Our strength is that we are not bound by any rule.”"
      ],
      moral: "In some workplaces, consistency is the one rule that never applies."
    },
    {
      title: "Office and Personal Relations",
      body: [
        "Mr. Y had an unusually close personal friendship with his boss, Mr. X — visiting his home often, tutoring his children for free, dining out together with their families. Confident in this bond, Mr. Y grew careless at work and often boasted of his closeness to Mr. X, intimidating other officers.",
        "At annual appraisal time, Mr. Y was certain of an excellent rating — but was rated poor instead. Furious, he confronted Mr. X.",
        "Mr. X smiled. “The rating is purely based on your contribution to office work, not our personal relationship. You need to improve your work and behaviour at office. As for us — our friendship remains the same, if you still wish to continue it.”"
      ],
      moral: "A good friendship and a good appraisal are judged by entirely different scales."
    },
    {
      title: "Strange Management Procedure",
      body: [
        "I joined a new company for a plant commissioning assignment, often working five to six hours on my weekly off days due to work pressure.",
        "At month-end, I was shocked to find four days marked as Leave Without Pay. Frustrated, I visited the payroll office, who said the deduction came on the planning office's advice.",
        "The planning office explained: I hadn't completed eight hours of duty on four days — days that happened to be my scheduled week-offs.",
        "After the timekeeper reviewed my full month's attendance, I was assured the salary would be corrected the following month."
      ],
      moral: "A rule applied without context can turn a diligent employee's extra effort into an accidental penalty."
    },
    {
      title: "The Sheep's Only Request",
      body: [
        "When market losses forced a company to cut employee perks and allowances, morale plummeted. Hoping to lift spirits, an HR representative asked employees directly what they expected from the company.",
        "An employee replied with a story: at the start of winter, a shepherd asked his sheep whether they wanted jackets or blankets for the cold season ahead.",
        "“Please,” the sheep replied, “just spare us from the haircut. That will be more than enough for us.”"
      ],
      moral: "When cuts keep coming, employees stop asking for more — they just ask to be left with what little they have."
    },
    {
      title: "First Comply, Then Complain",
      body: [
        "Giving a negative answer to a senior's first request is rarely received well.",
        "The wiser approach: first accept whatever is asked, then — after a sufficient cooling-off period — raise the problems you foresee."
      ],
      moral: "Compliance builds trust; only after that trust is earned does a complaint get a fair hearing."
    },
    {
      title: "Do and Die",
      body: [
        "There is no reason why.",
        "There is no room to reply.",
        "There is only do — and die."
      ],
      moral: "A wry reflection on the unspoken expectation many employees face in the corporate world: obedience first, questions never."
    },
    {
      title: "The Hike That Broke the Ladder",
      body: [
        "A sudden shift in policy meant a company began offering higher starting salaries to attract better talent at the point of hiring — but made no matching revision for existing employees, who grew increasingly frustrated and raised the matter with HR.",
        "“The company is bound to match the market benchmark for new hires,” the HR representative explained during a counselling session.",
        "One long-serving employee replied with quiet bitterness: “As far as I know, this must be the only industry in the world where fresh employees earn more than experienced ones — whose wages seem to shrink the longer they stay.”",
        "The HR representative promised a salary revision for the older employees soon."
      ],
      moral: "When the market decides what newcomers are worth, loyalty alone rarely decides what veterans are worth."
    }
  ]
},
{
  n: 12, num: "12", slug: "parting-wisdom",
  title: "Parting Wisdom",
  theme: "Life Lessons & Closing Reflections",
  blurb: "The book's quieter, reflective closing notes on work, worth and the human condition.",
  image: "assets/img/part-12.jpg",
  stories: [
    {
      title: "The Slap and the System",
      body: [
        "At a provision shop, I noticed an eight-year-old boy comfortably smoking a beedi on a bench. A passer-by slapped him, calling it shameful to smoke at such a tender age. The boy wept loudly; his father rushed over asking why.",
        "“He was smoking,” the stranger explained.",
        "“Was it bought with your money?” the father asked.",
        "“No, I'd never pay for that.”",
        "“Then why did you slap him? Apologise now, or I'll slap you instead.” The stranger apologised at once.",
        "I found the real reason behind such misery in a system that permits the sale of such harmful items purely for revenue — a system that seems to want misery to persist, even while praising its own morality for printing a warning label about health risks. It is the same system that quietly discourages the rise of good teachers, who are truly the spine of our society."
      ],
      moral: "A warning label printed beside a harmful product for sale is not the same thing as genuinely protecting anyone from it."
    },
    {
      title: "Keeping the Ghost Busy",
      body: [
        "A man, after years of devoted worship, finally summoned a ghost — who set one condition for service: his master must always keep him occupied with work, or else the ghost would eat him the moment there was nothing left to do.",
        "Given the ghost's immense power, every task was completed with the speed of lightning. Thinking quickly, the man devised a permanent solution: “I will assign you work as needed. In your idle time, you must simply climb up and down that pole in front of my house. This is my standing instruction.”",
        "The closing thought of the book asks — are we, too, not sometimes behaving just like that ghost, endlessly busy completing repetitive, unnecessary tasks simply because our leaders told us to?"
      ],
      moral: "An organization that fears idle hands more than idle purpose ends up manufacturing busyness instead of value."
    }
  ]
}
);

/* ---- derive ids, slugs and a flat reading order ---- */
(function () {
  var slugify = function (s) {
    return s.toLowerCase()
      .replace(/[\u2018\u2019'’]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };
  var flat = [];
  window.BOOK.parts.forEach(function (p) {
    p.stories.forEach(function (s, i) {
      s.part = p.n;
      s.index = i;
      s.id = p.n + "-" + (i + 1);
      s.slug = slugify(s.title);
      s.partTitle = p.title;
      s.partNum = p.num;
      s.words = s.body.join(" ").split(/\s+/).length;
      s.order = flat.length;
      flat.push(s);
    });
  });
  window.BOOK.flat = flat;
  window.BOOK.byId = {};
  flat.forEach(function (s) { window.BOOK.byId[s.id] = s; });
})();
