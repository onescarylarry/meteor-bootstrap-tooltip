// put your router code here.  you'll probably start with a layout and a home route
// you don't have to name the home route "home," but let's start with that.

portfolioController = RouteController.extend();
// this gives me an error message: referenceError: RouteController not defined

Router.configure({
    layoutTemplate: 'layout',
    // waitOn: function () {return Meteor.subscribe('experiments')}
});

Router.route("/", {
    name: 'home',
    template: 'home'
});

Router.route("/kia", {
    name: 'kia',
    template: 'kia'
});

Router.route("/postScholar", {
    name: 'postScholar',
    template: 'postScholar'
});

Router.route("/ema", {
    name: 'ema',
    template: 'ema'
});

Router.route("/buttons", {
    name: 'buttons',
    template: 'buttons'
});

// Router.route('/d3/:_id', {
//     name: 'd3',
//     controller: d3Controller,
//     template: 'd3',
//     data: function () {
//         return Experiments.findOne(this.params._id);
//     }
// });
