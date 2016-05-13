Template.loading.rendered = function () {
  if ( ! Session.get('loadingSplash') ) {
    this.loading = window.pleaseWait({
      logo: '../website/img/wapplogomini.png',
      backgroundColor: '#fefefe',
      loadingHtml: message + spinner
    });
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};

var message = '<p class="loading-message">Loading...</p>';
var spinner = '';//<div class="sk-spinner sk-spinner-rotating-plane"><img src="../website/img/loading.gif" height="90px" width="90px" /></div>';