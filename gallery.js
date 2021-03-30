$(document).ready(() => {
    $("#list a").each((index, link) => {
        const image = new Image();
        image.src = link.href;
    });
    $("#list a").click(e => {
        const link = e.currentTarget;
        $("#box").attr("src", link.href)
        $("#header2").text(link.title);
        e.preventDefault();
    });
    $("li:first-child a").focus();
});