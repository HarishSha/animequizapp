(function(){

    angular.module("animeFacts")
            .factory("dataService", dataService);

            function dataService(){
              var dataObj = {
                animeData : animeData,
                quizQuestions : quizQuestions,
                correctAnswers: correctAnswers
              };

                return dataObj;
            };

            var animeData = [
              {
                url: "media/naruto.jpg",
                name: "Naruto Uzumaki",
                power: "Kurama(Nine Tail Fox)",
                food: "Ramen Noodles",
                show: "Naruto Shippuden",
                friends: "Sasuke , Sakura, Kiba, Gara, etc...",
                description:"Naruto Uzumaki (Uzumaki Naruto) is a shinobi of Konohagakure. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be ostracised by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage."
              },
              {
                url: "media/sasuke.jpg",
                name: "Sasuke Uchiha",
                power: "Sharingen",
                food: "Healthy",
                show: "Naruto Shippuden",
                friends: "Naruto , Itachi, Sakura, Kakashi, etc...",
                description:"Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them. He is added to Team 7 upon becoming a ninja and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke starts developing his skills. Dissatisfied with his progress, he defects from Konoha so that he can acquire the strength needed to have his revenge."
              },
              {
                url: "media/goku.jpg",
                name: "Goku",
                power: "Super Saiyan",
                food: "Everything",
                show: "Dragon Ball Z",
                friends: "Krillin, Chi-CHi, Pikolo, Kai, etc...",
                description:"Goku (孫 悟空, Son Gokū), born Kakarot (カカロット, Kakarotto), is the main protagonist of the Dragon Ball metaseries created by Akira Toriyama. He is the adoptive grandson of Grandpa Gohan, the son of Bardock and Gine, the younger brother of Raditz, the husband of Chi-Chi, the father of Gohan and Goten, the grandfather of Pan, and later the ancestor of Goku Jr. Cheerful, courageous and also a bit naive, Goku is a Saiyan originally sent to Earth as an infant with the mission to destroy it. However, an accident alters his memory, causing him to grow up pure-hearted and later become Earth's greatest defender, as well as the informal leader of the Z Fighters."
              },
              {
                url: "media/doremon.jpg",
                name: "Doremon",
                power: "Gadgets",
                food: "Dora Cakes",
                show: "Doremon",
                friends: "Nobita, Giyan, Sunio, Sizuka etc...",
                description: "Doraemon possesses a fourth-dimensional pocket from which he can acquire various kinds of futuristic tools, gadgets, and playthings from a future department store. Doraemon originally had ears but they were bitten off by a robotic mouse in the 22nd century. As a result, he developed a morbid fear of mice despite being a robotic cat. He also has the tendency to panic during emergencies, characterized by him frantically trying to pull out a very much-needed tool from his pocket, only to produce a huge assortment of unrelated household items. "
              },
              {
                url: "media/ash.jpg",
                name: "Ash Ketchum",
                power: "Pokemon",
                food: "Rice",
                show: "Pokemon",
                friends: "Pikachu, Brock, etc...",
                description: "Ash Ketchum is the main protagonist of the Pokémon anime series who has always dreamed of becoming a Pokémon Master. As soon as he was ten years old, he rushed to Professor Oak's Laboratory to get his first Pokémon. He is the first human character to be introduced in the series. Originally wanting to choose Squirtle, but he was late. Ash ended up getting the Pokémon Pikachu, and left on his journey."
              },
              {
                url: "media/itachi.jpg",
                name: "Itachi Uchiha",
                power: "Mangekyu Sharingen",
                food: "Healthy",
                show: "Naruto Shippuden",
                friends: "Naruto, Pain",
                description: "Itachi Uchiha (うちはイタチ, Uchiha Itachi) was a prodigy of Konohagakure's Uchiha clan. He became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke. He afterwards joined the international criminal organisation known as Akatsuki, whose activity brought him into frequent conflict with Konoha and its ninja — including Sasuke — who sought to avenge their clan. Following his death, Itachi's motives were revealed to be more complicated than they seemed and that his actions were only ever in the interest of his brother and village, remaining a loyal shinobi of Konohagakure to the very end."
              },
              {
                url: "media/vegeta.jpg",
                name: "Vegeta",
                power: "Super Saiyan",
                food: "Cake",
                show: "Dragon Ball Z",
                friends: "Bulma, Goku, Trunks",
                description: "Vegeta (ベジータ, Bejīta) is the prince of the fallen Saiyan race. He is the eldest son of King Vegeta, the older brother of Tarble, the husband of Bulma, the father of Trunks and Bulla, and the great-great grandfather of Vegeta Jr. Alongside Goku, Gohan, and Piccolo, he is easily one of the most prominent characters in the series, receiving more character development after being introduced than a number of other characters."
              },
              {
                url: "media/shikamaru.jpg",
                name: "Shikamaru Nara",
                power: "Brain",
                food: "Not Interested",
                show: "Naruto Shippuden",
                friends: "Chozi, Naruto, Ino, etc...",
                description: "Shikamaru Nara (奈良シカマル, Nara Shikamaru) is a shinobi of Konohagakure's Nara clan. Though lazy by nature, Shikamaru has a rare intellect that consistently allows him to prevail in combat. The responsibilities that these successes leave him with cause him frequent annoyance, but he gladly accepts them so that he may be of service to his fellow members of Team 10, and to prove himself to generations of the past and future."
              }
            ];

            var correctAnswers = [1, 2, 0, 3, 2, 1, 2, 1];


            var quizQuestions = [
                {
                  type: "text",
                  text: "Who has the power of Nine Tail Fox?",
                  possibilities: [
                          {
                            answer: "Goku"
                          },
                          {
                            answer: "Naruto"
                          },
                          {
                            answer: "Shikamaru"
                          },
                          {
                            answer: "Vegeta"
                          }
                      ],
                      selected: null,
                      correct: null
                },
                {
                  type: "text",
                  text: "Who is the friend of doremon?",
                  possibilities: [
                          {
                            answer: "Goku"
                          },
                          {
                            answer: "Naruto"
                          },
                          {
                            answer: "Nobita"
                          },
                          {
                            answer: "Vegeta"
                          }
                      ],
                      selected: null,
                      correct: null
                },
                {
                  type: "text",
                  text: "who has the power of Mangekyu Sharingen?",
                  possibilities: [
                          {
                            answer: "Itachi Uchiha"
                          },
                          {
                            answer: "Naruto"
                          },
                          {
                            answer: "Ash Ketchum"
                          },
                          {
                            answer: "Doremon"
                          }
                      ],
                      selected: null,
                      correct: null
                },
                {
                  type: "image",
                  text: "Which one is Goku?",
                  possibilities: [
                          {
                            answer: "media/naruto.jpg"
                          },
                          {
                            answer: "media/itachi.jpg"
                          },
                          {
                            answer: "media/shikamaru.jpg"
                          },
                          {
                            answer: "media/goku.jpg"
                          }
                      ],
                      selected: null,
                      correct: null
                },
                {
                  type: "image",
                  text: "Which one is Vegeta?",
                  possibilities: [
                          {
                            answer: "media/naruto.jpg"
                          },
                          {
                            answer: "media/ash.jpg"
                          },
                          {
                            answer: "media/vegeta.jpg"
                          },
                          {
                            answer: "media/doremon.jpg"
                          }
                      ],
                      selected: null,
                      correct: null
                },
                {
                  type: "text",
                  text: "Who loves Dora Cakes?",
                  possibilities: [
                          {
                            answer: "Ash Ketchum"
                          },
                          {
                            answer: "Doremon"
                          },
                          {
                            answer: "Shikamaru"
                          },
                          {
                            answer: "Vegeta"
                          }
                      ],
                      selected: null,
                      correct: null
                },
                {
                  type: "text",
                  text: "Who is lazy but have very sharp mind?",
                  possibilities: [
                          {
                            answer: "Naruto"
                          },
                          {
                            answer: "Itachi Uchiha"
                          },
                          {
                            answer: "Shikamaru"
                          },
                          {
                            answer: "Ash Ketchum"
                          }
                      ],
                      selected: null,
                      correct: null
                },
                {
                  type: "image",
                  text: "Who is from Pokemon show?",
                  possibilities: [
                          {
                            answer: "media/shikamaru.jpg"
                          },
                          {
                            answer: "media/ash.jpg"
                          },
                          {
                            answer: "media/sasuke.jpg"
                          },
                          {
                            answer: "media/doremon.jpg"
                          }
                      ],
                      selected: null,
                      correct: null
                }

            ];

})();
