$(document).ready(function () {
  $('#imageModal').on('show.bs.modal', function (e) {
    let imgSrc = $(e.relatedTarget).data('bs-img');
    $('#modalImage').attr('src', imgSrc);
  });
});

