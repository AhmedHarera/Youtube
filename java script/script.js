document.addEventListener('DOMContentLoaded', (event) => {
    function toggleColorAndCount(icon, countElement) {
        if (icon.style.color === "blue") {
            icon.style.color = "";
            countElement.textContent = parseInt(countElement.textContent) - 1;
        } else {
            icon.style.color = "blue";
            countElement.textContent = parseInt(countElement.textContent) + 1;
        }
    }

    var thumbsUpIcon = document.getElementById('thumbsUpIcon');
    var thumbsDownIcon = document.getElementById('thumbsDownIcon');
    var saveIcon = document.getElementById('saveIcon');
    var commentThumbsUpIcon = document.getElementById('commentThumbsUpIcon');
    var commentThumbsDownIcon = document.getElementById('commentThumbsDownIcon');

    thumbsUpIcon.addEventListener('click', () => toggleColorAndCount(thumbsUpIcon, document.getElementById('thumbsUpCount')));
    thumbsDownIcon.addEventListener('click', () => toggleColorAndCount(thumbsDownIcon, document.getElementById('thumbsDownCount')));
    commentThumbsUpIcon.addEventListener('click', () => toggleColorAndCount(commentThumbsUpIcon, document.getElementById('commentThumbsUpCount')));
    commentThumbsDownIcon.addEventListener('click', () => toggleColorAndCount(commentThumbsDownIcon, document.getElementById('commentThumbsDownCount')));
});