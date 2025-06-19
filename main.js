$(document).ready(function () {
  $("#imageModal").on("show.bs.modal", function (e) {
    let imgSrc = $(e.relatedTarget).data("bs-img");
    $("#modalImage").attr("src", imgSrc);
  });
});

$(document).ready(function () {
  $(".custom-nav-link").on("click", function () {
    $(".custom-nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $("#contactButton").on("click", function (e) {
    e.preventDefault(); // Default link sakrashini to‘xtatamiz
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top - 80, // Header balandligini hisobga olib
      },
      800
    );
  });
});

// Modal

const TOKEN = "7047079376:AAFo3sNW_16Tp_gstyQmI5Jv3-4EtmnAF1Q";
const CHAT_ID = 6135129095;
const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

$(document).ready(function () {
  $("#telegramForm").on("submit", function (e) {
    e.preventDefault();

    const name = $.trim($("#name").val());
    const phone = $.trim($("#phone").val());
    const message = $.trim($("#message").val());

    const text = `
📩 Новая заявка с сайта:
👤 Имя: ${name}
📞 Телефон: ${phone}
📝 Сообщение: ${message || "Без сообщения"}
      `;

    $.ajax({
      url: API,
      method: "POST",
      data: {
        chat_id: CHAT_ID,
        text: text,
      },
      success: function () {
        alert("Сообщение успешно отправлено!");
        $("#telegramForm")[0].reset();
        $("#contactModal").modal("hide");
      },
      error: function (xhr, status, error) {
        console.error("Xatolik:", xhr.responseText);
        alert("Ошибка при отправке. Попробуйте позже.");
      },
    });
  });
});
