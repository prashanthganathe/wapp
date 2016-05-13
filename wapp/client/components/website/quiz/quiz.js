/*Session.setDefault('questionNumber', 1);

Template.quiz.helpers({
    //add your helpers here
    'questionList': function () {
       return Questions.findOne({questionNumber: Session.get('questionNumber')});
    }
 });

Template.quiz.events({
   'click .next': function (evt) {
      evt.preventDefault();
      var currentQuestionNumber = Session.get('questionNumber');
      Session.set('questionNumber', currentQuestionNumber + 1);
   }
});*/


/*Meteor.publish('questions', function () {
  return Questions.find();
});*/

/*db

{
  "_id": "kAKbfLRHFZinrrRZv", 
  "selected_subject": "English", 
  "question": "ekek", 
  "ans_A": "e", 
  "ans_B": "q", 
  "ans_C": "t",
  "ans_D": "o",
  "correctAns": "e",
  "questionNumber": 1
}*/
/*
Meteor.methods('addNewQuestion', function (newQuestionData) {
  check(newQuestionData, Object);
  check(newQuestionData.question, String);
  // Plus various other checks
  Questions.insert(newQuestionData);
}*/

/*where the newQuestionData is something like this:

{
  "selected_subject": "English", 
  "question": "ekek", 
  "ans_A": "e", 
  "ans_B": "q", 
  "ans_C": "t",
  "ans_D": "o",
  "correctAns": "e"
}

Change the addNewQuestion method to:

Meteor.methods('addNewQuestion', function (newQuestionData) {
  check(newQuestionData, Object);
  check(newQuestionData.question, String);
  // Plus various other checks
  var existingQuestionCount = Questions.find().count();
  newQuestionData.questionNumber = existingQuestionCount + 1;
  Questions.insert(newQuestionData);
}*/