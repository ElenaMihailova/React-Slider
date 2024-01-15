const data = [
  {
    id: 1,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/Cyanea_capillata_X1DIIcompressed.jpg',
    location: 'White Sea, Russia',
    description:
      'Marine biologist Alexander Semenov calls the lion’s mane jellyfish the queen of the Arctic seas. He photographed this regal specimen in its final stage of life: Having reproduced, it has shrunk in size, digested or shed its hundreds of long tentacles, and become, in Semenov’s words, an “alien flower.”',
    author: 'ALEXANDER SEMENOV',
  },
  {
    id: 2,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/MM9498_221006_2358.jpg',
    location: 'Coconino County, Arizona',
    description:
      'Before the Artemis program sends humans to the lunar surface, NASA performs high-fidelity tests on Earth. For a mock moonwalk, astronaut Zena Cardman wore this training suit weighing more than 80 pounds to simulate a real suit’s range of motion and weight in lunar gravity.',
    author: 'DAN WINTERS',
  },
  {
    id: 3,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/LP2_8370.jpg',
    location: 'Sodankylä, Finland',
    description:
      'At a military facility north of the Arctic Circle, Finnish and U.S. soldiers train for winter warfare by navigating an obstacle course while on skis. The exercise took place two months before Finland—which shares an 800-mile border with Russia—joined NATO. The training was arranged in response to the war in Ukraine.',
    author: 'LOUIE PALU',
  },
  {
    id: 4,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/_DSC9142.jpg',
    location: 'Doñana National Park, Spain',
    description:
      'Pilgrims sing, dance, and play flamenco during a stop along their spring journey to the Virgin of Rocío shrine. Photographer Aitor Lara says that the group’s lyrics “reflect the magical experience of the pilgrimage and the joy of being able to present their fervor to the Virgin.”',
    author: 'AITOR LARA',
  },
  {
    id: 5,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/A8565_20230427_14723.jpg',
    location: 'Xi’an, China',
    description:
      'On Chinese Labor Day, tourists pose for a selfie in front of a pagoda and bronze statue of Xuanzang, the seventh-century Buddhist monk who spent 16 years on a pilgrimage to India and translated dozens of manuscripts from Sanskrit into Chinese.',
    author: 'JOHN STANMEYER',
  },
  {
    id: 6,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/2023CP07_0689.jpg',
    location: 'Chiba, Japan',
    description:
      'Workers at the Chiba Kogaku glass factory use sledgehammers to remove the clay pot around a core of optical glass. Highly resistant to air-temperature changes, the glass will be cut into slabs, shipped to the University of Arizona, then melted and cast into mirrors for large, high-altitude telescopes.',
    author: 'CHRISTOPHER PAYNE',
  },
  {
    id: 7,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/MM9150_230205_000240.jpg',
    location: 'Frasassi Caves, Italy',
    description:
      'Caver Valentina Mariani (above), National Geographic Explorer Kenny Broad (center), and Nadir Quarta prepare for a dive into the dark, toxic waters of Lago Verde. Such sunlight-starved ecosystems could offer a glimpse into the chemistry of life in alien seas.',
    author: 'CARSTEN PETER',
  },
  {
    id: 8,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/EC95844S22_230411_004450.jpg',
    location: 'Northwest Territories, Canada',
    description:
      'Inuvialuit herders move Canada’s last free-range herd of reindeer, numbering around 4,000, to the animals’ calving grounds. The Inuvialuit Regional Corporation took full ownership of the herd in 2021 with a goal of growing a sustainable food source.',
    author: 'KATIE ORLINSKY',
  },
  {
    id: 9,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/MM9231_230708_05783.jpg',
    location: 'Jarqorgon, Uzbekistan',
    description:
      'An all-woman ceremony beneath a hand-embroidered suzani marks a son’s departure to study in the capital, Tashkent. While one recites Quranic verses, others remove a covering to bless the flatbread. This ritual was influenced by Zoroastrianism, one of the world’s oldest living religions.',
    author: 'MATTHIEU PALEY',
  },
  {
    id: 10,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/MM10067_230202_01312.jpg',
    location: 'Chicago, Illinois',
    description:
      'A seven-foot-long zebra shark glides through an exhibit at Shedd Aquarium, one of several aquariums where endangered zebra sharks are breeding to produce eggs for shipment to Indonesia. They will be raised and released into a marine protected area in Raja Ampat to rebuild its wild population.',
    author: ' DAVID DOUBILET',
  },
  {
    id: 11,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/MM9852_221015_043798.jpg',
    location: 'Valparai, India',
    description:
      'Elephants wander a tea estate that was once part of their forest habitat before being converted to crop production in the late 1800s. Today about 70,000 people live and work in the region among 120 elephants.',
    author: 'BRENT STIRTON',
  },
  {
    id: 12,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/MM9868_221031_14666.jpg',
    location: 'Providence, Rhode Island',
    description:
      'At Brown University, doctoral student Brooke Quinn (blue glove) and her adviser, Sharon Swartz, work with a Seba’s short-tailed bat inside a wind tunnel. They are testing how tiny sensory hairs on bats’ wings affect their flight responses to turbulence.',
    author: 'NICHOLE SOBECKI',
  },
  {
    id: 13,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/Chinky_Shukla_3.jpg',
    location: 'Chacha, India',
    description:
      'Taj Mohammad stands among his sheep and goats in the desert landscape of Rajasthan. As a boy in 1998, Mohammad felt the ground shake and witnessed a gigantic dust cloud when India conducted underground nuclear tests at the nearby Pokhran site. India is currently one of nine countries with nuclear weapons.',
    author: 'CHINKY SHUKLA',
  },
  {
    id: 14,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/MM9853_221217_0035899.jpg',
    location: 'Monarch Butterfly Biosphere Reserve, Mexico',
    description:
      'Streaked with sunlight and crowded together for warmth in winter, monarch butterflies blanket fir trees in El Rosario Sanctuary. Photographer Jaime Rojo received special permits to work outside the sanctuary’s operating hours. He made this photograph shortly before sunset.',
    author: 'JAIME ROJO',
  },
  {
    id: 15,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/Stephen_Ferry_NG_BlackLine.jpg',
    location: 'Tayrona National Park, Colombia',
    description:
      'Mamo Francisco Chaparro, a spiritual authority of the Indigenous Arhuaco people, collects barnacles on the Caribbean coast. Dugunawin Garawitu (left) and Jayson Izquierdo are training to become mamos. Chaparro will imbue the barnacles with thoughts and gratitude before depositing them at other Arhuaco sacred sites.',
    author: 'STEPHEN FERRY',
  },
  {
    id: 16,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/MOD23005_040.jpg',
    location: 'Kolwezi, Democratic Republic of the Congo',
    description:
      'Pastor Ngoy Niko (right) of the African Apostolic Church of Congo presides over the baptism of a new member in the Lualaba River. The congregants use this stream for initiation and purification rituals because they believe it is one of the few still clean amid local mining for cobalt.',
    author: 'DAVIDE MONTELEONE',
  },
  {
    id: 17,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/NGS82828S2122111833580.jpg',
    location: 'Helen Reef, Palau',
    description:
      'Brian Fidiiy jumps from a boat into the Helen Reef lagoon to fish for food with a homemade speargun. Fidiiy and fellow Helen Reef rangers—all members of the local Indigenous population—protect Palau’s most biologically diverse reef from illegal commercial fishing.',
    author: 'KILIII YÜYAN',
  },
  {
    id: 18,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/MM10024__221002_00335.jpg',
    location: 'Lagos, Nigeria',
    description:
      'Ashley Okoli dances at a Lagos nightclub, which offers a rare welcoming space for people of all sexual orientations. Same-sex relationships are illegal in Nigeria, yet in the past four years LGBTQ activists have celebrated Pride month with performances and protests in some parts of the country.',
    author: 'YAGAZIE EMEZI',
  },
  {
    id: 19,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/EstherHorvath_WomenofArcticScience_022.jpg',
    location: 'Ny-Ålesund, Norway',
    description:
      'The Reverend Siv Limstrand of the Church of Norway is the only pastor for the Svalbard archipelago in the Arctic Ocean, welcoming worshippers of any nationality and religion. As the Arctic warms, Limstrand’s congregation of scientists and local people is chronicling, and coping with, climate change.',
    author: 'ESTHER HORVATH',
  },
  {
    id: 20,
    img:
      'https://interactives.natgeofe.com/high-touch/ngm-23-YIP/builds/main/img/photos/MM9237_221204_060317.jpg',
    location: 'South Atlantic Ocean',
    description:
      'Volcanologists and mountaineers return after a weeks-long expedition to Mount Michael, a remote volcano in the South Sandwich Islands. The team made a successful first ascent and study of the peak, which holds one of Earth’s few lava lakes.',
    author: 'RENAN OZTURK',
  },
];

export default data;
