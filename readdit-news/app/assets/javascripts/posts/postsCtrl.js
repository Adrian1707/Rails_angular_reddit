angular.module('redditNews')
.controller('PostsCtrl', [
'$scope',
'post',
'posts',
function($scope, post, posts){
   $scope.post = post;

   $scope.addComment = function(){
   if($scope.body === '') { return; }
   posts.addComment(post.id, {
     body: $scope.body,
     author: 'user',
   }).success(function(comment) {
     $scope.post.comments.push(comment);
   });
   $scope.body = '';
  };

  $scope.incrementUpvotes = function(post){
  comment.upvotes += 1;
  };

  $scope.incrementUpvotes = function(comment){
    posts.upvoteComment(post,comment);
  };

  }]);
