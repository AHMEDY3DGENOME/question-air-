document.addEventListener('DOMContentLoaded', () => {

    const quizForm = document.getElementById('quiz-form');
    const quizSection = document.getElementById('quiz-section');
    const surpriseSection = document.getElementById('surprise-section');

    const bigbangFlash = document.getElementById('bigbang-flash');
    const shockwave = document.getElementById('shockwave');
    const nebulaCloud = document.getElementById('nebula-cloud');

    const starsContainer = document.getElementById('stars-container');
    const specialStarWrap = document.getElementById('special-star-wrap');
    const messageBox = document.getElementById('message-box');
    const startJourneyBtn = document.getElementById('start-journey-btn');

    const starDate = document.getElementById('star-date');
    const introText = document.getElementById('intro-text');
    const birthdayTitle = document.getElementById('birthday-title');
    const birthdayMessage = document.getElementById('birthday-message');

    const divaStoryPage = document.getElementById('diva-story-page');
    const storyStarScene = document.getElementById('story-star-scene');
    const divaWhiteStar = document.getElementById('diva-white-star');
    const divaStoryContent = document.getElementById('diva-story-content');

    const storyPart1 = document.getElementById('story-part-1');
    const storyPart2 = document.getElementById('story-part-2');
    const storyPart3 = document.getElementById('story-part-3');

    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();

            quizSection.classList.add('hidden');
            surpriseSection.classList.remove('hidden');

            startCosmicExplosion();

            setTimeout(() => {
                generateExplodingStars(180);
            }, 1200);

            setTimeout(() => {
                specialStarWrap.classList.remove('hidden');
                specialStarWrap.classList.add('visible');
            }, 5200);

            setTimeout(() => {
                startFirstMessageSequence();
            }, 8200);
        });
    }

    if (startJourneyBtn) {
        startJourneyBtn.addEventListener('click', () => {

            if (messageBox) messageBox.classList.add('hidden');
            if (specialStarWrap) specialStarWrap.classList.add('hidden');

            startJourneyBtn.classList.remove('visible');
            startJourneyBtn.classList.add('hidden');

            if (divaStoryPage) {
                divaStoryPage.classList.remove('hidden');

                setTimeout(() => {
                    divaStoryPage.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });

                    const storyStarScene = document.getElementById('story-star-scene');
                    if (storyStarScene) {
                        storyStarScene.classList.add('visible');
                    }
                }, 100);
            }

        });
    }

    if (divaWhiteStar) {
        divaWhiteStar.addEventListener('click', () => {
            divaWhiteStar.classList.add('clicked');

            if (storyStarScene) {
                storyStarScene.classList.add('hide-scene');
            }

            setTimeout(() => {
                if (storyStarScene) {
                    storyStarScene.classList.add('hidden');
                }

                if (divaStoryContent) {
                    divaStoryContent.classList.remove('hidden');

                    setTimeout(() => {
                        divaStoryContent.classList.add('visible');

                        divaStoryContent.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 150);
                }

                startDivaStory();
            }, 1200);
        });
    }

    function startCosmicExplosion() {
        if (bigbangFlash) {
            bigbangFlash.classList.add('explode');
        }

        if (shockwave) {
            shockwave.classList.add('active');
        }

        if (nebulaCloud) {
            nebulaCloud.classList.add('active');
        }
    }

    function startFirstMessageSequence() {
        if (!starDate || !introText || !birthdayTitle || !birthdayMessage) return;

        starDate.textContent = '';
        introText.textContent = '';
        birthdayTitle.textContent = '';
        birthdayMessage.textContent = '';

        typeText(starDate, '1994 / 7 / 26', 120, () => {

            if (messageBox) {
                messageBox.classList.remove('hidden');
                messageBox.classList.add('visible');
            }

            typeText(
                introText,
                'بصراحة ده مش إستبيان ولا حاجة. دي هدية بسيطة بمناسبة عيد ميلادك، عارف إن لسه عنه شهر؛ لكن لكونك شخص عزيز وغالي عليّا جدًا حبيت أكون اول حد أهنيكي بيه، وأقدملك هدية بسيطة متواضعة صنعتها بإيدي مخصوص.',
                35,
                () => {

                    typeText(
                        birthdayTitle,
                        'عيد ميلاد سعيد 🎉',
                        90,
                        () => {

                            typeText(
                                birthdayMessage,
                                'في هذا اليوم، ولدت نجمة استثنائية .\nكل سنة وإنتِ طيبة، وكل سنة وانتي نجمة .',
                                40,
                                () => {
                                    if (startJourneyBtn) {
                                        startJourneyBtn.classList.remove('hidden');
                                        startJourneyBtn.classList.add('visible');
                                    }
                                }
                            );

                        }
                    );

                }
            );

        });
    }

    function startDivaStory() {
        if (!storyPart1 || !storyPart2 || !storyPart3) return;

        storyPart1.textContent = '';
        storyPart2.textContent = '';
        storyPart3.textContent = '';

        typeText(
            storyPart1,
            'تقول الأسطورة الرومانية القديمة إن الديفا كانت نجمة نادرة لا تظهر إلا عندما يحتاج العالم إلى النور والأمل، وكانت تُرى في السماء كعلامة على ميلاد شيء استثنائي.',
            35,
            () => {

                typeText(
                    storyPart2,
                    'ويُحكى أن ضوءها وُلد من اصطدام أنوار السماء بأحلام البشر، فتحولت إلى نجمة بيضاء لامعة تسافر بين المجرات، وتترك خلفها أثرًا من الجمال والدهشة.',
                    35,
                    () => {

                        typeText(
                            storyPart3,
                            'ومنذ ذلك الحين أصبحت نجمة الديفا رمزًا للجمال والقوة والتميز، نجمة لا تشبه غيرها، تظهر لتذكّر الكون أن بعض الأرواح خُلقت لتضيء لا لتُشبه أحدًا.',
                            35,
                            () => {
                                startFinalReveal();
                            }
                        );

                    }
                );

            }
        );
    }

    function startFinalReveal() {
  const finalReveal = document.getElementById('diva-final-reveal');
  const finalLine1 = document.getElementById('final-line-1');
  const finalDate = document.getElementById('final-date');
  const finalLine2 = document.getElementById('final-line-2');
  const divaStoryPage = document.getElementById('diva-story-page');

  if (!finalReveal || !finalLine1 || !finalDate || !finalLine2) return;

  finalLine1.textContent = '';
  finalDate.textContent = '';
  finalLine2.textContent = '';

  finalReveal.classList.remove('hidden');

  setTimeout(() => {
    finalReveal.classList.add('visible');

    scrollDivaToBottom();

    typeText(
      finalLine1,
      'لكن الرومان لم يعرفوا أن نجمة الديفا ستولد مرة أخرى...',
      45,
      () => {
        scrollDivaToBottom();

        typeText(
          finalDate,
          '26 / 7 / 1994',
          120,
          () => {
            scrollDivaToBottom();

            typeText(
              finalLine2,
              'وقد وُلدت بالفعل ✨',
              70,
              () => {
                scrollDivaToBottom();
              }
            );
          }
        );
      }
    );
  }, 700);

  function scrollDivaToBottom() {
    setTimeout(() => {
      if (divaStoryPage) {
        divaStoryPage.scrollTo({
          top: divaStoryPage.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 300);
  }
}

    function typeText(element, text, speed, callback) {
        if (!element) return;

        let index = 0;

        function writeCharacter() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(writeCharacter, speed);
            } else {
                if (callback) callback();
            }
        }

        writeCharacter();
    }

    function generateExplodingStars(count) {
        if (!starsContainer) return;

        starsContainer.innerHTML = '';

        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star', 'exploding-star');

            const angle = Math.random() * Math.PI * 2;
            const distance = 250 + Math.random() * 900;

            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            const size = 1 + Math.random() * 3;
            const delay = Math.random() * 0.8;
            const duration = 2.5 + Math.random() * 2.5;

            star.style.setProperty('--x', `${x}px`);
            star.style.setProperty('--y', `${y}px`);
            star.style.setProperty('--duration', `${duration}s`);
            star.style.animationDelay = `${delay}s`;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            starsContainer.appendChild(star);
        }
    }

});