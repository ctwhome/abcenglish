/**
 * @ngdoc controller
 * @name app.controller:theoryCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */

angular.module('starter')
    .controller('theoryCtrl', function($scope){
        
        // Cada objeto es un article en mongo lab
        $scope.contents = [
            { "title": 'Grammar', "image":"http://lorempixel.com/200/200/abstract/1","description":"Sort description here, probably something funny", "namekey": 'gramar', "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dicta fuga commodi labore cum! Dolor aliquid obcaecati, nostrum tenetur unde rerum labore hic nesciunt iste. Nam accusamus beatae maxime rem." },
            { "title": 'Common Mistakes', "image":"http://lorempixel.com/200/200/abstract/2","description":"Sort description here, probably something funny",   "namekey": 'commonmistakes', "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et itaque, voluptate sint praesentium molestias non accusamus necessitatibus eligendi facere est culpa, cupiditate aspernatur fugiat fugit aperiam dignissimos tempora perferendis." },
            { "title": 'Vocabulary', "image":"http://lorempixel.com/200/200/abstract/3","description":"Sort description here, probably something funny", "namekey": 'vocabulary', "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore incidunt adipisci nulla officiis iste praesentium, culpa, quam, ullam necessitatibus sapiente at aspernatur temporibus. Officiis provident voluptatem dolores repellat ipsam molestias?" },
            { "title": 'Certificates', "image":"http://lorempixel.com/200/200/abstract/4","description":"Sort description here, probably something funny",   "namekey": 'certificates', "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit corrupti harum a porro. Tempore, quibusdam eius dolorum? Aliquam eveniet nihil rerum sapiente cupiditate beatae sunt officiis, asperiores nemo dolore ipsam!" },
            { "title": 'Business English', "image":"http://lorempixel.com/200/200/abstract/5","description":"Sort description here, probably something funny",     "namekey": 'business', "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aspernatur quas ex quisquam. Explicabo porro, animi, deserunt voluptas earum aspernatur quae in assumenda eveniet fuga praesentium, cum commodi ratione cupiditate." },
            { "title": 'Spelling', "image":"http://lorempixel.com/200/200/abstract/6","description":"Sort description here, probably something funny", "namekey": 'spelling', "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nihil incidunt, consequuntur, nemo accusantium quasi deserunt tempore similique eveniet architecto. Ex veritatis molestias, dicta iure hic beatae consequuntur facere voluptatem." }
        ];

        function alert(e){
                console("BCLICK");
                    alert(e);
        }
});