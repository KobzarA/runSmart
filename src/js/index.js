window.addEventListener('DOMContentLoaded', () => {
        const slider = tns({
        container: '.my-slider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false
        });

        document.querySelector('.prev').addEventListener('click', () => {
        slider.goTo('prev');
        });
        document.querySelector('.next').addEventListener('click', () => {
        slider.goTo('next');
        });

        function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
        // Tabs
        const tabsParent = document.querySelector(tabsParentSelector),
            tabs = document.querySelectorAll(tabsSelector),
            tabsContent = document.querySelectorAll(tabsContentSelector);

        function hideTabContent() {
            tabsContent.forEach((item) => {
                item.classList.remove('catalog__content_active');
            });

            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        };
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('catalog__content_active');
            tabs[i].classList.add(activeClass);
        };

        hideTabContent();
        showTabContent();

        // tabsParent.addEventListener('click', (event) => {
        //     const target = event.target;
        //     if (target && target.classList.contains(tabsSelector.slice(1))) {
        //         tabs.forEach((item, i) => {
        //             if (target == item) {
        //                 hideTabContent();
        //                 showTabContent(i);
        //             }
        //         });
        //     }
        // });

        tabs.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                hideTabContent();
                showTabContent(i);
            })
        })
        }

    tabs('.catalog__tab', '.catalog__content','.catalog__tabs', 'catalog__tab_active');

    function cardToggler (selector) {
        const toggleLinks = document.querySelectorAll(selector)

        toggleLinks.forEach((link, i)  => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.card__face')[i].classList.toggle('card__face_active');
                document.querySelectorAll('.card__more')[i].classList.toggle('card__more_active');
            })
        })
    }

    cardToggler('.card__toggler_more');
    cardToggler('.card__toggler_back');
});
