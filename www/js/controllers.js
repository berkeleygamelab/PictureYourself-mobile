angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'College', id: 1 , image: 'img/college.jpg', occupations: ["Professor", "Adminstrator"]},
    { title: 'Medical', id: 2 , image: 'img/medical.jpg',  occupations: ["Surgeon", "Pediatrician"]},
    { title: 'Military', id: 3 , image: 'img/military.jpg', occupations: ["Air Force", "Navy"]},
    { title: 'Legal/Politics', id: 4 , image: 'img/legal.jpg', occupations: ["Lawyer", "Judge"]},
    { title: 'Business', id: 5 ,  image: 'img/business.jpg', occupations: ["Sales Associate", "Youtuber"]},
    { title: 'Agriculture', id: 6 ,  image: 'img/agriculture.png', occupations:[{name: "Peter Raven", id: 1, title: "Botanist", bio: "Peter Raven is a very well known botanist and previous Director at  Missouri Botanical Garden. He retired from his job when he became 75. His most notable piece was Butterflies and Plants: A Study in Coevolution. He has made numerous papers on botany and has also gotten many awards such as the prestigious Addison Emery Verrill Award.", accomplishments:"Addison Emery Verrill Award; International Prize for Biology; Volvo Environment Prize", video: "https://www.youtube.com/watch?v=E9gjCg7gA8c", image: "img/peterraven.jpg"},
    {name: "Cheryl Rogowski", id: 2, title: "Farmer", bio: "Cheryl Rogowski is an established farmer in Pine Island, New York.  She owns a farm market where she lives and also sells at plenty of farmer’s markets in New York.", accomplishments: "She started farming in 1983 when she entered Onion Harvest Festival and won. When she was around 20, she received 5,000 acres of land from her father.", video: "https://www.youtube.com/watch?v=VxsMSkgqwHw", image: "img/cherylrogowski.jpg"}] },
    { title: 'Communication', id: 7 ,  image: 'img/communication.jpeg', occupations:["Radio Host", "UN representative"]},
    { title: 'Engineering', id: 8 ,  image: 'img/engineering.jpg', occupations:["Software Engineer", "Bioengineer"]},
    { title: 'Media & Entertainment', id: 9 ,  image: 'img/media.png', occupations:["Actor", "Clown"]},
    { title: 'Civil Service', id: 10 ,  image: 'img/civil.png', occupations:["Social Worker", "Mayor"]},
    { title: 'Arts & Literature', id: 11 ,  image: 'img/arts.png', occupations:["Author", "Artist"]}
  ];
})
.controller('CareerCtrl', function($scope, $stateParams) {
  $scope.careers = [
    { title: 'College', id: 1 , image: 'img/college.jpg', occupations: ["Professor", "Adminstrator"]},
    { title: 'Medical', id: 2 , image: 'img/medical.jpg',  occupations: ["Surgeon", "Pediatrician"]},
    { title: 'Military', id: 3 , image: 'img/military.jpg', occupations: ["Air Force", "Navy"]},
    { title: 'Legal/Politics', id: 4 , image: 'img/legal.jpg', occupations: ["Lawyer", "Judge"]},
    { title: 'Business', id: 5 ,  image: 'img/business.jpg', occupations: ["Sales Associate", "Youtuber"]},
    { title: 'Agriculture', id: 6 ,  image: 'img/agriculture.png', occupations:[{name: "Peter Raven", id: 1, title: "Botanist", bio: "Peter Raven is a very well known botanist and previous Director at  Missouri Botanical Garden. He retired from his job when he became 75. His most notable piece was Butterflies and Plants: A Study in Coevolution. He has made numerous papers on botany and has also gotten many awards such as the prestigious Addison Emery Verrill Award.", accomplishments:"Addison Emery Verrill Award; International Prize for Biology; Volvo Environment Prize", video: "https://www.youtube.com/watch?v=E9gjCg7gA8c", image: "img/peterraven.jpg"},
    {name: "Cheryl Rogowski", id: 2, title: "Farmer", bio: "Cheryl Rogowski is an established farmer in Pine Island, New York.  She owns a farm market where she lives and also sells at plenty of farmer’s markets in New York.", accomplishments: "She started farming in 1983 when she entered Onion Harvest Festival and won. When she was around 20, she received 5,000 acres of land from her father.", video: "https://www.youtube.com/watch?v=VxsMSkgqwHw", image: "img/cherylrogowski.jpg"}]},
    { title: 'Communication', id: 7 ,  image: 'img/communication.jpeg', occupations:["Radio Host", "UN representative"]},
    { title: 'Engineering', id: 8 ,  image: 'img/engineering.jpeg', occupations:["Software Engineer", "Bioengineer"]},
    { title: 'Media & Entertainment', id: 9 ,  image: 'img/media.png', occupations:["Actor", "Clown"]},
    { title: 'Civil Service', id: 10 ,  image: 'img/civil.png', occupations:["Social Worker", "Mayor"]},
    { title: 'Arts & Literature', id: 11 ,  image: 'img/arts.png', occupations:[{name:"Edward Ruscha", id: 1, title: "Artist", bio: "Edward “Ed” Ruscha is an Artist working with the pop artist movement. He worked with photography, painting, printmaking, and film. He created famous paintings and other successful works based upon the pop art movement.", accomplishments: "Graduated Chouinard Art Institute; Received the Guggenheim Fellowship Award in 1971", video: "https://www.nowness.com/series/getting-there/ed-ruscha", image:"img/edwardruscha.jpg"},
    {name: "Stephan King", id: 2, title: "Author", bio: "Stephen Edwin King is an American author/novelist who writes books based upon science fiction, horror, fantasy, etc. His famous books received multiple awards and some even ended up on the big screen.", accomplishments: "Graduated from the University of Maine; King was nominated for the primetime emmy in 1997 for his famous miniseries “The Shining” which was based on his infamous novel.", video: "http://stephenking.com/", image: "img/stephenking.jpg"}]}
  ]

  for (var i = 0; i < $scope.careers.length; i++){
    var occupations = $scope.careers[i].occupations;

    for (var j = 0; j < occupations.length; j++) {
      if ($stateParams.careerName == occupations[j]) {
        $scope.occupation = occupations[j];
      }
    }
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  //rename to $scope.playlists, add new property called occupations
  $scope.playlists = [
    { title: 'College', id: 1 , image: 'img/college.jpg', occupations: ["Professor", "Adminstrator"]},
    { title: 'Medical', id: 2 , image: 'img/medical.jpg',  occupations: ["Surgeon", "Pediatrician"]},
    { title: 'Military', id: 3 , image: 'img/military.jpg', occupations: ["Air Force", "Navy"]},
    { title: 'Legal/Politics', id: 4 , image: 'img/legal.jpg', occupations: ["Lawyer", "Judge"]},
    { title: 'Business', id: 5 ,  image: 'img/business.jpg', occupations: ["Sales Associate", "Youtuber"]},
    { title: 'Agriculture', id: 6 ,  image: 'img/agriculture.png', occupations:[{name: "Peter Raven", id: 1, title: "Botanist", bio: "Peter Raven is a very well known botanist and previous Director at  Missouri Botanical Garden. He retired from his job when he became 75. His most notable piece was Butterflies and Plants: A Study in Coevolution. He has made numerous papers on botany and has also gotten many awards such as the prestigious Addison Emery Verrill Award.", accomplishments:"Addison Emery Verrill Award; International Prize for Biology; Volvo Environment Prize", video: "https://www.youtube.com/watch?v=E9gjCg7gA8c", image: "img/peterraven.jpg"},
    {name: "Cheryl Rogowski", id: 2, title: "Farmer", bio: "Cheryl Rogowski is an established farmer in Pine Island, New York.  She owns a farm market where she lives and also sells at plenty of farmer’s markets in New York.", accomplishments: "She started farming in 1983 when she entered Onion Harvest Festival and won. When she was around 20, she received 5,000 acres of land from her father.", video: "https://www.youtube.com/watch?v=VxsMSkgqwHw", image: "img/cherylrogowski.jpg"}]},
    { title: 'Communication', id: 7 ,  image: 'img/communication.jpeg', occupations:["Radio Host", "UN representative"]},
    { title: 'Engineering', id: 8 ,  image: 'img/engineering.jpeg', occupations:["Software Engineer", "Bioengineer"]},
    { title: 'Media & Entertainment', id: 9 ,  image: 'img/media.png', occupations:["Actor", "Clown"]},
    { title: 'Civil Service', id: 10 ,  image: 'img/civil.png', occupations:["Social Worker", "Mayor"]},
    { title: 'Arts & Literature', id: 11 ,  image: 'img/arts.png', occupations:[{name:"Edward Ruscha", id: 1, title: "Artist", bio: "Edward “Ed” Ruscha is an Artist working with the pop artist movement. He worked with photography, painting, printmaking, and film. He created famous paintings and other successful works based upon the pop art movement.", accomplishments: "Graduated Chouinard Art Institute; Received the Guggenheim Fellowship Award in 1971", video: "https://www.nowness.com/series/getting-there/ed-ruscha", image:"img/edwardruscha.jpg"},
    {name: "Stephan King", id: 2, title: "Author", bio: "Stephen Edwin King is an American author/novelist who writes books based upon science fiction, horror, fantasy, etc. His famous books received multiple awards and some even ended up on the big screen.", accomplishments: "Graduated from the University of Maine; King was nominated for the primetime emmy in 1997 for his famous miniseries “The Shining” which was based on his infamous novel.", video: "http://stephenking.com/", image: "img/stephenking.jpg"}]}
  ]

  //code below is new
  console.log($stateParams)
  for (var i = 0; i < $scope.playlists.length; i++){
    if ($stateParams.playlistId == $scope.playlists[i].id) {
      $scope.career = $scope.playlists[i];
    }
  }


});
