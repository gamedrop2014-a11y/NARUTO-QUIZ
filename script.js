window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const appContainer = document.getElementById('app-container');
        if (loadingScreen) loadingScreen.classList.add('hidden');
        if (appContainer) appContainer.classList.remove('hidden');
    }, 2000);
});

// Full Master Question Bank (150 Naruto Levels)
const quizQuestions = [
    // --- BATCH 1 (Questions 1-50) ---
    { q: "What is the name of Tsunade's pet pig?", options: ["Pakkun", "Tonton", "Akamaru", "Gamatatsu"], a: 1 },
    { q: "Who was the leader of the Akatsuki before Pain/Nagato took over?", options: ["Madara", "Obito", "Yahiko", "Kakuzu"], a: 2 },
    { q: "What is the name of Kakashi's ninken (ninja dog) pack leader?", options: ["Bull", "Shiba", "Pakkun", "Bisuke"], a: 2 },
    { q: "Which village is known as the Village Hidden in the Clouds?", options: ["Kumogakure", "Kirigakure", "Iwagakure", "Sunagakure"], a: 0 },
    { q: "Who is the mother of the Sage of Six Paths?", options: ["Mito Uzumaki", "Kaguya Otsutsuki", "Kushina Uzumaki", "Hinata Hyuga"], a: 1 },
    { q: "What is the name of Sasuke's team formed to hunt Itachi?", options: ["Team 7", "Team Taka", "Team Hebi", "Team Root"], a: 2 },
    { q: "What did Sasuke rename his team to after learning the truth about Itachi?", options: ["Team Hebi", "Team Taka", "Team Eagle", "Team Vengeance"], a: 1 },
    { q: "What jutsu does Minato use to teleport instantly using special kunai?", options: ["Body Flicker Technique", "Flying Thunder God", "Kamui", "Summoning Jutsu"], a: 1 },
    { q: "Who is the author of the 'Make-Out Tactics' book series?", options: ["Kakashi Hatake", "Tsunade", "Jiraiya", "Hiruzen Sarutobi"], a: 2 },
    { q: "What is the name of Gaara's father?", options: ["Rasa", "Baki", "Yashamaru", "Sasori"], a: 0 },
    { q: "Which sword does Suigetsu wield?", options: ["Samehada", "Kubikiribocho", "Kusanagi", "Nuibari"], a: 1 },
    { q: "Who gave Kakashi his Sharingan?", options: ["Fugaku Uchiha", "Madara Uchiha", "Obito Uchiha", "Shisui Uchiha"], a: 2 },
    { q: "What is the name of the First Hokage's wife?", options: ["Mito Uzumaki", "Tsunade Senju", "Kushina Uzumaki", "Biwako Sarutobi"], a: 0 },
    { q: "What is the Eight Gates technique called when all gates are opened?", options: ["Eight Gates Released Formation", "Primary Lotus", "Hidden Lotus", "Night Guy"], a: 0 },
    { q: "Who was the first ninja to reanimate the Dead (Edo Tensei)?", options: ["Orochimaru", "Kabuto", "Tobirama Senju", "Madara Uchiha"], a: 2 },
    { q: "What is the name of Asuma Sarutobi and Kurenai Yuhi's daughter?", options: ["Mirai", "Moegi", "Hanabi", "Kurotsuchi"], a: 0 },
    { q: "Which Akatsuki member uses explosive clay for their jutsu?", options: ["Sasori", "Deidara", "Hidan", "Kakuzu"], a: 1 },
    { q: "Who defeated Sasori in the rescue mission for Gaara?", options: ["Naruto and Kakashi", "Sakura and Chiyo", "Sasuke and Orochimaru", "Shikamaru and Temari"], a: 1 },
    { q: "What is the name of the puppet master who created Sasori's original puppets?", options: ["Kankuro", "Chiyo", "Monzaemon Chikamatsu", "Ebizou"], a: 2 },
    { q: "Which chakra nature is required to perform the Rasenshuriken?", options: ["Wind", "Lightning", "Fire", "Water"], a: 0 },
    { q: "What is the name of Rock Lee's son?", options: ["Metal Lee", "Iron Lee", "Steel Lee", "Titan Lee"], a: 0 },
    { q: "Which member of the Sound Four has multiple arms and uses a bow?", options: ["Jirobo", "Kidomaru", "Sakon", "Tayuya"], a: 1 },
    { q: "Which member of the Sound Four uses a flute to cast Genjutsu?", options: ["Tayuya", "Sakon", "Kidomaru", "Jirobo"], a: 0 },
    { q: "Who was known as the 'Demon of the Hidden Mist'?", options: ["Kisame Hoshigaki", "Zabuza Momochi", "Chojuro", "Yagura"], a: 1 },
    { q: "What is the name of the Three-Tails?", options: ["Isobu", "Son Goku", "Matatabi", "Kokuo"], a: 0 },
    { q: "What is the name of the Four-Tails?", options: ["Saiken", "Chomei", "Son Goku", "Gyuki"], a: 2 },
    { q: "Which Tailed Beast looks like a giant beetle?", options: ["Chomei", "Saiken", "Isobu", "Kokuo"], a: 0 },
    { q: "Who was the Second Mizukage?", options: ["Mei Terumi", "Yagura Karatachi", "Gengetsu Hozuki", "Byakuren"], a: 2 },
    { q: "What technique allows the user to copy their appearance exactly to someone else?", options: ["Clone Jutsu", "Transformation Jutsu", "Substitution Jutsu", "Shadow Clone Jutsu"], a: 1 },
    { q: "What is the name of the chakra pathway system blockages that Neji strikes?", options: ["Chakra Gates", "Tenketsu", "Meridians", "Nerve Points"], a: 1 },
    { q: "Who is the Raikage's right-hand man who uses Storm Release?", options: ["Darui", "Cee", "Omoi", "Killer Bee"], a: 0 },
    { q: "What village does Kurotsuchi become the Kage of in Boruto?", options: ["Hidden Stone", "Hidden Cloud", "Hidden Sand", "Hidden Mist"], a: 0 },
    { q: "Who was Naruto's teammate when they first took the bell test?", options: ["Shikamaru and Choji", "Sasuke and Sakura", "Kiba and Hinata", "Neji and Lee"], a: 1 },
    { q: "What is the name of Orochimaru's main hideout village?", options: ["Hidden Sound", "Hidden Rain", "Hidden Grass", "Hidden Waterfall"], a: 0 },
    { q: "Which Uchiha awakened his Mangekyo Sharingan after witnessing Rin's death?", options: ["Kakashi", "Obito", "Both Kakashi and Obito", "Itachi"], a: 2 },
    { q: "What is the name of the giant wooden statue Hashirama summons?", options: ["True Several Thousand Hands", "Wood Golem", "Laughing Buddha", "Wood Dragon"], a: 0 },
    { q: "What does the word 'Hokage' translate to?", options: ["Fire Shadow", "Earth Shadow", "Wind Shadow", "Water Shadow"], a: 0 },
    { q: "What rank was Naruto before he became Hokage?", options: ["Genin", "Chunin", "Jonin", "Anbu"], a: 0 },
    { q: "Who gave Naruto his iconic orange jacket in Shippuden?", options: ["Jiraiya", "Kakashi", "Iruka", "Tsunade"], a: 0 },
    { q: "What is the name of Konohamaru's uncle?", options: ["Hiruzen", "Asuma", "Danzo", "Shikaku"], a: 1 },
    { q: "Which ninja weapon is a giant folding fan?", options: ["Madara's Gunbai", "Temari's Fan", "Tenten's Scroll", "Bashosen"], a: 1 },
    { q: "What is the main ability of the Byakugan?", options: ["Casting Genjutsu", "Seeing chakra pathways and 360-degree vision", "Copying Jutsu", "Controlling Tailed Beasts"], a: 1 },
    { q: "Who is the leader of the Inuzuka clan during Naruto's childhood?", options: ["Kiba", "Tsume", "Hana", "Inoichi"], a: 1 },
    { q: "What jutsu did Naruto use to defeat Kiba in the Chunin Exams?", options: ["Rasengan", "Naruto Uzumaki Barrage", "Shadow Clone Jutsu", "Wind Scythe"], a: 1 },
    { q: "Who was the examiner for the first phase of the Chunin Exams?", options: ["Anko Mitarashi", "Ibiki Morino", "Hayate Gekko", "Genma Shiranui"], a: 1 },
    { q: "What was the answer to the 10th question in the Chunin Exams written test?", options: ["Never give up", "Protect your comrades", "There was no answer, you just had to stay", "Sacrifice yourself"], a: 2 },
    { q: "Which sword does Orochimaru wield?", options: ["Sword of Totsuka", "Sword of Kusanagi", "Samehada", "Hiramekarei"], a: 1 },
    { q: "What mythical item does Itachi's Susanoo wield that seals away anything it pierces?", options: ["Yata Mirror", "Sword of Totsuka", "Bashosen", "Amber Purifying Pot"], a: 1 },
    { q: "What shields Itachi's Susanoo from all physical and spiritual attacks?", options: ["Sand Shield", "Yata Mirror", "Truth-Seeking Balls", "Wood Dome"], a: 1 },
    { q: "What is the name of the final valley where Naruto and Sasuke fight?", options: ["Valley of The End", "Valley of Heroes", "Canyon of Shadows", "Waterfall of Truth"], a: 0 },

    // --- BATCH 2 (Questions 51-100) ---
    { q: "Who is the Third Hokage of the Hidden Leaf Village?", options: ["Danzo Shimura", "Hiruzen Sarutobi", "Homura Mitokado", "Koharu Utatane"], a: 1 },
    { q: "What is Naruto Uzumaki's signature catchphrase in Japanese?", options: ["Believe it!", "Dattebayo!", "Shannaro!", "Troublesome"], a: 1 },
    { q: "What is the name of Choji Akimichi's father?", options: ["Choza Akimichi", "Shikaku Nara", "Inoichi Yamanaka", "Sakumo Hatake"], a: 0 },
    { q: "Who is Ino Yamanaka's father?", options: ["Inoichi Yamanaka", "Choza Akimichi", "Shikaku Nara", "Hiashi Hyuga"], a: 0 },
    { q: "What is Shikamaru Nara's father's name?", options: ["Shikaku Nara", "Shikadai Nara", "Inoichi Yamanaka", "Choza Akimichi"], a: 0 },
    { q: "What is the name of the rogue ninja who tricks Naruto into stealing a scroll in episode 1?", options: ["Mizuki", "Kabuto", "Iruka", "Ebisu"], a: 0 },
    { q: "What technique does Naruto use to defeat Mizuki in the very first episode?", options: ["Rasengan", "Multi Shadow Clone Jutsu", "Substitution Jutsu", "Transformation Jutsu"], a: 1 },
    { q: "What is the name of the giant turtle island where Naruto trains to control the Nine-Tails?", options: ["Mount Myoboku", "Island Turtle (Genbu)", "Ryuchi Cave", "Shikkotsu Forest"], a: 1 },
    { q: "Who is the Cloud Village resident that helps Naruto control Kurama and holds a grudge against Killer Bee?", options: ["Motoi", "Darui", "Cee", "Samui"], a: 0 },
    { q: "What animal does the Second Mizukage use for his illusion technique?", options: ["Giant Clam", "Sea Serpent", "Giant Octopus", "Shark"], a: 0 },
    { q: "Who is the Fourth Kazekage and Gaara's father?", options: ["Rasa", "Baki", "Yashamaru", "Kankuro"], a: 0 },
    { q: "What is the name of the medical ninja who is Tsunade's trusted assistant?", options: ["Shizune", "Tenten", "Kurenai", "Mei"], a: 0 },
    { q: "What clan is recognized for their Aburame secret technique involving insects?", options: ["Aburame Clan", "Akimichi Clan", "Inuzuka Clan", "Nara Clan"], a: 0 },
    { q: "Which Akatsuki member was formerly a member of the Seven Ninja Swordsmen of the Mist and wielded Kubikiribocho?", options: ["Zabuza Momochi", "Kisame Hoshigaki", "Suigetsu Hozuki", "Chojuro"], a: 0 },
    { q: "What is the name of the hidden village located in the Land of Rain?", options: ["Amegakure", "Otogakure", "Sunagakure", "Iwagakure"], a: 0 },
    { q: "Who is the leader of the Hidden Rain Village who teams up with Hanzo before being overthrown by Pain?", options: ["Yahiko", "Nagato", "Konan", "Obito"], a: 0 },
    { q: "What is the name of the paper-manipulating kunoichi in the Akatsuki?", options: ["Konan", "Kurenai", "Mei Terumi", "Kurotsuchi"], a: 0 },
    { q: "Which Tailed Beast is known as the Six-Tails and manifests as a slug-like creature?", options: ["Saiken", "Chomei", "Isobu", "Kokuo"], a: 0 },
    { q: "Which Tailed Beast is known as the Two-Tails and takes the form of a flaming blue cat?", options: ["Matatabi", "Shukaku", "Isobu", "Gyuki"], a: 0 },
    { q: "What is the name of the barrier technique used by the Four Hokage to hold down the Ten-Tails?", options: ["Four-Corner Sealing Barrier", "Four Red Yang Formation", "Five Seal Barrier", "Eight Trigrams Sealing Style"], a: 1 },
    { q: "Who becomes the Fifth Kazekage of the Hidden Sand Village?", options: ["Gaara", "Kankuro", "Temari", "Baki"], a: 0 },
    { q: "What is the name of the massive hammer and blunt sword wielded by Jinin Akebino of the Seven Swordsmen?", options: ["Kabutowari (Helmet Splitter)", "Nuibari", "Kiba", "Hiramekarei"], a: 0 },
    { q: "Which sword of the Seven Ninja Swordsmen can sew things together like thread?", options: ["Nuibari (Sewing Needle)", "Kabutowari", "Shibuki", "Samehada"], a: 0 },
    { q: "What is the name of the explosive scroll-wrapped sword used by Jinpachi Munashi?", options: ["Shibuki (Splash)", "Nuibari", "Kiba", "Kubikiribocho"], a: 0 },
    { q: "What are the twin lightning-infused swords wielded by Ameyuri Ringo called?", options: ["Kiba (Fangs)", "Hiramekarei", "Samehada", "Kusanagi"], a: 0 },
    { q: "Who is the Mizukage during the Fourth Great Ninja War?", options: ["Mei Terumi", "Yagura", "Chojuro", "Gengetsu"], a: 0 },
    { q: "What is the name of the Tsuchikage who fights alongside the alliance during the war with particle style?", options: ["Onoki", "Mu", "Kurotsuchi", "Akatsuchi"], a: 0 },
    { q: "What is the primary nature transformation of Onoki's Particle Style (Jinton)?", options: ["Dust Release (combining Wind, Earth, and Fire)", "Lava Release", "Storm Release", "Boil Release"], a: 0 },
    { q: "What is the name of the Second Tsuchikage who taught Onoki Particle Style?", options: ["Mu", "Gengetsu", "Byakuren", "Rasa"], a: 0 },
    { q: "Which Akatsuki member's partner is Hidan?", options: ["Kakuzu", "Deidara", "Sasori", "Kisame"], a: 0 },
    { q: "What is the name of the technique where Naruto and Sasuke combine their attacks using a giant shuriken?", options: ["Demon Wind Shuriken: Windmill Triple Threat", "Shadow Shuriken Jutsu", "Twin Rising Dragons", "Vortex Shuriken"], a: 0 },
    { q: "Who is the Academy teacher that oversees Naruto's class alongside Iruka early on?", options: ["Mizuki", "Ebisu", "Kurenai", "Genma"], a: 0 },
    { q: "What is the name of the special elite guard squad that protects the Hokage directly?", options: ["Anbu Black Ops", "Root", "The Military Police Force", "The Guardian Shinobi Twelve"], a: 0 },
    { q: "Who led the Konoha Military Police Force primarily before the Uchiha Clan Downfall?", options: ["Fugaku Uchiha", "Mikoto Uchiha", "Shisui Uchiha", "Danzo Shimura"], a: 0 },
    { q: "What is the name of the ninja temple guardian who possesses the Cat-Faced spirit and fought alongside Asuma?", options: ["Chiriku", "Kinkaku", "Ginkaku", "Rasa"], a: 0 },
    { q: "What are the notorious criminal brothers from the Hidden Cloud known for swallowing Kurama's flesh?", options: ["Kinkaku and Ginkaku", "Demon Brothers", "The Sand Siblings", "The Sound Four"], a: 0 },
    { q: "What sacred treasure tool of the Sage of Six Paths forces an opponent's 'spirit word' out when they speak?", options: ["Benihisago (Crimson Gourd)", "Bashosen Fan", "Kohaku no Jo", "Shichiseiken Sword"], a: 0 },
    { q: "What is the name of the sword that records and curses the spoken words of targets?", options: ["Shichiseiken (Seven Star Sword)", "Bashosen", "Benihisago", "Samehada"], a: 0 },
    { q: "What fan can produce all five basic chakra nature elements simultaneously?", options: ["Bashosen (Banana Palm Fan)", "Gunbai", "Temari's Fan", "Tenten's Scroll"], a: 0 },
    { q: "What is the name of the large pot used to seal entities that respond to the caller's voice?", options: ["Kohaku no Jo (Amber Purifying Pot)", "Benihisago", "Gedo Mazo", "Reaper Pot"], a: 0 },
    { q: "Who is the legendary shinobi known as the 'Gold and Silver Brothers'?", options: ["Kinkaku and Ginkaku", "Izuna and Madara", "Asura and Indra", "Hagoromo and Hamura"], a: 0 },
    { q: "What is the name of the third member of Team 8 alongside Kiba and Shino?", options: ["Hinata Hyuga", "Tenten", "Ino Yamanaka", "Sakura Haruno"], a: 0 },
    { q: "What is the name of the specialized medical ninjutsu technique created by Tsunade that grants extreme regeneration?", options: ["Creation Rebirth / Strength of a Hundred Technique", "Chakra Scalpel", "Mystical Palm Technique", "Healing Resuscitation Regeneration"], a: 0 },
    { q: "What is the name of the slug summoned by Tsunade to heal the Leaf Village during the Pain assault?", options: ["Katsuyu", "Gamabunta", "Aoda", "Manda"], a: 0 },
    { q: "What is the name of Sasuke's personal giant snake summon introduced in Shippuden?", options: ["Manda", "Aoda", "Garaga", "Aoda Jr."], a: 0 },
    { q: "What is the name of the synthetic white snake clone companion created by Kabuto?", options: ["Manda II", "White Snake", "Orochimaru's Pet", "Kin"], a: 0 },
    { q: "Who is the swift, masked ANBU member who works closely with Danzo and uses wood style?", options: ["Torune", "Fu", "Yamato (Tenzo)", "Sai"], a: 2 },
    { q: "What is Yamato's real code name while working under Danzo's Root foundation?", options: ["Kinoe (Branch)", "Tenzo", "Root 1", "Anbu 0"], a: 0 },
    { q: "What is the name of the village where Kakashi's team encounters Zabuza in the Land of Waves arc?", options: ["Land of Waves", "Land of Snow", "Land of Grass", "Land of Tea"], a: 0 },
    { q: "Who is the young wealthy boy that Team 7 protects during their bridge-building mission in the Land of Waves?", options: ["Inari", "Tazuna", "Konohamaru", "Moegi"], a: 0 },

    // --- BATCH 3 (Questions 101-150) ---
    { q: "What is the name of Tazuna's grandson who looks up to Naruto in the Land of Waves?", options: ["Inari", "Konohamaru", "Shikadai", "Boruto"], a: 0 },
    { q: "What is the name of the bridge builder protected by Team 7 in their first major mission?", options: ["Tazuna", "Gato", "Genma", "Chiriku"], a: 0 },
    { q: "Who is the corrupt shipping magnate who acts as the primary antagonist in the Land of Waves arc?", options: ["Gato", "Zabuza", "Danzo", "Orochimaru"], a: 0 },
    { q: "What is the name of the technique where Naruto uses multiple shadow clones to swarm an opponent with punches?", options: ["Naruto Uzumaki Barrage", "Shadow Clone Jutsu", "Rasengan", "Harem Jutsu"], a: 0 },
    { q: "What transformation jutsu does Naruto invent that uses transformation on shadow clones to distract targets?", options: ["Sexy Jutsu / Harem Jutsu", "Multi Shadow Clone", "Transformation Technique", "Substitution"], a: 0 },
    { q: "Who is the Third Hokage's grandson who idolizes Naruto?", options: ["Konohamaru Sarutobi", "Asuma Sarutobi", "Inari", "Shikadai"], a: 0 },
    { q: "What is the name of Konohamaru's teammates in his Academy genin squad?", options: ["Moegi and Udon", "Shika-Ino-Cho", "Team 7", "Team 8"], a: 0 },
    { q: "What is the name of the technique where Naruto transforms into a female to stun enemies?", options: ["Sexy Jutsu (Oiroke no Jutsu)", "Transformation Jutsu", "Shadow Clone", "Bikini Jutsu"], a: 0 },
    { q: "Who is the legendary sannin known as the Snake Shinobi?", options: ["Orochimaru", "Jiraiya", "Tsunade", "Hiruzen"], a: 0 },
    { q: "Who is the legendary sannin known as the Toad Sage?", options: ["Jiraiya", "Orochimaru", "Tsunade", "Kakashi"], a: 0 },
    { q: "Who is the legendary sannin known as the Slug Princess?", options: ["Tsunade", "Sakura", "Kushina", "Mei"], a: 0 },
    { q: "What animal does Danzo have grafted onto his right arm alongside sharingan eyes?", options: ["Hashirama Cells", "Snake DNA", "Monkey DNA", "Toad Oil"], a: 0 },
    { q: "What is the name of the secret technique used by the Nara clan to snap necks or hold shadows?", options: ["Shadow Possession Jutsu", "Mind Transfer", "Expansion Jutsu", "Insect Jamming"], a: 0 },
    { q: "What is the name of the Yamanaka clan technique that shifts consciousness into an enemy body?", options: ["Mind Transfer Jutsu (Shintenshin no Jutsu)", "Shadow Possession", "Byakugan", "Genjutsu Release"], a: 0 },
    { q: "What is the name of the Akatsuki member who wears an orange swirling mask and calls himself Tobi?", options: ["Obito Uchiha", "Madara Uchiha", "Izuna Uchiha", "Shisui Uchiha"], a: 0 },
    { q: "What is the name of the shadowy entity that merges with Obito and manipulates the Akatsuki behind the scenes?", options: ["Black Zetsu", "White Zetsu", "Kabuto", "Pain"], a: 0 },
    { q: "What is the name of the army of humanoid clones created by Kaguya and used by Akatsuki during the war?", options: ["White Zetsu Army", "Shadow Clones", "Edo Tensei Army", "Sound Ninja Army"], a: 0 },
    { q: "Who is the creator of the White Zetsu clones originating from victims trapped in the Infinite Tsukuyomi?", options: ["Kaguya Otsutsuki", "Madara Uchiha", "Black Zetsu", "Orochimaru"], a: 0 },
    { q: "What is the name of the ultimate genjutsu that reflects off the moon to trap the entire world in a dream?", options: ["Infinite Tsukuyomi", "Kotoamatsukami", "Izanami", "Tsukuyomi"], a: 0 },
    { q: "What item is required to cast the Infinite Tsukuyomi on the world?", options: ["Rinne Sharingan on the forehead", "Mangekyo Sharingan", "Byakugan", "Tenseigan"], a: 0 },
    { q: "What is the name of the powerful eye variant possessed by Kaguya and Madara with concentric circles and a red tomoe pattern?", options: ["Rinne Sharingan", "Sharingan", "Byakugan", "Rinnegan"], a: 0 },
    { q: "Who gives Naruto half of his Sage of Six Paths chakra power during the war?", options: ["Hagoromo Otsutsuki", "Minato", "Jiraiya", "Hashirama"], a: 0 },
    { q: "Who gives Sasuke the other half of the Sage of Six Paths power, awakening his Rinnegan?", options: ["Hagoromo Otsutsuki", "Madara", "Itachi", "Tobirama"], a: 0 },
    { q: "What color is Sasuke's unique left Rinnegan eye containing six tomoe?", options: ["Purple with 6 Tomoe", "Red", "Blue", "Black"], a: 0 },
    { q: "What is the name of Sasuke's unique space-time ninjutsu enabled by his Rinnegan?", options: ["Amenotejikara (Instant Teleportation/Switching)", "Kamui", "Flying Thunder God", "Body Flicker"], a: 0 },
    { q: "What is the name of Naruto's glowing orange transformation mode featuring floating Truth-Seeking Balls?", options: ["Six Paths Sage Mode", "Nine-Tails Chakra Mode", "Curse Mark Phase 2", "Sage Mode"], a: 0 },
    { q: "What are the black, malleable spheres of complete elemental control used by Six Paths users called?", options: ["Truth-Seeking Balls", "Chakra Orbs", "Black Spheres", "Bijuu Dama"], a: 0 },
    { q: "What is the name of the giant fox-shaped avatar formed by Naruto using Kurama's full power?", options: ["Kurama Avatar / Susanoo Kurama", "Gedo Mazo", "Six Paths Fox", "Bijuu Mode"], a: 0 },
    { q: "Who is the final main antagonist defeated by Naruto and Sasuke at the end of Shippuden?", options: ["Kaguya Otsutsuki", "Madara Uchiha", "Sasuke Uchiha", "Obito Uchiha"], a: 0 },
    { q: "Who is the final opponent Naruto fights at the Valley of the End in Shippuden?", options: ["Sasuke Uchiha", "Madara", "Pain", "Kaguya"], a: 0 },
    { q: "Who becomes the Seventh Hokage of the Hidden Leaf Village?", options: ["Naruto Uzumaki", "Kakashi Hatake", "Sasuke Uchiha", "Shikamaru Nara"], a: 0 },
    { q: "Who serves as the Sixth Hokage right before Naruto takes office?", options: ["Kakashi Hatake", "Tsunade", "Danzo", "Shikamaru"], a: 0 },
    { q: "What is the name of Naruto and Hinata's son who is the protagonist of his own series?", options: ["Boruto Uzumaki", "Kawaki", "Himawari", "Minato"], a: 0 },
    { q: "What is the name of Naruto and Hinata's younger daughter?", options: ["Himawari Uzumaki", "Sarada", "Chocho", "Mirai"], a: 0 },
    { q: "What rare eye technique does Himawari accidentally awaken when angry, knocking out Naruto and Kurama?", options: ["Byakugan", "Sharingan", "Rinnegan", "Tenseigan"], a: 0 },
    { q: "Who is the mysterious adopted brother/rival of Boruto Uzumaki who possesses a modified Karma mark?", options: ["Kawaki", "Mitsuki", "Shikadai", "Inojin"], a: 0 },
    { q: "Who is Orochimaru's synthetic artificial son who is part of Boruto's Team 7?", options: ["Mitsuki", "Kawaki", "Log", "Suigetsu"], a: 0 },
    { q: "What is the name of Boruto's teacher who leads Team 7 in the sequel series?", options: ["Konohamaru Sarutobi", "Kakashi Hatake", "Sasuke Uchiha", "Moegi"], a: 0 },
    { q: "Who trains Boruto Uzumaki as his personal mentor in shadow arts and swordsmanship?", options: ["Sasuke Uchiha", "Naruto Uzumaki", "Kakashi", "Konohamaru"], a: 0 },
    { q: "What is the name of the mysterious power seal branded onto Boruto after defeating Momoshiki Otsutsuki?", options: ["Karma Mark", "Cursed Seal of Heaven", "Byakugou Seal", "Anbu Tattoo"], a: 0 },
    { q: "Which celestial clan serves as the primary cosmic threat in the Boruto era?", options: ["Otsutsuki Clan", "Uchiha Clan", "Senju Clan", "Kaguya Clan"], a: 0 },
    { q: "What is the name of Momoshiki Otsutsuki's loyal servant who accompanies him?", options: ["Kinshiki Otsutsuki", "Urashiki", "Isshiki", "Jigen"], a: 0 },
    { q: "What is the name of the Otsutsuki member who hides inside Jigen's body and shrinks objects?", options: ["Isshiki Otsutsuki", "Momoshiki", "Kinshiki", "Toneri"], a: 0 },
    { q: "What is the name of the lunar Otsutsuki descendant who tries to marry Hinata in 'The Last: Naruto the Movie'?", options: ["Toneri Otsutsuki", "Hamura", "Hagoromo", "Indra"], a: 0 },
    { q: "What eye evolution does Toneri achieve on the moon by stealing Hanabi's eyes?", options: ["Tenseigan", "Rinnegan", "Byakugan", "Mangekyo Sharingan"], a: 0 },
    { q: "What is the name of the special jutsu Naruto uses to finish off Toneri Otsutsuki in 'The Last'?", options: ["Rasengan / Uzumaki Barrage variant", "Chidori", "Amaterasu", "Bijuu Dama"], a: 0 },
    { q: "Which character becomes the Fifth Mizukage after the Fourth Great Ninja War?", options: ["Chojuro", "Mei Terumi", "Yagura", "Ao"], a: 0 },
    { q: "Which character becomes the Fourth Tsuchikage succeeding Onoki?", options: ["Kurotsuchi", "Akatsuchi", "Mu", "Deidara"], a: 0 },
    { q: "Which character becomes the Fifth Kazekage alongside Gaara's council?", options: ["Gaara remains Kazekage", "Kankuro", "Temari", "Shinki"], a: 0 },
    { q: "What is the name of Gaara's adopted sand-manipulating puppet son in Boruto?", options: ["Shinki", "Yodo", "Araya", "Matsuri"], a: 0 }
];

let currentQuestionIndex = 0;
let score = 0;
let lives = 3;

// --- Settings & Modal Functions ---
function openSettings() {
    const modal = document.getElementById('settings-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeSettings() {
    const modal = document.getElementById('settings-modal');
    if (modal) modal.classList.add('hidden');
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    const modal = document.getElementById('settings-modal');
    if (event.target === modal) {
        closeSettings();
    }
}

function resetGame() {
    if (confirm("Are you sure you want to reset your game? You will start from Level 1!")) {
        localStorage.removeItem('narutoQuizLevel');
        localStorage.removeItem('narutoQuizScore');
        localStorage.removeItem('narutoQuizLives');
        
        closeSettings();
        
        const quizScreen = document.getElementById('quiz-screen');
        if (!quizScreen.classList.contains('hidden')) {
            startQuiz();
        }
        alert("Game Reset! Start your ninja journey again.");
    }
}

// --- Core Game Functions ---
function startQuiz() {
    const mainContent = document.getElementById('main-content');
    const quizScreen = document.getElementById('quiz-screen');
    
    if (mainContent) mainContent.classList.add('hidden');
    if (quizScreen) quizScreen.classList.remove('hidden');
    
    // Load progress from Local Storage
    const savedLevel = localStorage.getItem('narutoQuizLevel');
    const savedScore = localStorage.getItem('narutoQuizScore');
    const savedLives = localStorage.getItem('narutoQuizLives');

    if (savedLevel !== null) {
        currentQuestionIndex = parseInt(savedLevel);
        score = parseInt(savedScore);
        lives = parseInt(savedLives);
    } else {
        currentQuestionIndex = 0;
        score = 0;
        lives = 3;
    }

    loadQuestion();
}

function goHome() {
    const quizScreen = document.getElementById('quiz-screen');
    const mainContent = document.getElementById('main-content');
    if (quizScreen) quizScreen.classList.add('hidden');
    if (mainContent) mainContent.classList.remove('hidden');
}

function loadQuestion() {
    const feedbackContainer = document.getElementById('feedback-container');
    const optionsContainer = document.getElementById('options-container');
    
    if (feedbackContainer) feedbackContainer.classList.add('hidden');
    if (optionsContainer) optionsContainer.classList.remove('hidden');

    // Update Shuriken UI
    let shurikenDisplay = "";
    for (let i = 0; i < 3; i++) {
        shurikenDisplay += (i < lives) ? "⭐ " : "❌ "; 
    }
    const shurikenEl = document.getElementById('shuriken-container');
    if (shurikenEl) shurikenEl.innerText = shurikenDisplay;

    // Game Over Check
    if (lives <= 0) {
        document.getElementById('question-text').innerText = `Game Over! You lost all your Shurikens. Final Score: ${score}`;
        optionsContainer.innerHTML = `<button class="option-btn" onclick="resetGame()">Start New Game</button>`;
        document.getElementById('question-counter').innerText = "Defeated";
        return;
    }

    // Victory Check
    if (currentQuestionIndex >= quizQuestions.length) {
        document.getElementById('question-text').innerText = `Legendary! You beat all 150 levels! Final Score: ${score}`;
        optionsContainer.innerHTML = `<button class="option-btn" onclick="resetGame()">Play Again</button>`;
        document.getElementById('question-counter').innerText = "Hokage Rank";
        return;
    }

    // Load next question/level
    const q = quizQuestions[currentQuestionIndex];
    document.getElementById('question-counter').innerText = `Level ${currentQuestionIndex + 1}`;
    document.getElementById('question-text').innerText = q.q;
    
    optionsContainer.innerHTML = "";
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index, q.a, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, correctIndex, selectedBtn) {
    const feedbackContainer = document.getElementById('feedback-container');
    const optionsContainer = document.getElementById('options-container');
    
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (feedbackContainer) feedbackContainer.classList.remove('hidden');
    
    if (selectedIndex === correctIndex) {
        score++;
        selectedBtn.style.backgroundColor = '#48bb78'; // Green
        feedbackContainer.innerHTML = `
            <h3 style="color: #48bb78;">Correct, Dattebayo! 🎉</h3>
            <button class="start-btn" onclick="nextLevel()">Next Level</button>
        `;
    } else {
        lives--; 
        selectedBtn.style.backgroundColor = '#f56565'; // Red
        
        if (lives > 0) {
            feedbackContainer.innerHTML = `
                <h3 style="color: #f56565;">Wrong technique! ❌</h3>
                <p style="color: #a0aec0; margin-bottom: 15px; font-size: 14px;">You lost 1 Shuriken. Lives left: ${lives}</p>
                <button class="start-btn" onclick="nextLevel()">Next Level</button>
            `;
        } else {
            feedbackContainer.innerHTML = `
                <h3 style="color: #f56565;">Out of Shurikens! ❌</h3>
                <button class="start-btn" onclick="nextLevel()">See Results</button>
            `;
        }
    }
}

function nextLevel() {
    currentQuestionIndex++;
    
    // Save state to Local Storage
    localStorage.setItem('narutoQuizLevel', currentQuestionIndex);
    localStorage.setItem('narutoQuizScore', score);
    localStorage.setItem('narutoQuizLives', lives);
    
    loadQuestion();
}