var config = {
    style: 'mapbox://styles/mapbox/light-v11', //mapbox://styles/mengxing/ckwx4c76c8m5x14o5jiixb9yy
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: true,
    theme: 'light',
    use3dTerrain: true,
    //title: 'How did the pandemic affect my journeys?',
    //subtitle: 'How did the pandemic affect my journeys?',
    byline: '',
    //footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'overture',
            alignment: 'center',
            image: 'pics/IMG_1275.jpg',
            title: 'How did the pandemic affect my journeys?',
            description: 'Hi, these are my stories before, during, and after the pandemic. I record it here as a memory of my unforgettable journeys and turning points in my life.',
            location: {
                center: [0, 0],
                zoom: 0,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.5
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Wuhan',
            alignment: 'right',
            title: 'Wuhan, China, 2019 Jul',
            //image: 'pics/1.png',
            description: 'I graduated with my master\'s degree in July 2019. At that time, Wuhan was a city rarely known by people in the world. It is called the "City of Lakes", the capital city of Central China\'s Hubei province. <br> <br> I love Wuhan\'s food, especially its lively breakfast culture. But no one could have predicted that a few months later, the streets would no longer be bustling with people having breakfast, replaced by longtime fighting with the pandemic.',
            image: 'pics/1.png',
            location: {
                center: [114.26, 30.70], //Wuhan
                zoom: 7,
                pitch: 40,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
               
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ]
        },
        {
            id: 'Chiba',
            alignment: 'right',
            title: 'Chiba, Japan, 2020 Feb',
            image: 'pics/2.png',
            description: 'After my graduation, I went to Japan for my 6-month internship at one of the United Nations offices. It is called SIAP (the Statistical Institute for Asia and the Pacific), affiliated with ESCAP (the Economic and Social Commission for Asia and the Pacific). I learned so much from my daily work, colleagues, and participants from different countries, which have greatly enriched my horizons. Luckily, I also got a doctoral scholarship offer at Monash University and another internship offer at UNEP (the United Nations Environment Programme). <br><br> The future seems promising before Feb 2020. I booked a flight to my hometown and planned to celebrate the Spring festival with my family. However, entry and exit requirements changed rapidly in Feb 2020. After seveal countries banned entry to passengers with Chinese passports, I had to rethink my future for a very limited time as my current Japanese visa would be expired in two days. If I continue to go back to China, I would have to stay in strict quarantine without income for a long time. And I didn\'t know when I would be allowed to entry Australia to enrol my doctoral studies. <br><br>After losing sleep all night, I makde a very difficult decision - go to Africa for UNEP internship to fill the gap before enroling.',
            location: {
                center: [140.135, 35.67],//Chiba
                zoom: 8,
                pitch: 40,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Dubai',
            alignment: 'right',
            title: 'Dubai, UAE, 2020 Feb',
            image: 'pics/3.png',
            description: 'There are no direct flights from Tokyo to Nairobi so I booked a connecting flight in Dubai. <br><br> At Dubai airport, I was stopped by staff while checking in. They made me wait and print the boarding pass for the others first. Three hours later, I was the last person to get a boarding pass. I was stopped again while boarding and a staff took my passport and told me to wait. <br><br> I sat next to the boarding gate and watched fellow passengers board the plane one by one. For the first time in a foreign country, I felt lonely and helpless. Can I still go to Kenya? The continent of Africa is so foreign to me that I don\'t have a single person I know. What will happen in the future? <br><br> Another staff member came up to me, and he seemed to read my nervousness. He said, “don\'t worry, they just went to check if you are a passenger from mainland China, and I am sure you will finally be able to board! Come give a high five.” His words made me reassure, and I was very touched by him who were willing to give me a high five during the epidemic. <br><br> As what he said, a staff returned my passport and took me on the plane.',
            location: {
                center: [55.2950, 25.2850],//Dubai
                zoom: 10,
                pitch: 51.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Kenya',
            alignment: 'right',
            title: 'Nairobi, Kenya, 2020 Feb',
            image: 'pics/4.png',
            description: 'Life was happiest and freest when I first arrived in Africa, when there were no cases of Covid-19. I went to the safari, fed the giraffes at the giraffe park and went to the elephant nursery to see baby elephants with other UN interns whom I had never met. After safari, I went to the UN complex for onboarding. <br><br>A week later, the United Nations building was closed due to a Covid-19 case in Kenya, and everyone was working from home instead. Sadly, I also lost the opportunity to meet new firends and other colleagues face-to-face. <br><br>Kenya closed its borders on March 25 and all international flights were cancelled as the number of cases gradually increased. Many United Nations organizations have begun to stop recruiting new interns, and interns who have received offers but have not yet joined have been forced to cancel their internships because they cannot reach the country where the internship is located. I was fortunate enough to be the last intern to join in Nairobi. <br><br>I had to extend my internship from three months to six months due to the 6-month lockdown in Kenya. I was also applying for an Australian student visa for my PhD studies. However, due to the lockdown, all visa centers and health examination centers are closed. My plans to go directly to Australia from Kenya to study were dashed. <br><br>At the end of July, my internship was also coming to an end. I had a hunch that the pandemic would not stop in the short term, so I decided to go back to my country to be with my family. I left Kenya on a UN retrieval flight and came to Dubai to take a commercial charter flight back to China. ',
            location: {
                center: [36.8207, -1.2728],//Kenya
                zoom: 10,
                pitch: 41.00,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Dubai1',
            alignment: 'right',
            title: 'Dubai, UAE, 2021 Jul',
            image: 'pics/5.png',
            description: 'As soon as all passengers got off the plane, we were taken for COVID testing. There were still two days of transit time, so I decided to go skydiving to Palm Island to fulfill one of my little wishes.',
            location: {
                center: [55.2950, 25.2850],//Dubai
                zoom: 6,
                pitch: 30.00,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25,
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Colombo',
            alignment: 'right',
            title: 'Colombo, Sri Lanka, 2020 Jul',
            image: 'pics/6.png',
            description: 'Our commercial charter flight with Sri Lanka Airlines required a connecting flight in Colombo. All passengers on the plane took the initiative to take precautions. There are more than half of the empty seats on the plane, but the airline arranges everyone to sit together instead of sitting apart to reduce the risk of infection for everyone. Sri Lanka Airlines was later suspended for a month after 15 people on board became infected.',
            location: {
                center: [79.8528, 6.9482],//Sri Lanka, Colombo
                zoom: 8,
                pitch: 50.00,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Shanghai',
            alignment: 'right',
            title: 'Shanghai, China, 2020 Aug',
            image: 'pics/7.jpg',
            description: 'In the early morning of August 1st, we arrived at Shanghai Airport. What followed was a 14-day hotel quarantine. The quarantine fee includes 280 RMB for hotel accommodation and 100 RMB for food per day. If someone want to eat something else, they can also order takeout from other restaurants. <br><br>There are about 2-3 PCR tests during the isolation, and everyone need to take their own temperature every morning and tell the nurse. <br><br>I was working online every day, chatting with family and friends, and doing indoor sports, which made my isolation life very fulfilling.',
            location: {
                center: [121.49, 31.2451],//Shanghai
                zoom: 8,
                pitch: 50.00,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Puyang',
            alignment: 'right',
            title: 'Puyang, China, 2020 Aug - 2021 Jun',
            image: 'pics/8.png',
            description: 'I went back to my hometown after 14 days, but the quarantine life is not over. All people who return to Puyang from abroad need to be quarantined in the hotel for two days and do a PCR test. <br><br>I can finally be reunited with my families when my quarantine is over. In the next few months, I also got my student visa successfully.<br><br>In May 2021, I got my Australian travel exemption with the help of my supervisors, which allowed me to start my doctoral studies. Everything started to get better.',
            location: {
                center: [115.0159, 35.8866],//Puyang
                zoom: 7,
                pitch: 48.50,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Shenzhen',
            alignment: 'right',
            title: 'Shenzhen, China, 2021 Apr',
            image: 'pics/9.jpg',
            description: 'After receiving two doses of the covid vaccine and started to prepare several documents for entry requirements. At this time, it was hard to find a ticket, so I bought a flight ticket from Shenzhen to Sydney with a connecting flight in Singapore.',
            location: {
                center: [22.5284, 114.1747],
                zoom: 10,
                pitch: 41.00,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Singapore',
            alignment: 'right',
            title: 'Singapore, 2021 Jun',
            image: 'pics/10.png',
            description: 'Most passengers connecting in Singapore, including me, have to wait in a small designated transfer area. And my transfer time is more than 30 hours, so in order to rest and avoid infection during the trip, I booked the transfer hotel in advance.',
            location: {
                center: [103.8, 1.4],//Singapore
                zoom: 9,
                pitch: 48.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Sydeny',
            alignment: 'right',
            title: 'Sydeny, Australia, 2021 Jun',
            image: 'pics/11.png',
            description: 'Few passengers were on the plane due to restrictions on entry and exit from Australia. After arriving at the airport, all passengers and staffs took a bus to the quarantine hotel for check-in. I was very lucky to be assigned a room with a beautiful view from the window. But unexpectedly, the number of infections in Sydney has been increasing day by day and has been upgraded to a red zone, which greatly increased the difficulty for me to travel to Melbourne in the future.',
            location: {
                center: [151.2, -33.85],//Sydeny
                zoom: 7,
                pitch: 34.50,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Melbourne',
            alignment: 'right',
            title: 'Melbourne, Australia, 2021 Jul',
            //image: 'pics/11.png',
            description: 'After a long journey marathon, I finally made it to Melbourne and met the rest of the lab!<br><br>This pandemic has brought too many challenges to everyone\'s life, including me. Thanks to all medical workers who have worked hard to fight the virus, I sincerely hope that this epidemic will end soon, and I wish everyone stay safe and healthy.',
            location: {
                center: [144.959, -37.766],//Melbourne
                zoom: 9,
                pitch: 34.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
         }
    ]
};
